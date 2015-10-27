class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :from_user, null: false
      t.integer :to_user, null: false
      t.text :content
      t.string :title
      t.boolean :read, default: false
    end
    add_index :messages, :from_user
    add_index :messages, :to_user
  end
end
