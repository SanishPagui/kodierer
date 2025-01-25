'use client';
import React, { useState } from 'react';
import { Navbar } from '../component/Navbar';
import { Mail, Phone, Globe } from 'lucide-react';
import Cursor from '../component/Cursor';
import { motion } from 'framer-motion'; // Importing Framer Motion

const EnvironmentalGroups = [
  {
    name: "Greenpeace India",
    description: "Leading environmental organization focused on climate action",
    email: "supporter.in@greenpeace.org",
    phone: "+91-11-4840-5000",
    website: "https://www.greenpeace.org/india/"
  },
  {
    name: "Centre for Science and Environment (CSE)",
    description: "Research and advocacy organization on environmental issues",
    email: "cse@cseindia.org",
    phone: "+91-11-2924-0350",
    website: "https://www.cseindia.org/"
  },
  {
    name: "WWF-India",
    description: "Wildlife and conservation focused organization",
    email: "support@wwfindia.net",
    phone: "+91-11-4150-4850",
    website: "https://www.wwfindia.org/"
  }
];

const Developers = [
  {
    name: "Sanish Pagui",
    description: "---------------------------",
    email: "sanishpagui162@gmail.com",
    phone: "9518548760",
    website: "https://www.linkedin.com/in/sanish-pagui-529789307/"
  },
  {
    name: "Jai Gauns Dessai",
    description: "---------------------------",
    email: "Jaistudymail13@gmail.com",
    phone: "8975038986",
    website: "https://www.linkedin.com/in/jaigd/"
  },
  {
    name: "Conrad Alves",
    description: "---------------------------",
    email: "cleophus775@gmail.com",
    phone: "8275677785",
    website: "https://www.linkedin.com/in/conrad-alves-906840288/"
  }
];

export default function ContactPage() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [cursorLocked, setCursorLocked] = useState(false);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    setCursorLocked(true);  // Lock cursor
  };

  const handleCloseModal = () => {
    setSelectedGroup(null);
    setCursorLocked(false);  // Unlock cursor
  };

  // Close the modal if the user clicks outside of it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className={`bg-white min-h-screen w-full ${cursorLocked ? 'cursor-none' : ''}`}>
      <Navbar />
      <Cursor />
      <div className='container mx-auto px-4 py-24 pt-32'>
        {/* Animate the main heading */}
        <motion.h1 
          className='text-4xl font-bold text-green-700 mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Environmental Action Networks
        </motion.h1>
        
        <motion.div
          className='grid md:grid-cols-3 gap-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {EnvironmentalGroups.map((group) => (
            <motion.div 
              key={group.name} 
              className='bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all'
              onClick={() => handleSelectGroup(group)}
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              transition={{ duration: 0.2 }}
            >
              <h2 className='text-2xl font-semibold text-green-800 mb-4'>{group.name}</h2>
              <p className='text-gray-600 mb-4'>{group.description}</p>
              <div className='flex items-center mb-2'>
                <Mail className='mr-2 text-green-600' size={20}/>
                <span>{group.email}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animate the developers heading */}
        <motion.h1 
          className='text-4xl font-bold text-green-700 py-8 mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          Developers
        </motion.h1>

        <motion.div
          className='grid md:grid-cols-3 gap-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        >
          {Developers.map((group) => (
            <motion.div 
              key={group.name} 
              className='bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all'
              onClick={() => handleSelectGroup(group)}
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              transition={{ duration: 0.2 }}
            >
              <h2 className='text-2xl font-semibold text-green-800 mb-4'>{group.name}</h2>
              <p className='text-gray-600 mb-4'>{group.description}</p>
              <div className='flex items-center mb-2'>
                <Mail className='mr-2 text-green-600' size={20}/>
                <span>{group.email}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedGroup && (
          <motion.div 
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
            onClick={handleOverlayClick} // Click on the overlay to close the modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className='bg-white p-8 rounded-lg max-w-md w-full'
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-3xl font-bold text-green-800 mb-4'>{selectedGroup.name}</h2>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Mail className='mr-3 text-green-600' size={24}/>
                  <span>{selectedGroup.email}</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='mr-3 text-green-600' size={24}/>
                  <span>{selectedGroup.phone}</span>
                </div>
                <div className='flex items-center'>
                  <Globe className='mr-3 text-green-600' size={24}/>
                  <a 
                    href={selectedGroup.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-blue-600 hover:underline'
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <motion.button 
                onClick={handleCloseModal}
                className='mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'
                whileHover={{ scale: 1.05 }} // Button hover effect
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
