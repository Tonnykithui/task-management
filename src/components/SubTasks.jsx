import React from 'react'
import Subtask from './Subtask'

const SubTasks = () => {
    const subtasks = [
        {
            id:2,
            info:'Fix my bicycle'
        },
        {
            id:3,
            info:'Check up on the new Kids in the block'
        },
        {
            id:4,
            info:'Photography session'
        },
        {
            id:5,
            info:'Visit the old palace tavern'
        },
        {
            id:52,
            info:'Swimming'
        },
        {
            id:53,
            info:'Bike riding'
        }
    ]
  return (
    <div className='bg-white rounded-lg p-1'>
        <ul className='h-36 overflow-y-scroll example'>
            {
                subtasks.map((subtask) => (
                    <Subtask key={subtask.id} subtask={subtask.info}/>
                ))
            }
        </ul>
        <button className='btn'> + Add subtask</button>
    </div>
  )
}

export default SubTasks