import React, { useState } from 'react'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";


export default function FilterHeader(props) {
    const [showSort,setShowSort] = useState(false)
    return (
        <div className="px-4 bg-white">
            <div className='max-w-[1400px] mx-auto flex justify-between items-center py-4 text-[#111] text-[16px]'>
                <h1 className='text-[24px]'>Men's Clothing</h1>
                <div className="flex">
                    <div className="flex mr-8 items-center">
                        <p className='mr-2'>Hide Filter</p>
                        <svg
                            aria-hidden="true"
                            className="icon-filter-ds"
                            width={24}
                            height={24}
                            fill="none"
                            {...props}
                        >
                            <path stroke="currentColor" strokeWidth={1.5} d="M21 8.25H10m-5.25 0H3" />
                            <path
                                stroke="currentColor"
                                strokeWidth={1.5}
                                d="M7.5 6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"
                                clipRule="evenodd"
                            />
                            <path stroke="currentColor" strokeWidth={1.5} d="M3 15.75h10.75m5 0H21" />
                            <path
                                stroke="currentColor"
                                strokeWidth={1.5}
                                d="M16.5 13.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center relative cursor-pointer" onClick={()=>setShowSort(!showSort)}>
                        <p className='mr-2'>Sort By</p>
                        {showSort?<FiChevronDown></FiChevronDown>:<FiChevronUp></FiChevronUp>}
                        {showSort && <div className="absolute top-full right-0 p-6 pb-4 bg-white whitespace-nowrap rounded-2xl leading-7">
                            <p className='cursor-pointer hover:text-[#757575]'>Featured</p>
                            <p className='cursor-pointer hover:text-[#757575]'>Newest</p>
                            <p className='cursor-pointer hover:text-[#757575]'>Price: High-Low</p>
                            <p className='cursor-pointer hover:text-[#757575]'>Price: Low-High</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
