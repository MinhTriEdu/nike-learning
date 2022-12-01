import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export default function () {
    const [show,setShow] = useState(true)
    const colour = [
        {
            name: 'Black',
            id: '#000'
        },
        {
            name: 'Blue',
            id: '#1790c8'
        },
        {
            name: 'Brown',
            id: '#825d41'
        },
        {
            name: 'Green',
            id: '#7bba3c'
        },
        {
            name: 'Grey',
            id: '#808080'
        },
        {
            name: 'Multi-Colour',
            id: '#000'
        },
        {
            name: 'Orange',
            id: '#f36b26'
        },
        {
            name: 'Pink',
            id: '#f0728f'
        },
        {
            name: 'Purple',
            id: '#8d429f'
        },
        {
            name: 'Red',
            id: '#e7352b'
        },
        {
            name: 'White',
            id: '#fff'
        },
        {
            name: 'Yellow',
            id: '#fed533'
        },
    ]
    return (
        <div className='py-2'>
            <div className="
            flex justify-between relative text-[#111111] py-3
            after:absolute after:w-full after:h-[1px] after:bg-[#e5e5e5] after:top-0
            ">
                <h1 className="text-[16px]">Colour</h1>
                <div className="lg:block hidden" onClick={()=>setShow(!show)}>
                {show?<FiChevronUp className='text-[24px]'></FiChevronUp>:<FiChevronDown className='text-[24px]'></FiChevronDown>}
                
                </div>
            </div>
            <div className={`
            w-full py-1 overflow-hidden transition-all
            ${show?' max-h-[500px]':'max-h-0'}

            `}>
                <div className={`
                grid grid-cols-3 gap-y-2 mt-5
                ${show?' visible':'invisible'}

                `}>
                    {colour.map((color, index) => (
                        <div key={index} className="
                            lg:my-0
                            flex flex-col my-2 justify-center items-center text-center
                            ">
                            <div className='h-[28px] w-[28px] rounded-full border' style={{ background: `${color.id}` }}></div>
                            <p className='text-[12px]'>{color.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
