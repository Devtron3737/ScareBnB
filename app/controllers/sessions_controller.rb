class SessionsController < ApplicationController
  def create
    user = find_by_credentials(credentials)
    if user
      login!(user)
    else
      flash.now[:errors] = ["Invalid username/password"]
      render :new
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
