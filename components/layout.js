import React from 'react'
import  Navbar from './Navbar'
import Footer from './Footer'

function layout({children}) {
  return (
    <>
    <Navbar/>
      {children}
    <Footer/>
    </>
  )
}

export default layout
