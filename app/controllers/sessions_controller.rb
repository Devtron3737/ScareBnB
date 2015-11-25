class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: )
    # log user in
  end

  def new
    # signup/#login
  end

  def destroy
    # log out
  end
end
