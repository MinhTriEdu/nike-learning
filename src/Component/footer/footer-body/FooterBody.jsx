import React from 'react'
import icons from '../img/icons'

export default function FooterBody() {
    function NavFooter(props) {
        return (
            <ul>
                <p className='text-white text-[14px]'>{props.title}</p>
                <ul>
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
                    <div key={key} className='mx-2'>
                        {item.link}
                    </div>
                )
            })
        )
    }
    return (
        <div className="w-full bg-[#111111] pt-[40px]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-6 text-[#7e7e7e]">
                <div className="text-white text-[14px]">
                    <p className=""><a href="" className="">FIND A STORE</a></p>
                    <p className="my-2"><a href="" className="">BECOME A MEMBER</a></p>
                    <p className="my-2"><a href="" className="">SIGN UP FOR EMAIL</a></p>
                    <p className=""><a href="" className="">SEND US FEEDBACK</a></p>

                </div>
                <div className="get-help text-[12px]">
                    <NavFooter title='GET HELP' subs={['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us']}></NavFooter>
                </div>
                <div className="about-nike text-[12px]">
                    <NavFooter title='ABOUT NIKE' subs={['News', 'Careers', 'Investors', 'Sustainability']}></NavFooter>
                </div>
                <div className="list-icon flex col-start-5 col-span-2 flex-row-reverse">
                    <IconNav></IconNav>
                </div>
            </div>
        </div>
    )
}
