'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className='fixed w-full h-24 flex items-center justify-between px-8 bg-green-200 shadow-xl z-[999] drop-shadow-xl'
    >
      <div className='text-blue-900'>
        <Link href={'/'}>
          <h1 className="view text-4xl font-semibold transition-colors">
            CupConscious
          </h1>
        </Link>
      </div>
      <div>
        <ul className='flex space-x-8 text-2xl'>
          <Link href={'/'}>
            <li className='text-blue-600 transition-all'>
              Home
            </li>
          </Link>
          <Link href={'/EventGame'}>
            <li className='text-blue-600 transition-all'>
              Events
            </li>
          </Link>
          <Link href={'/Analysis'}>
            <li className='text-blue-600 transition-all'>
              Analysis
            </li>
          </Link>
          <Link href={'/Community'}>
            <li className='text-blue-600 transition-all'>
              Community
            </li>
          </Link>
          <Link href={'/Contacts'}>
            <li className='text-blue-600 transition-all'>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </motion.div>
  )
}
