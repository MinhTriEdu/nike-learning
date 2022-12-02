import React from 'react'
import manImg from '../img/moreNike-man.png'
import womanImg from '../img/moreNike-women.png'
import kidImg from '../img/moreNike-kid.png'
import WhiteBtn from '../../Button/WhiteBtn'

export default function MoreNike() {
    return (
        <div className='mt-16'>
            <h1 className='text-[24px] text-[#111] py-2'>More Nike</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="relative">
                    <img src={manImg} alt="" className='w-full' />
                    <div className="absolute left-10 bottom-10">
                        <WhiteBtn name={"Men's"} style={'hover:bg-[#b2b2b2] border-none'} padding={'py-2 px-5'}></WhiteBtn>

                    </div>
                </div>
                <div className="relative">
                    <img src={womanImg} alt="" className='w-full' />
                    <div className="absolute left-10 bottom-10">
                        <WhiteBtn name="Women's" style='hover:bg-[#b2b2b2] border-none' padding='py-2 px-5'></WhiteBtn>

                    </div>
                </div>
                <div className="relative">
                    <img src={kidImg} alt="" className='w-full' />
                    <div className="absolute left-10 bottom-10">
                        <WhiteBtn name="Kid's" style='hover:bg-[#b2b2b2] border-none' padding='py-2 px-5'></WhiteBtn>

                    </div>
                </div>
            </div>

        </div>
    )
}
