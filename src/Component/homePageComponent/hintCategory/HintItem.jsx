import React, { useState } from 'react'

export default function HintItem({name,arr,show}) {
    const [showSub,setShowSub] = useState(false)
    return (
        <div className='text-[16px] overflow-hidden mt-4'>
            <p className='
                md:block
                hidden text-[#111]
                '>{name}</p>
            <p className='
                md:hidden
                text-[#111]
                ' onClick={()=>setShowSub(!showSub)}>{name}</p>
            {<div className={`
                md:max-h-[1000px]
                text-[#757575] mt-4 transition-all duration-500
                ${showSub?'max-h-[1000px]':'max-h-0'}
                `}>
                {arr.map((item, index) => {
                    if (index < 4) return (
                        <p key={index} className={`
                        ${show?'':'whitespace-nowrap text-ellipsis overflow-hidden'}
                        pt-3 
                        `}>{item}</p>
                    )
                })}
                <div className={`
                    transition-all duration-300 
                    ${show?'md:max-h-[400px] md:opacity-100':'md:max-h-0 md:opacity-0'}
                    max-h-[400px] opacity-100
                    `}>
                    {arr.map((item, index) => {
                        if (index > 3) return (
                            <p key={index} className="pt-3">{item}</p>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}
