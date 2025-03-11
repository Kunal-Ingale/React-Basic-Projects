import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import About from './About'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/> {/* outlet : TO add chidren routes(Nesting)... Acts like placeholder */}
      <About/>

    </div>
  )
}

export default Layout
