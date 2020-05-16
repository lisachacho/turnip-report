class CreateIslands < ActiveRecord::Migration[6.0]
  def change
    create_table :islands do |t|
      t.string :name
      t.string :hosts
      t.text :directions_to_nook

      t.timestamps
    end

    add_reference :users, :islands, foreign_key: true
  end
end
