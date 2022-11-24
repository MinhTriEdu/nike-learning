import React from 'react'
import './animation.css'
export default function HeaderAds() {
    return (
        <div className="
        w-full bg-[#f5f5f5] py-2 overflow-hidden
        ">
            <div className="w-[400%] flex wipe-out">
                <div className="text-center w-[25%]">
                    <h1 className="text-[16px]">Hello Nike App</h1>
                    <p className="text-[12px]">Download the app to access everything Nike. <a href="" className="underline">Get Your Great</a></p>
                </div>
                <div className="text-center w-[25%]">
                    <h1 className="text-[16px]">Save Up to 40%</h1>
                    <a className="text-[12px]">Shop All Our New Markdowns.</a>
                </div>
                <div className="text-center w-[25%]">
                    <h1 className="text-[16px]">Free Delivery</h1>
                    <p className="text-[12px]">Applies to orders of 5.000.000₫ or more. <a href="" className="underline"> View details</a></p>
                </div>
                <div className="text-center w-[25%]">
                    <h1 className="text-[16px]">Hello Nike App</h1>
                    <p className="text-[12px]">Download the app to access everything Nike. <a href="" className="underline">Get Your Great</a></p>
                </div>
            </div>
        </div>
    )
}



