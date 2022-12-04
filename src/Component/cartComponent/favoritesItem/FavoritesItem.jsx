import React from 'react'
import WhiteGrayBtn from '../../Button/WhiteGrayBtn'

export default function FavoritesItem(props) {
    return (
        <div className='
            flex py-6 relative
            after:absolute after:h-[1px] after:w-full after:bg-[#e5e5e5] after:top-full after:left-0
            '>
            <div className="mr-4 h-[150px] w-[150px] overflow-hidden">
                <img className='w-full' src="https://secure-images.nike.com/is/image/DotCom/DQ6048_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg" alt="" />
            </div>
            <div className="flex-1 flex justify-between items-start text-[#111]">
                <div className="pl-2">
                    <div className="">
                        <h1>Nike Air Force 1 LV8</h1>
                        <p className='text-[#757575]'>Older Kids' Shoes</p>
                        <a href="" className='text-[#757575] border-b border-[#757575] inline-block my-2 leading-5'>Select Size</a>
                        <div className="pt-2">
                            <WhiteGrayBtn name='Add To Bag'></WhiteGrayBtn>
                        </div>
                    </div>
                    
                </div>
                <p className=''>2,039,000₫</p>
            </div>
        </div>
    )
}
