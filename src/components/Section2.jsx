import React from 'react'
import Charting from './Charting'
import Highlights from './Highlights'
import SubTasks from './SubTasks'

const Section2 = () => {
  const highlights = [
    {
      id:1,
      group:'Meeting',
      title:"Maldives things",
      time:'02-03-2022'
    },
    {
      id:2,
      group:'General',
      title:"Friday gaming club",
      time:'04-03-2022'
    }
  ]
  return (
    <div className='flex flex-col p-3 gap-2'>
        <div className='grid grid-cols-2 gap-1'>
          {
            highlights.map((highlight) => (
              <Highlights highlight={highlight}/>
            ))
          }
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