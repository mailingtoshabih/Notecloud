import { useState } from 'react'
import { Title } from './Title'

import { useDispatch, useSelector } from "react-redux";
import { open } from '../app/NewNoteSlice';



const allNotes = ['Note A', 'Note Ar', 'Note Avr', 'Note Argrgg', 'Note Apooy', 'Note Aznc', 'Note Awewwe', 'Note A', 'Note Ar', 'Note Avr', 'Note Argrgg', 'Note Apooy', 'Note Aznc', 'Note Awewwe']









export const Sidebar = () => {

    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.open.value);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(open());
    }



    return (
        <div className='px-4 w-48 h-screen shrink-0
            bg-slate-200'>


            <div className='mt-5 px-1 w-full h-10 flex space-x-2'>
                <p className='w-3 h-3 bg-red-500 rounded-full'></p>
                <p className='w-3 h-3 bg-yellow-400 rounded-full'></p>
                <p className='w-3 h-3 bg-green-500 rounded-full'></p>
            </div>


            <div>
                <p className='mb-2 px-1 text-sm font-semibold text-slate-400'>
                    Cloud Notes
                </p>



                <button
                    onClick={handleClick}
                    className='mb-3 p-1 px-3 rounded-lg 
                        text-sm text-gray-600 font-semibold bg-yellow-400
                        hover:bg-yellow-300'>

                    New Note
                </button>

                <div className='flex justify-between'>

                    <button
                        onClick={handleClick}
                        className='mb-3 p-1 px-3 rounded-lg 
                        text-sm text-gray-600 font-semibold bg-green-500
                        hover:bg-green-400'>

                        Save Note
                    </button>

                    <button
                        onClick={handleClick}
                        className='mb-3 p-1 px-2 rounded-lg 
                        text-sm text-white font-semibold bg-red-500
                        hover:bg-red-600'>

                        Cancel
                    </button>

                </div>










                {
                    allNotes.map((note) => (
                        <div>
                            <Title title={note} />
                        </div>
                    ))
                }


            </div>

        </div>
    )
}
