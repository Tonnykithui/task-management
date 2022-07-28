import React from 'react'
import { BiCircle } from "react-icons/bi";

const Subtask = ({subtask}) => {
  return (
    <li className='flex flex-row gap-1 items-center p-1 border-b-2 border-red-200'>
        <BiCircle />
        <h3>{subtask}</h3>
    </li>
  )
}

export default Subtask