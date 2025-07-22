import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Add = () => {
  
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/books", book);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type="text" placeholder='Title' name='title' onChange={handleChange}/>
      <input type="text" placeholder='Description' name='description' onChange={handleChange}/>
      <input type="number" placeholder='Price' name='price' onChange={handleChange}/>
      <input type="text" placeholder='Cover' name='cover' onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}   