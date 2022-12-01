import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export default function FilterCheckBox(props) {
    const [show, setShow] = useState(true)
    const [more, setMore] = useState(false)

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
                    {props.arr.map((element, index) => {
                        if (index < 4) {
                            return (
                                <div key={index} className="flex items-center pt-1">
                                    <input className='mr-3 w-[20px] h-[20px] accent-black' type="checkbox" />
                                    <p className='text-[16px]'>{element}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                {props.arr.length > 4 ?
                    <div className={`
                    `}>
                        <div className={`
                        w-full overflow-hidden transition-all
                        ${more ? ' max-h-[500px]' : 'max-h-0'}
                        `}>
                            <div className={`
                            ${show ? ' visible' : 'invisible'}
                            `}>
                                {props.arr.map((element, index) => {
                                    if (index > 3) {
                                        return (
                                            <div key={index} className="flex items-center pt-1">
                                                <input className='mr-3 w-[20px] h-[20px] accent-black' type="checkbox" />
                                                <p className='text-[16px]'>{element}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className="mt-2" onClick={() => setMore(!more)}>{more?'- Less':'+ More'}</div>
                    </div>
                    : undefined}
            </div>
        </div>
    )
}
