import React from 'react'
import Group from './Group';
import { useDispatch } from 'react-redux';
import { showGroupMod } from '../redux/modal/Action';
import { useSelector } from 'react-redux';

const Section1 = () => {
    const tasks = [
        {
            id:2,
            name:'Meeting',
            number:3,
            color:"red"
        },
        {
            id:23,
            name:'Trip',
            number:7,
            color:"blue"
        },
        {
            id:24,
            name:'General',
            number:30,
            color:"green"
        },
        {
            id:245,
            name:'Break',
            number:30,
            color:"pink"
        }
    ];

    // const tasks = useSelector(state => state.groupReducer.data)
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-2 p-3'>
        {
            tasks.map((task) => (
                <Group key={task.id} name={task.name} tasks={task.number} color={task.color}/>
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