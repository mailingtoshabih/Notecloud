import { useEffect, useState } from 'react'
import { Noteview } from './Noteview'
import { Search } from './Search'
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux'
import { newnote, newheading } from "../app/SaveSlice"


const allNotes = ['Note A', 'Note Ar', 'Note Avr', 'Note Argrgg', 'Note Apooy', 'Note Aznc', 'Note Awewwe', 'Note A', 'Note Ar', 'Note Avr', 'Note Argrgg', 'Note Apooy', 'Note Aznc', 'Note Awewwe']
const value = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sint sit perferendis nostrum neque, quasi ullam consectetur inventore obcaecati alias."

const back = import.meta.env.VITE_BACK;


export const Allnotes = () => {


    const isOpen = useSelector((state) => state.open.value);
    const searchTerm = useSelector((state) => state.search.value);
    const dispatch = useDispatch();

    const [notes, setNotes] = useState([]);




    useEffect(() => {
        const fetchNotes = () => {
            axios.get(`${back}/notes/all`)
                .then((res) => {
                    setNotes(res.data.reverse());
                })
                .catch((e) => console.log(e.message))
        }
        fetchNotes();
    }, [notes ])

    const searchedNotes = notes?.filter((note) => {
        note.heading.toLowerCase().includes(searchTerm.toLowerCase())
    });






    return (
        <div className='pt-5 p-10 h-screen w-full
            bg-slate-100
            overflow-y-auto'>

            <>
                {/* <Search /> */}
            </>




            {/* Write new note */}
            <div className={` ${isOpen ? "block" : "hidden"}
                mt-5 p-2 
              border-slate-200 border-4 rounded-xl`}>

                <input type="text"
                    placeholder='Heading'
    
                    onChange={(e) => dispatch(newheading(e.target.value))}
                    className='w-full p-2 px-5 h-10 lg:h-14
                            rounded-xl
                            text-zinc-600 font-semibold
                            outline-none'
                />

                <textarea type="text"
                    placeholder='Write Your Note'
                    onChange={(e) => dispatch(newnote(e.target.value))}
                    className='mt-5 w-full p-5 h-96 
                            rounded-xl
                            text-zinc-500
                            bg-slate-100 outline-none'
                />
            </div>




            {/* All notes */}
            <div className='mx-auto 
                pt-6 gap-10
                grid grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4'>
                {
                    searchTerm ?
                        (
                            searchedNotes.map((note, index) => (
                                <Noteview key={index} heading={note.heading} note={note.note} />
                            ))
                        )
                        :
                        (
                            notes?.reverse().map((note, index) => (
                                <Noteview key={index} heading={note.heading} note={note.note} />
                            ))
                        )
                }
            </div>


            

        </div>
    )
}
