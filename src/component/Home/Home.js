import React from 'react'
import Facts from './Facts'
import Hero from './Hero'
import HeroImage from './HeroImage'
import Team from './Team'
import Works from './Works'

const Home = () => {
  return (
      <div className=' text-white'>
          
          <Hero></Hero>
          <Works></Works>
          <HeroImage></HeroImage>
          <Facts></Facts>
          <Team></Team>

    </div>
  )
}

export default Home