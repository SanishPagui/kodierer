"use client";

import React, { useState } from 'react';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';

const CampusRecyclingChallenge = () => {
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isRSVPed, setIsRSVPed] = useState(false);

  const generatePasscode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleRSVP = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    const newPasscode = generatePasscode();
    setPasscode(newPasscode);
    setIsRSVPed(true);

    // In a real app, you'd send this to a backend service
    console.log(`RSVP for ${email} with passcode: ${newPasscode}`);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar/>
      <Cursor/>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-800">🌍 Join the Campus Recycling Challenge! ♻️</h2>
          
          {!isRSVPed ? (
            <form onSubmit={handleRSVP} className="space-y-4">
              <p className="text-lg mb-4 text-center">
                Are you ready to make a difference? Join us in the Campus Recycling Challenge!
              </p>
              
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-3 border rounded-lg"
              />

              <p className="text-lg mb-4 text-center">
                Collect and sort recyclables around campus, and help us create a more sustainable environment.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-center">Event Details:</h3>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Date:</strong> March 15, 2025</li>
                <li><strong>Time:</strong> 10:00 AM - 3:00 PM</li>
                <li><strong>Location:</strong> Main Building, ABC University Campus</li>
              </ul>

              <button 
                type="submit"
                className="w-full bg-green-600 text-white p-4 text-xl rounded-lg hover:bg-green-700 transition"
              >
                RSVP Now!
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Thank You for Registering!</h3>
              <p className="text-lg mb-4">Your RSVP is confirmed for the Campus Recycling Challenge.</p>
              <div className="bg-green-100 p-4 rounded-lg inline-block">
                <p className="text-lg">Your Unique Passcode:</p>
                <p className="text-3xl font-bold text-green-800">{passcode}</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Please save this passcode for event check-in.
              </p>
            </div>
          )}

          <p className="text-center mt-4 text-sm text-gray-600">
            Your participation can make a difference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampusRecyclingChallenge;