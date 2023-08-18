'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


const Banner = () => {
  return (
    <div className='h-screen flex'>
      <motion.div 
        className='md:pl-[60px] md:pt-[7%]'
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: .7, delay: 1.5}}
      >
        <h1 className='big-t'>Integrated solutions to</h1>
        <h1 className='big-t'>optimize <span>your business</span></h1>
        <p className='grey md:pt-4'>Leaders in automated solutions and business performance reporting to the Health<br/> & Care Sector.</p>
        <ul>
            <li className='flex items-center pt-4'>
                <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                <p className='pl-3'>Save time and costs.</p>
            </li>
            <li className='flex items-center pt-4'>
                <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                <p className='pl-3'>Reduce risk by minimising manual interventions when <br/> entering data.</p>
            </li>
            <li className='flex items-center pt-4'>
                <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                <p className='pl-3'>One login, across multiple entities at the same time.</p>
            </li>
        </ul>
        <button className='button md:mt-6'>Read More</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: .7, delay: 1}}
      >
        <Image src={'/assets/images/banner-shape.png'} alt='Shape' width={800} height={700} className='banner-shape md:block hidden'/>
      </motion.div>
    </div>
  )
}

export default Banner
