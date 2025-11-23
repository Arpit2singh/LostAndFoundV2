import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Particles from './ReactBitsElement/Particle'
const Frontui = () => {
  return (
    <div>
        <div style={{position : "fixed" , zIndex : -1 , top:0 , left:0 , height: "100vh" , width : "100vw" ,  }} className='bg-gradient-to-br from-blue-950 via-black to-gray-900 ' > <Particles/> </div>
        <div style={{position : "relative" , zIndex : 1 , top:0 , left:0 , height: "100vh" , width : "100vw"}} >
        <NavBar/>
        <HeroSection/>
        <Footer/>
        </div>
    </div>
  )
}

export default Frontui