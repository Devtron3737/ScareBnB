class AddUsernameAndPassworDigest < ActiveRecord::Migration
  def change
    rename_column :users, :password, :pwd_digest
    rename_column :users, :name, :username
  end
end
