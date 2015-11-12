json.listings(@listings) do |listing|
  json.(listing, :id, :title, :address, :city, :state)
end

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
