"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Cursor />
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-52">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to Our Campus Paper Cup Reduction Initiative
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Join us in reducing the environmental impact of single-use paper cups. 
            Our goal is to save thousands of cups and reduce carbon emissions across the campus. 
            Let's make a sustainable difference together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href={'/Learn_more'}
              className="inline-block bg-green-700 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-800 transition duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <motion.div 
          className="text-center mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-semibold text-green-700 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
            How You Can Contribute
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
          >
            Reduce the number of paper cups by bringing your own reusable cup, 
            participate in awareness campaigns, and encourage your peers to make a difference!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <Link
              href="https://community-puce-eta.vercel.app/"
              className="inline-block bg-green-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-700 transition duration-300"
            >
              Get Involved
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
