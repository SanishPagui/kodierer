'use client'

import React from 'react';
import Canvas from '../component/Canvas';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-white h-full w-full text-black">
      <div className="fixed">
        <Canvas />
      </div>
<<<<<<< HEAD
      <div className='border-t-2 z-10 fixed justify-center text-center w-full h-screen flex flex-col items-center '>
      </div>
    </div>
  )
=======
      <div className="relative border-t-2 z-10 border-t-zinc-500 justify-center text-center w-full h-screen flex flex-col items-center">
      <Link href={'Game'}><h1 className='text-7xl font-bold'>Click Here To Start The Game</h1></Link>
      
      </div>
    </div>
  );
>>>>>>> 683635f3bf3d8e690390e25f0de00e2f82fbad26
}
