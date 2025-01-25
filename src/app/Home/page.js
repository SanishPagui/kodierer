'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Canvas from '../component/Canvas';

export default function Page() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen text-gray-800 flex">
      <div className="fixed left-0 top-0 w-1/3 h-full z-0">
        <Canvas />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}  // Start with opacity 0 and 50px down
        animate={{ opacity: 1, y: 0 }}   // Animate to opacity 1 and move to original position
        transition={{ duration: 1.5, ease: 'easeOut' }}  // Smooth transition
        className="ml-[33%] w-2/3 p-12 space-y-8 relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="text-5xl font-bold text-green-800 mb-6 pt-16"
        >
          The Hidden Costs of Paper Cups
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
          className="bg-green-50 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Environmental Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Deforestation', text: 'Over 20 million trees are cut down annually for single-use paper cups.' },
              { title: 'Carbon Emissions', text: 'Every 4 cups produce approximately 1 pound of CO2.' },
              { title: 'Recycling Rate', text: 'Less than 1% of paper cups are actually recycled.' },
              { title: 'Water Consumption', text: '4 billion gallons of water used annually in cup production.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 + index * 0.2 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-green-600 mb-2">{item.title}</h3>
                <p className="text-red-600 font-bold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
          className="bg-green-100 p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            How You Can Help
          </h2>
          <ul className="space-y-3 list-disc list-inside text-lg">
            <li>Bring your own reusable cup</li>
            <li>Choose in-house drinking when possible</li>
            <li>Educate friends about sustainable practices</li>
            <li>Support campus sustainability initiatives</li>
          </ul>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
          className="text-center"
        >
          <button
            onClick={() => router.push('/aware')}
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Read More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
