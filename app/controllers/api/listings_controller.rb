class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.filter_listings(listing_params)
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    listing = Listing.new(listing_params)

    #listing.ghost_id = current_user.id
    if listing.save

      render json: {}
    else
      render json: {errors: listing.errors.full_messages}, status: 422
    end

    if !params[:pictures].empty?
      params[:pictures].each do |picture|
        Picture.create!(listing_id: listing.id, url: picture)
      end
    end
  end

  def destroy
    Listing.delete(params[:id])
    render json: {}
  end

  private

  def listing_params
    params.permit(
      :title, :toe_nails, :lat, :lng,
      :address, :ghost_id, :amenities,
      :description, :check_in, :check_out,
      :north, :east, :south, :west
    )
  end
end
