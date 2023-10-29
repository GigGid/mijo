import React from 'react'
import { Video } from '../../../../components/video-page'


export const VideoPlayerSession = () => {
    const src="https://youtu.be/sricmfDcVvE"
    const header="Ready to take your business to the next level?"
    const button="Get a quote" 

  return (
   <div className="vid-session">
   <Video header={header} button={button} src={src}/>
   </div>
  )
}
