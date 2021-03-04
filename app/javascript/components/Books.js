import React from 'react';
import Book from './Book'

const Books = (props) => {
    const {books} = props

    const renderBook = () =>{
        return books.map( book => <Book {...book}/>)
    }
    return (
      <div className='booksContainer'>
        <h1>Books</h1>
        {renderBook()}
      </div>
    );

}

export default Books;