import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Poster from './Poster'
import Main_Part from './pages/Main_Part'
import Services from './pages/Services'
import About from './pages/About'
import Footer from './pages/Footer'
import WhatsAppButton from './components/WhatsAppButton'


function App() {

  return (
    <>
    <div className='w-full min-h-screen flex flex-col items-center overflow-x-hidden'>
      <Navbar/>
      <div className='w-full h-[2px] bg-orange-800'></div>
      <Poster />
      <Main_Part />
      <Services />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
    </>
  )
}

export default App
