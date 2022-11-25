import React, { useEffect, useState } from 'react'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import data from './data'
import SubSubNavBar from './SubSubNavBar';

export default function SubNavBarMenu(props) {

  const [subNameClick, setSubNameClick] = useState('');
  const handleSubNameClick = () => {
    setSubNameClick('');
    console.log(123);
  }
  useEffect(()=>{
    console.log(subNameClick);
  },[subNameClick])

  const getArrByNameAndTitle = (data, name, title) => {
    const newdataByName = data.find(element => element.name == name)
    const newdataByTitle = newdataByName.category.find(element => element.title == title)
    return newdataByTitle.arr
  }
  return (
    <div className='fixed h-[100%] w-[300px] bg-white bottom-0 right-[0px] px-[30px] text-[#111]'>
      <div className="mt-[60px]">
        <div className="flex items-center" onClick={props.handleNameClick}>
          <FiChevronLeft className='text-[24px] mr-2'></FiChevronLeft>
          <p className='text-[16px]'>{props.prev}</p>
        </div>
        <h1 className="text-[24px] py-5">{props.name}</h1>
        <div className="">
        {props.arr.map((name,index)=>(
          <div key={index} className="flex justify-between items-center py-1 text-[#757575]" onClick={()=>setSubNameClick(name)}>
            <p className='text-[16px]'>{name}</p>
            <FiChevronRight className='text-[24px] mr-2'></FiChevronRight>

            {(subNameClick == name) ? <SubSubNavBar prev={props.name} name={name} 
            arr={getArrByNameAndTitle(data, props.name,name)} handle={handleSubNameClick}
            ></SubSubNavBar> : undefined}

          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
