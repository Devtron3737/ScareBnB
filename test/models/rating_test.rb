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

require 'test_helper'

class RatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
