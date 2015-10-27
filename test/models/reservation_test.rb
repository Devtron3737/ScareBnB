# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  listing_id :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  guest_id   :integer          not null
#  status     :string           default("needs action")
#

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
