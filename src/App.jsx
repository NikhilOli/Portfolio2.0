import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Timeline from './components/Timeline'
import Accomplishments from './components/Accomplishments'

const App = () => {
  return (
    <>
    <div className='ml-[9rem]'>

      <Header />
      {/* <Section grid> */}
      <Hero />
      {/* <BgAnimation /> */}
      {/* </Section> */}
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </div>
    </>
  )
}

export default App