import React, { useEffect, useState } from 'react'
import Charting from './Charting'
import Highlights from './Highlights'
import SubTasks from './SubTasks'
import { useSelector } from 'react-redux';

const Section2 = () => {

  const [highlights, setHighlights] = useState([]);
  const tasks = useSelector(state => state.getTask.data);
  // console.log(tasks.slice(0,2));
  // setHighlights(tasks.slice(0,1));
  // let newTask = [];
  // setInterval(() => {
  //   const shuffled = tasks.sort(() => 0.5 - Math.random());
  //   newTask = shuffled.slice(0, 1);
  //   setHighlights(newTask);
  // }, 10000);

  // console.log(newTask);

  useEffect(() => {
    setHighlights(tasks.slice(0,2));
  }, []);

  return (
    <div className='flex flex-col p-3 gap-2'>
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