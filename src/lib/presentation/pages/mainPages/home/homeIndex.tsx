
import { createMedia } from "@artsy/fresnel";
import HomeForDesktops from "./homeForDesktops";



function HomeIndex() {
    const { MediaContextProvider, Media } = createMedia({
        breakpoints: {
          md: 0,
          lg: 999,
        },
      });

  return (
   <MediaContextProvider>
      <Media at="lg">
       <HomeForDesktops/>
        </Media>
        <Media at="md">
       {/* <SignInForTablet/> */}
        </Media>
        
      </MediaContextProvider>
  )
}

export default HomeIndex

