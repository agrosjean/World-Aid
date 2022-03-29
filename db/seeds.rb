# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'httparty'
require "byebug"
require "json"

pp "Deleting old data..."
Project.destroy_all
Organization.destroy_all

pp "Fetching new data..."
response = HTTParty.get('https://api.globalgiving.org/api/public/projectservice/all/projects/active?api_key=9253c91a-5eab-4737-b9ce-85dfb4baef64', headers: { "Content-Type": "application/json", "Accept": "application/json" })


pp "Adding data to DB..."
projectsJSON = JSON.parse(response.body)
projectsArray = projectsJSON["projects"]["project"]
projectsArray.each do |project|
    pp "#{project['id']} #{project['title']}"
    
    # Add the project to database
    org = project['organization']

    new_org = Organization.find_or_create_by(
        id: org["id"],
        name: org["name"],
        url: org["url"]
    )

    Project.create(
        id: project["id"],
        title: project["title"],
        active: project["active"],
        summary: project["summary"],
        organization_id: new_org.id
    )
end
