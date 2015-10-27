# == Schema Information
#
# Table name: messages
#
#  id        :integer          not null, primary key
#  from_user :integer          not null
#  to_user   :integer          not null
#  content   :text
#  title     :string
#  read      :boolean          default(FALSE)
#

class Message < ActiveRecord::Base
  validates :from_user, :to_user, presence: true

  belongs_to(
    :sending_user,
    class_name: "User",
    foreign_key: :from_user
  )

  belongs_to(
    :receiving_user,
    class_name: "User",
    foreign_key: :to_user
  )
end
