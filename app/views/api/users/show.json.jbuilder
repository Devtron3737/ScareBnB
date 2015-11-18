# creates a hash called listings, with array of Listings
# and listing attributes
json.listings(@listings) do |listing|
  json.(listing, :id, :title, :address, :ghost_id)
end


# { [ {id, checkin, checkout, listing: {id, ghost_id, address..}}, next reservation ] }
json.reservations(@reservations) do |reservation|
  json.id reservation.id
  json.check_in reservation.check_in
  json.check_out reservation.check_out
  json.listing(reservation.listing, :id, :ghost_id, :address, :title)
end
