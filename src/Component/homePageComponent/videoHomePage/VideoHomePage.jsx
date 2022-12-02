import React from 'react'
import ReactPlayer from 'react-player';
import { useRef } from 'react';

export default function VideoHomePage() {
  const playerRef = useRef(null);
  return (
    <div className='video-homepage'>
        <ReactPlayer className="video-homepage-video"
        url="https://www.youtube.com/watch?v=U1yX7awE5P0"
        width="100%"
        height="600px"
        playing={true}
        playsinline
        controls={true}
        playIcon
        muted={true}
        />
    </div>
  )
}
