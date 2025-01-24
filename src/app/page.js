'use client'

import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './component/Cursor';
import Home from './Home/page';
import { Navbar } from './component/Navbar';
export default function page () {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className=' h-full w-full'>
      <Cursor />
      <Navbar/>
      <div className=''>
        <div className='sticky '>
        <Home/>
        </div>
        <div className='relative'>
        <Event/>
        </div>
      </div>
    </div>
  )
}
