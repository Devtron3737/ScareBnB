class CreateReservationsTable < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :listing_id, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false
      t.integer :user_id, null: false

    end
    add_index :reservations, :listing_id
    add_index :reservations, :user_id
  end
end
