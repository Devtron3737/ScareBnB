class DropRatings < ActiveRecord::Migration
  def change
    drop_table :ratings

    create_table :listings_ratings do |t|
      t.integer :reservation_id, null: false
      t.text :review
      t.integer :creepiness, null: false

      t.timestamp
    end

    create_table :users_ratings do |t|
      t.integer :reservation_id, null: false
      t.text :review
      t.integer :creepiness

      t.timestamp
    end
  end
end
