import React from 'react'
import Charting from './Charting'
import Highlights from './Highlights'
import SubTasks from './SubTasks'

const Section2 = () => {
  return (
    <div className='flex flex-col p-3 gap-2'>
        <div className='grid grid-cols-2 gap-1'>
            <Highlights />
            <Highlights />
        </div>
        <div className='h-52 w-full'>
          <Charting />
        </div>
        <div>
          <SubTasks />
        </div>
    </div>
  )
}

export default Section2