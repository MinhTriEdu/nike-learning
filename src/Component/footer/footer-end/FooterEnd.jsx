import React, { Fragment } from 'react'
import SubNav from './SubNav'

export default function FooterEnd() {
    return (
        <div className="
        sm:pt-2
        lg:px-9
        w-full bg-[#111111] py-2 px-4 pt-10
        ">
            <div className="
            max-w-[1440px] mx-auto flex justify-between
            sm:flex-row
            flex-col
            ">
                <div className="
                flex 
                sm:flex-row sm:items-center
                flex-col
                ">
                    <div className="
                    location 
                    flex
                    ">
                        <div className="">
                            <svg aria-hidden="true" viewBox="0 0 24 24" width={18} height={15}>
                                <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M4.5 9.001a7.5 7.5 0 1 1 15 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 0 1-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 0 1-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 0 1-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <p className='text-[12px] text-white mx-2'>VietNam</p>
                    </div>
                    <p className='
                    copyright text-[12px] text-[#7e7e7e] py-2 sm:px-2 whitespace-nowrap

                    '>© 2022 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="policy">
                    <ul className='
                    flex flex-wrap justify-end
                    sm:flex-row sm:mt-0 sm:-mx-4
                    flex-col mt-2 
                    '>
                        <li className="
                        group
                        hover:text-white
                        text-[12px] py-2 text-[#7e7e7e] relative
                        sm:mx-2 sm:my-0 sm:px-2
                        mx-0 my-2 
                        ">Guide
                            <div className="
                            sm:w-[45vw] sm:-translate-x-1/2
                            absolute left-0 bottom-full hidden w-full
                            group-hover:block
                            ">
                                <SubNav ></SubNav>
                            </div>
                        </li>
                        <li className="
                        sm:mx-2 sm:my-0 sm:px-2
                        mx-0 my-2
                        text-[12px] py-2 text-[#7e7e7e] hover:text-white
                        ">Terms of Sale</li>
                        <li className="
                        sm:mx-2 sm:my-0 sm:px-2
                        mx-0 my-2
                        text-[12px] py-2 text-[#7e7e7e] hover:text-white
                        ">Terms of Use</li>
                        <li className="
                        sm:mx-2 sm:my-0 sm:px-2
                        mx-0 my-2
                        text-[12px] py-2 text-[#7e7e7e] hover:text-white
                        ">Nike Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
