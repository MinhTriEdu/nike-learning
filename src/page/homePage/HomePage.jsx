import React from 'react'
import Feature from '../../Component/homePageComponent/featureHomePage/Feature'
import PacePackHomePage from '../../Component/homePageComponent/pacePackHomePage/PacePackHomePage'
import TrendingHomePage from '../../Component/homePageComponent/trendingHomePage/TrendingHomePage'
import AdsHomePage from '../../Component/homePageComponent/adsHomePage/AdsHomePage'
import TypesIntroduce from '../../Component/homePageComponent/typesIntroduce/TypesIntroduce'
import GearUp from '../../Component/homePageComponent/gearUp/GearUp'
import MoreNike from '../../Component/homePageComponent/moreNike/MoreNike'
import HintCategory from '../../Component/homePageComponent/hintCategory/HintCategory'

export default function HomePage() {
  return (
    <div className='
      lg:px-9
      w-full px-4 max-w-[1500px] mx-auto
      '>
      <AdsHomePage></AdsHomePage>
      <TypesIntroduce></TypesIntroduce>
      <GearUp></GearUp>
      <Feature></Feature>
      <MoreNike></MoreNike>
      <HintCategory></HintCategory>
      {/* <VideoHomePage/>
      <Feature/>
      <TrendingHomePage/>
      <PacePackHomePage/> */}
    </div>
)
}
