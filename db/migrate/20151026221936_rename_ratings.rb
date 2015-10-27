class RenameRatings < ActiveRecord::Migration
  def change
    rename_table :listings_ratings, :listing_ratings
    rename_table :users_ratings, :user_ratings
  end
end
