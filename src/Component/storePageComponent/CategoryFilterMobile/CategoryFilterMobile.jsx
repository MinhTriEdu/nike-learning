import React from 'react'

export default function CategoryFilterMobile() {
    const category =['Lifestyle','Jordan','Running','Basketball','Training & Gym','Football','Skateboarding','Golf','Boots','Tennis','Athletics','Walking' ] 
    

     
    return (
    <div className='flex py-5 overflow-x-auto scrollbar-hide'>
        {category.map((item,index)=>(
            <p className='mx-4 whitespace-nowrap'>{item}</p>
        ))}
    </div>
  )
}
