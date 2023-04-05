import React from 'react'
import  Navbar from './Navbar'

function layout({children}) {
  return (
    <>
    <Navbar/>
      {children}
    </>
  )
}

export default layout
