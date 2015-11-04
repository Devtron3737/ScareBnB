class Api::ListingsController < ApplicationController
  def index
    coords = {
      north: params[:north].to_f,
      east: params[:east].to_f,
      south: params[:south].to_f,
      west: params[:west].to_f
    }
    @listings = Listing.map_listings(coords)

    respond_to do |format|
      format.html
      format.json { render json: @listings }
    end
  end
end
