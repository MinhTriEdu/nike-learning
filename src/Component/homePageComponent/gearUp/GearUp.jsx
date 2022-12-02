import React from 'react'
import WhiteBtn from '../../Button/WhiteBtn'
import gearUpImg from '../img/gearUpBanner.png'
export default function GearUp() {
    return (
        <div className='mt-16'>
            <h1 className='text-[24px] text-[#111] py-2'>Gear Up</h1>
            <div className="relative mt-5">
                <img src={gearUpImg} alt="" className='w-full' />
                <div className="absolute text-white left-10 bottom-10 text-[16px] w-[40%]">
                    <p className="">Nike FC</p>
                    <h1 className='text-[72px] leading-none'>INSPIRED BY THE <br />BRILLIANT GAME</h1>
                    <p className='py-5'>Express your love of football off the pitch with the latest National Team Collections.</p>
                    <WhiteBtn name={'Gear Up'} style={'hover:bg-[#b2b2b2] border-none'} padding={'py-2 px-5'}></WhiteBtn>
                </div>
            </div>
        </div>
    )
}
