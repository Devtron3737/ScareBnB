# == Schema Information
#
# Table name: notifications
#
#  id             :integer          not null, primary key
#  action_type    :string           not null
#  user_id        :integer          not null
#  reservation_id :integer
#  read           :boolean          default(FALSE), not null
#

class Notification < ActiveRecord::Base
  belongs_to :notifiable, polymorphic: true
end
