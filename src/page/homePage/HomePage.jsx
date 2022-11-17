import React from 'react'
import Feature from './featureHomePage/Feature'
import PacePackHomePage from './pacePackHomePage/PacePackHomePage'
import TrendingHomePage from './trendingHomePage/TrendingHomePage'
import VideoHomePage from './videoHomePage/VideoHomePage'

export default function HomePage() {
  return (
    <div style={{maxWidth:"1280px",marginLeft:"128px"}}>
      <VideoHomePage/>
      <Feature/>
      <TrendingHomePage/>
      <PacePackHomePage/>
    </div>
  )
}
