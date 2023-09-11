import { useState } from 'react'


export const Noteview = ({ heading, note }) => {




 

  return (

    <div className={`
      p-3 mx-auto w-full border
      rounded-lg shadow-2xl shadow-blue-100
      hover:outline hover:outline-blue-100
      cursor-pointer`} >

      <p className='text-md text-slate-500 font-bold'>
        {heading && heading}
      </p>

      <p className='text-sm mt-2 text-slate-500 font-medium'>
        {note && note}
      </p>

    </div>
  )
}
