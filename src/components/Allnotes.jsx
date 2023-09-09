import { useState } from 'react'
import { Noteview } from './Noteview'
import { Search } from './Search'



const allNotes = ['Note A', 'Note Ar', 'Note Avr', 'Note Argrgg', 'Note Apooy', 'Note Aznc', 'Note Awewwe', 'Note A', 'Note Ar', 'Note Avr', 'Note Argrgg', 'Note Apooy', 'Note Aznc', 'Note Awewwe']
const value = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sint sit perferendis nostrum neque, quasi ullam consectetur inventore obcaecati alias."





export const Allnotes = () => {



    const handleSubmit = (e) => {
        e.preventdefault();
    }

    const [note, setNote] = useState("");
    const [heading, setHeading] = useState("");




    return (
        <div className='p-5 h-screen w-full mx-auto 
            bg-slate-100
            overflow-y-auto'>

            <>
                <Search />
            </>



            {/* Write new note */}

            <div className='mt-5 p-2 
                 border-slate-200 border-4 rounded-xl'>

                <input type="text"
                    placeholder='Heading'
                    onChange={(e) => setHeading(e.target.value)}
                    className='w-full p-2 px-5 h-10 lg:h-14
                            rounded-xl
                            text-zinc-600 font-semibold
                            outline-none'
                />

                <textarea type="text"
                    placeholder='Write Your Note'
                    onChange={(e) => setNote(e.target.value)}
                    className='mt-5 w-full p-5 h-96 
                            rounded-xl
                            text-zinc-500
                            bg-slate-100 outline-none'
                />

            </div>




            {/* All notes */}

            <div className='mx-auto 
                pt-6 gap-5
                grid grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4'>
                {
                    allNotes.map((note) => (
                        <>
                            <Noteview title={"Home renovation project"} value={value} />
                        </>
                    ))
                }
            </div>









        </div>
    )
}
