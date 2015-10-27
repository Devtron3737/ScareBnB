# == Schema Information
#
# Table name: users
#
#  id       :integer          not null, primary key
#  fname    :string           not null
#  lname    :string
#  email    :string
#  about    :text
#  hometown :string
#  password :string           not null
#

class User < ActiveRecord::Base
  validates :fname, :password, presence: true

  has_many :listings, foreign_key: :ghost_id
  has_one :picture

  has_many(
    :sent_messages,
    class_name: "Message",
    foreign_key: :from_user
  )

  has_many(
    :received_messages,
    class_name: "Message",
    foreign_key: :to_user
  )


  # as a ghost, you write ratings on a guest associated
  # with a reservation. As a guest, you write ratings on
  # a listing.
  # so on ghost show, well be listing all the reviews associated
  # with all of their listings
  # on a users prev trips, clicking a trip will show
  # all of the ratings associated with that reservation
  # so a user doesnt need every review theyve written,
  # just theyre reservations

  has_many(
    :reservations_as_guest,
    class_name: "Reservation",
    foreign_key: :guest_id
  )

  has_many :reservations_as_ghost, through: :listings, source: :reservations
  has_many :listing_ratings_as_ghost, through: :reservations_as_ghost, source: :listing_ratings
  has_many :listing_ratings_as_guest, through: :reservations_as_guest, source: :listing_ratings
  has_many :user_ratings_as_ghost, through: :reservations_as_ghost, source: :user_ratings
  has_many :user_ratings_as_guest, through: :reservations_as_guest, source: :user_ratings

  def need_action_reservations
    self.reservations_as_ghost.where("status = 'needs action'")
  end

  def accepted_reservations_as_ghost
    self.reservations_as_ghost.where("status = 'approved'")
  end

  def pending_reservations
    self.reservations_as_guest.where("status = 'needs action'")
  end

  def accepted_reservations_as_guest
    self.reservations_as_guest.where("status = 'approved'")
  end

end
