# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  email      :string
#  pwd_digest :string           not null
#  username   :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
