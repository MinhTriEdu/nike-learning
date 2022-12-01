import React from 'react'

export default function WhiteBtn(props) {
  return (
    <button className={`
    px-5 py-[6px] text-[16px] bg-white text-[#111] rounded-full border border-[#e1e1e1] hover:border-[#111]
    ${props.style}
    w-[100px]
    `}
    >{props.name}</button>
  )
}
