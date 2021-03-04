import React from 'react'

const Book = (props) => {
    const {title, author, id} = props

    const renderBook = () => {
        return (
        <div>
            <h1>Title:{title}</h1>
            <h2>Author:{author}</h2>
        </div>)
    }

    return (
        <div>
            
            {renderBook()}
        </div>
    )
}

export default Book