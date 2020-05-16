class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :turnip_price
      t.datetime :expiration
      t.text :entry_fee
      t.text :polite_request
      t.text :description
      t.string :language
      t.references :island

      t.timestamps
    end
  end
end
