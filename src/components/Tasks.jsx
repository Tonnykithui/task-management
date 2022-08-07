import React, { useEffect } from 'react'
import { showTaskMod } from '../redux/modal/Action'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getTaskThunk } from '../redux/task/get/Action';

const Tasks = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTaskThunk())
    }, []);
    const tasks = useSelector(state => state.getTask.data)
    
  return (
    <div className='bg-white rounded-lg m-2 relative col-span-2 tasks w-11/12'>
        <button className='btn absolute top-2 left-2 z-50' onClick={() => dispatch(showTaskMod())}>Add Task</button>
        <ul className='overflow-y-scroll overflow-hidden example p-4 absolute h-full w-full flex flex-col'>
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task}/>
                ))
            }
        </ul>
    </div>
  )
}

export default Tasks