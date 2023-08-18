'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const BOX_DATA:any = [
    {
        id: 1,
        icon: '/assets/images/about-1.png',
        title: 'Innovation:',
        text: 'We are dedicated to continuously innovating and enhancing our system implementation services to provide the best possible solutions for our clients.',
    },
    {
        id: 2,
        icon: '/assets/images/about-2.png',
        title: 'Quality:',
        text: 'Our solutions seamlessly connect all areas of your organization, improving collaboration and facilitating better decision-making',
    },
    {
        id: 3,
        icon: '/assets/images/about-3.png',
        title: 'Customer Focus:',
        text: `We are dedicated to understanding our clients' unique needs and concerns, to make informed decisions that optimize business performance.`,
    },
    {
        id: 4,
        icon: '/assets/images/about-4.png',
        title: 'Accountability:',
        text: 'Our belief in our systems and people gives us confidence in our accountability, both to our clients and to the wider healthcare community.',
    },
]

const About = () => {
  return (
    <div className='flex relative md:pt-24'>
        <div className='about md:pl-[60px]'>
            <motion.h1 
                className='big-t'
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: .7, delay: .5}}
            >About <span>us.</span></motion.h1>
            <motion.p 
                className='w-[58%] pt-4'
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: .7, delay: 1.5}}
            >
                At WorkFin, we help dental organizations thrive by providing them with cutting-edge
                technologies and seamless integration solutions that enhance efficiency, reduce costs,
                and drive growth. Our commitment to our clients is to achieve success through
                innovative and holistic approaches that adhere to the highest quality standards
            </motion.p>
            <motion.div 
                className='grid md:grid-cols-2 md:grid-rows-2 gap-8 w-[650px] md:pt-6 md:pb-6'
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: .7, delay: 1.8}}
            >
                {
                    BOX_DATA.map((val:any, index:any) => (
                        <div className='about-box rounded-xl bg-slate-500' key={val.id}>
                            <Image src={val.icon} alt='icon' width={35} height={30} />
                            <h2>{val.title}</h2>
                            <p className='grey'>{val.text}</p>
                        </div>
                    ))
                }
            </motion.div>
        </div>
        <motion.div
            className='md:block hidden'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: .7, delay: 1}}
        >
            <Image className='about-image' src={'/assets/images/about.png'} alt='Doctors image' width={550} height={600} />
            <Image className='about-vector' src={'/assets/images/about-vector.png'} alt='Doctors image' width={600} height={600} />
        </motion.div>
    </div>
  )
}

export default About