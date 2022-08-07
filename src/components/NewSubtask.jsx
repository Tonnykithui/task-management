import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addSubTaskThunk } from '../redux/subtask';

const NewSubtask = () => {

  const [subTask, setSubTask] = useState('');
  const dispatch = useDispatch();

  const runFunc = (e) => {
    e.preventDefault();
    let data = {
      subTask
    }
    dispatch(addSubTaskThunk(data));
  }

  return (
    <>
    <form>
        <h1 className='text-center font-semibold text-2xl'>Subtask</h1>
        <div className='flex flex-col p-2'>
            <input type="text" placeholder='Subtask...' className='input' onChange={(e) => setSubTask(e.target.value)}/>
            <button className='btn' onClick={runFunc}>Submit</button>
        </div>
    </form>
    </>
  )
}

export default NewSubtask