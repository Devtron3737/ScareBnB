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

  def create
    listing = Listing.new(listing_params)

    #listing.ghost_id = current_user.id
    listing.save!

    if !params[:pictures].empty?
      params[:pictures].each do |picture|
        Picture.create!(listing_id: listing.id, url: picture)
      end
    end
    # go through images
    # make sure it saves
  end

  def destroy
    Listing.delete(params[:id])
    respond_to do |format|
      format.json { render json: {} }
    end
  end

  private

  def listing_params
    params.permit(
      :title, :toe_nails, :lat, :lng,
      :address, :city, :state, :ghost_id,
      :amenities, :description
    )
  end
end
