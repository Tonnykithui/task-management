import React, { useState } from 'react';
import Calendar from 'react-calendar';

const NewTask = () => {

  const [value, onChange] = useState(new Date());
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  const runFunc = (e) =>  {
    e.preventDefault()
    const objectOne = {
      value,
      task,
      time
    }

    console.log(objectOne);
  }
  return (
    <>
    <form className='p-3' onSubmit={runFunc}>
        <div className='grid grid-cols-3 gap-1'>
        <div className='col-span-2'>
            <input type="text" name="" id="" placeholder='Task' 
            className='task-input' onChange={(e) => setTask(e.target.value)}
        />
        </div>
        <div className='col-span-1'>
          <input type="text" name="" id="" placeholder='Time to accomplish' 
          className='task-input' onChange={(e) => setTime(e.target.value)}
        />
        </div>

        </div>
        <div className='p-4 mt-4'>
            <Calendar onChange={onChange} value={value} />
        </div>
        <div>
          <button className='btn'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default NewTask