import React from 'react'

export default function WhiteBtn(props) {
  return (
    <button className={`
    text-[16px] bg-white text-[#111] rounded-full border border-[#e1e1e1] hover:border-[#111]
    ${props.padding?`${props.padding}`:'px-5 py-[6px]'}
    ${props.width?`${props.width}`:undefined}
    ${props.style}
    `}
    >{props.name}</button>
  )
}
