json.listings(@listings) do |listing|
  json.id listing.id
  json.toe_nails listing.toe_nails
  json.address listing.address
  json.title listing.title
  json.lat listing.lat
  json.lng listing.lng
  if listing.ghost_picture
    json.user_picture(listing.ghost_picture, :url)
  end
  
  json.pictures(listing.pictures) do |picture|
    json.(picture, :url)
  end
end
