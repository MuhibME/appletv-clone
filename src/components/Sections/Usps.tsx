'use client'
import React from 'react'
import Container from '../Container';
import FadeIn from '../FadeIn';


const Usps = () => {
  return (
  <Container className='text-white text-3xl md:text-4xl max-w-[692px] py-36 font-bold space-y-12 z-10 relative'>
        <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
        </FadeIn>
        <FadeIn>
        <p>Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.</p>
        </FadeIn>
        <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.1</p>
        </FadeIn>
        <FadeIn>
        <p>Share a single subscription with up to five people.</p>
        </FadeIn>
    
  </Container> 
  )
}

export default Usps;