'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


const CARD_DATA:any = [
  {
    image: '/assets/images/area-1.png',
    title: 'People',
    text: 'Resource Management , Time Tracking, Payroll Management'
  },
  {
    image: '/assets/images/area-2.png',
    title: 'Site products & Services',
    text: 'Transactions and Management of your products and services for your industry sector.'
  },
  {
    image: '/assets/images/area-3.png',
    title: 'Finance & Accounting',
    text: 'Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.'
  },
]

const Areas = () => {
  return (
    <div className='text-center md:h-screen'>
      <motion.h2 
        className='font-bold text-3xl'
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: .7, delay: .5}}
      >We focus in all areas</motion.h2>
      <motion.span
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: .7, delay: .7}}
      >Implementation and integration</motion.span>
      <div className='grid md:grid-cols-3 md:gap-16 gap-10 mx-auto md:px-20 px-10 md:pt-10 '>
        {
          CARD_DATA.map((val:any, i:any) => (
            <motion.div 
            className='card'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: .7, delay: 1.5}}
            >
              <Image src={val.image} alt='' width={140} height={140} />
              <h2 className='w-full text-left text-xl pt-4'>{val.title}</h2>
              <p className='pt-2'>{val.text}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Areas
