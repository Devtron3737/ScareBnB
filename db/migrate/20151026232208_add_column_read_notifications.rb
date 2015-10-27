class AddColumnReadNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :read, :boolean, {default: false, null: false}
    add_index :listing_ratings, :reservation_id
    add_index :user_ratings, :reservation_id
    remove_column :notifications, :rating_id
  end
end
