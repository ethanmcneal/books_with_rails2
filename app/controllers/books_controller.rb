class BooksController < ApplicationController

    def app
        render component: "App"
    end

		def index
			@books = Book.all
			render json: @books
		 
		end

end
