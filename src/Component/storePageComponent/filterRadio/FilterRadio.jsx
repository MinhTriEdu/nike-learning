import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export default function FilterRadio(props) {
    const [show, setShow] = useState(true)

    return (
        <div className='py-2'>
            <div className="
            flex justify-between relative text-[#111111] py-3
            after:absolute after:w-full after:h-[1px] after:bg-[#e5e5e5] after:top-0
            ">
                <h1 className="text-[16px]">{props.name}</h1>
                <div className="lg:block hidden" onClick={() => setShow(!show)}>
                    {show ? <FiChevronUp className='text-[24px]'></FiChevronUp> : <FiChevronDown className='text-[24px]'></FiChevronDown>}

                </div>
            </div>
            <div className={`
            w-full py-1 overflow-hidden transition-all
            ${show ? ' max-h-[500px]' : 'max-h-0'}

            `}>
                <div className={`
                    ${show ? ' visible' : 'invisible'}
                    `}>
                    {props.arr.map((element, index) => (
                        <div key={index} className="flex items-center pt-1">
                            <input className='mr-3 w-[20px] h-[20px] accent-black' name={props.name} type="radio" />
                            <p className='text-[16px]'>{element}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
