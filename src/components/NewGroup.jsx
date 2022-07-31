import React, { useState } from 'react'

const NewGroup = () => {

  const [group, setGroup] = useState('');

  const runFunc = (e) => {
    e.preventDefault();

  }

  return (
    <>
    <form onSubmit={runFunc}>
        <h1 className='text-center font-semibold text-2xl'>Group</h1>
        <div className='flex flex-col p-2'>
            <input type="text" placeholder='Group type...' className='input'/>
            <button className='btn'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default NewGroup