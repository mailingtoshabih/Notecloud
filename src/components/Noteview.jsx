import { useState } from 'react'
import axios from 'axios'






export const Noteview = ({ heading, note }) => {


  const handleDelete = async () => {
    try {
      axios.post("http://localhost:3000/notes/delete", { heading });
    }
    catch (e) {
      console.log(e.message)
    }
  }




  return (

    <div className={` group
      p-3 mx-auto w-full border
      rounded-lg shadow-2xl shadow-blue-100
      hover:outline hover:outline-blue-100
      cursor-pointer`} >

      <div className=' flex justify-between text-md text-slate-500 font-bold'>
        <p>
          {heading && heading}
        </p>

        <div className='flex space-x-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="hidden w-6 h-6 text-green-600 group-hover:block rounded"
            onClick={() => navigator.clipboard.writeText(note)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="hidden w-6 h-6 text-red-600 group-hover:block"
            onClick={handleDelete}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>


      </div>

      <p className='text-sm mt-2 text-slate-500 font-medium'>
        {note && note}
      </p>

    </div>
  )
}
