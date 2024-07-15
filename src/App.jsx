import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Timeline from './components/Timeline'
import Accomplishments from './components/Accomplishments'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='md:ml-[4rem] mx-4 md:mx-0'>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <Footer />
    </div>
  )
}

export default App