import { Video } from '../../../../components/video-page'


export const VideoPlayerSession = () => {
    const src="https://i.ytimg.com/vi/qq_IeyAEPdc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACpAWKAgwIABABGE8gXChlMA8=&rs=AOn4CLCpVv3rf6-5oxm571Mv2XA9vaOWgA"
    const header="Get 5 free pick ups monthly"
    const button="Request quote" 

  return (
   <div className="vid-session">
   <Video header={header} button={button} src={src}/>
   </div>
  )
}
