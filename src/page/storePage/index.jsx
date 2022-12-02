import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoryFilterMobile from '../../Component/storePageComponent/CategoryFilterMobile/CategoryFilterMobile'
import FilterHeader from '../../Component/storePageComponent/filterHeader/FilterHeader'
import FilterMobile from '../../Component/storePageComponent/filterMobile/FilterMobile'
import FilterNav from '../../Component/storePageComponent/filterNav/FilterNav'
import StoreBody from '../../Component/storePageComponent/storeBody/StoreBody'
import './animation.css'


const Index = () => {
  const showFilterNav = useSelector(state => state.rootReducerStorePage.showFilterNav)
  return (

    <div>
      <FilterHeader />
      <div className="
        lg:hidden
        ">
        <CategoryFilterMobile></CategoryFilterMobile>
        <FilterMobile></FilterMobile>
      </div>
      <div className={`
        flex transition-all
        ${showFilterNav ? 'lg:ml-0' : 'lg:ml-[-300px]'}
        `}>
        <div className="
          lg:block
          pb-5 hidden menu-appear
          ">
          <FilterNav />
        </div>
        <StoreBody />
      </div>
    </div>
  )
}
export default Index;
