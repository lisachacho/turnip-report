json.extract!(stock, :id, :turnip_price, :expiration, :entry_fee, :polite_request,
  :description, :language, :references, :created_at, :updated_at)
json.url(stock_url(stock, format: :json))
