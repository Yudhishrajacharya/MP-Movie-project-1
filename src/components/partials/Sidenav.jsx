import React, { useEffect } from 'react'
import axios from "../../utils/axios"
import { Link } from 'react-router-dom'

const Sidenav = () => {

    return (
        <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-10'>
            <h1 className='text-2xl text-white font-bold'>
                <i className="text-[#6556cd] ri-tv-2-line mr-2 "></i>
                <span>SCSDB</span>

            </h1>

            <nav className='flex flex-col text-zinc-400 text-xl gap-3 '>
                <h1 className='text-white font-semibold text-xl my-10 mb-5 ' > New Feeds

                </h1>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className="  ri-fire-fill"></i> Trending
                </Link>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className=" ri-bard-fill"></i>  Popular
                </Link>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className=" ri-film-fill"></i>  Movies
                </Link>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className="ri-tv-2-fill"></i> Tv Shows
                </Link>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className="ri-team-fill"></i> People
                </Link>
            </nav>
            <hr  className='border-none bg-zinc-400 h-[1px] '/>

            <nav className='flex flex-col text-zinc-400 text-xl gap-3 '>
                <h1 className='text-white font-semibold text-xl my-10 mb-5 ' > Website Information

                </h1>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className="  ri-information-fill"></i> About
                </Link>
                <Link className='hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg'>
                    <i className=" ri-phone-fill"></i>  Contact
                </Link>

            </nav>


        </div>
    )
}

export default Sidenav