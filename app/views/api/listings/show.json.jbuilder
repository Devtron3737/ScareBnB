json.id @listing.id
json.toe_nails @listing.toe_nails
json.ghost_id @listing.ghost_id
json.amenities @listing.amenities
json.description @listing.description
json.address @listing.address
json.title @listing.title
json.ghost(@listing.ghost, :username)

if !@listing.upcoming_reservations.empty?
  json.reservations(@listing.upcoming_reservations) do |reservation|
    json.(reservation, :check_in, :check_out)
  end
end

if @listing.ghost_picture
  json.user_picture(@listing.ghost_picture, :url)
end

if !@listing.pictures.empty?
  json.pictures(@listing.pictures) do |picture|
    json.(picture, :url)
  end
end
