import React, { Fragment } from 'react'
import { GrAdd } from "react-icons/gr";
import jordanLogo from '../img/jordan-2.svg'
import { FiChevronRight } from "react-icons/fi";

export default function MenuNavBar() {
  function RenderSubNav() {
    const arrayHaveSubNav = ['Men', 'Women', 'Kids', 'Customise', 'Sale', 'Gifts 🎁'];
    const arrayNotSubNav = ['SNKRS'];
    return (<Fragment>
      {arrayHaveSubNav.map((navBarName, index) => (
        <li key={index} id={`sub-item-${index}`} className='group flex justify-between items-center py-[10px]'>
          <p className='
                  text-[#111] text-[24px]
                  '>{navBarName}
          </p>
          <FiChevronRight className='text-[22px]'></FiChevronRight>

        </li>
      ))}
      {arrayNotSubNav.map((navBarName, index) => (
        <li key={index} id={`sub-item-${index}`} className='group flex items-center py-[10px]'>
          <p className='
                  text-[#111] text-[24px]
                  '>{navBarName}
          </p>
        </li>
      ))}
    </Fragment>)
  }
  return (
    <div className='fixed w-[300px] h-[100vh] bg-white right-0 top-0 pt-[40px] px-[30px] pb-[120px] overflow-y-auto'>
      <div className="exit p-1 rounded-full hover:bg-[#e5e5e5] absolute top-[12px] right-[30px]">
        <GrAdd className='rotate-45 text-[24px]'></GrAdd>

      </div>
      <div className="">
        <RenderSubNav></RenderSubNav>
      </div>
      <div className="mt-10">
        <div className="">
          <img src={jordanLogo} alt="" className='w-8 inline-block mr-5' /> <span>Jordan</span>
          <div className="mt-[100px]">
            <p className="text-[#757575] text-[20px] ">Become a Nike Member for the best products, inspiration and stories in sport. <a className='text-[#111]' href="">Learn more</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
