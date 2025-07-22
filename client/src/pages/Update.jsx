import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Update = () => {
  
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  // get book data
  useEffect(() => {
    const fetchBook = async()=>{
      try{
        const res = await axios.get(`http://localhost:3000/books/${bookId}`);
        setBook(res.data[0]); // Pegando o primeiro item do array retornado
      }catch(err){
        console.log(err);
      }
    }
    fetchBook();
  }, [bookId]);

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`http://localhost:3000/books/${bookId}`, book);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='App'>
      <div className='form'>
        <h1>Update the Book</h1>
        <input type="text" placeholder='Title' name='title' onChange={handleChange} value={book.title || ""}/>
        <input type="text" placeholder='Description' name='description' onChange={handleChange} value={book.description || ""}/>
        <input type="number" placeholder='Price' name='price' onChange={handleChange} value={book.price || ""}/>
        <input type="text" placeholder='Cover URL' name='cover' onChange={handleChange} value={book.cover || ""}/>
        <button onClick={handleClick} style={{
          border: 'none',
          padding: '12px 24px',
          background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
          color: 'white',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>Update Book</button>
      </div>
    </div>
  )
}   