import React, { useState } from 'react'
import Header from '../../component/header/Header'
import Sidebar from '../../component/sidebar/Sidebar'
import Hero from '../../component/home/Hero'
const Home = () => {
    const [openSideBar, setOpenSidebar] = useState(false)
 
const opensideBarToggle = () => {
  setOpenSidebar(!openSideBar)
}
    return (
    <div className='grid-container '>
    <Header opensideBarToggle={opensideBarToggle} />
    <Sidebar  opensideBarToggle={opensideBarToggle} openSideBar={openSideBar}/>
    <Hero />
   </div>
  )
}

export default Home