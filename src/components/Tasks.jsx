import React, { useEffect, useRef } from 'react'
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
    const taskRef = useRef();

    useEffect(() => {
      taskRef.current?.scrollIntoView();
    }, [tasks])

  return (
    <div className='bg-white rounded-lg relative col-span-2 tasks w-11/12 h-96'>
        <button className='btn absolute top-2 left-2 z-50' onClick={() => dispatch(showTaskMod())}>Add Task</button>
        <ul className='overflow-y-scroll overflow-hidden example p-4 absolute w-full h-full flex flex-col'>
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task}/>
                ))
            }
          <div ref={taskRef}></div>
        </ul>
    </div>
  )
}

export default Tasks