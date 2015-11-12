# creates a hash called listings, with array of Listings
# and listing attributes
json.listings(@listings) do |listing|
  json.(listing, :id, :title, :address, :city, :state)
end

# creates a hash called reservations, with array of reservations
# and reservation attributes
json.reservations(@reservations) do |reservation|
  json.id reservation.id
  json.check_in reservation.check_in
  json.check_out reservation.check_out
  json.listing(
    reservation.listing,
    :id, :ghost_id, :address,
    :city, :state, :title
  )
end
