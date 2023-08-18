'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type OptimizeLayoutTypes = {
    title?: string,
    image: string,
    subtitle: string,
    text: string,
    list: any,
    reverse?: boolean,
}

const OptimizeLayout = ({title, image, text, subtitle, list, reverse}:OptimizeLayoutTypes) => {
  return (
    <div className={`flex  ${reverse ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'}`}>
        <motion.img 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: .7, delay: 1}}
            className='md:w-1/2' src={image} alt=''
        />
        <motion.div 
            className='md:w-1/2 flex'
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: .7, delay: 1.7}}
        >
            <div className={`optimize ${title ? '' : 'md:pt-24'}`}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className='grey pt-1 pb-8'>{text}</p>
                <ul className='optimize-list'>
                    <li className='flex items-center'>
                        <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                        <p className='pl-4'>{list[0]}</p>
                    </li>
                    <li className='flex items-center'>
                        <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                        <p className='pl-4'>{list[1]}</p>
                    </li>
                    <li className='flex items-center'>
                        <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                        <p className='pl-4'>{list[2]}</p>
                    </li>
                    <li className={`${list[3] ? 'flex items-center' : 'hidden'}`}>
                        <Image className='check' src={'/assets/images/check.png'} alt='check' height={20} width={25} />
                        <p className='pl-4 '>{list[3]}</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default OptimizeLayout
