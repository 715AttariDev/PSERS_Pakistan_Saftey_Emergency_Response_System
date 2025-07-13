import About from '@/MyComponents/About'
import CallToAction from '@/MyComponents/CallToAction'
import Features from '@/MyComponents/Features'
import Footer from '@/MyComponents/Footer'
import HeroSection from '@/MyComponents/HeroSection'
import HowItWorksSection from '@/MyComponents/HowItWorksSection'
import TestimonialsSection from '@/MyComponents/TestimonialsSection'
import TrustedBySection from '@/MyComponents/TrustedBySection'
import WhySERSSection from '@/MyComponents/WhySERSSection'
import React from 'react'

const Home = () => {
  return (
    <main>
      <HeroSection/>
      <TrustedBySection/>
      <WhySERSSection/>
      <HowItWorksSection/>
      <Features/>
      <About/>
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>
    </main>
  )

}

export default Home