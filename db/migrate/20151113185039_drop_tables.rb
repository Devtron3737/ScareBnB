class DropTables < ActiveRecord::Migration
  def change
    drop_table :messages
    drop_table :listing_ratings
    drop_table :user_ratings
  end
end
