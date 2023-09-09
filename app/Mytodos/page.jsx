"use client"
import Emailform from '@components/Emailform';
import Todoitem from '@components/Todoitem';
import React from 'react';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Mytodos = () => {
  
  const [todos, setTodos] = useState([]);
  const [emailData, setemailData] = useState({ email: "" });



  const showTodos = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/showtodos", {
        method: "GET"
      });

      if (response.ok) {
        const todosData = await response.json();
        setTodos(todosData);
        setTodos(prevTodos => prevTodos.filter(todo => todo.email === emailData.email));
        setemailData({email:""})
        
     
      }
      else {
        console.error("Server returned an error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }

  };
 
  const handleDelete = async (e) => {



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


      } catch (error) {
        console.log("Yahan error hai bhai", error);
      }
    }

  }


  return (
    <div className='font-livvic px-[8vw] py-10 '>
      <Emailform showTodos={showTodos} emailData={emailData} setemailData={setemailData} />
     
        <h1 className='font-bold text-2xl mb-10' id="todoitems">Todos</h1>
        <Todoitem todos={todos} handleDelete={handleDelete} />
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      
    </div>
  )
}

export default Mytodos
