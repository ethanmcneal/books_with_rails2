import React, {useState} from 'react'
import axios from 'axios'

const BookForm = (props) => {
	

	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')

	const {addBook, updateBook, id, setShowForm} =props

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(id){
		updateBook({title, author}, id)
		setShowForm(false)}
		else{
		const formObj = {title: title, author: author}
    let res = await axios.post('/books', formObj)
    addBook(res.data)
	setShowForm(false)}
		setTitle('')
		setAuthor('')
		
	}
	

	return(
		<>
			<form className='item-form' onSubmit={handleSubmit}>
			<h1>{id ? `Editing ${id}` : "Add Item"}</h1>
				<p>title</p>
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
				<p>author</p>
				<input value={author} onChange={(e) => setAuthor(e.target.value)} />
				<button type='submit'>{id ? 'edit' : 'Add'}</button>
				{setShowForm && <button type="button" onClick={() => setShowForm(false)}>cancel</button>}
			</form>
		</>
	)
}

export default BookForm