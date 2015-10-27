# == Schema Information
#
# Table name: listing_ratings
#
#  id             :integer          not null, primary key
#  reservation_id :integer          not null
#  review         :text
#  creepiness     :integer          not null
#

class ListingRating < ActiveRecord::Base
  belongs_to :reservation
end
