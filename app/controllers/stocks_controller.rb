class StocksController < ApplicationController
  before_action :set_stock, only: [:show, :update, :destroy]

  # GET /stocks.json
  def index
    @stocks = Stock.all
  end

  # GET /stocks/1.json
  def show
  end

  # POST /stocks.json
  def create
    @stock = Stock.new(stock_params)

    respond_to do |format|
      if @stock.save
        format.json { render :show, status: :created, location: @stock }
      else
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stocks/1.json
  def update
    respond_to do |format|
      if @stock.update(stock_params)
        format.json { render :show, status: :ok, location: @stock }
      else
        format.json { render json: @stock.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stocks/1.json
  def destroy
    @stock.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_stock
    @stock = Stock.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def stock_params
    params.require(:stock).permit(
      :turnip_price,
      :expiration,
      :entry_fee,
      :polite_request,
      :description,
      :language,
      :references
    )
  end
end
