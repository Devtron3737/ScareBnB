# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  listing_id :integer
#

class Picture < ActiveRecord::Base

  belongs_to :user
  belongs_to :listing

end
