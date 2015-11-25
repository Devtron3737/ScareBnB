class SessionsController < ApplicationController
  def create
    session[:session_token] = 
    # log user in
  end

  def new
    # signup/#login
  end

  def destroy
    # log out
  end
end
