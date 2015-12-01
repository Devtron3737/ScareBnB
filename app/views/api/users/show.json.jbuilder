# creates a hash called listings, with array of Listings
# and listing attributes
json.listings(@listings) do |listing|
  json.id listing.id
  json.toe_nails listing.toe_nails
  json.ghost_id listing.ghost_id
  json.amenities listing.amenities
  json.description listing.description
  json.address listing.address
  json.title listing.title
  json.ghost(listing.ghost, :username)
  if listing.ghost_picture
    json.user_picture(listing.ghost_picture, :url)
  end
  
  json.pictures(listing.pictures) do |picture|
    json.(picture, :url)
  end
end


# { [ {id, checkin, checkout, listing: {id, ghost_id, address..}}, next reservation ] }
json.reservations(@reservations) do |reservation|
  json.id reservation.id
  json.check_in reservation.check_in
  json.check_out reservation.check_out
  json.guest_id reservation.guest_id
  json.listing_details(reservation.listing, :id, :ghost_id, :address, :title)
  json.listing_pictures(reservation.listing.pictures) do |picture|
    json.(picture, :url)
  end
end
