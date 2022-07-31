import React, { useState } from 'react'

const NewSubtask = () => {
  const [subTask, setSubTask] = useState('');

  const runFunc = (e) => {
    e.preventDefault();

  }
  return (
    <>
    <form onSubmit={runFunc}>
        <h1 className='text-center font-semibold text-2xl'>Subtask</h1>
        <div className='flex flex-col p-2'>
            <input type="text" placeholder='Subtask...' className='input' onChange={(e) => setSubTask(e.target.value)}/>
            <button className='btn'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default NewSubtask