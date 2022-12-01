import React, { useEffect, useState } from 'react'
import icons from '../img/icons'
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import'./animation.css'

export default function FooterBody() {
    
    function NavFooter(props) {
        const [showNav,setShowNav] = useState(false);
        return (
            <ul className='overflow-hidden'>
                <div className="flex justify-between items-center">
                    <p className='text-white text-[14px]'>{props.title}</p>
                    <IoIosAdd className={`
                    show-nav-btn
                    sm:hidden
                    text-white cursor-pointer text-[24px] ${showNav?'hidden':'block'}
                    `}
                    onClick={()=>setShowNav(true)}></IoIosAdd>
                    <IoIosRemove className={`
                    show-nav-btn
                    sm:hidden
                    text-white cursor-pointer text-[24px] ${showNav?'block':'hidden'}
                    `}
                    onClick={()=>{
                        setShowNav(false)
                    }}></IoIosRemove>
                </div>
                <ul className={`
                sm:max-h-[500px]
                nav-list cursor-pointer ${showNav?'max-h-[500px] fade-in':'max-h-[0px] delay-300 fade-out'} transition-all 
                `}>
                    {props.subs.map((item, index) => (
                        <li key={index} className='my-2 hover:text-white'>{item}</li>
                    ))}
                </ul>
            </ul>
        )
    }
    function IconNav() {
        return (
            icons.map((item,key) => {
                return (
                    <div key={key} className='mx-2 cursor-pointer'>
                        {item.link}
                    </div>
                )
            })
        )
    }
    return (
        <div className="
        lg:px-9
        w-full bg-[#111111] pt-[40px] px-4
        ">
            <div className="
            xl:grid-cols-6
            md:grid-cols-5
            sm:grid-cols-4 sm:grid
            max-w-[1440px] mx-auto text-[#7e7e7e]
            
            ">
                <div className="
                text-white 
                sm:p-0 sm:after:hidden
                py-4 text-[14px] relative
                after:absolute after:h-[1px] after:bg-[#7e7e7e] after:w-[100%] after:top-full after:left-0 after:scale-y-50
                ">
                    <p className=""><a href="" className="">FIND A STORE</a></p>
                    <p className="my-2"><a href="" className="">BECOME A MEMBER</a></p>
                    <p className="my-2"><a href="" className="">SIGN UP FOR EMAIL</a></p>
                    <p className=""><a href="" className="">SEND US FEEDBACK</a></p>

                </div>
                <div className="
                get-help
                sm:p-0
                py-4 text-[12px]
                ">
                    <NavFooter title='GET HELP' subs={['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us']}></NavFooter>
                </div>
                <div className="
                about-nike
                sm:p-0
                py-4 text-[12px]
                ">
                    <NavFooter title='ABOUT NIKE' subs={['News', 'Careers', 'Investors', 'Sustainability']}></NavFooter>
                </div>
                <div className="
                list-icon 
                xl:col-start-6
                md:col-start-5 
                sm:col-start-4 sm:flex-row-reverse
                flex flex-wrap mt-5 -mx-2
                ">
                    <IconNav></IconNav>
                </div>
            </div>
        </div>
    )
}
