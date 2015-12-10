# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  ghost_id    :integer          not null
#  toe_nails   :integer          not null
#  address     :string           not null
#  description :text             not null
#  lat         :float
#  lng         :float
#  title       :string           not null
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
