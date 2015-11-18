class DeleteListingCityStateColumns < ActiveRecord::Migration
  def change
    remove_column :listings, :city, :string
    remove_column :listings, :state, :string
  end
end
