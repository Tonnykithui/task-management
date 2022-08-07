import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskThunk } from '../redux/task/post/Action';

const NewTask = () => {

  const group = useSelector(state => state.getGroup.data);
  const [value, setValue] = useState(new Date());
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [groupie, setGroup] = useState(group[0].group);
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const runFunc = (e) =>  {
    e.preventDefault()
    const taskObj = {
      value,
      task,
      time,
      groupie,
      completed
    }
    dispatch(addTaskThunk(taskObj))
  }

  return (
    <>
    <h2 className='text-center font-semibold text-2xl'>Task</h2>
    <form>
      <div>
        <h3 className='text-blue-600 text-md font-semibold'>
          Title
        </h3>
        <input type="text" name="" id="" className='task-input' onChange={(e) => setTask(e.target.value)}/>
      </div>
      <div className='flex flex-row mt-3 gap-2'>
        <div>
          <h3 className='text-blue-600 text-md font-semibold'>Due date</h3>
          <input type="date" name="" id="" className='task-input' onChange={(e) => setValue(e.target.value)}/>
        </div>
        <div>
          <h3 className='text-blue-600 text-md font-semibold'>Time(Minutes)</h3>
          <input type="text" name="" id="" className='task-input' onChange={(e) => setTime(e.target.value)}/>
        </div>
      </div>
      <div className='mt-3 mb-3'>
        <h3 className='text-blue-600 text-md font-semibold'>Group</h3>
        <select name="" id="" className='task-input' onChange={(e) => setGroup(e.target.value)}>
          {
            group.map((item) => (
              <option key={item.id} value={item.group}>{item.group}</option>
            ))
          }
        </select>
      </div>
      <div className='mt-4 float-right'>
        <button className='btn' onClick={runFunc}>Submit</button>
      </div>
    </form>
    </>
  )
}

export default NewTask