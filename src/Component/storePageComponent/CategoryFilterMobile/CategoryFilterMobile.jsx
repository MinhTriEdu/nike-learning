import React from 'react'
import './hideScrollbar.css'
import './scrollbar.css'
export default function CategoryFilterMobile() {
    const category =['Lifestyle','Jordan','Running','Basketball','Training & Gym','Football','Skateboarding','Golf','Boots','Tennis','Athletics','Walking' ] 
    

     
    return (
    <div className='
        flex py-4 ml-[-8px] overflow-x-auto relative cursor-grab scrollbar
        '>
        {category.map((item,index)=>(
            <p key={index} className='mx-4 p-2 whitespace-nowrap cursor-pointer'>{item}</p>
        ))}
    </div>
  )
}
