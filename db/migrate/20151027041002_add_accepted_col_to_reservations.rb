class AddAcceptedColToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :status, :string, default: "needs action"
  end
end
