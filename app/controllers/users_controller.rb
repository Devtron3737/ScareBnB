class UsersController < ApplicationController
  def new
    render :new
  end

  def create

    # if valid user creation, then
    # log new user in and direct to homepage
    # create picture if picture
  end

  def show

  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
