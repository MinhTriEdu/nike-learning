import React from 'react'

export default function WhiteGrayBtn(props) {
  return (
    <button className={`
    text-[16px] bg-white text-[#111] rounded-[20px] border border-[#e1e1e1] hover:border-[#c5c5c5]
    px-6 py-2 transition-all
    `}
    >{props.name}</button>
  )
}
