"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("") 
  const submitHander=(e)=>{
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setdesc("")
    settitle("")
  }
  return (
    <>
      <div className=" flex flex-col items-center content-center">
        <h1 className='bg-black text-white p-5 text-2xl font-bold text-center w-full'>Manish's TodoList</h1>
        <form onSubmit={submitHander}>
          <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter task here' />
          <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} name="" id="" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter description here' />
          <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
        </form>
      </div>
    </>
  )
}

export default page

//My definition-Two Way Binding: As we can see that we are making changes in variables like title and desc which are being redirected to input tag. So we can say that it binds react variables to input tag or frontend to the user and vice versa which can be seen as binding two things so it is known as two way binding.
//Co-pilot's definition-In React, two-way binding refers to the process where changes in the UI (input fields) are reflected in the state variables, and changes in the state variables are reflected in the UI. This is achieved using the value attribute and the onChange event handler.