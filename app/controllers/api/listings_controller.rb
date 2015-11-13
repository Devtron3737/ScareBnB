class Api::ListingsController < ApplicationController
  def index
    coords = {
      north: params[:north].to_f,
      east: params[:east].to_f,
      south: params[:south].to_f,
      west: params[:west].to_f
    }
    @listings = Listing.map_listings(coords)
    # @listings = Listing.all

    respond_to do |format|
      format.html
      format.json { render json: @listings }
    end
  end

  def show
    @listing = Listing.find(params[:id])
    @reservations = @listing.accepted_reservations
  end

  def destroy
    Listing.delete(params[:id])
  end
end
