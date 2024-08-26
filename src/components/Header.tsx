import React from 'react'
import Link from 'next/link';
import {FaApple}from 'react-icons/fa'
import Container from './Container';
import Button from './Button';


const Header = () => {
  return (
    <>
        <header className='bg-backgroundcontrast text-white '>
            <Container className='flex items-center min-h-[--header-row-height] z-20'>
                <Link className='h-[--header-row-height] flex items-center p-6 -ml-6 ' href={'/'}><FaApple className='h-[25px] w-[25px]'/><span className='sr-only'>back to home</span></Link>
            </Container>
        </header>
        <div className='z-20 sticky top-0 transition-all bg-backgroundcontrast text-white'>
            <Container className='items-center flex min-h-[--header-row-height] justify-between'>
                <p className='text-xl font-semibold'>Apple TV+</p>
                <Button size='sm'>Stream Now</Button>
            </Container>
        </div>
    </>
)
}

export default Header;