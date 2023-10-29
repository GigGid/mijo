
import { Video } from '../../../../components/video-page'


export const VideoPlayerSession = () => {
    const src="https://youtu.be/sricmfDcVvE"
    const header="Take the next big step and grow"
    const button="Get Started" 

  return (
   <div className="vid-session">
   <Video header={header} button={button} src={src}/>
   </div>
  )
}
