

import React from 'react'
import Gamified from '../Game/Gamified'
import Cursor from '../component/Cursor'

export default function page () {
  return (
    <div className='bg-purple-300 h-screen w-full text-black'>
        <Cursor/>
        <Gamified/>
    </div>
  )
}
