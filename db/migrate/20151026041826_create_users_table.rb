class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname
      t.string :email
      t.text :about
      t.string :hometown

      t.timestamp
    end
  end
end
