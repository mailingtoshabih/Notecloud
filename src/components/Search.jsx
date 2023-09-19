import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { search } from '../app/SearchSlice';





export const Search = () => {

    const handleSubmit = (e) => {
        e.preventdefault();
        // 
    }


    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.open.value);



    return (
        <div className={`${isOpen ? "hidden" : "block"} w-full `}>
            <form onSubmit={handleSubmit}>
                <>
                    <input type="text"
                        placeholder='Search Notes'
                        // onChange={(e) => dispatch(search(e.target.value))}
                        className='w-full p-2 px-4 h-10 lg:h-14
                            rounded-xl
                            text-zinc-500 lg:text-lg font-semibold
                            bg-blue-100 outline-none'
                    />
                </>
            </form>
        </div>
    )
}
