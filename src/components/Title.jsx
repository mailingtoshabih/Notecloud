import React from 'react'

export const Title = ({ title }) => {
  return (
    <div className=' cursor-pointer'>
      
      
  
      <div className='px-1 py-1 flex space-x-2 
        text-md text-slate-500 
        hover:text-white hover:bg-blue-500 
        rounded-md'>

        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-5 h-5 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </>



        <p className='text-sm font-semibold'>
          {title && title}
        </p>

      </div>



    </div>
  )
}
