class RenamePwdDigest < ActiveRecord::Migration
  def change
    rename_column :users, :pwd_digest, :password_digest
    add_column :users, :password, :string
  end
end
