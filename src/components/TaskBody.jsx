import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Tasks from './Tasks'

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