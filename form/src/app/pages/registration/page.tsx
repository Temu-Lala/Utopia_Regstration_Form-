'use client'

import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Alert from '@/app/pages/alert/page'
export default function register() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] =  useState('');
  const [username, setUsername] =  useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] =  useState('');
  const [addres, setAddres] =  useState('');
  const [skill, setSkill] = useState('');

 
  const handleSubmit = async (e: { preventDefault: () => void; })=>
  {
    e.preventDefault();
    
  
    if (name.length === 0 || username.length === 0 || message.length === 0 || number.length === 0 || addres.length === 0) {
      alert("Please fill in all required fields");
      return;
    }


try 
{
  const data = {
    name: name,
    username: username,
    message: message,
    number: number,
    addres: addres,
    skill: skill, // Add this line if 'skill' is a required field
  };
  const response = await axios.post(' http://127.0.0.1:8000/register/',data)
  {
   if(response.status === 201)
   {
<Alert/>
   alert(" You Have Registerd Seccsesfully: ")
   }
   else
   {
    alert( " Registration Faild : ")
   }


  }


} catch(error)
{
  console.log(error)
}


setName("")
setUsername("")
setMessage("")
setNumber("")
setAddres("")
setSkill("")

  }

  
  return (
    <div className="container w-screen h-screen my-24 mx-auto md:px-6 ">
      
  <section className="mb-32 text-center">
    <div className="mx-auto max-w-[700px] md:px-3 border rounded-xl ">
    
      <h2 className="mb-12 text-3xl font-bold underline">  Register Form  </h2> 
      <form method='POST' onSubmit={handleSubmit}   >
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
          
            type="text"
            name='fullname'
            value={name}
            className='w-full text-center h-12 border rounded-xl' 
           
            placeholder="Full Name" onChange={(event)=>setName(event.target.value)} />
          
        </div>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            type="text"
            name='username'
            value={username}
            className='w-full h-12 text-center border rounded-xl' 
           
            placeholder="Telegram UserName" onChange={(event)=>setUsername(event.target.value)}  />
         
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="number"
            name='number'
            value={number}
            className='w-full text-center h-12 border rounded-xl' 
           
            placeholder="Phone Number"  onChange={(event)=>setNumber(event.target.value)} />
         
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            name='addres'
            value={addres}
            className='w-full text-center h-12 border rounded-xl' 
           
            placeholder="Addres" onChange={(event)=>setAddres(event.target.value)}  />
          
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            name='skill'
            value={skill}
            className='w-full text-center h-12 border rounded-xl' 

            placeholder="Email address" onChange={(event)=>setSkill(event.target.value)}  />
          
        </div>
        <div className="relative mb-6" >
          <textarea 
          name='message'
          value={message}
                     className='w-full h-24 border  text-center rounded-xl' 

                     onChange={(event)=>setMessage(event.target.value)} 
            rows={4}
            placeholder="Your message"></textarea>
         
        </div>
      
        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
          className=" border rounded-lg hover:border-b-8 hover:border-b-white mb-6 inline-block w-full  bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          Send
        </button>
      </form> 
    </div>
  </section>
 
</div>
  )
}
