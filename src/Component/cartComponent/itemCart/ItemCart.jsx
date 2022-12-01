import React from 'react'

export default function ItemCart(props) {
    return (
        <div className='
            flex py-6 relative
            after:absolute after:h-1 after:w-full after:bg-[#e5e5e5]
            '>
            <div className="pr-4 h-[150px] w-[150px] overflow-hidden">
                <img className='w-[150px]' src="https://secure-images.nike.com/is/image/DotCom/DQ6048_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg" alt="" />
            </div>
            <div className="flex-1 flex justify-between items-start text-[#111]">
                <div className="pl-2">
                    <div className="">
                        <h1>Nike Air Force 1 LV8</h1>
                        <p className='text-[#757575]'>Older Kids' Shoes</p>
                        <p className='text-[#757575]' >White/Midnight Navy/Pure Platinum/Metallic Silver</p>
                    </div>
                    <div className="flex mt-5">
                        <div className="mr-4">
                            <svg aria-hidden="true" width={24} height={24} fill="none">
                                <path
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 0-7.007A4.923 4.923 0 0 1 7.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451"
                                />
                            </svg>
                        </div>
                        <div className="">
                            <svg aria-hidden="true" width={24} height={24} fill="none">
                                <path
                                    stroke="currentColor"
                                    strokeMiterlimit={10}
                                    strokeWidth={1.5}
                                    d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <p className=''>2,039,000₫</p>
            </div>
        </div>
    )
}
