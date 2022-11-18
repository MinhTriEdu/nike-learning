import React from 'react'
import Feature from './featureHomePage/Feature'
import PacePackHomePage from './pacePackHomePage/PacePackHomePage'
import TrendingHomePage from './trendingHomePage/TrendingHomePage'
import VideoHomePage from './videoHomePage/VideoHomePage'

export default function HomePage() {
  return (
    <div style={{margin:"0 5rem"}}>
      <VideoHomePage/>
      <Feature/>
      <TrendingHomePage/>
      <PacePackHomePage/>
    </div>
)
}
