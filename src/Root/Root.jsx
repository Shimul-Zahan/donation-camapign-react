import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
      <div className=''>
          <Navbar />
          <Outlet />
    </div>
  )
}

export default Root