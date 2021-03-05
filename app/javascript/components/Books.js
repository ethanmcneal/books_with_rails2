import React from 'react';
import Book from './Book'

const Books = (props) => {
    const {books, deleteBook, updateBook} = props

    const renderBooks = () =>{
        return books.map( book => <Book updateBook={updateBook} deleteBook={deleteBook} key={book.id}{...book}/>)
    }
    return (
      <div className='booksContainer'>
        <h1>Books</h1>
        {renderBooks()}
      </div>
    );

}

export default Books;