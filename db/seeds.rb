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
  amenities: JSON.generate(["stuff"]), lat: 37.727635, lng: -122.428021
)
Listing.create!(ghost_id: 1, toe_nails: 2, city: "San Francsico",
  state: "CA", address: "2762 40th Ave.", description: "Boogys 2nd place",
  amenities: JSON.generate(["stuff"]), lat: 37.735323, lng: -122.497367
)
Listing.create!(ghost_id: 2, toe_nails: 2, city: "Berkeley",
  state: "CA", address: "2445 Prospect St.", description: "Caspers place",
  amenities: JSON.generate(["stuff"]), lat: 37.866250, lng: -122.249629
)
Listing.create!(ghost_id: 3, toe_nails: 2, city: "Oakland",
  state: "CA", address: "824 54th St.", description: "Dorothys place",
  amenities: JSON.generate(["stuff"]), lat: 37.839046, lng: -122.270618
)

Reservation.create!(listing_id: 1, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 4, status: "approved"
)
Reservation.create!(listing_id: 2, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 4, status: "approved"
)
Reservation.create!(listing_id: 3, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 2, status: "approved"
)

Reservation.create!(listing_id: 1, check_in: Date.new(2015,11,27), check_out: Date.new(2015,11,29),
  guest_id: 2, status: "approved"
)

ListingRating.create!(reservation_id: 1, review: "mike reviewing boogys first place",
  creepiness: 5
)
ListingRating.create!(reservation_id: 2, review: "mike reviewing boogys second place",
  creepiness: 5
)
ListingRating.create!(reservation_id: 3, review: "casper reviewing boogys second place",
  creepiness: 1
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
