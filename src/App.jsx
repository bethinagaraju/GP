import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/navbar'
import Hero from './assets/components/hero'
import AboutComponent from './assets/components/about'
import ClientsSlider from './assets/components/clentslider'
import Feature from './assets/components/feature'
import Services from './assets/components/services'
import CallToAction from './assets/components/calltoaction'
import Portfolio from './assets/components/portfolio'
import Stats from './assets/components/stats'
import CarouselF from './assets/components/carouser'
import Team from './assets/components/team'
import MapComponent from './assets/components/mapcomponent'
import Footer from './assets/components/footer'


function App() {


  return (
    <>
    <div className='App-div'>
      <Navbar style={{position: 'sticky', top: 0}}/>
      <div style={{backgroundColor: 'white'}}>
        <Hero/>
        <AboutComponent/>
        <ClientsSlider/>
        <Feature/>
        <Services/>
        </div>
        <div>
      <CallToAction style={{backgroundColor: 'none'}}/>
      </div>
     
        <Portfolio/>
      <div style={{backgroundColor: 'white'}}>
        <Stats/>
      <CarouselF/>
      <Team/>
      <MapComponent/>
      <Footer/>
      </div>
      
        </div>
     
     

    </>
  )
}

export default App
