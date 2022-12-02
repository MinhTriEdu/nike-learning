import React from 'react'
import mainbanner from '../img/mainBanner.png'
import adsbanner from '../img/bbbBanner.png'
import BlackBtn from '../../Button/BlackBtn'

export default function AdsHomePage() {
  return (
    <div className='pb-5'>
      <div className="-mx-9">
        <img className='w-full ' src={adsbanner} alt="" />
      </div>
      <div className="mt-20">
        <img src={mainbanner} alt="" className='w-full'/> 
      </div>
      <div className="text-center text-[#111] text-[16px] mt-10 w-[60%] mx-auto">
        <p>Gift for You, from You</p>
        <h1 className='text-[72px] py-0 my-0 leading-none'>UNWRAP YOUR FAVS</h1>
        <p className="py-5">You work hard. You gift hard. It’s time to treat yourself to something good.</p>
        <p className="">Whether “me time” for you means working out, winding down or somewhere in between, we have the leggings and bras, tops and tees you need to do “me time” your way.</p>
        <div className="mt-5">
          <BlackBtn name='Shop'></BlackBtn>
        </div>
      </div>
    </div>
  )
}
