'use client'


import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='fixed w-full h-24 flex items-center justify-between px-8 bg-green-200 shadow-xl z-[999] drop-shadow-xl'>
        <div className='text-blue-900'>
            <Link href={'/'}>
                <h1 className="view text-4xl font-semibold transition-colors">
                    Me & My Homies Hate Cups
                </h1>
            </Link>
        </div>
        <div>
            <ul className='flex space-x-6 text-lg'>
                <Link href={'/EventGame'}>
                    <li className='text-blue-600  transition-all'>
                        Events
                    </li>
                </Link>
                <Link href={'/Analysis'}>
                    <li className='text-blue-600  transition-all'>
                        Analysis
                    </li>
                </Link>
                <Link href={'/Community'}>
                    <li className='text-blue-600  transition-all'>
                        Community
                    </li>
                </Link>
                <Link href={'/Contacts'}>
                    <li className='text-blue-600  transition-all'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

