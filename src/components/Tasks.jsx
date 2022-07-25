import React from 'react'
import Task from './Task'

const Tasks = () => {
    const tasks = [
        {
            id:2,
            info:'Visit clinic for some checkup',
            time:'2hr',
            date:'2022-03-04',
            completed:false
        },
        {
            id:28,
            info:'Go pick groceries from mkt',
            time:'3hr',
            date:'2022-03-05',
            completed:true
        },
        {
            id:25,
            info:'Exercise',
            time:'15min',
            date:'2022-02-06',
            completed:true
        },
        {
            id:22,
            info:'Take dog for walk',
            time:'3hr',
            date:'2022-04-07',
            completed:false
        },
        {
            id:284,
            info:'Go pick groceries from mkt',
            time:'3hr',
            date:'2022-03-05',
            completed:true
        },
        {
            id:253,
            info:'Exercise',
            time:'15min',
            date:'2022-02-06',
            completed:true
        },
        {
            id:232,
            info:'Take dog for walk',
            time:'3hr',
            date:'2022-04-07',
            completed:false
        }
    ]
  return (
    <div className='bg-white rounded-lg p-2 h-full mt-2 relative mr-3 w-full'>
        <ul className='overflow-y-scroll overflow-hidden absolute w-96 example p-2 h-full'>
            {
                tasks.map((task) => (
                    <Task key={task.id} info={task.info} time={task.time} completed={task.completed} date={task.date}/>
                ))
            }
        </ul>
    </div>
  )
}

export default Tasks