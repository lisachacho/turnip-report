json.extract!(island, :id, :name, :hosts, :directions_to_nook, :created_at, :updated_at)
json.url(island_url(island, format: :json))
