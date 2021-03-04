class BooksController < ApplicationController

    def app
        render component: "App"
    end

		def index
			@books = Book.all
			render json: @books
		 
		end

		def create
			book = Book.new(book_params)
			if book.save
				render json:book
			else
				render json: {error: unable_to_create, message: @book.errors.full_messages}
			end
		
		end

end

private

def book_params
params.require(:book).permit(:title, :author)
end
