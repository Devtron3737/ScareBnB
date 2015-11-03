class HomePageController < ApplicationController

# so i want to render json views that react will pickup. So my response to each
# request (though the appropriate controllers) should send back the data
# react needs to build the view

# search bar on home page
#  so when you press submit on the address you enter, this needs to make a request to the google
# maps api first. this will then center the map and give me new bounds. Then, ill use these bounds to make a
#  another request to my listings controller, and render back the json of all the listings to show

  def action
    # @featured_listings = Listing.find(1,2,3,4)

  end
end
