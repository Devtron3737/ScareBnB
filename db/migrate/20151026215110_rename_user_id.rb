class RenameUserId < ActiveRecord::Migration
  def change
    rename_column :ratings, :user_id, :guest_id
    rename_column :reservations, :user_id, :guest_id
  end
end
