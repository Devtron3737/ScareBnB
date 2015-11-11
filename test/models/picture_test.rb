# == Schema Information
#
# Table name: pictures
#
#  id                 :integer          not null, primary key
#  user_id            :integer
#  listing_id         :integer
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class PictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
