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
  STATUSES = ['needs action', 'approved', 'rejected']
  validates :listing_id, :check_in, :check_out, :guest_id, :status, presence: true
  validates :status, inclusion: STATUSES
  validate :valid_reservation?

  belongs_to(
    :guest,
    class_name: "User",
    foreign_key: :guest_id
  )

  belongs_to :listing
  has_one :ghost, through: :listing, source: :ghost
  has_many :listing_ratings
  has_many :user_ratings

  def conflicts(status)
    id_matcher = id_matcher_set(status)
    Reservation.where([
      "listing_id = :listing_id AND status = :status AND id #{id_matcher} :id",
      {
        listing_id: self.listing_id, status: status, id: self.id
      }
    ]).where([
       "(check_in >= :check_in AND check_in <= :check_out)
       OR
       (check_out >= :check_in AND check_out <= :check_out)",
       { check_in: self.check_in, check_out: self.check_out }
    ])
  end

# conflicts helper method to get correct syntax for id matching in WHERE
  def id_matcher_set(status)
    return 'IS NOT' if status == 'approved'
    '!='
  end

# date.new(year, month, day)
  def valid_reservation?
    if conflicts('approved').empty?
      return true
    end
    errors.add(:check_in, "dates not available")
    false
  end

  # doesnt work, syntax error related to id check in conflicts
  def update_reservations
    # make sure not to update yourself (the recent reservation creation)
    self.conflicts('needs action').update_all(status: 'rejected')
  end
end
