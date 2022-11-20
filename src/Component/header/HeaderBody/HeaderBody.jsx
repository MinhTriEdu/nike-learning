import React, { Fragment, useEffect } from 'react'
import nikeLogo from '../img/Logo_NIKE.png'
import ChildMenu from './ChildMenu';
import data from './dataSubMenu.jsx'
import './animation.css'


export default function HeaderBody() {

    let height = 0;
    useEffect(() => {
        const header = document.getElementById('header-body')
        const space = document.querySelector('.space')

        const search = document.querySelector('.search-header')
        const searchInput = document.querySelector('.search-header input')

        const navbar = document.querySelector('.navbar-header')
        const heart = document.querySelector('.heart-header')
        const cart = document.querySelector('.cart-header')

        const cancelSearch = document.querySelector('.cancel-search')
        const searchContainer = document.querySelector('.search-header-container')
        const overplay = document.querySelector('.overplay')
        height = header.offsetHeight
        space.classList.add(`h-[${height}px]`)
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            const searchInputWidth = document.querySelector('.search-header input').offsetWidth
  
            if (window.pageYOffset > 32) {
                space.classList.remove('hidden')
                header.classList.remove('relative')
                header.classList.add('fixed')
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos >= currentScrollPos) {
                    header.style.top = "0px";
                } else {
                    header.style.top = "-100px";
                    console.log(currentScrollPos,prevScrollpos);
                }
                prevScrollpos = currentScrollPos;
            }
            else if(searchInputWidth < 200){
                header.classList.remove('fixed')
                space.classList.add('hidden')

            }
        }

       
        search.addEventListener('click',()=>{

            if(window.pageYOffset<32){
                header.style.top = '32px'
            }
            header.classList.add('fixed')
            setTimeout(()=>{
                header.style.top = '0px'
            },300)
            searchContainer.classList.add('flex-1')
            search.style.right = '50%'
            search.classList.add('translate-x-1/2')
            searchInput.style.width='700px'
            navbar.classList.add('hidden');
            heart.classList.add('invisible');
            cart.classList.add('invisible');
            space.classList.remove('hidden')
            overplay.classList.remove('hidden')
            cancelSearch.classList.remove('hidden')
        })


        cancelSearch.addEventListener('click',()=>{
            
            if(window.pageYOffset<32){
                header.style.top = '32px'
                header.classList.remove('fixed')
            }
            search.style.right = '0px'
            search.classList.remove('translate-x-1/2')
            searchInput.style.width='180px'
            navbar.classList.remove('hidden');
            heart.classList.remove('invisible');
            cart.classList.remove('invisible');

            space.classList.add('hidden')
            overplay.classList.add('hidden')
            cancelSearch.classList.add('hidden')
            setTimeout(()=>{
                searchContainer.classList.remove('flex-1')
            },500)

        })
    }, []);


    function RenderSubMenu(props) {
        let category = {}
        switch (props.name) {
            case 'Men':
                category = data.find(item => item.name == props.name).category;
                break;
            case 'Women':
                category = data.find(item => item.name == props.name).category;
                break;
            case 'Kids':
                category = data.find(item => item.name == props.name).category;
                break;
            case 'Customise':
                category = data.find(item => item.name == props.name).category;
                break;
            case 'Sale':
                category = data.find(item => item.name == props.name).category;
                break;
            case 'Gifts 🎁':
                category = data.find(item => item.name == props.name).category;
                break;
            default:
                break;
        }
        return (
            <div className="absolute bg-white p-[40px] pt-[20px] w-[100vw] top-full left-0 z-10">
                <div className="flex justify-center mx-[40px]">
                    {category.map((item, index) => {
                        return (
                            <ChildMenu key={index} arr={item.arr}></ChildMenu>
                        )
                    })}
                </div>
            </div>
        )
    }
    function RenderNavBar() {
        const arrayHaveSubNav = ['Men', 'Women', 'Kids', 'Customise', 'Sale', 'Gifts 🎁'];
        const arrayNotSubNav = ['SNKRS'];

        return (<Fragment>
            {arrayHaveSubNav.map((navBarName, index) => (
                <li key={index} id={`sub-item-${index}`} className='group flex items-center'>
                    <p className='
                        item
                        px-[12px] relative py-[18px] cursor-pointer
                        after:absolute after:bg-black after:w-full after:h-[2px] after:left-0 after:bottom-0 after:hidden
                        group-hover:after:block
                        '>{navBarName}
                    </p>
                    <div id={`sub-menu-${index}`} className=' group-hover:block hidden'>
                        <RenderSubMenu name={navBarName}></RenderSubMenu>
                    </div>
                </li>
            ))}
            {arrayNotSubNav.map((navBarName, index) => (
                <li key={index} id={`sub-item-${index}`} className='group flex items-center'>
                    <p className='
                        item
                        px-[12px] relative py-[18px] cursor-pointer
                        after:absolute after:bg-black after:w-full after:h-[2px] after:left-0 after:bottom-0 after:hidden
                        group-hover:after:block
                        '>{navBarName}
                    </p>
                </li>
            ))}
        </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="overplay fixed inset-0 bg-black opacity-50 hidden"></div>
            <div id='header-body' className="w-full bg-white transition-all z-10">
                <div className="w-full h-[60px] relative">
                    <div className="max-w-[1400px] mx-auto flex justify-between items-center h-full">
                        <img className='h-5' src={nikeLogo} alt=""/>
                        <div className="navbar-header flex items-center absolute top-0 left-0 w-[100vw]">
                            <div className="mx-auto">
                                <ul className='flex'>
                                    <RenderNavBar></RenderNavBar>
                                </ul>
                            </div>
                        </div>
                        <div className="search-header-container ml-auto relative h-full">
                            <div className="search-header absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-500">
                                <div className="absolute h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#e5e5e5]">
                                    <svg
                                        aria-hidden="true"
                                        className="pre-nav-design-icon"
                                        width={24}
                                        height={24}
                                        fill="none"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            d="M13.962 16.296a6.716 6.716 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                                        />
                                    </svg>
                                </div>
                                <input type="text" className="px-[48px] py-[8px] w-[180px] rounded-full bg-[#f5f5f5] outline-none text-[16px] hover:bg-[#e5e5e5] transition-all duration-500" placeholder='Search' />
                            </div>
                        </div>
                        <div className="flex justify-center items-center relative">
                            <div className="heart-header favorite mx-4 hover:bg-[#e5e5e5] rounded-full p-2 cursor-pointer">
                                <svg
                                    aria-hidden="true"
                                    className="pre-nav-design-icon"
                                    width={24}
                                    height={24}
                                    fill="none"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 0-7.007A4.923 4.923 0 0 1 7.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451"
                                    />
                                </svg>
                            </div>
                            <div className="cart-header hover:bg-[#e5e5e5] rounded-full p-2 cursor-pointer">
                                <svg
                                    aria-hidden="true"
                                    className="pre-nav-design-icon"
                                    width={24}
                                    height={24}
                                    fill="none"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                        d="M8.25 8.25V6a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 1 1 0 4.5H3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V8.25H17.5"
                                    />
                                </svg>
                            </div>
                            <div className="cancel-search absolute top-1/2 -translate-y-1/2 right-0 hover:opacity-70 cursor-pointer hidden">
                                <p className='text-[16px] text-[#111]'>Cancel</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='space bg-white w-full hidden'></div>
        </Fragment>

    )
}
