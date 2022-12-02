import React from "react";
import BlackBtn from "../../Button/BlackBtn";
import WhiteBtn from "../../Button/WhiteBtn";
import feature1 from '../img/feature-1.png'
import feature2 from '../img/feature-2.png'

export default function Feature() {
  return (
    <div className="mt-16">
      <h1 className='text-[24px] text-[#111] py-2'>Gear Up</h1>
      <div className="grid grid-cols-2 gap-4 text-white text-[20px] mt-5">
        <div className="relative ">
          <img src={feature1} alt="" className="" />
          <div className="absolute left-10 bottom-10">
            <h1 className="mb-5">Add A Little Sparkle To Your Look</h1>
            <WhiteBtn name='Shop' style='hover:bg-[#b2b2b2] border-none' padding='py-2 px-5'></WhiteBtn>
          </div>
        </div>
        <div className="relative">
          <img src={feature2} alt="" className="" />
          <div className="absolute left-10 bottom-10">
            <h1 className="mb-5">Dominate Your Workouts in Metcon 8</h1>
            <BlackBtn name='Shop' padding='py-2 px-5'></BlackBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
