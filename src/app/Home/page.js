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
    </div>
  );
};
