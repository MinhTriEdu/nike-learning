import React from 'react'
import WhiteGrayBtn from '../../Button/WhiteGrayBtn'

export default function MightLikeItem(props) {
    return (
        <div className='px-2'>
            <div className="">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/ec91ab39-6166-4970-acf1-9bcbd9082ad9/force-1-younger-shoes-h6p0zj.png" alt="" 
                className='w-full'/>
            </div>
            <div className="text-[16px] py-4">
                <h1 className="text-[#111]">Nike Force 1</h1>
                <p className="text-[#757575]">Young's Kid Shoes</p>
                <p className='text-[#111] py-2'>₫1,456,000</p>    
            </div>            
        </div>
    )
}
