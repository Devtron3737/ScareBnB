class EditUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :fname, :string
    remove_column :users, :lname, :string
    remove_column :users, :about, :string
    remove_column :users, :hometown, :string

    add_column :users, :name, :string
  end
end
