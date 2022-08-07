import React from 'react'

const Highlights = ({highlight}) => {
  return (
    <div className='rounded-lg bg-white p-3'>
        <h3 className='text-blue-700 font-semibold text-lg'>{highlight.task}</h3>
        <h1 className='font-bold text-md'>{highlight.time} minutes</h1>
        <div className='rounded bg-slate-200 text-red-700 font-semibold p-2'>
           <h3>{highlight.value}</h3>
        </div>
    </div>
  )
}

export default Highlights