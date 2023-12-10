
import './home.scss';
import VideoGridSession from "./video-grid-session";
import { OpportunitiesCardSession } from "./opportunities-card-session";
// import { Banner } from "./banner";
// import { Brands } from "./brands";
import { VideoPlayerSession } from "./videoPlayerSession";

function HomeForDesktops() {

 
  return (
    <>
      <VideoGridSession/>
      <OpportunitiesCardSession/>
      {/* <Banner/> */}
      {/* <Brands/> */}
      <VideoPlayerSession/>
    </>
  );
}

export default HomeForDesktops;
