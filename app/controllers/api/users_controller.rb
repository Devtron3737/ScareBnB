class Api::UsersController < ApplicationController

  def show
    # @user = User.find(params[:id])
    if current_user.nil?
      render template: 'sessions/new'
    else
      @reservations = current_user.reservations_as_guest
      @listings = current_user.listings
    end
  end
end
