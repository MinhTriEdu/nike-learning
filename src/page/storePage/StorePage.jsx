import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilterHeader from '../../Component/storePageComponent/filterHeader/FilterHeader'
import FilterNav from '../../Component/storePageComponent/filterNav/FilterNav'
import StoreBody from '../../Component/storePageComponent/storeBody/StoreBody'
export default function StorePage() {
  const counter = useSelector(state => state.rootReducerStorePage.showFilterNav)
  return (

    <div>
      <FilterHeader />
      <div className={`
      flex transition-all
      ${counter ? 'ml-0' : 'ml-[-300px]'}
      `}>
        <div className="pb-5">
          <FilterNav />
        </div>
        <StoreBody />
      </div>
    </div>
  )
}
