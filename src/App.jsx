import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import GradientLine from './components/GradientLine'

const App = () => {
  return (
    <>
    <div className='ml-[9rem]'>

      <Header />
      {/* <Section grid> */}
      <Hero />
      {/* <BgAnimation /> */}
      {/* </Section> */}
      <GradientLine />
      <Projects />
    </div>
    </>
  )
}

export default App