# == Schema Information
#
# Table name: ratings
#
#  id             :integer          not null, primary key
#  listing_id     :integer          not null
#  guest_id       :integer          not null
#  review         :text
#  creepiness     :integer          not null
#  reservation_id :integer
#  ghost_id       :integer          not null
#

class Rating < ActiveRecord::Base
  validates :listing_id, :user_id, :creepiness, presence: true
  #add not null constraint and validation
  #for reservation_id
end
