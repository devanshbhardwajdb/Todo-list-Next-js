"use client"

import Editform from '@components/Editform';
import { useEffect,useState } from 'react';
import { useRouter } from "next/navigation";


const Edittodo = ({params}) => {
  const [todo, setTodo] = useState({});
  const router = useRouter();
  // const [formData, setFormData] = useState({ title: "", description: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    try {
      const response = await fetch(`/api/updatetodo/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: todo.title,
          description: todo.description
         
        }),
      });

      if (response.ok) {
        console.log("form updated")
        // setFormData({ title: "", description: "" });
        router.push("/Mytodos");
      }
      else {
        console.error("Server returned an error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    } 
    
  };

  useEffect(() => {
    const showTodo = async ({params}) => {
      try {
        

        const response = await fetch(`/api/showtodos/${params?.id}`, {
          method: "GET"
        });

        if (response.ok) {
          
          const todo = await response.json();
          
          setTodo(todo);
        } else {
          console.error("Server returned an error:", response.status, response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    if (params?.id) showTodo({params});
  }, [params?.id]);

  
  
  
  return (
    <div className='font-livvic px-[8vw] py-10 '>
    {/* <h1 className='font-bold text-2xl mb-10'>Todos</h1> */}
    <Editform todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
    
  </div>
  )
}

export default Edittodo

