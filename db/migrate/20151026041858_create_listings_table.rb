class CreateListingsTable < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false
      t.integer :toe_nails, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :address, null: false
      t.json :amenities, null: false
      t.text :description, null: false

      t.timestamp
    end

    add_index :listings, :user_id
  end
end
