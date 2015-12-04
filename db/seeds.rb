# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "Boogy", password: "boo", session_token: nil)
User.create!(username: "Casper", password: "boo", session_token: nil)
User.create!(username: "Wicked Witch", password: "boo", session_token: nil)
User.create!(username: "It", password: "boo", session_token: nil)
User.create!(username: "Frankenstein", password: "boo", session_token: nil)
User.create!(username: "Headless Horseman", password: "boo", session_token: nil)
User.create!(username: "Hannibal", password: "boo", session_token: nil)
User.create!(username: "Scream", password: "boo", session_token: nil)
User.create!(username: "Hell Raiser", password: "boo", session_token: nil)
User.create!(username: "Dracula", password: "boo", session_token: nil)
User.create!(username: "Freddy", password: "boo", session_token: nil)
User.create!(username: "Chucky", password: "boo", session_token: nil)
User.create!(username: "Edward", password: "boo", session_token: nil)
User.create!(username: "Voldemort", password: "boo", session_token: nil)
User.create!(username: "Exorcist", password: "boo", session_token: nil)
User.create!(username: "Jason", password: "boo", session_token: nil)
User.create!(username: "Ring Girl", password: "boo", session_token: nil)
User.create!(username: "Sally", password: "boo", session_token: nil)
User.create!(username: "Jack", password: "boo", session_token: nil)
User.create!(username: "Darth Vader", password: "boo", session_token: nil)


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
  address: "111 Madrid St., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.727635, lng: -122.428021,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)
