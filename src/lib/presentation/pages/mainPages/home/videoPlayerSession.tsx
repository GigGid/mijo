import { Video } from '../../../components/video-page'

export const VideoPlayerSession = () => {
    const src="https://youtu.be/sricmfDcVvE"
    const header="Start doing more with Sendy"
    const description="We bring together everything that’s required for e-commerce and consumer brands to ship goods to consumers across Africa. It’s our mission to make trade easier."
    const button="Get a quote" 

  return (
   <>
   <Video header={header} description={description} button={button} src={src}/>
   </>
  )
}
