class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:user][:username])

    if @user.nil?

    # no user with that username!
    render :new
    else
      log_in!(@user)
      redirect_to user_url
    end
  end

  def new
    # signup/#login
    render :new
  end

  def destroy
    # log out
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
