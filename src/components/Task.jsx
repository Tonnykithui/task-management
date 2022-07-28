import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const Task = ({info,time,completed,date}) => {
  return (
    <div className={completed ? `border-l-4 border-red-600 task`:`border-l-4 border-blue-600 task`}>
        <div>
            <h2 className='font-semibold text-xl'>{info}</h2>
            <h3>{date}</h3>
            <p className='text-blue-500 font-semibold'>{time}</p>
        </div>
        <div className='p-1'>
            <AiOutlineDelete className='text-red-700 mb-2'/>
            <FaEdit className='text-blue-700'/>
        </div>
        <span className='extension'></span>
    </div>
  )
}

export default Task