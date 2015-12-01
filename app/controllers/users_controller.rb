class UsersController < ApplicationController
  def new
    # signup
    render :new
  end

  def create
    user = User.new(user_params)

    if user.save
      login!(user)
    else
      flash.now[:errors] = user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
