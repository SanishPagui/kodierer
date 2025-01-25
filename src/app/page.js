'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './component/Cursor';
import Home from './Home/page';
import { Navbar } from './component/Navbar';
export default function page () {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy(); // Clean up on component unmount
      };
    }
  }, []);
  
  return (
    <div className=' h-full w-full'>
      <Cursor />
      <Navbar/>
      <div className=''>
        <div className='sticky '>
        <Home/>
        </div>
        <div className='relative'>
        </div>
      </div>
    </div>
  )
}