Listing.create!(ghost_id: 1, toe_nails: 75, title: "Rotten abode near the coast",
  address: "2762 40th Ave., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.735323, lng: -122.497367,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)
Listing.create!(ghost_id: 2, toe_nails: 21, title: "Large space full of spirits",
  address: "2445 Prospect St., Berkeley, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.866250, lng: -122.249629,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)
Listing.create!(ghost_id: 3, toe_nails: 29, title: "A home away from home",
  address: "824 54th St., Oakland, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.839046, lng: -122.270618,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 3, toe_nails: 41, title: "Secluded abode near a dark park",
  address: "222 Willard North, San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.776441, lng: -122.456654,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)

Listing.create!(ghost_id: 2, toe_nails: 302, title: "The hauntedest of the haunted",
  address: "1700 Irving St., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.763782, lng: -122.476104,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)

Listing.create!(ghost_id: 4, toe_nails: 32, title: "I wonder what's behind that door...",
  address: "1032 2nd St., Novato, CA",
  amenities: JSON.generate(["stuff"]), lat: 38.109179, lng: -122.571868,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 5, toe_nails: 35, title: "Did you hear that? ",
  address: "1298 Howard St., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.775699, lng: -122.413250,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)

Listing.create!(ghost_id: 6, toe_nails: 77, title: "Plenty of things that go bump in the night",
  address: "65 Alpine Ave., Daly City, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.686377, lng: -122.486442,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)

Listing.create!(ghost_id: 7, toe_nails: 102, title: "Ghouls, goblins, and zombies",
  address: "1452 Willard St., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.763351, lng: -122.453933,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 8, toe_nails: 542, title: "You don't want to know what happened here",
  address: "18 Rowe Ranch Way, Novato, CA",
  amenities: JSON.generate(["stuff"]), lat: 38.071136, lng: -122.543495,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)

Listing.create!(ghost_id: 9, toe_nails: 22, title: "Beware of demon",
  address: "185 El Rancho Dr., Daly City, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.659941, lng: -122.453407,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)

Listing.create!(ghost_id: 10, toe_nails: 876, title: "Gate of hell in basement",
  address: "1008 Pacific Ave, San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.796152, lng: -122.412128,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 11, toe_nails: 43, title: "Not one survivor yet",
  address: "1066 Filbert St., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.800638, lng: -122.417137,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)

Listing.create!(ghost_id: 10, toe_nails: 894, title: "Perfect place to rest for eternity",
  address: "740 Cottonwood, South San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.661013, lng: -122.423487,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)

Listing.create!(ghost_id: 13, toe_nails: 21, title: "An evil spirits delight",
  address: "598 Fulton St., San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.778470, lng: -122.426488,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 14, toe_nails: 266, title: "Muahahahahaha",
  address: "28 Sonora Ave., South San Francisco, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.645214, lng: -122.425114,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)

Listing.create!(ghost_id: 15, toe_nails: 342, title: "Who is that in the window?",
  address: "2149 Oregon St., Berkeley, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.858006, lng: -122.264804,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)

Listing.create!(ghost_id: 16, toe_nails: 897, title: "Chainsaw out back",
  address: "2608 9th St., Berkeley, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.858277, lng: -122.291240,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 17, toe_nails: 133, title: "You'll never make it out alive",
  address: "55 Montell St., Oakland, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.823980, lng: -122.253474,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
)

Listing.create!(ghost_id: 18, toe_nails: 543, title: "A monsters mash",
  address: "2430 Poplar St., Oakland, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.818285, lng: -122.285918,
  description: "This very haunted space is frequented by quite the upset spirit. It is said that if you’re up deep enough into the night, the howls of La Llorona can clearly be heard from the property. And careful not to be alone on the grounds during nightfall, as several guests have already disappeared due to the Llorona mistaking them for her lost children. The house also has a lovely kitchen."
)

Listing.create!(ghost_id: 19, toe_nails: 133, title: "Ahhhhh!",
  address: "450 Stow Ave., Oakland, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.803502, lng: -122.250899,
  description: "Bloodstained carpets, creaky floorboards, and constantly flickering lightbulbs are just some of the wonderful amenities this property boasts. If guests get bored, feel free to explore the mysterious catacombs underneath the property. It is said there is a lost torture chamber down there. Just beware, the neighboring resident psycho finds his way down there from time to time. Wouldn’t want to run into him now!"
)

Listing.create!(ghost_id: 20, toe_nails: 111, title: "Concede to the dark side",
  address: "110 Frisbie St., Oakland, CA",
  amenities: JSON.generate(["stuff"]), lat: 37.818963, lng: -122.259139,
  description: "Don’t mind the banging coming from the upstairs attic, that has been going on for some time now. As a matter of fact, I would’t dwell too much on any of the unexplainable noises coming from property. The last guest that did pay some mind to it actually ended up losing their mind. We wouldn't want that to happen. Please be sure to leave a nice review at the end of you’re stay."
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

Reservation.create!(listing_id: 1, check_in: Date.new(2015,12,18),
  check_out: Date.new(2015,12,21), guest_id: 10
)
Reservation.create!(listing_id: 2, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 4
)

Reservation.create!(listing_id: 3, check_in: Date.today,
  check_out: Date.tomorrow, guest_id: 2
)

Reservation.create!(listing_id: 13, check_in: Date.new(2016, 02, 27), check_out: Date.new(2016, 03, 03),
  guest_id: 3
)

Reservation.create!(listing_id: 10, check_in: Date.new(2016, 03, 27), check_out: Date.new(2016, 04, 02),
  guest_id: 10
)

Reservation.create!(listing_id: 13, check_in: Date.today, check_out: Date.tomorrow,
  guest_id: 12
)

Reservation.create!(listing_id: 17, check_in: Date.new(2016, 01, 21), check_out: Date.new(2016, 01, 23),
  guest_id: 3
)

Reservation.create!(listing_id: 9, check_in: Date.new(2015,12,16), check_out: Date.new(2015,12,21),
  guest_id: 8
)

Reservation.create!(listing_id: 16, check_in: Date.new(2016,01,15), check_out: Date.new(2016,01,20),
  guest_id: 9
)

Reservation.create!(listing_id: 17, check_in: Date.new(2016,02,15), check_out: Date.new(2016,02,25),
  guest_id: 2
)
