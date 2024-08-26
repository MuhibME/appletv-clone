'use client'
import React from 'react'
import Button from '../Button';
import Container from '../Container';
import Image from 'next/image';
import { useScroll , useTransform ,motion} from 'framer-motion';
import { useRef } from 'react';


const Hero = () => {
    const videoContainnerRef = useRef<HTMLDivElement>(null);
    const  {scrollYProgress} = useScroll({
        target: videoContainnerRef,
        offset: ['start start', 'end end']
    })
    const opacity = useTransform(scrollYProgress, [0,0.3,0.7], [1,1,0])

  return (
    <div className=" relative bg-backgound text-white z-10">
        <motion.div style={{opacity}} ref={videoContainnerRef} className='absolute  left-0 w-full h-[200vh] '>
            <Image src={"/posters/napoleon.jpg"} width={1920} height={1080} alt=' 'className='sticky top-0 h-screen object-cover' priority/>
           
        </motion.div>
         <Container className='relative pb-7 z-10 h-[--hero-height] '>
            <motion.div 
            className='flex h-full flex-col items-start justify-end'
            variants={{
                hidden: {opacity:0},
                visible:{opacity:1}
            }}
            whileInView='visible'
            exit={'hidden'}
            animate={'hidden'}
            viewport={{amount:0.98}}
            >
            <h1 className='md:text-5xl text-4xl font-bold mb-10'>All Apple Originals. <br /> Only on Apple TV+</h1>
            <Button className='mb-16' size="lg">Stream Now</Button>
            <p className='font-semibold'>Watch on the tv app.</p>
            </motion.div>
          </Container> 
        </div>
  )
}

export default Hero;