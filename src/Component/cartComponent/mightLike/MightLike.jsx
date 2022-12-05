import React, { useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import MightLikeItem from '../mightLikeItem/MightLikeItem';
import './scrollbar.css'

export default function MightLike() {
    const ref = useRef();

    return (
        <div className='py-2'>
            <div className="flex justify-between items-center">
                <h1 className='text-[22px] text-[#111]'>You Might Also Like</h1>
                <div className="
                    md:flex
                    hidden
                    ">
                    <div className="p-4 bg-[#e5e5e5] rounded-full mr-4 hover:bg-[#ccc] transition-all" >
                        <BsChevronLeft className='text-[20px]'></BsChevronLeft>
                    </div>
                    <div className="p-4 bg-[#e5e5e5] rounded-full hover:bg-[#ccc] transition-all" >
                        <BsChevronRight className='text-[20px]'></BsChevronRight>
                    </div>
                </div>
            </div>
            <div ref={ref} className="
                lg:-mx-9
                -mx-4 px-7
                flex overflow-x-auto ads-scrollbar scroll-smooth pb-5 mt-5
                ">
                <div className="
                    lg:w-[30%]
                    w-[60%] flex-shrink-0
                    ">
                    <MightLikeItem></MightLikeItem>
                </div>
                <div className="
                    lg:w-[30%]
                    w-[60%] flex-shrink-0
                    ">
                    <MightLikeItem></MightLikeItem>
                </div>
                <div className="
                    lg:w-[30%]
                    w-[60%] flex-shrink-0
                    ">
                    <MightLikeItem></MightLikeItem>
                </div>
                <div className="
                    lg:w-[30%]
                    w-[60%] flex-shrink-0
                    ">
                    <MightLikeItem></MightLikeItem>
                </div>
                <div className="
                    lg:w-[30%]
                    w-[60%] flex-shrink-0
                    ">
                    <MightLikeItem></MightLikeItem>
                </div>
            </div>
        </div>
    )
}
