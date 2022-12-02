import React from 'react'

export default function BlackBtn(props) {
  return (
    <button className={`
     text-[16px] bg-black text-[white] rounded-full hover:bg-[#757575] transition-all
    ${props.padding?`${props.padding}`:'px-5 py-[6px]'}
    ${props.width?`${props.width}`:undefined}
    ${props.style}
    `}
    >{props.name}</button>
  )
}
