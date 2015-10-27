class AddGhostIdColumnRatings < ActiveRecord::Migration
  def change
    add_column :ratings, :ghost_id, :integer, null: false
    rename_column :listings, :user_id, :ghost_id
  end
end
