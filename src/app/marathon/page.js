"use client";

import React, { useState, useEffect } from 'react';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';

const CodeRedemption = () => {
  const [code, setCode] = useState('');
  const [redemptionStatus, setRedemptionStatus] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const VALID_CODE = '89ao0op271r6';
  const MAX_ATTEMPTS = 3;

  useEffect(() => {
    let lockTimer;
    if (isLocked) {
      lockTimer = setTimeout(() => {
        setIsLocked(false);
        setAttempts(0);
      }, 5 * 60 * 1000);
    }
    return () => clearTimeout(lockTimer);
  }, [isLocked]);

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    
    if (isLocked) {
      setRedemptionStatus({
        success: false,
        message: 'Too many attempts. Please try again in 5 minutes.'
      });
      return;
    }

    if (code.length !== 12) {
      setRedemptionStatus({
        success: false,
        message: 'Code must be exactly 12 characters long.'
      });
      return;
    }

    if (code === VALID_CODE) {
      setRedemptionStatus({
        success: true,
        message: 'Code successfully redeemed! Choose your reward:',
        rewards: [
          { 
            id: 1, 
            name: 'Sustainable Water Bottle', 
            description: 'Eco-friendly reusable bottle',
            points: 500
          },
          { 
            id: 3, 
            name: 'Tree Planting Certificate', 
            description: 'Plant 10 trees in your name',
            points: 1000
          }
        ]
      });
      setCode(''); // Clear input after successful redemption
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
        setRedemptionStatus({
          success: false,
          message: `Invalid Code. You have been locked out due to too many attempts.`
        });
      } else {
        setRedemptionStatus({
          success: false,
          message: `Invalid Code. Attempts left: ${MAX_ATTEMPTS - newAttempts}`
        });
      }
    }
    
    // Clear code input after every attempt
    if (!isLocked) {
      setCode('');
    }
  };

  const handleRewardSelect = (reward) => {
    alert(`Redeeming: ${reward.name}\nPoints: ${reward.points}`);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar/>
      <Cursor/>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-green-800">Reward Redemption</h2>
          
          <form onSubmit={handleCodeSubmit} className="space-y-6">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your 12-digit achievement code"
              className="w-full p-4 text-xl border-2 rounded-lg focus:outline-none focus:border-green-500"
              maxLength="12"
              disabled={isLocked}
            />
            <button 
              type="submit" 
              className="w-full bg-green-600 text-white p-4 text-xl rounded-lg hover:bg-green-700 transition"
              disabled={isLocked}
            >
              {isLocked ? 'Locked' : 'Redeem Code'}
            </button>
          </form>

          {redemptionStatus && (
            <div className={`mt-6 p-6 rounded-lg ${
              redemptionStatus.success ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <p className="text-center text-xl mb-4">{redemptionStatus.message}</p>
              
              {redemptionStatus.success && (
                <div className="grid grid-cols-3 gap-4">
                  {redemptionStatus.rewards.map((reward) => (
                    <div 
                      key={reward.id}
                      onClick={() => handleRewardSelect(reward)}
                      className="bg-white p-4 rounded-lg cursor-pointer hover:shadow-xl transition text-center"
                    >
                      <h3 className="font-bold text-lg mb-2">{reward.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
                      <div className="bg-green-500 text-white rounded-full px-3 py-1 inline-block">
                        {reward.points} pts
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeRedemption;
