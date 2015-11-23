# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(name: "Boogy", password: "boo") #1
User.create!(name: "Casper", password: "boo")#2
User.create!(name: "Wicked Witch", password: "boo")#3
User.create!(name: "It", password: "boo")#4
User.create!(name: "Frankenstein", password: "boo")#5
User.create!(name: "Headless Horseman", password: "boo")#6
User.create!(name: "Hannibal", password: "boo")#7
User.create!(name: "Scream", password: "boo")#8
User.create!(name: "Hell Raiser", password: "boo")#9
User.create!(name: "Dracula", password: "boo")#10
User.create!(name: "Freddy", password: "boo")#11
User.create!(name: "Chucky", password: "boo")#12
User.create!(name: "Edward", password: "boo")#13
User.create!(name: "Voldemort", password: "boo")#14
User.create!(name: "Exorcist", password: "boo")#15
User.create!(name: "Jason", password: "boo")#16
User.create!(name: "Ring Girl", password: "boo")#17
User.create!(name: "Sally", password: "boo")#18
User.create!(name: "Jack", password: "boo")#19
User.create!(name: "Darth Vader", password: "boo")#20


Picture.create!(user_id: 1, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/boogy.jpg')
Picture.create!(user_id: 2, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/casper.jpg')
Picture.create!(user_id: 3, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812386/wicked%20witch.jpg')
Picture.create!(user_id: 4, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812272/it%20the%20clown.png')
Picture.create!(user_id: 5, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812272/frankenstein.gif')
Picture.create!(user_id: 6, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812272/headless%20horseman.jpg')
Picture.create!(user_id: 7, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812272/hannibal.jpg')
Picture.create!(user_id: 8, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/scream.jpg')
Picture.create!(user_id: 9, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/hell%20raiser.jpg')
Picture.create!(user_id: 10, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/dracula.jpg')
Picture.create!(user_id: 11, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/freddy.jpg')
Picture.create!(user_id: 12, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/chucky.jpg')
Picture.create!(user_id: 13, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/edward.jpg')
Picture.create!(user_id: 14, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812271/voldemort.jpg')
Picture.create!(user_id: 15, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/exorcist.jpg')
Picture.create!(user_id: 16, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/jason.jpg')
Picture.create!(user_id: 17, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/ring.jpg')
Picture.create!(user_id: 18, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/sally.jpg')
Picture.create!(user_id: 19, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447812270/jack.jpg')
Picture.create!(user_id: 20, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811040/darth-vader_uuqnnn.jpg')


Listing.create!(ghost_id: 1, toe_nails: 25, title: "Lovely victorian home",
  address: "111 Madrid St., San Francsico, CA", description: "Boogys place",
  amenities: JSON.generate(["stuff"]), lat: 37.727635, lng: -122.428021
)
Listing.create!(ghost_id: 1, toe_nails: 75, title: "Rotten abode near the coast",
  address: "2762 40th Ave., San Francsico, CA", description: "Boogys 2nd place",
  amenities: JSON.generate(["stuff"]), lat: 37.735323, lng: -122.497367
)
Listing.create!(ghost_id: 2, toe_nails: 21, title: "Large space full of spirits",
  address: "2445 Prospect St., Berkeley, CA", description: "Caspers place",
  amenities: JSON.generate(["stuff"]), lat: 37.866250, lng: -122.249629
)
Listing.create!(ghost_id: 3, toe_nails: 29, title: "A home away from home",
  address: "824 54th St., Oakland, CA", description: "Dorothys place",
  amenities: JSON.generate(["stuff"]), lat: 37.839046, lng: -122.270618
)

Listing.create!(ghost_id: 3, toe_nails: 41, title: "Secluded abode near a dark park",
  address: "222 Willard North, San Francsico, CA", description: "Dorothys second place",
  amenities: JSON.generate(["stuff"]), lat: 37.776441, lng: -122.456654
)

Listing.create!(ghost_id: 2, toe_nails: 302, title: "The hauntedest of the haunted",
  address: "1700 Irving St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.763782, lng: -122.476104
)

Listing.create!(ghost_id: 4, toe_nails: 32, title: "I wonder what's behind that door...",
  address: "535 Florida St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.762808, lng: -122.411190
)

Listing.create!(ghost_id: 5, toe_nails: 35, title: "Did you hear that? ",
  address: "1298 Howard St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.775699, lng: -122.413250
)

Listing.create!(ghost_id: 6, toe_nails: 77, title: "Plenty of things that go bump in the night",
  address: "653 Minna St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.763782, lng: -122.476104
)

Listing.create!(ghost_id: 7, toe_nails: 102, title: "Ghouls, goblins, and zombies",
  address: "1452 Willard St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.763351, lng: -122.453933
)

Listing.create!(ghost_id: 8, toe_nails: 542, title: "You don't want to know what happened here",
  address: "184 20th Ave., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.784382, lng: -122.479339
)

Listing.create!(ghost_id: 9, toe_nails: 22, title: "Beware of demon",
  address: "1740 Buchanan St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.786256 , lng: -122.429827
)

Listing.create!(ghost_id: 10, toe_nails: 876, title: "Gate of hell in basement",
  address: "1008 Pacific Ave, San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.796152, lng: -122.412128
)

Listing.create!(ghost_id: 11, toe_nails: 43, title: "Not one survivor yet",
  address: "1066 Filbert St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.800638, lng: -122.417137
)

Listing.create!(ghost_id: 12, toe_nails: 894, title: "Perfect place to rest for eternity",
  address: "3830 22nd St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.754712, lng: -122.433500
)

Listing.create!(ghost_id: 13, toe_nails: 21, title: "An evil spirits delight",
  address: "598 Fulton St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.778470, lng: -122.426488
)

Listing.create!(ghost_id: 14, toe_nails: 266, title: "Muahahahahaha",
  address: "69 Mary St., San Francsico, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.781638, lng: -122.406451
)

Listing.create!(ghost_id: 15, toe_nails: 342, title: "Who is that in the window?",
  address: "2149 Oregon St., Berkeley, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.858006, lng: -122.264804
)

Listing.create!(ghost_id: 16, toe_nails: 897, title: "Chainsaw out back",
  address: "2608 9th St., Berkeley, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.858277, lng: -122.291240
)

Listing.create!(ghost_id: 17, toe_nails: 133, title: "You'll never make it out alive",
  address: "55 Montell St., Oakland, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.823980, lng: -122.253474
)

Listing.create!(ghost_id: 18, toe_nails: 543, title: "A monsters mash",
  address: "2430 Poplar St., Oakland, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.818285, lng: -122.285918
)

Listing.create!(ghost_id: 19, toe_nails: 133, title: "Ahhhhh!",
  address: "450 Stow Ave., Oakland, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.803502, lng: -122.250899
)

Listing.create!(ghost_id: 20, toe_nails: 111, title: "Concede to the dark side",
  address: "110 Frisbie St., Oakland, CA", description: "Caspers second place",
  amenities: JSON.generate(["stuff"]), lat: 37.818963, lng: -122.259139
)

Picture.create!(listing_id: 1, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811570/The_Haunted_House_Das_Geisterhaus__5360049608_pd23da.jpg')
Picture.create!(listing_id: 2, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811569/18u67x18rmw7jjpg_ddwkro.jpg')
Picture.create!(listing_id: 3, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811569/haunted-house_fukfn0.jpg')
Picture.create!(listing_id: 4, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447872208/1415110089999_wps_70_Pic_shows_A_local_artist__ti1rhw.jpg')
Picture.create!(listing_id: 5, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811568/3_wmtabx.jpg')
Picture.create!(listing_id: 6, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811568/hauntedhouse_nceflt.jpg')
Picture.create!(listing_id: 7, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811568/20120429_rtl9992-edit_0_epu3dk.jpg')
Picture.create!(listing_id: 8, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811567/home_background_ozslce.jpg')
Picture.create!(listing_id: 9, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811566/haunted-house-ron-crabb_sntqpl.png')
Picture.create!(listing_id: 10, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811565/haunted_house_by_nassimhasan-d5qmcqh_y0yux7.jpg')
Picture.create!(listing_id: 11, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811565/haunted_house_halloween_0_1445254670_irjujy.jpg')
Picture.create!(listing_id: 12, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811563/haunted-house_1_qvajzd.jpg')
Picture.create!(listing_id: 13, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811563/church-in-louisianna-by-rick-galvan-on-flickr_rmfgw6.jpg')
Picture.create!(listing_id: 14, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811562/tumblr_nl12kdzH941s1vn29o1_1280_zrbahp.jpg')
Picture.create!(listing_id: 15, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811562/342212-haunted-house_pd4kmt.jpg')
Picture.create!(listing_id: 16, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811562/081c7007-d875-8569-2ac6c165aae37f9b_e4kdtx.jpg')
Picture.create!(listing_id: 17, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811561/1520504_fwhlzi.jpg')
Picture.create!(listing_id: 18, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811049/southsanfran_g2wdpg.jpg')
Picture.create!(listing_id: 19, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811044/insane_asylum_dueuah.jpg')
Picture.create!(listing_id: 20, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811042/cemetary2_tl0ysd.jpg')
Picture.create!(listing_id: 21, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811041/asylum2_ozp9hm.jpg')
Picture.create!(listing_id: 22, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811038/bathroom_wnjpoj.jpg')
Picture.create!(listing_id: 23, url: 'http://res.cloudinary.com/dn7rukqow/image/upload/v1447811041/deathstar_uqekj0.jpg')


# check_in: Date.new(2015,12,18), check_out: Date.new(2015,12,21))
Reservation.create!(listing_id: 1, check_in: Date.new(2015,12,18),
  check_out: Date.new(2015,12,21), guest_id: 4, status: "approved"
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
