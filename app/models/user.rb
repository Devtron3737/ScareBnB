# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string
#  pwd_digest :string           not null
#  username   :string
#

class User < ActiveRecord::Base
  validates :username, presence: true
  has_secure_password


  has_many :listings, foreign_key: :ghost_id
  has_one :picture

  has_many(
    :reservations_as_guest,
    class_name: "Reservation",
    foreign_key: :guest_id
  )
end
