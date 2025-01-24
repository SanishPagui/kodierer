"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';
import Link from 'next/link';

const EVENTS = [
  {
    id: 'marathon',
    title: 'Sustainability Marathon',
    description: 'Run for a greener planet',
    icon: '🏃‍♀️',
    rewards: ['Water Bottle', 'Eco Credits']
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
    description: 'Reduces nothing',
    icon: '🥤',
    rewards: ['no', 'nope']
  },
  {
    id: 'game-2',
    title: 'Useless it is',
    description: 'Reduces nothing',
    icon: '❌',
    rewards: ['no', 'nope']
  },
  {
    id: 'some-event',
    title: 'Useless it is',
    description: 'Reduces nothing',
    icon: '❌',
    rewards: ['no', 'nope']
  }
];

const GameSelection = () => {
  const router = useRouter();

  const handleEventSelect = (eventId) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Cursor />
      <div className="container mx-auto p-4 h-screen">
        <h1 className="text-3xl font-bold pt-24 mb-6 text-green-700 text-center">
          Sustainability Games
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
          {EVENTS.map((event, index) => {
            const content = (
              <div className="bg-green-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-amber-50 transition w-full">
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
              </div>
            );

            return (
              <div key={event.id} className="w-full flex justify-center">
                {index >= 3 && index <= 5 ? (
                  <Link href={`/Game`} className="block w-full">
                    {content}
                  </Link>
                ) : (
                  <button onClick={() => handleEventSelect(event.id)} className="w-full">
                    {content}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameSelection;
