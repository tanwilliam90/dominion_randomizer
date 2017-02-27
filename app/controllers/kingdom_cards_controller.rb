class KingdomCardsController < ApplicationController
  before_action :set_kingdom_card, only: [:show, :edit, :update, :destroy]

  # GET /kingdom_cards
  # GET /kingdom_cards.json
  def index
    @kingdom_cards = KingdomCard.all
  end

  # GET /kingdom_cards/1
  # GET /kingdom_cards/1.json
  def show
  end

  # GET /kingdom_cards/new
  def new
    @kingdom_card = KingdomCard.new
  end

  # GET /kingdom_cards/1/edit
  def edit
  end

  # POST /kingdom_cards
  # POST /kingdom_cards.json
  def create
    @kingdom_card = KingdomCard.new(kingdom_card_params)

    respond_to do |format|
      if @kingdom_card.save
        format.html { redirect_to new_kingdom_card_path, notice: 'Kingdom card was successfully created.' }
        format.json { render :show, status: :created, location: @kingdom_card }
      else
        format.html { render :new }
        format.json { render json: @kingdom_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /kingdom_cards/1
  # PATCH/PUT /kingdom_cards/1.json
  def update
    respond_to do |format|
      if @kingdom_card.update(kingdom_card_params)
        format.html { redirect_to @kingdom_card, notice: 'Kingdom card was successfully updated.' }
        format.json { render :show, status: :ok, location: @kingdom_card }
      else
        format.html { render :edit }
        format.json { render json: @kingdom_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kingdom_cards/1
  # DELETE /kingdom_cards/1.json
  def destroy
    @kingdom_card.destroy
    respond_to do |format|
      format.html { redirect_to kingdom_cards_url, notice: 'Kingdom card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def play
    @kingdom_cards = KingdomCard.limit(10).order("RANDOM()")
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kingdom_card
      @kingdom_card = KingdomCard.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def kingdom_card_params
      params.require(:kingdom_card).permit(:name, :set, :card_type, :sub_type, :cost)
    end
end
