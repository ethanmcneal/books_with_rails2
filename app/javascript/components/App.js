import axios from 'axios'
import React, {useState} from 'react'
import Books from './Books'
import BookForm from './BookForm'

const App = (props) => {
    const [books, setBook] = useState([])

		const addBook = (book) => {
			setBook([...books,book])
		}

		const getBooks = async () => {
            console.log("called")
            try{
			console.log('clicked, TODO: make this work') 
            let response = await axios.get('/books')
            setBook(response.data)
            } catch(error) {
                console.log(error)
            }
        };
        const deleteBook = async(id) => {
            console.log('delete clicked,', id)
            try {
                await axios.delete(`/books/${id}`)
                let filterBooks = books.filter( book => book.id !== id)
                setBook(filterBooks)
            }
						catch(error){
                console.log(error)
            }
            }

						const updateBook = async (bookObj, id) => {
							try{
								let response = await axios.put(`/books/${id}`, bookObj)
								let updateBooks = books.map(book => book.id !== id ? book : response.data)
								setBooks(updateBooks)
							}

							catch(error){
                console.log(error)
							}
						}
        

    return (
      <div>
        <h1>Book App</h1>
				<BookForm addBook={addBook}/>
				<button onClick={getBooks}>Get Books from DB</button> 
				<Books books={books} deleteBook={deleteBook} />
			</div>
    );
 
}

export default App