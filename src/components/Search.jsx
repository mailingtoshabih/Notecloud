import { useState } from 'react'

export const Search = () => {

    const handleSubmit = (e) => {
        e.preventdefault();
        // 
    }

    const [search, setSearch] = useState("");



    return (
        <div className='w-full'>

            <form onSubmit={handleSubmit}>
                <>
                    <input type="text"
                        placeholder='Search Notes'
                        onChange={(e) => setSearch(e.target.value)} 
                        className='w-full p-2 px-8 h-10 lg:h-14
                            rounded-xl
                            text-zinc-500 lg:text-xl font-semibold
                            bg-slate-200 outline-none'
                    />
                </>
            </form>

        </div>
    )
}
