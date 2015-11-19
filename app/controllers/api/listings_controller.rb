class Api::ListingsController < ApplicationController
  def index
    # options = {
    #   north: params[:north].to_f,
    #   east: params[:east].to_f,
    #   south: params[:south].to_f,
    #   west: params[:west].to_f
    #   check_in: params[:check_in]
    #   check_out: params[:check_out]
    # }

    @listings = Listing.filter_listings(listing_params)

  end

  def show
    @listing = Listing.find(params[:id])
    # @reservations = @listing.accepted_reservations
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

    respond_to do |format|
      format.json { render json: {} }
    end
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
      :address, :ghost_id, :amenities,
      :description, :check_in, :check_out
      :north, :east, :south, :west
    )
  end
end
