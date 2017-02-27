class CreateKingdomCards < ActiveRecord::Migration[5.0]
  def change
    create_table :kingdom_cards do |t|
      t.string :name
      t.string :set
      t.string :card_type
      t.string :sub_type
      t.integer :cost

      t.timestamps
    end
  end
end
