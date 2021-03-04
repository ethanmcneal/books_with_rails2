import React, {useState} from 'react'
import Books from './Books'

const App = (props) => {
    const [books, setBooks] = useState([])

		const getBooks = () => {
			console.log('clicked, TODO: make this work') 

    return (
        <div>
            <h1>Book App</h1>
						<button onClick={getBooks()}>Get Books from DB</button>
					<Books items={items} />
				</div>
    );
}

export default App