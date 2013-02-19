class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :from
      t.string :email
      t.string :company
      t.string :phone
      t.text :content

      t.timestamps
    end
  end
end
