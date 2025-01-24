"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';

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
    id: "Hit The Cup",
    title: 'Useless it is',
    description: 'Reduces nothing',
    icon: '🥤',
    rewards: ['no', 'nope']
  },
  {
    id: "Game 2",
    title: 'Useless it is',
    description: 'Reduces nothing',
    icon: '❌',
    rewards: ['no', 'nope']
  },
  {
    id: "Some Event",
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
    <div>
        <Navbar/>
        <Cursor/>
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold pt-24 mb-6 text-green-700">Sustainability Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EVENTS.map((event) => (
          <div 
            key={event.id}
            onClick={() => handleEventSelect(event.id)}
            className="bg-green-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-amber-50 transition"
          >
            <div className="text-4xl mb-2">{event.icon}</div>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <div className="mt-2">
              <strong>Rewards:</strong>
              <ul className="list-disc list-inside">
                {event.rewards.map((reward) => (
                  <li key={reward}>{reward}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default GameSelection;