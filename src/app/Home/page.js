import React from 'react'
import { Navbar } from '../component/Navbar'
import { Canvas } from '../component/Canvas'

export default function page() {
  return (
    <div className='bg-white h-full w-full text-black'>
      <Navbar />   
      <div className=''>
        <Canvas />
      </div>
      <div className='border-t-2 z-10 fixed justify-center text-center w-full h-screen flex flex-col items-center '>
      </div>
    </div>
  )
}
