class Api::PicturesController < ApplicationController
  def show
    # show user pic
    picture =  current_user.picture
    render json: picture
  end

  def create
    # create user pic
    user_pic = Picture.new(
      url: params[:url],
      user_id: current_user.id
    )

    if user_pic.save
      render json: user_pic
    else
      render json: {errors: user_pic.errors.full_messages}, status: 422
    end
  end
end
