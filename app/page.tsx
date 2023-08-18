'use client'
import '../styles/globals.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Optimize from '../components/Optimize'
import About from '../components/About'
import Partners from '../components/Partners'
import Areas from '../components/Areas'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Areas />
      <Optimize />
      <About />
      <Partners />
      <Contact />
      <Footer />
      <div className='copyright'>
        <motion.p
            initial={{opacity: 0, y: -30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1, delay: .7}}
            ><a href="https://www.thehipposoft.com/" target='_blank' rel='noreferrer'>Created by <span className='font-semibold'>HippoSoft</span> | All Right Reserved</a>
          </motion.p>
      </div>
    </main>
  )
}
