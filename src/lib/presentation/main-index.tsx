import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterForDesktop from './components/footer/medialayouts/footerForDesktop'
import NavbarForDesktop from './components/medialayouts/navbar/navbarForDesktop'

export const MainIndex = () => {
  return (
   <>
   <NavbarForDesktop/>
   <Outlet/>
   <FooterForDesktop/>
   </>
  )
}
