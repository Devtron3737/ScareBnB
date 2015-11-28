class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  def find_by_credentials(credentials)
    User.find_by(username: credentials['username'].downcase)
        .try(:authenticate, credentials['password'])
  end

  def current_user
    # add session token
    return nil if session[:user_id].nil?
    User.find(session[:user_id])
  end

  def logged_in?
    # check that user is logged in
    !current_user.nil?
  end

  def login!(user)
    session[:user_id] = user.id
    redirect_to root_url
    # log user in
  end

  def logout!
    session[:user_id] = nil
  end

end
