class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def find_by_credentials(credentials)
    User.find_by(username: credentials['username'].downcase)
        .try(:authenticate, credentials['password'])
  end

  def current_user
    # add session token
    return nil if session[:session_token].nil?
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def login!(user)
    # force log out other clients
    user.reset_session_token!
    # log this client in
    session[:session_token] = user.session_token
    redirect_to root_url
  end

  def logout!
    session[:session_token] = nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end

end
