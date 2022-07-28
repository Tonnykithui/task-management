import React from 'react'

const Highlights = ({highlight}) => {
  return (
    <div className='rounded-lg bg-white p-3'>
        <h3 className='text-blue-700 font-semibold'>{highlight.group}</h3>
        <h1 className='font-bold text-xl'>{highlight.title}</h1>
        <div className='rounded bg-slate-200 text-red-700 font-semibold p-2'>
           <h3>{highlight.time}</h3>
        </div>
    </div>
  )
}

export default Highlights