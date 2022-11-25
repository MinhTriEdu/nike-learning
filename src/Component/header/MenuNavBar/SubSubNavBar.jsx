import React from 'react'
import { FiChevronLeft } from "react-icons/fi";
import data from './data'

export default function SubSubNavBar(props) {    
  return (
    <div className='fixed h-[100%] w-[300px] bg-white bottom-0 right-[0px] px-[30px] text-[#111]'> 
      <div className="mt-[60px]">
        <div className="flex items-center" onClick={props.handle}>
          <FiChevronLeft className='text-[24px] mr-2'></FiChevronLeft>
          <p className='text-[16px]'>{props.prev}</p>
        </div>
        <h1 className="text-[24px] py-5">{props.name}</h1>
        <div className="">
        {props.arr.map((name,index)=>(
          <div key={index} className="flex justify-between items-center py-1 text-[#757575]">
            <p className='text-[16px]'>{name}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
