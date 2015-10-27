# == Schema Information
#
# Table name: user_ratings
#
#  id             :integer          not null, primary key
#  reservation_id :integer          not null
#  review         :text
#  creepiness     :integer
#

class UserRating < ActiveRecord::Base
  belongs_to :reservation
end
