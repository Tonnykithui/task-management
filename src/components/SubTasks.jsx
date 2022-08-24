import React, { useEffect, useRef } from 'react'
import Subtask from './Subtask'
import { useDispatch, useSelector } from 'react-redux'
import { showSubtaskMod } from '../redux/modal/Action'
import { getSubTaskThunk } from '../redux/subtask'

const SubTasks = () => {

    const subtasks = useSelector(state => state.getSubtask.data);
    const dispatch = useDispatch();
    const messageRef = useRef();

    useEffect(() => {
        dispatch(getSubTaskThunk());
    }, []);

    useEffect(() => {
        messageRef.current?.scrollIntoView()
    }, [subtasks])

  return (
    <div className='bg-white rounded-lg p-1'>
        <ul className='h-40 overflow-y-scroll example'>
            {
                subtasks.map((subtask) => (
                    <>
                    <Subtask key={subtask.id} subtask={subtask.subTask}/>
                    <div ref={messageRef}></div>
                    </>
                ))
            }
        </ul>
        <button className='btn' onClick={() => dispatch(showSubtaskMod())}> + Add subtask</button>
    </div>
  )
}

export default SubTasks