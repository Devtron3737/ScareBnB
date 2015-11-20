class Api::ReservationsController < ApplicationController
  def create
    reservation = Reservation.new(reservation_params)

    reservation.save!

    # if reservation.save
    #   # cool
    # else
    #   # not cool
    # end
  end

  private

  def reservation_params
    params.permit(:check_in, :check_out, :listing_id, :guest_id)
  end
end
