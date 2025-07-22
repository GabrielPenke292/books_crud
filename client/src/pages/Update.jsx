import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Update = () => {
  
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

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
    <div className='form'>
      <h1>Update the Book</h1>
      <input type="text" placeholder='Title' name='title' onChange={handleChange}/>
      <input type="text" placeholder='Description' name='description' onChange={handleChange}/>
      <input type="number" placeholder='Price' name='price' onChange={handleChange}/>
      <input type="text" placeholder='Cover' name='cover' onChange={handleChange}/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}   