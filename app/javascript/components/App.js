import axios from 'axios'
import React, {useState} from 'react'
import Books from './Books'

const App = (props) => {
    const [books, setBooks] = useState([])

		const getBooks = async () => {
            console.log("called")
            try{
			console.log('clicked, TODO: make this work') 
            let response = await axios.get('/books')
            setBooks(response.data)
            } catch(error) {
                console.log(error)
            }
        };

    return (
        <div>
            <h1>Book App</h1>
			<button onClick={getBooks}>Get Books from DB</button> 
			<Books books={books} />
		</div>
    );
 
}

export default App