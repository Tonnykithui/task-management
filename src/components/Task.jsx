import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteTaskThunk } from '../redux/task';


const Task = ({task}) => {

  const dispatch = useDispatch();
  
  return (
    <div className={task.completed ? `border-l-4 border-red-600 task`:`border-l-4 border-blue-600 task`}>
        <div>
            <h4>{task.groupie}</h4>
            <h2 className='font-semibold text-lg'>{task.task}</h2>
            <h3>{task.value}</h3>
            <p className='text-blue-500 font-semibold'>{task.time} minutes</p>
        </div>
        <div className='p-1'>
            <AiOutlineDelete className='text-red-700 mb-2' onClick={() => dispatch(deleteTaskThunk(task.id))}/>
            <FaEdit className='text-blue-700'/>
        </div>
        <span className='extension'></span>
    </div>
  )
}

export default Task