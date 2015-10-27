# == Schema Information
#
# Table name: users
#
#  id       :integer          not null, primary key
#  fname    :string           not null
#  lname    :string
#  email    :string
#  about    :text
#  hometown :string
#  password :string           not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
