import React, { useEffect } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Tasks from './Tasks'
import { useDispatch } from 'react-redux';
import { getTaskThunk } from '../redux/task';

const TaskBody = () => {
  return (
    <div className='task-body'>
      <Section1 />
      <Section2 />
      <Tasks />
    </div>
  )
}

export default TaskBody