import React from 'react'
import TopBar from '../components/TopBar'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  const location = useLocation();
  const hideHeader = ['/login'].includes(location.pathname)
  return (
    <div>
      {!hideHeader && <TopBar/>}
      {!hideHeader && <Navbar/>}
        <Outlet/>
        <Footer />
      
    </div>
  )
}

export default Layout
