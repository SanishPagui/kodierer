import React from 'react'
import Link from 'next/link';

export const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className='fixed w-full h-20 flex items-center justify-between px-8 bg-green-800 shadow-xl z-[999]'>
=======
    <div className='fixed w-full h-24 flex items-center justify-between px-8 bg-zinc-600 shadow-xl z-[999] drop-shadow-xl'>
>>>>>>> 683635f3bf3d8e690390e25f0de00e2f82fbad26
        <div>
            <Link href={'/'}>
                <h1 className="view text-4xl font-semibold text-white transition-colors">
                    Me & My Homies Hate Cups
                </h1>
            </Link>
        </div>
        <div>
            <ul className='flex space-x-6 text-lg'>
                <Link href={'/EventGame'}>
                    <li className='text-white  transition-all'>
                        Events
                    </li>
                </Link>
                <Link href={'/Analysis'}>
                    <li className='text-white  transition-all'>
                        Analysis
                    </li>
                </Link>
                <Link href={'/Community'}>
                    <li className='text-white  transition-all'>
                        Community
                    </li>
                </Link>
                <Link href={'/Contacts'}>
                    <li className='text-white  transition-all'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

