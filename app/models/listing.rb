# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  ghost_id    :integer          not null
#  toe_nails   :integer          not null
#  city        :string           not null
#  state       :string           not null
#  address     :string           not null
#  amenities   :json             not null
#  description :text             not null
#  lat         :float
#  lng         :float
#  title       :string           not null
#

class Listing < ActiveRecord::Base
    validates(
      :ghost_id, :toe_nails,
      :address, :amenities, :description,
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
    has_many :ratings, through: :reservations, source: :listing_ratings

    def self.map_listings(options = {})
      # options should include north_lat, east_lng, south_lat, west_lng
                              # check_in and check_out
      # test with Listing.map_listings(45,-90,30,-97)

      # .joins(:reservations) (add that before .where)
      Listing.where([
        "lat < :north AND lat > :south
        AND
        lng > :east AND lng < :west",
        {
          north: options[:north],
          south: options[:south],
          east: options[:east],
          west: options[:west]
        }
      ])
      # .filter_by_dates(options[check_in], options[check_out])

      # add join for listing pics and user pic

      # add method that filters listings for only ones that are available those dates
    end

    def filter_by_dates(check_in, check_out)
      # this should query existing results with where
      self.where([
        "
        "
        ])
    end

    def avg_creepiness
      self.ratings.average(:creepiness).to_i
    end

end
