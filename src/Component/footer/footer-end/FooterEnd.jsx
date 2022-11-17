import React, { Fragment } from 'react'
import SubNav from './SubNav'

export default function FooterEnd() {
    return (
        <div className="w-full bg-[#111111] py-[10px]">
            <div className="max-w-[1400px] mx-auto flex justify-between">
                <div className="flex items-center">
                    <div className="location flex">
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
                    <div className="copyright">
                        <p className='text-[12px] p-2 text-[#7e7e7e]'>© 2022 Nike, Inc. All Rights Reserved</p>
                    </div>
                </div>
                <div className="policy">
                    <ul className='flex'>
                        <li className="
                        group
                        text-[12px] p-2 mx-2 text-[#7e7e7e] relative
                        hover:text-white
                        ">Guide
                            <div className="
                            absolute bottom-full -translate-x-1/2 hidden
                            group-hover:block
                            ">
                                <SubNav ></SubNav>
                            </div>
                        </li>
                        <li className="text-[12px] p-2 mx-2 text-[#7e7e7e] hover:text-white">Terms of Sale</li>
                        <li className="text-[12px] p-2 mx-2 text-[#7e7e7e] hover:text-white">Terms of Use</li>
                        <li className="text-[12px] p-2 mx-2 text-[#7e7e7e] hover:text-white">Nike Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
