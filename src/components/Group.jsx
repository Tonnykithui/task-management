import React from 'react'

const Group = ({name, tasks, color}) => {
  return (
    <div className='rounded-md bg-white p-2 flex flex-row'>
        <div className={`w-2 rounded h-full`} style={{background:color}}>
        </div>
        <div className='ml-3'>
          <h2 className='font-semibold text-2xl'>{name}</h2>
          <p className='text-slate-500 font-semibold'>{tasks} tasks</p>
        </div>
    </div>
  )
}

export default Group