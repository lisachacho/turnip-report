require 'test_helper'

class StocksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stock = stocks(:one)
  end

  test "should get index" do
    get stocks_url
    assert_response :success
  end

  test "should create stock" do
    assert_difference('Stock.count') do
      post stocks_url, params: { stock: { description: @stock.description, entry_fee: @stock.entry_fee, expiration: @stock.expiration, language: @stock.language, polite_request: @stock.polite_request, references: @stock.references, turnip_price: @stock.turnip_price } }
    end

    assert_redirected_to stock_url(Stock.last)
  end

  test "should show stock" do
    get stock_url(@stock)
    assert_response :success
  end

  test "should update stock" do
    patch stock_url(@stock), params: { stock: { description: @stock.description, entry_fee: @stock.entry_fee, expiration: @stock.expiration, language: @stock.language, polite_request: @stock.polite_request, references: @stock.references, turnip_price: @stock.turnip_price } }
    assert_redirected_to stock_url(@stock)
  end

  test "should destroy stock" do
    assert_difference('Stock.count', -1) do
      delete stock_url(@stock)
    end

    assert_redirected_to stocks_url
  end
end
