class Api::UsersController < ApplicationController

  def show
    if current_user.nil?
      logout!
      redirect_to root_url
    else
      @reservations = current_user.upcoming_reservations_as_guest
      @listings = current_user.listings
    end
  end
end
