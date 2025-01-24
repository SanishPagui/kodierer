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
<<<<<<< HEAD
      <div className='border-t-2 z-10 fixed justify-center text-center w-full h-screen flex flex-col items-center '>
=======
      <div className='border-t-2 border-t-green-800 z-10 fixed justify-center text-center w-full h-screen flex flex-col items-center '>
        <h1 className='text-9xl font-bold'>Waste Trees, Save Cup</h1>
>>>>>>> c92275817fcc17bc878070803c8dda2982cec8e6
      </div>
    </div>
  )
}