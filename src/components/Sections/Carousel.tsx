'use client'
import React, { useMemo, useState }  from 'react'
import Container from '../Container'
import Image from 'next/image'
import { movies, randomMoviesSet1, randomMoviesSet2 } from '../movies'
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react'
import {motion , useMotionValueEvent} from 'framer-motion'
import { useWindowSize } from 'react-use'
import Button from '../Button'



type Movie = {
    name: string;
    poster: string;
  };


const Carousel = () => {
    const SmallVideoCarousel = ({movies} : {movies: Movie[]})=>{
        return ( 
            <div className='overflow-clip'>
            <div className='flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]'>
                {movies.map((movie, index)=>(
                <div  key={index} className='aspect-video w-[40vw] md:w-[23vw] shrink-0'> 
                    <Image className='w-full h-full object-cover rounded-xl' src={movie.poster} alt={movie.name} height={300} width={500}/>
                </div>
            ))}</div>
            </div>
        )
    }
    const {width, height} = useWindowSize();
    const maximumScale  = useMemo(()=>{
        const windowYRatio = height/width;
        const xScale = 1.66667;
        const yScale =  xScale * (16/9)*windowYRatio;
        return Math.max(xScale,yScale)
    },[width,height]);
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: carouselWrapperRef,
        offset: ['start start', 'end start']
    });
    const scale = useTransform(scrollYProgress, [0.3 , 0.5,0.66], [maximumScale*1.1,maximumScale,1])
    const postersOpacity = useTransform(
        scrollYProgress, [0.60, 0.70] , [0,1]
    );
    const posterTranslateXLeft = useTransform(scrollYProgress, [0.64, 0.66] , [-20,0])
    const posterTranslateXRight = useTransform(scrollYProgress, [0.64, 0.66] , [20,0])
    const [carouselVariant, setCarouselVariant] = useState<'inActive' | 'Active'>('inActive');
    useMotionValueEvent(scrollYProgress, 'change',(progress)=>{
        if(progress >= 0.67){
            setCarouselVariant('Active');
        }else{
            setCarouselVariant('inActive')
        }
    })
    
    return (
    <motion.div animate={carouselVariant} className='bg-backgound'>
        <div ref={carouselWrapperRef} className='overflow-clip h-[300vh] mt-[-100vh]'>
            <div className='h-screen sticky top-0 flex items-center'>
            <div className='flex relative gap-5 mb-5 left-1/2 -translate-x-1/2'>
                <motion.div  style={{opacity:postersOpacity, x:posterTranslateXLeft}} className='aspect-[9/16] md:aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip'>
                    <Image className='w-full h-full object-cover' src={movies[0].poster} alt={movies[0].name} width={1920} height={1080} />
                </motion.div>
                <motion.div style={{scale}} className='relative aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-clip'>
                    <Image className='w-full h-full object-cover' src={movies[1].poster} alt={movies[1].name} width={1920} height={1080} />
                    <motion.div variants={{
                        Active: {opacity:1},
                        inActive: {opacity:0}
                    }} className='absolute flex flex-col md:flex-row  gap-4 md:gap-0 md:justify-between p-5 items-center text-white left-0 bottom-0 w-full'>
                        <p>Best Video Title</p>
                        <Button >Watch Now</Button>
                    </motion.div>
                </motion.div>
                <motion.div  style={{opacity:postersOpacity, x:posterTranslateXRight}}  className='aspect-[9/16] md:aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip'>
                    <Image className='w-full h-full object-cover' src={movies[2].poster} alt={movies[2].name} width={1920} height={1080} />
                </motion.div>
            </div>
        </div>
    </div>
            <motion.div 
            variants={{
                Active: {opacity:1,y:0},
                inActive: {opacity:0,y:20},
            }}
            transition={{duration:0.4}}
            className='space-y-3 md:-mt-[calc((100vh-(100vh*(9/16)))/2)] -mt-[calc((300px-(60vw*(16/9)))/2)] md:pt-4'>
            <SmallVideoCarousel movies={randomMoviesSet1}/>
            <div className='[--duration:70s] [--carousel-offset:-32px]'>
                <SmallVideoCarousel movies={randomMoviesSet2}/>
            </div>
            </motion.div>
        
    </motion.div>
  )
}

export default Carousel;


