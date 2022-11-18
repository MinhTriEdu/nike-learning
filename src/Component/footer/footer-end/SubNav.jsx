import React, { Fragment } from 'react'

export default function SubNav() {
    function RenderSubNav(){
        const arr = ['Nike Adapt','Nike Air','Nike Air Force 1','Nike Air Max',
       ' Nike FlyEase','Nike Flyknit','Nike Flyleather','Nike Free','Nike Joyride','Nike Joyride',
       'Nike Pegasus','Nike React','Nike Vaporfly','Nike Zoom Fly','Nike ZoomX']
        return (
            arr.map((item,key)=><p className='py-1' key={key}>{item}</p>)
        )
    }
    return (
        <div className={'border-2 border-white p-5 w-[45vw] grid grid-cols-3 grid-rows-5 text-[12px] text-[#7e7e7e] bg-[#111]'}>
            <RenderSubNav></RenderSubNav>
        </div>
    )
}



