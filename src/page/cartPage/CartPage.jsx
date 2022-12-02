import React from 'react'
import CartBody from '../../Component/cartComponent/cartBody/CartBody'
import DeliveryAds from '../../Component/cartComponent/deliveryAds/DeliveryAds'
import Summary from '../../Component/cartComponent/summary/Summary'

export default function CartPage() {
  return (
    <div className='flex max-w-[1100px] mx-auto pt-10'>
      <div className="flex-1 pr-3">
        <div className="">
          <DeliveryAds></DeliveryAds>
        </div>
        <div className="">
          <CartBody></CartBody>
        </div>
      </div>
      <div className="pl-3">
      <Summary width='w-[360px]'></Summary>
      </div>
    </div>
  )
}
