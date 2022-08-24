import React, { useEffect, useState } from 'react'
import Charting from './Charting'
import Highlights from './Highlights'
import SubTasks from './SubTasks'
import { useSelector } from 'react-redux';

const Section2 = () => {

  const [highlights, setHighlights] = useState([]);
  const tasks = useSelector(state => state.getTask.data);

  useEffect(() => {
    setHighlights(tasks.slice(0,2));
  }, [tasks]);

  return (
    <div className='flex flex-col p-3 gap-2 h-full'>
        <div className='grid grid-cols-2 gap-1'>
          {
            highlights.map((highlight) => (
              <Highlights key={highlight.id} highlight={highlight}/>
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