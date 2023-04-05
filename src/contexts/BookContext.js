import React, {createContext, useReducer, useEffect} from "react";
import { bookReducer } from "../reducer/bookReducer";
// import {v1 as uuidv1} from 'uuid';

export const BookContext = createContext()



const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], ()=>{
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(()=>{
         localStorage.setItem("books", JSON.stringify(books))
    }, [books]);

    //we need one function for addingthe book and one for deleting the book

    // const addBook = (title, author) => {
    //     setBooks([...books, {title: title, author: author, id:uuidv1() } ] 
    //     )
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // }
  return (
    // <BookContext.Provider value = {{books, addBook, removeBook}}>
    <BookContext.Provider value = {{books,dispatch}}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider