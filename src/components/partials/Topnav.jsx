import axios from "../../utils/axios"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"

const Topnav = () => {
    const [query, setQuery] = useState(" ")
    const [searches, setSearches] = useState([])



    const getSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`)
            setSearches(data.results)


        } catch (error) {
            console.log("Error : ", error)

        }
    }
    useEffect(() => {
        getSearches()

    }, [query])
    return (
        <div className='w-full h-[10vh]  relative flex justify-start items-center ml-[15%] '>
            <i className="text-zinc-400 text-3xl ri-search-line"></i>

            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className='bg-transparent text-zinc-200 w-[50%] outline-none border-none mx-10 p-5 text-xl'
                type="text"
                placeholder='Search Anything' />

            {query.length > 0 && (

                <i onClick={() => setQuery("")} className="text-zinc-400 text-3xl ri-close-fill "></i>
            )}


            <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded ">

                {searches.map((s, i) => (
                    <Link key={i} className=' hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600  p-10   w-[100%] flex justify-start items-center border-b-2 border-zinc-100'>
                        <img className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg "
                         src={s.profile_path || s.backdrop_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.poster_path  || s.profile_path}`: noimage}  alt="" />
                        <span>{s.name || s.title || s.original_name || s.orignal_title}</span>
                       
                    </Link> 
                    
                ))}



            </div>
        </div>
    )
}

export default Topnav