import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"

export const Navbar = () => {
  return (
    <div className='fixed w-full h-32 flex justify-center items-center'>
        <div>
            <ul className='flex space-x-7 text-2xl '>
                <Link href={'/'}><li className='hover:underline'>Home</li></Link>
                <Link href={'/About'}><li  className='hover:underline'>About</li></Link>
                <Link href={'#'}><li  className='hover:underline'>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}
