import React from 'react';
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Welcome to Our Campus Paper Cup Reduction Initiative
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join us in reducing the environmental impact of single-use paper cups. 
            Our goal is to save thousands of cups and reduce carbon emissions across the campus. 
            Let's make a sustainable difference together!
          </p>
          <Link
            href={'/Learn_more'}
            className="inline-block bg-green-700 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-800 transition duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-32">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            How You Can Contribute
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Reduce the number of paper cups by bringing your own reusable cup, 
            participate in awareness campaigns, and encourage your peers to make a difference!
          </p>
          <Link
            href="https://community-puce-eta.vercel.app/"
            className="inline-block bg-green-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-green-700 transition duration-300"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  );
}
