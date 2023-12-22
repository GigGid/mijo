import { Outlet } from 'react-router-dom'
import FooterForDesktop from './components/footer/medialayouts/footerForDesktop'
import NavbarForDesktop from './components/medialayouts/navbar/navbarForDesktop'
import FloatingButton from './components/floating-button/FloatingBtn'

export const MainIndex = () => {
  return (
   <>
   <NavbarForDesktop/>
   <Outlet/>
   <FloatingButton/>
   <FooterForDesktop/>
   </>
  )
}
