import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteGroupThunk, updateGroupThunk } from '../redux/group';

const Group = ({task}) => {

  const dispatch = useDispatch()
  
  return (
    <div className='rounded-md bg-white p-2 flex flex-row relative'>
        <div className={`w-2 rounded h-full`} style={{background:task.color}}>
        </div>
        <div className='ml-3'>
          <h2 className='font-semibold text-xl'>{task.group}</h2>
          {/* <p className='text-slate-500 font-semibold'>{tasks} tasks</p> */}
        </div>
        <div className='absolute top-2 right-2 flex flex-row gap-1'>
          <FaEdit className='text-blue-500' onClick={() => dispatch(updateGroupThunk(task))}/>
          <AiOutlineDelete className='text-red-600' onClick={() => dispatch(deleteGroupThunk(task.id))}/>
        </div>
    </div>
  )
}

export default Group