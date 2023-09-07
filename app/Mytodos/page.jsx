"use client"
import Todoitem from '@components/Todoitem';
import React from 'react'
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Mytodos = () => {
  const [todos, setTodos] = useState([]);
  

  const showTodos = async (e) => {

    // console.log("showing the todos")

    try {
      const response = await fetch("/api/showtodos", {
        method: "GET"
      });

      if (response.ok) {
        const todosData = await response.json();
        setTodos(todosData);

      }
      else {
        console.error("Server returned an error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }

  };

  const handleDelete = async (e) => {
    
    e.preventDefault(); 

    const hasConfirmed = confirm(
      "Are you sure you want to delete this Todo?"
    );
    const todoId = e.target.id.value;
    if (hasConfirmed) {
      try {
        await fetch(`/api/deletetodo/${todoId}`, {
          method: "DELETE",
        });
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId));

        // const filteredTodos = todos.filter((item) => item.id !== todos._id);

        // setTodos(filteredTodos);
      } catch (error) {
        console.log("Yahan error hai bhai",error);
      }
    }

  }
  useEffect(() => {


    showTodos();
  }, []);


  return (
    <div className='font-livvic px-[8vw] py-10 '>
      <h1 className='font-bold text-2xl mb-10'>Todos</h1>
      <Todoitem todos={todos} handleDelete={handleDelete} />
    </div>
  )
}

export default Mytodos
