import React, { useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import './scrollbar.css'

export default function MightLike() {
    const ref = useRef();

    return (    
        <div>
            <div className="flex justify-end">
                <div className="p-4 bg-[#e5e5e5] rounded-full mr-4 hover:bg-[#ccc] transition-all" >
                    <BsChevronLeft className='text-[20px]'></BsChevronLeft>
                </div>
                <div className="p-4 bg-[#e5e5e5] rounded-full hover:bg-[#ccc] transition-all" >
                    <BsChevronRight className='text-[20px]'></BsChevronRight>
                </div>
            </div>
            <div ref={ref} className="flex overflow-x-auto custom-scrollbar scroll-smooth">
                
            </div>
        </div>
    )
}
