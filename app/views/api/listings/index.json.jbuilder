json.listings(@listings) do |listing|
  json.id listing.id
  json.toe_nails listing.toe_nails
  json.address listing.address
  json.title listing.title
  json.pictures(listing.pictures) do |picture|
    json.(picture, :url)
  end
end
