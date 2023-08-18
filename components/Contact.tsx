'use client'
import React from 'react'
import { Form } from './Form'
import { required, email } from './fieldValidations';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='h-screen relative flex flex-col md:flex-row overflow-hidden'>
        <motion.div 
            className='w-[45%] contact'
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: .7, delay: .5}}
        >
            <h1 className='big-t'>How can <span>we help?</span></h1>
            <p className='grey pt-4'>Reach out to inquire about how WorkFin can help your business grow.</p>
        </motion.div>
        <Form 
                  fields={[
                      {
                          name: 'name',
                          type: 'text',
                          label: 'Company name',
                          placeholder: '',
                          validations: [required]
                      },
                      {
                          name: 'customerEmail',
                          type: 'text',
                          label: 'Email',
                          placeholder: '',
                          validations: [required, email]
                      },
                      {
                          name: 'message',
                          type: 'textArea',
                          label: 'Message',
                          placeholder: '',
                          validations: [required]
                      },
                  ]}
                  onSuccessMessage={'Your message was sent successfully. We will contact you as soon as possible.'}
                  onErrorMessage={'Please try again in a few minutes.'}
                  submitButtonLabel={'Send'}
                  emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/diversity-email'}
          />
          <Image className='contact-vector md:block hidden' src={'/assets/images/contact-vector.png'} alt='vector' width={500} height={500}  />
    </div>
  )
}

export default Contact
