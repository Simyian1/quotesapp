class Api::V1::QuotesController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: Quote.order(created_at: :desc).all }
    end
  end
  def destroy
    quote = Quote.find(params[:id])
    quote.destroy
    # Send a response or broadcast a message to update the front-end
  end
end