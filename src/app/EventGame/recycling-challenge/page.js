"use client";

import React from 'react';

const CampusRecyclingChallenge = () => {
  const handleRSVP = () => {
    alert('Thank you for your interest! You have successfully RSVP\'d for the Campus Recycling Challenge!');
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-800">🌍 Join the Campus Recycling Challenge! ♻️</h2>
          <p className="text-lg mb-4 text-center">
            Are you ready to make a difference? Join us in the Campus Recycling Challenge!
          </p>
          <p className="text-lg mb-4 text-center">
            Collect and sort recyclables around campus, and help us create a more sustainable environment.
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-center">Event Details:</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Date:</strong> March 15, 2025</li>
            <li><strong>Time:</strong> 10:00 AM - 3:00 PM</li>
            <li><strong>Location:</strong> Main Building, ABC University Campus</li>
          </ul>

          <p className="text-lg mb-4 text-center">
            Participate in fun activities, learn about recycling, and earn rewards for your efforts!
          </p>

          <button 
            onClick={handleRSVP} 
            className="w-full bg-green-600 text-white p-4 text-xl rounded-lg hover:bg-green-700 transition"
          >
            RSVP Now!
          </button>

          <p className="text-center mt-4 text-sm text-gray-600">
            Your participation can make a difference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampusRecyclingChallenge;
