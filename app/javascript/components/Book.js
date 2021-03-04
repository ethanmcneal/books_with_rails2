import React from 'react'

const Book = (props) => {
    const {title, author, id, deleteBook} = props

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
            {renderBook()}
        </div>
    )
}

export default Book