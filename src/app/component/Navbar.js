import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='fixed w-full h-24 flex items-center justify-between px-8 bg-green-800 shadow-xl'>
        <div>
            <Link href={'/'}>
                <h1 className=" text-4xl font-semibold text-white transition-colors">
                    Me & My Homies Hate Cups
                </h1>
            </Link>
        </div>
        <div>
            <ul className='flex space-x-6 text-lg'>
            <Link href={'/Analysis'}>
                    <li className='text-blue-800 hover:text-blue-600 hover:underline transition-all'>
                        Analysis
                    </li>
                </Link>
                <Link href={'/Community'}>
                    <li className='text-blue-800 hover:text-blue-600 hover:underline transition-all'>
                        Community
                    </li>
                </Link>
                <Link href={'/Contacts'}>
                    <li className='text-white  hover:underline transition-all'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

