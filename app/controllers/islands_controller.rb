class IslandsController < ApplicationController
  before_action :set_island, only: [:show, :update, :destroy]

  # GET /islands.json
  def index
    @islands = Island.all
  end

  # GET /islands/1.json
  def show
  end

  # POST /islands.json
  def create
    @island = Island.new(island_params)

    respond_to do |format|
      if @island.save
        format.json { render :show, status: :created, location: @island }
      else
        format.json { render json: @island.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /islands/1.json
  def update
    respond_to do |format|
      if @island.update(island_params)
        format.json { render :show, status: :ok, location: @island }
      else
        format.json { render json: @island.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /islands/1.json
  def destroy
    @island.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_island
      @island = Island.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def island_params
      params.require(:island).permit(:name, :hosts, :fruits, :villagers, :directions_to_nook)
    end
end
