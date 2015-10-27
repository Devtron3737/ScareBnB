# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  guest_id   :integer          not null
#

class Reservation < ActiveRecord::Base
  validates :listing_id, :check_in, :check_out, :guest_id, presence: true

  belongs_to(
    :guest,
    class_name: "User",
    foreign_key: :guest_id
  )

  belongs_to :listing

  has_many :listing_ratings
  has_many :user_ratings
end
