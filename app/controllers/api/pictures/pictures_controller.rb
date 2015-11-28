class PicturesController < ApplicationController
  def show
    picture =  current_user.picture
    render json: picture
  end
end
