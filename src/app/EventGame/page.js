"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';
import Link from 'next/link';

const EVENTS = [
  {
    id: 'marathon',
    title: 'Sustainability Marathon',
    description: 'Run for a greener planet',
    icon: '🏃‍♀️',
    rewards: ['Water Bottle', 'Tree Planting Certificate']
  },
  {
    id: 'recycling-challenge',
    title: 'Campus Recycling Challenge',
    description: 'Collect and sort recyclables',
    icon: '♻️',
    rewards: ['Reusable Bag', 'Gift Card']
  },
  {
    id: 'energy-saving',
    title: 'Energy Saving Competition',
    description: 'Reduce campus energy consumption',
    icon: '💡',
    rewards: ['Smart Thermostat', 'Sustainability Certificate']
  },
  {
    id: 'hit-the-cup',
    title: 'Hit The Cup',
    description: 'Test your aim by throwing objects into cups from various distances. Challenge friends and improve your precision!',
    icon: '🥤',
    rewards: ['Campus Recycling Points', 'Sustainable Swag Bag']
  }
];

const GameSelection = () => {
  const router = useRouter();

  const handleEventSelect = (eventId) => {
    router.push(`/${eventId}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className='w-full h-screen'
    >
      <Navbar />
      <Cursor />
      <div className="container mx-auto p-4 h-screen">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="text-3xl font-bold pt-24 mb-6 text-green-700 text-center"
        >
          Sustainability Games & Events
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center"
        >
          {EVENTS.map((event, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 + index * 0.2 }}
                className="bg-green-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-amber-50 transition w-full"
              >
                <div className="text-4xl mb-2 text-center">{event.icon}</div>
                <h2 className="text-xl font-semibold text-center">{event.title}</h2>
                <p className="text-gray-600 text-center">{event.description}</p>
                <div className="mt-2 text-center">
                  <strong>Rewards:</strong>
                  <ul className="list-disc list-inside">
                    {event.rewards.map((reward) => (
                      <li key={reward}>{reward}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );

            return (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 + index * 0.2 }}
                className="w-full flex justify-center"
              >
                {index >= 3 && index <= 5 ? (
                  <Link href={`/Game`} className="block w-full">
                    {content}
                  </Link>
                ) : (
                  <button onClick={() => handleEventSelect(event.id)} className="w-full">
                    {content}
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameSelection;
