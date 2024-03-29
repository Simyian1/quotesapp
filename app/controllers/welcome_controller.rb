class WelcomeController < ApplicationController
    include CableReady::Broadcaster
    
    def index
        @quotes = Quote.all
        @quote = Quote.new
       end
       
  
       def create_quote 
        quote = Quote.create(quote_params)
        cable_ready['hello_quotes'].insert_adjacent_html(
          selector: '#quotes_list',
          position: 'afterBegin',
          html: render_to_string(partial: 'quote', locals: {quote: quote})
        )
        cable_ready.broadcast
        redirect_to root_path
      end
       
    private 
  
    def quote_params
      params.require(:quote).permit(:content, :author_name)
    end  
  end