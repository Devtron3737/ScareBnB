# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string           not null
#  username        :string
#  password        :string
#  session_token   :string           not null
#

class User < ActiveRecord::Base
  validates :username, :session_token, presence: true, uniqueness: true
  has_secure_password

  before_validation :ensure_sesssion_token

  has_many :listings, foreign_key: :ghost_id
  has_one :picture

  has_many(
    :reservations_as_guest,
    class_name: "Reservation",
    foreign_key: :guest_id
  )

  def upcoming_reservations_as_guest
    self.reservations_as_guest.where(["check_in > ?", Date.today]).order(:check_in)
  end

  def username=(val)
    write_attribute(:username, val.downcase)
  end

  def ensure_sesssion_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
