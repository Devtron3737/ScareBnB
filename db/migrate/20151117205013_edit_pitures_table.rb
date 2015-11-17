class EditPituresTable < ActiveRecord::Migration
  def change
    remove_column :pictures, :image_file_name, :string
    remove_column :pictures, :image_content_type, :string
    remove_column :pictures, :image_file_size, :integer
    remove_column :pictures, :image_updated_at, :datetime
    add_column :pictures, :url, :string
  end
end
