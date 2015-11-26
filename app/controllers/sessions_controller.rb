class SessionsController < ApplicationController
  def create

    @user = User.find_by(username: params[:user][:username])
    if @user.nil?

    # no user with that username!
    render template: 'users/new'
    else
      login!(@user)
    end
  end

  def new
    # signup/#login
    render :new
  end

  def destroy
    logout!
    render json: {}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end