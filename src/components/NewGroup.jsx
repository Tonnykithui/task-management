import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addGroupThunk } from '../redux/group';

const NewGroup = () => {

  const [group, setGroup] = useState('');
  const colors = ['blue', 'red', 'green', 'pink']
  const dispatch = useDispatch();

  const runFunc = (e) => {
    e.preventDefault();
    const newGroup = {
      group,
      color:colors[Math.floor(Math.random() * 4)]
    }
    dispatch(addGroupThunk(newGroup));
  }

  return (
    <>
    <form>
        <h1 className='text-center font-semibold text-2xl'>Group</h1>
        <div className='flex flex-col p-2'>
            <input type="text" placeholder='Group type...' className='input' onChange={(e) => setGroup(e.target.value)}/>
            <button className='btn' onClick={runFunc}>Submit</button>
        </div>
    </form>
    </>
  )
}

export default NewGroup