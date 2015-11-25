class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    # if valid user creation, then
    # log new user in and direct to homepage
  end
end
