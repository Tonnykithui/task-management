import React, { useEffect } from 'react'
import Group from './Group';
import { useDispatch } from 'react-redux';
import { showGroupMod } from '../redux/modal/Action';
import { useSelector } from 'react-redux';
import { getGroupThunk } from '../redux/group';

const Section1 = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGroupThunk())
    },[])

    const tasks = useSelector(state => state.getGroup.data)
    
  return (
    <div className='flex flex-col gap-2 p-3'>
        {
            tasks.map((task) => (
                <Group key={task.id} task={task} />
            ))
        }
        <div>
            <button className='btn w-full text-lg font-semibold' onClick={() => dispatch(showGroupMod())}>
                + Create New Group
            </button>
        </div>
    </div>
  )
}

export default Section1