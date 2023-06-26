import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Routers from '../../Router/Routers'
export default function Layout() {
  return (
    <div>
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  )
}
