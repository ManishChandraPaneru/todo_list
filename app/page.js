"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHander = (e) => {
    e.preventDefault()//For stopping default action of form.
    setmainTask([...mainTask, { title, desc }])
    console.log(title)
    console.log(desc)
    setdesc("")
    settitle("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='list-none flex flex-col md:flex-row justify-around items-center mb-4 border-2 border-black rounded w-full md:w-[90%]'>
          <div className="container flex flex-col md:flex-row justify-between p-3 w-full">
            <div className='flex flex-col md:flex-row justify-between w-full md:w-2/4'>
              <h5 className='text-2xl font-semibold break-words'>{t.title}</h5>
              <h6 className='text-xl font-semibold break-words'>{t.desc}</h6>
            </div>
            <button onClick={() => deleteHandler(i)}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
              </svg>
            </button>
          </div>
        </li>
      );
    })
  }

  return (
    <>
      <div className="flex flex-col items-center content-center">
        <h1 className='bg-black text-white p-5 text-2xl font-bold text-center w-full'>Manish's TodoList</h1>
        <form onSubmit={submitHander} className='flex flex-col mb-4 w-full items-center'>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 w-[90%] md:w-auto'
            placeholder='Enter task here'
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 w-[90%] md:w-auto'
            placeholder='Enter description here'
          />
          <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
        </form>
        <ul className='w-full flex flex-col items-center'>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page