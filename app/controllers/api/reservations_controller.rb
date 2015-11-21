class Api::ReservationsController < ApplicationController
  def create
    reservation = Reservation.new(reservation_params)

    if reservation.save

      render json: {}
    else
      render json: {errors: reservation.errors.full_messages}, status: 422
    # if reservation.save
    #   # cool
    # else
    #   # not cool
    # end
    end
  end

  private

  def reservation_params
    params.permit(:check_in, :check_out, :listing_id, :guest_id)
  end
end
