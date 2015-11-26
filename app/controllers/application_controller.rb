class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  def find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?

    pwd_digest = Digest::Sha2(password)
    user.pwd_digest == pwd_digest ? user : nil
  end

  def current_user
    return nil if session[:user_id].nil?
    User.find(session[:user_id])
  end

  def logged_in?
    # check that user is logged in
    !session[:user_id].nil?
  end

  def login!(user)
    session[:user_id] = user.id
    # log user in
  end

  def logout!
    session[:user_id] = nil
  end

  def logout!
    # log user out
  end
end
