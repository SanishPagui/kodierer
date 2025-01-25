'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Canvas from '../component/Canvas';

export default function Page() {
 const router = useRouter();

 return (
   <div className="bg-white min-h-screen text-gray-800 flex">
     <div className="fixed left-0 top-0 w-1/3 h-full z-0">
       <Canvas />
     </div>

     <div className="ml-[33%] w-2/3 p-12 space-y-8 relative z-10">
       <h1 className="text-5xl font-bold text-green-800 mb-6 pt-16">
         The Hidden Costs of Paper Cups
       </h1>

       <section className="bg-green-50 p-6 rounded-xl shadow-lg">
         <h2 className="text-3xl font-semibold text-green-700 mb-4">
           Environmental Impact
         </h2>
         <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-white p-4 rounded-lg shadow-md">
             <h3 className="text-xl font-bold text-green-600 mb-2">Deforestation</h3>
             <p>Over <span className="font-bold text-red-600">20 million trees</span> are cut down annually for single-use paper cups.</p>
           </div>
           <div className="bg-white p-4 rounded-lg shadow-md">
             <h3 className="text-xl font-bold text-green-600 mb-2">Carbon Emissions</h3>
             <p>Every <span className="font-bold text-red-600">4 cups</span> produce approximately <span className="font-bold text-red-600">1 pound of CO2</span>.</p>
           </div>
           <div className="bg-white p-4 rounded-lg shadow-md">
             <h3 className="text-xl font-bold text-green-600 mb-2">Recycling Rate</h3>
             <p>Less than <span className="font-bold text-red-600">1%</span> of paper cups are actually recycled.</p>
           </div>
           <div className="bg-white p-4 rounded-lg shadow-md">
             <h3 className="text-xl font-bold text-green-600 mb-2">Water Consumption</h3>
             <p><span className="font-bold text-red-600">4 billion gallons</span> of water used annually in cup production.</p>
           </div>
         </div>
       </section>

       <section className="bg-green-100 p-6 rounded-xl shadow-lg">
         <h2 className="text-3xl font-semibold text-green-800 mb-4">
           How You Can Help
         </h2>
         <ul className="space-y-3 list-disc list-inside text-lg">
           <li>Bring your own reusable cup</li>
           <li>Choose in-house drinking when possible</li>
           <li>Educate friends about sustainable practices</li>
           <li>Support campus sustainability initiatives</li>
         </ul>
       </section>

       <div className="text-center">
         <button 
           onClick={() => router.push('/aware')} 
           className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
         >
           Read More
         </button>
       </div>
     </div>
   </div>
 );
}