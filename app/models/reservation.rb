# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  guest_id   :integer          not null
#  status     :string           default("needs action")
#

class Reservation < ActiveRecord::Base
  # STATUSES = ['needs action', 'approved', 'rejected']
  validates :listing_id, :check_in, :check_out, :guest_id, presence: true
  # validates :status, inclusion: STATUSES
  validate :valid_reservation?
  # Reservation.create!(check_in: Date.new(2015,11,19), check_out: Date.new(2015,11,21),listing_id: 2, guest_id: 2)

  # errors are added as an attribute to
  # the new record.
  # so if rsvp = Reservation.create!(...)
  # rsvp.errors.full_messages gives array
  # of error statements

  belongs_to(
    :guest,
    class_name: "User",
    foreign_key: :guest_id
  )

  belongs_to :listing
  has_one :ghost, through: :listing, source: :ghost
  has_many :listing_ratings
  has_many :user_ratings

  def conflicts
    # Reservation.where([
    #   "listing_id = :listing_id AND id #{id_matcher} :id",
    #   {
    #     listing_id: self.listing_id, id: self.id
    #   }
    # ]).where([
    Reservation.where([
      "listing_id = :listing_id
      AND
      (
        (check_in >= :check_in AND check_in <= :check_out)
        OR
        (check_out >= :check_in AND check_out <= :check_out)
      )",
      { listing_id: self.listing_id, check_in: self.check_in, check_out: self.check_out }
    ])
  end

# conflicts helper method to get correct syntax for id matching in WHERE
  # def id_matcher_set(status)
  #   return 'IS NOT' if status == 'approved'
  #   '!='
  # end

# date.new(year, month, day)
  def valid_reservation?
    if conflicts.empty?
      true
    else
      errors.add(:check_in, "dates are not available.")
      false
    end
  end

  # def update_reservations
  #   # make sure not to update yourself (the recent reservation creation)
  #   self.conflicts('needs action').update_all(status: 'rejected')
  # end
end
