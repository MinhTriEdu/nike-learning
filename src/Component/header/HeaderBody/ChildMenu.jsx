import React, { Fragment } from 'react'

export default function ChildMenu(props) {

    return (
        <div className='w-full'>
            {props.arr.map((item, index) => (
                <div key={index}>
                    <h2 className='text-[#111] text-[16px] font-normal mb-[12px]'>{item.title}</h2>
                    <div className="mb-[24px]">

                        {item.arr.map((subitem, index) => (
                            <p key={index} className='pt-1 text-[14px] text-[#757575] cursor-pointer hover:text-[#111]'>{subitem}</p>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}
