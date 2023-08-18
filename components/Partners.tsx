'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Partners = () => {
  return (
    <div className='partners'>
        <div className='text-center'>
            <motion.h2
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: .7, delay: .5}}
            >Partners</motion.h2>
            <motion.p 
                className='grey'
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: .7, delay: 1}}
            >Some of the companies working with us</motion.p>
        </div>
        <motion.div 
            className='images md:mt-10'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: .7, delay: 1.5}}
        >
            <div >
                <Image className='partner md:w-[276px] md:h-[80px]' src={'/assets/images/partners-1.png'} alt='partners' width={200} height={100} />
                <Image className='partner' src={'/assets/images/partners-2.png'} alt='partners' width={200} height={100} />
                <Image className='partner' src={'/assets/images/partners-3.png'} alt='partners' width={200} height={100} />
                <Image className='partner' src={'/assets/images/partners-4.png'} alt='partners' width={200} height={100} />
            </div>
            <div>
                <Image className='partner' src={'/assets/images/partners-5.png'} alt='partners' width={200} height={150} />
                <Image className='partner' src={'/assets/images/partners-6.png'} alt='partners' width={200} height={150} />
                <Image className='partner' src={'/assets/images/partners-7.png'} alt='partners' width={200} height={150} />
                <Image className='partner' src={'/assets/images/partners-8.png'} alt='partners' width={200} height={150} />
                <Image className='partner' src={'/assets/images/partners-9.png'} alt='partners' width={200} height={150} />
            </div>
        </motion.div>
    </div>
  )
}

export default Partners