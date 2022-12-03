import React from 'react'
import BlackBtn from '../../Button/BlackBtn'
import nikeGif from '../img/Sneaker.gif'

export default function VideoHomePage() {

    return (
        <div className="
            md:block
            hidden py-10 relative
            ">
            <img src={nikeGif} alt="" srcSet='' className='w-full' />
            <div class="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <p class="">Just In: Fast Pack</p>
                <h1 class="
                    lg:text-[74px]
                    md:text-[64px]
                    sm:text-[48px]
                    font-bold
                    ">FIND YOUR FAST</h1>
                <p class="mb-5">So many want to fly. Choose yours</p>
                <BlackBtn name='Shop All' padding = 'py-2 px-4'></BlackBtn>
            </div>
        </div>
    )
}
