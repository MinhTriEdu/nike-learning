import React from 'react'
import { IoAddSharp } from "react-icons/io5";
export default function DeliveryAds() {
    return (
        <div className='
            w-full bg-[#f5f5f5] relative text-[#111] pl-6 pr-2 py-2 flex justify-between items-center
            after:absolute
            '>
            <div className="">
                <p className=''>FREE DELIVERY</p>
                <div className="text-[12px]">
                    <p>Applies to orders of 5.000.000₫ or more. <a className='underline ml-2' href="">View details.</a></p>
                </div>
            </div>
            <div className="">
                <IoAddSharp className='rotate-45 text-[24px]'></IoAddSharp>
            </div>
        </div>
    )
}
