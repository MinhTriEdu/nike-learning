import React from 'react'

export default function HintItem({name,arr,show}) {

    return (
        <div className='text-[16px] overflow-hidden'>
            <p className='text-[#111]'>{name}</p>
            <div className="text-[#757575] mt-4">
                {arr.map((item, index) => {
                    if (index < 4) return (
                        <p key={index} className="pt-3">{item}</p>
                    )
                })}
                <div className={`
                    transition-all duration-300
                    ${show?'max-h-[400px] opacity-100':'max-h-0 opacity-0'}
                    `}>
                    {arr.map((item, index) => {
                        if (index > 3) return (
                            <p key={index} className="pt-3">{item}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
