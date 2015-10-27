class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.string :action_type, null: false
      t.integer :user_id, null: false
      t.integer :reservation_id
      t.integer :rating_id
    end

    add_index :notifications, :user_id
    add_index :notifications, :reservation_id
    add_index :notifications, :rating_id
  end
end
