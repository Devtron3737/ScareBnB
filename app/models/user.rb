# == Schema Information
#
# Table name: users
#
#  id       :integer          not null, primary key
#  email    :string
#  password :string           not null
#  name     :string
#

class User < ActiveRecord::Base
  validates :name, :password, presence: true

  has_many :listings, foreign_key: :ghost_id
  has_one :picture

  has_many(
    :reservations_as_guest,
    class_name: "Reservation",
    foreign_key: :guest_id
  )
end
