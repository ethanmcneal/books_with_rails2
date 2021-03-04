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

    return (
      <div>
        <h1>Book App</h1>
				<BookForm addBook={addBook}/>
				<button onClick={getBooks}>Get Books from DB</button> 
				<Books books={books} />
			</div>
    );
 
}

export default App