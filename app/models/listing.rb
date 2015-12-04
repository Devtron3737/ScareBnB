# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  ghost_id    :integer          not null
#  toe_nails   :integer          not null
#  address     :string           not null
#  amenities   :json             not null
#  description :text             not null
#  lat         :float
#  lng         :float
#  title       :string           not null
#

class Listing < ActiveRecord::Base
    validates(
      :ghost_id, :toe_nails, :lat, :lng,
      :address, :amenities, :title, :description,
      presence: true
    )

    belongs_to(
      :ghost,
      class_name: "User",
      foreign_key: :ghost_id
    )

    has_many :pictures
    has_one :ghost_picture, through: :ghost, source: :picture
    has_many :reservations

    def upcoming_reservations
      self.reservations.where(["check_in > ?", Date.today]).order(:check_in)
    end

    def self.filter_listings(options = {})
      Listing.find_by_sql([
        "
          SELECT
          listings.*
          FROM
          listings
          LEFT OUTER JOIN
            (
              SELECT
              conflicting_listings.*
              FROM
              listings AS conflicting_listings
              JOIN
              reservations ON conflicting_listings.id = reservations.listing_id
              WHERE
              (check_in >= :check_in AND check_in <= :check_out)
              OR
              (check_out >= :check_in AND check_out <= :check_out)
            ) AS conflicts ON listings.id = conflicts.id
          WHERE
          conflicts.id IS NULL
          AND
          listings.lat < :north AND listings.lat > :south
          AND
          listings.lng > :east AND listings.lng < :west
        ",
        {
          north: options[:north],
          south: options[:south],
          east: options[:east],
          west: options[:west],
          check_in: options[:check_in],
          check_out: options[:check_out]
        }
      ])
    end
end
