import { useState } from "react"

const ItemList = (props) => {

	// const {books} = props is the same as 
	// const books = props.books;

	return (
		<>
			{props.books.map((book, index) =>
				<div key={book.title + index}>
					<p>{book.title} by {book.author}</p>
				</div>
			)}
		</>
	)
}

export default ItemList