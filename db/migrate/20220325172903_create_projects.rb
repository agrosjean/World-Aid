class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.integer :organization_id
      t.string :summary
      t.boolean :active

      t.timestamps
    end
  end
end
