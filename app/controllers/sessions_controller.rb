class SessionsController < ApplicationController
  def create

    # user = User.find_by(username: params[:user][:username])
    user = find_by_credentials(credentials)
    if user.nil?

    # no user with that username!
    flash.now[:errors] = ["Invalid username/password"]
    render :new
    else
      login!(user)
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

  def credentials
    params.require(:user).permit(:username, :password)
  end
end
