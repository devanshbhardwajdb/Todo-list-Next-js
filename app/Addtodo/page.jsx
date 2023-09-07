"use client"
import React, { useState } from 'react'
import Form from '@components/Form'
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Addtodo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted")
    toast.success('Your Todo was Added!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    try {
      const response = await fetch("/api/addtodo", {
        method: "POST",
        body: JSON.stringify({
          title: formData.title,
          description: formData.description

        }),
      });

      if (response.ok) {
        setFormData({ title: "", description: "" });
        router.push("/");
      }
      else {
        console.error("Server returned an error:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
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
    </>
  )
}


export default Addtodo;
