class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @reservations = @user.reservations_as_guest
    @listings = @user.listings
  end
end
