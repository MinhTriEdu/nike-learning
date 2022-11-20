import React, { Fragment, useEffect, useState } from 'react'
import HeaderAds from './HeaderAds/HeaderAds'
import HeaderBody from './HeaderBody/HeaderBody'
import HeaderFirst from './HeaderFirst/HeaderFirst'




export default function HeaderMain() {
    return (
        <Fragment>
           <HeaderFirst></HeaderFirst>
            <HeaderBody></HeaderBody>
            <HeaderAds></HeaderAds>
            <div className='bg-black w-full h-[100vh]'></div>
        </Fragment>
    )
}
