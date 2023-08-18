'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'



const Header = () => {
  return (
    <motion.div 
    initial={{opacity: 0, y: -30}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: .7, delay: .3}}
    className='flex py-4 justify-around'
    >
      <Image src={'/assets/images/logo.png'} alt='logo' height={60} width={180} />
      <nav className='md:flex hidden nav items-center'>
        <a href="">What we do</a>
        <a href="">Benefits</a>
        <a href="">About us</a>
        <a href="">Partners</a>
      </nav>
      <button className='button'>Contact us</button>
    </motion.div>
  )
}

export default Header