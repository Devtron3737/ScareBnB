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
  validates :listing_id, :check_in, :check_out, :guest_id, presence: true
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

  def conflicts
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

  def valid_reservation?
    if conflicts.empty?
      true
    else
      errors.add(:check_in, "dates are not available.")
      false
    end
  end
end
