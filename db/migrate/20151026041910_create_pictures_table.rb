class CreatePicturesTable < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.integer :user_id
      t.integer :listing_id

      t.timestamp
    end
    add_index :pictures, :user_id
    add_index :pictures, :listing_id
  end
end
