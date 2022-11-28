import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Size() {
    const [show, setShow] = useState(true)
    const size = [35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,44,45]
    return (
        <div className='py-2'>
            <div className="
            flex justify-between relative text-[#111111] py-3
            after:absolute after:w-full after:h-[1px] after:bg-[#e5e5e5] after:top-0
            ">
                <h1 className="text-[16px]">Sizes</h1>
                <div className="" onClick={() => setShow(!show)}>
                    {show ? <FiChevronUp className='text-[24px]'></FiChevronUp> : <FiChevronDown className='text-[24px]'></FiChevronDown>}

                </div>
            </div>
            <div className={`
            w-full py-1 overflow-hidden transition-all
            ${show ? ' max-h-[500px]' : 'max-h-0'}

            `}>
                <div className={`
                grid grid-cols-3 gap-2 mt-5
                ${show ? ' visible' : 'invisible'}

                `}>
                    {size.map((size,index)=>(
                        <div key={index} className="w-full h-[32px] rounded-sm border flex justify-center items-center">{size}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
