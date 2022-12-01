import React from 'react'
import DeliveryAds from '../../Component/cartComponent/deliveryAds/DeliveryAds'
import ItemCart from '../../Component/cartComponent/itemCart/ItemCart'
import Summary from '../../Component/cartComponent/summary/Summary'

export default function CartPage() {
  return (
    <div className='flex max-w-[1100px] mx-auto pt-10'>
      <div className="flex-1 pr-3">
        <div className="">
          <DeliveryAds></DeliveryAds>
        </div>
        <div className="">
          <ItemCart></ItemCart>
        </div>
      </div>
      <div className="pl-3">
      <Summary></Summary>
      </div>
    </div>
  )
}
