import React from 'react'
import MyNav from '../components/navbar/Navbar'

const MainLayout = ({children}) => {
  return (
    <>
    <MyNav />
    {children}
    </>
  )
}

export default MainLayout