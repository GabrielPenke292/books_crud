import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      }catch(error){
        console.error("Error fetching books:", error);
      }
    }
    
    fetchBooks(); 
  }, []); 

  const handleDelete = async(id)=>{
    try{
      await axios.delete(`http://localhost:3000/books/${id}`);
      setBooks(books.filter((book)=>book.id !== id));
    }catch(error){
      console.error("Error deleting book:", error);
    }
  }

  return (
    <div>
      <h1>Books</h1>
      <div className='books'>
      {books.map((book)=>(
        <div key={book.id} className='book'>
          {book.cover && <img src={book.cover} alt="" />} 
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>{book.price}</p>
          <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
          <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
        </div>
      ))}
      </div>
      <button><Link to="/add">Add New Book</Link></button>
    </div>
  )
}
