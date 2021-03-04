class BooksController < ApplicationController

    def App
        render component: "App"
    end

		def index
			@books = Book
			
			render json: @books
		 
		end

end
