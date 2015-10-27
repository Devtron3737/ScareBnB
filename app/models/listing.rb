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
#

class Listing < ActiveRecord::Base
    validates(
      :ghost_id, :toe_nails, :city,
      :state, :address, :amenities, :description,
      presence: true
    )

    belongs_to(
      :ghost,
      class_name: "User",
      foreign_key: :ghost_id
    )

    has_many :reservations

    def self.map_listings(north_lat, east_lng, south_lat, west_lng)
      Listing.where([
        "lat < :north_lat AND lat > :south_lat
        AND
        lng < :east_lng AND lng > :west_lng",
        {
          north_lat: north_lat,
          south_lat: south_lat,
          east_lng: east_lng,
          west_lng: west_lng
        }
      ])
    end

end
