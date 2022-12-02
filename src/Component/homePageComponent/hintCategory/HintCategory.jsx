import React, { useState } from 'react'
import HintItem from './HintItem'

export default function HintCategory() {
    const [showMore,setShowMore] = useState(false)

    const category = [
        {
            name: 'Icons',
            arr: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95', 'Air Max 97', 'Air Max 270', 'Air Max 720', 'All Air Max', 'Vapormax']
        },
        {
            name: 'Shoes',
            arr: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes', 'Basketball Shoes', 'Football Shoes', 'Gym & Training Shoes', 'Lifestyle Shoes']
        },
        {
            name: 'Clothing',
            arr: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops", "Jackets", "Compression & Nike Pro", "Trousers & Leggings", "Shorts"]
        },
        {
            name: "Kids'",
            arr: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes", "Kids' Running Shoes", "Kids' Clothing", "Kids' Backpacks", "Kids' Socks"]

        }
    ]

    return (
        <div className='flex justify-between max-w-4xl mx-auto py-20' onMouseOver={()=>setShowMore(true)} onMouseLeave={()=>setShowMore(false)}>
            {category.map((item, index) => (
                <div key={index} className="">
                    <HintItem arr={item.arr} name={item.name} show={showMore}></HintItem>
                </div>
            ))}
        </div>
    )
}
