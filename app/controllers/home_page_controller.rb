class HomePageController < ApplicationController

  def action
    unless logged_in?
      redirect_to new_session_url
    end
  end


end
