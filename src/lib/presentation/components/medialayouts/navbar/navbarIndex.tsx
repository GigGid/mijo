
import { createMedia } from "@artsy/fresnel";
import NavbarForDesktop from "./navbarForDesktop";
import NavbarForTablet from "./navbarforTablet";



function NavbarIndex() {
    const { MediaContextProvider, Media } = createMedia({
        breakpoints: {
          md: 0,
          lg: 1200,
        },
      });

  return (
   <MediaContextProvider>
      <Media at="lg">
       <NavbarForDesktop/>
        </Media>
        <Media at="md">
       <NavbarForTablet/>
        </Media>
        
      </MediaContextProvider>
  )
}

export default NavbarIndex

