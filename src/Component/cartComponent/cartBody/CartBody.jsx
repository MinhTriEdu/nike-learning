import React from 'react'
import ItemCart from '../itemCart/ItemCart'

export default function CartBody() {
  return (
    <div className='mt-5'>
      <h1 className='text-[#111] text-[22px]'>Bag</h1>
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
        <ItemCart></ItemCart>
    </div>
  )
}
