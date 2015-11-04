class Api::ListingsController < ApplicationController
  def index
    coords = {
      north: params[:north],
      east: params[:east],
      south: params[:south],
      west: params[:west]
    }
    # @listings = Listing.map_listings(coords)
    @listings = Listing.all

    # so bounds are sent using ajax request
    # this request is made via the action_preparer
    # action preparer should format the request
    # to be made via coords
    # then these coords are used to change the store
    # of listings, ect.
    respond_to do |format|
      format.html
      format.json { render json: @listings }
    end
  end
end
