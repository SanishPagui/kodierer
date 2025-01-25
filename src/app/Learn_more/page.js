import React from 'react';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';

export default function Page() {
  return (
    
    <div className="bg-gray-50 text-gray-900 border-t-2">
      <Cursor/>
      <Navbar/>
      {/* Header */}
      <header className="bg-green-700 text-white text-center py-12 mt-24">
        <h1 className="text-4xl font-bold mb-4">Learn More About Our Paper Cup Reduction Initiative</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Join us in reducing the environmental impact of single-use paper cups. Together, we can make a meaningful
          difference in the fight against climate change.
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Goal</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our initiative is dedicated to reducing the environmental impact caused by disposable paper cups.
            Every year, billions of paper cups are thrown away, contributing to landfills and carbon emissions.
            By switching to reusable cups and adopting sustainable practices, we can collectively reduce our carbon
            footprint and save thousands of trees.
          </p>
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Key Facts</h3>
            <ul className="list-disc pl-6 space-y-2 text-left text-gray-700">
              <li>More than 50 billion paper cups are used globally each year.</li>
              <li>Over 90% of paper cups are not recyclable due to the plastic lining inside.</li>
              <li>Switching to reusable cups can reduce waste by millions of cups annually.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: How You Can Contribute */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">How You Can Contribute</h2>
          <p className="text-lg text-gray-700 mb-8">
            There are many ways you can contribute to our initiative and help us reduce the environmental impact
            of paper cups. Here are some simple yet impactful actions you can take:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Bring Your Own Cup</h3>
              <p className="text-gray-700 mb-4">
                Carry a reusable cup with you wherever you go. Many cafes and coffee shops offer discounts for
                customers who bring their own cups.
              </p>
              <a
                href="#"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Learn more about reusable cups
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Spread Awareness</h3>
              <p className="text-gray-700 mb-4">
                Share the importance of reducing paper cup usage with your friends and colleagues. The more people
                involved, the bigger the impact!
              </p>
              <a
                href="#"
                className="text-green-700 hover:text-green-800 font-semibold"
              >
                Join our awareness campaign
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impact Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Impact So Far</h2>
          <p className="text-lg text-gray-700 mb-8">
            We’ve already seen some great progress in reducing paper cup usage on our campus and in our community.
            Here are some statistics showing the positive change:
          </p>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Statistics</h3>
            <ul className="list-disc pl-6 space-y-2 text-left text-gray-700">
              <li>Over 100,000 paper cups saved in the last year alone.</li>
              <li>Reduction of over 5,000 kg of carbon emissions annually.</li>
              <li>More than 1,000 students and staff now use reusable cups regularly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Frequently Asked Questions</h2>
          <div className="bg-white shadow-xl rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Why should I switch to reusable cups?</h3>
              <p className="text-gray-700">
                Reusable cups significantly reduce waste and are more eco-friendly than single-use paper cups,
                which often cannot be recycled. By making the switch, you contribute to a cleaner environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">What are the benefits of this initiative?</h3>
              <p className="text-gray-700">
                This initiative helps reduce the carbon footprint associated with paper cup production, saves trees,
                and reduces landfill waste. It’s a win-win for the environment and the community!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">How can I get involved in the campaign?</h3>
              <p className="text-gray-700">
                You can start by using a reusable cup and encouraging others to do the same. You can also join our
                campaigns and spread the word to help increase awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6">
        <p>Thank you for being a part of our initiative. Together, we can make a big difference!</p>
      </footer>
    </div>
  );
}
