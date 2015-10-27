# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  listing_id :integer
#

class Picture < ActiveRecord::Base
  # i believe associations are set up to fetch
  # listings + pics + ghost pic
  # need to setup paperclip to test
  # has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
