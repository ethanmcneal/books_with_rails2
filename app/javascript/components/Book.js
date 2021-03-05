import React, { useState } from 'react'
import BookForm from './BookForm'

const Book = (props) => {
    const {title, author, id, deleteBook, updateBook} = props
    
    
    const [showForm, setShowForm] = useState(false)
    const renderBook = () => {
        return (
        <div>
            <h2>Title:{title}</h2>
            <h3>Author:{author}</h3>
            
        </div>)
    }

    return (
        <div className='bookContainer'>
            <button onClick={()=> deleteBook(id)}>delete{id}</button>
            <button onClick={()=> setShowForm(true)}>edit</button>
            
            {!showForm && renderBook()}
            {showForm && <BookForm title={title} author={author} id={id} setShowForm={setShowForm} updateBook={updateBook} />}
        </div>
    )
}

export default Book