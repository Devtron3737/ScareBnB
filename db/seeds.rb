# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(fname: "Boogy", password: "boo")
User.create!(fname: "Casper", password: "boo")
User.create!(fname: "Dorothy", password: "boo")
User.create!(fname: "Mike", password: "boo")

Listing.create!(ghost_id: 1, toe_nails: 2, city: "San Francsico",
  state: "CA", address: "111 Madrid St.", description: "Boogys place",
  amenities: JSON.generate(["stuff"]), lat: 50.7, lng: -94.0
)
Listing.create!(ghost_id: 1, toe_nails: 2, city: "San Francsico",
  state: "CA", address: "111 Madrid St.", description: "Boogys 2nd place",
  amenities: JSON.generate(["stuff"]), lat: 40.1, lng: -94.5
)
Listing.create!(ghost_id: 2, toe_nails: 2, city: "San Francsico",
  state: "CA", address: "111 Madrid St.", description: "Caspers place",
  amenities: JSON.generate(["stuff"]), lat: 41.7, lng: -94.1
)
Listing.create!(ghost_id: 3, toe_nails: 2, city: "San Francsico",
  state: "CA", address: "111 Madrid St.", description: "Dorothys place",
  amenities: JSON.generate(["stuff"]), lat: 39.7, lng: -94.7
)

Reservation.create!(listing_id: 1, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 4
)
Reservation.create!(listing_id: 2, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 4
)
Reservation.create!(listing_id: 2, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 2
)

Reservation.create!(listing_id: 1, check_in: Date.new(2015,10,27), check_out: Date.new(2015,10,29),
  guest_id: 2, status: "approved"
)

ListingRating.create!(reservation_id: 1, review: "mike reviewing boogys first place",
  creepiness: 5
)
ListingRating.create!(reservation_id: 2, review: "mike reviewing boogys second place",
  creepiness: 5
)
ListingRating.create!(reservation_id: 3, review: "casper reviewing boogys second place",
  creepiness: 5
)

UserRating.create!(reservation_id: 1, review: "boogy reviewing mike",
  creepiness: 5
)
UserRating.create!(reservation_id: 2, review: "boogy reviewing mike again",
  creepiness: 5
)
UserRating.create!(reservation_id: 3, review: "boogy reviewing casper",
  creepiness: 5
)

Message.create!(from_user: 1, to_user: 2, title: "boogy to casper")
Message.create!(from_user: 2, to_user: 1, title: "casper to boogy")
