import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  )
}

export default MainLayouts
