import React, {useContext} from "react"
import { BookContext } from "../contexts/BookContext"
import BookDetails from "../components/BookDetails"

const BookList = () => {

    const {books} = useContext(BookContext)
    // if books has length I will cycle through it
  return books.length ? (
    <div className="book-list">
        <ul>
            {books.map(book => {
                return ( <BookDetails book ={book} key = {book.id}/>)
            })}
        </ul>
    </div>
  ) : (
     <div className="empty"> No books to Reade. Hello free time </div>
     )
}

export default BookList