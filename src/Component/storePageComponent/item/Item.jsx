import React, { Children, Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import './animation.css'
export default function Item(props) {
    const [showImg, setShowImg] = useState(props.item.img)
    const [showColor, setShowColor] = useState(false)
    function ImgColor({ imgDetails, primaryImg }) {
        return (
            <div className="flex mx-[-4px]">
                {imgDetails.map((item, index) => (
                    <div key={index} className="
                    relative mx-[4px] h-[44px] w-[44px] overflow-hidden hover:border
                    "onMouseEnter={() => setShowImg(item.imgs[0].img)} onMouseLeave={() => setShowImg(primaryImg)}>
                        <img className='absolute top-1/2 translate-y-[-50%]' src={item.imgs[0].img} alt="" />
                    </div>
                ))}
            </div>)
    }
    const numToPrice = (num) => {
        let str = String(num);
        let len = str.length;
        if (len < 3) return str
        else if (len < 7) {
            str = str.slice(0, -3) + ',' + str.slice(-3)
            return str
        }
        else {
            str = str.slice(0, -6) + ',' + str.slice(-6, -3) + ',' + str.slice(-3)
            return str
        };
    }
    return (
        <div className='w-full relative' onMouseEnter={() => setShowColor(true)} onMouseLeave={() => setShowColor(false)}>
            <div className="
                w-full pb-[100%] h-0 overflow-hidden object-center relative bg-[#f6f6f6]
                " >
                <img className='absolute w-full top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]' src={showImg} alt="" />
            </div>

            <div className="min-h-[185px] pt-4">
                {(showColor && props.item.imgDetails.length > 0) ?
                    <ImgColor imgDetails={props.item.imgDetails} primaryImg={props.item.img}></ImgColor>
                    :
                    <div className="text-[16px]">
                        <p className='text-[#111] font-normal'>{props.item.name}</p>
                        <p className='text-[#959595]'>{props.item.message}</p>
                        <p className='text-[#959595]'>{props.item.color} Colour</p>
                    </div>
                }

                <p className='text-[#111] pt-5'>{numToPrice(props.item.price)}₫</p>
            </div>

            <div className="
                absolute top-2 right-2 p-3 rounded-full bg-white flex items-center justify-center
                ">
                <svg height={18} width={18} fill="#fff" stroke='#111' strokeWidth={'3px'} viewBox="0 0 25 32">
                    <path d="M23.28 6.16q-1.44-1.44-3.4-1.92T16 4.28t-3.28 2.04Q11.36 4.8 9.44 4.28t-3.88-.04-3.4 1.96T.24 9.68t0 4 1.92 3.44L12.72 28l10.56-10.88q1.44-1.44 1.92-3.44t0-4-1.92-3.52z" />
                </svg>
            </div>
        </div>
    )

}
