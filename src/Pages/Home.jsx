import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Features from '../Components/Features'
import UseCases from '../Components/UseCases'
import PricingAndIntegrations from '../Components/PricingAndIntegrations'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Features/>
      <UseCases/>
      <PricingAndIntegrations/>
      <Contact/>
    </div>
  )
}

export default Home