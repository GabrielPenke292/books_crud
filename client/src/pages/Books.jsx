import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/books");
        // setBooks(res.data);
        console.log(res.data);
      }catch(error){
        console.error("Error fetching books:", error);
      }
    }
    
    fetchBooks(); 
  }, []); 

  return (
    <div>Books</div>
  )
}
