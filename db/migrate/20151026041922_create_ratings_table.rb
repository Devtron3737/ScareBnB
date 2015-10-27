class CreateRatingsTable < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false
      t.text :review
      t.integer :creepiness, null: false
      t.integer :reservation_id

      t.timestamp
    end
    add_index :ratings, :listing_id
    add_index :ratings, :user_id
    add_index :ratings, :reservation_id
  end
end
