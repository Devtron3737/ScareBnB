class UsersConstraints < ActiveRecord::Migration
  def change
    change_column :users, :fname, :string, null: false

  end
end
