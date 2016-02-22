class Api::ReservationsController < ApplicationController
  def create
    reservation = Reservation.new(reservation_params)
    reservation.guest_id = current_user.id

    if reservation.save

      render json: {}
    else
      render json: {errors: reservation.errors.full_messages}, status: 422
    end
  end

  def destroy
    if current_user.reservations_as_guest.find(params[:id])
      Reservation.destroy(params[:id])
      render json: {}
    else
      render json: {errors: "Reservation doesnt belong to current user"}
    end
  end

  private

  def reservation_params
    params.permit(:check_in, :check_out, :listing_id)
  end
end
