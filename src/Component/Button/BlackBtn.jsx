import React from 'react'

export default function BlackBtn(props) {
  return (
    <button className={`
    px-5 py-[6px] text-[16px] bg-black text-[white] rounded-full hover:bg-[#757575]
    $
    `}
    >{props.name}</button>
  )
}
