class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])

    if @user.nil?

    # no user with that username!
    render :new
    else
      redirect_to user_url(@user)
    end
  end

  def new
    # signup/#login
    render :new
  end

  def destroy
    # log out
  end
end
