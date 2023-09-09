import React from 'react'

export const Noteview = ({title, value}) => {
  return (

    <div className='border border-slate-300
      p-3 h-60 mx-auto 
      rounded-xl shadow-sm 
      hover:outline hover:outline-slate-400 
      cursor-pointer'>
        
        <p className='text-lg text-slate-700 font-semibold'>
            {title}
        </p>

        <p className='mt-2 text-slate-500 font-medium'>
            {value}
        </p>

    </div>
  )
}
