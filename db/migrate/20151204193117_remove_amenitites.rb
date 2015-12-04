class RemoveAmenitites < ActiveRecord::Migration
  def change
    remove_column :listings, :amenities
  end
end
