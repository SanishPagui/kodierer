'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { motion } from 'framer-motion'; // Import motion
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';

export default function PaperCupArticle() {
  const router = useRouter(); // Initialize useRouter

  return (
    <div>
      <Navbar />
      <Cursor />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-4xl font-bold text-green-800 pt-20 mb-6"
        >
          The Hidden Environmental Crisis of Paper Cups
        </motion.h1>

        {/* Animated Sections */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            The Global Scale of Disposable Cup Waste
          </h2>
          <p className="text-lg mb-4">
            Every year, approximately <span className="font-bold text-red-600">250 billion disposable cups</span> are used worldwide, creating an unprecedented environmental challenge. These seemingly innocuous containers represent a complex ecological problem that extends far beyond their brief moment of utility. The sheer volume of waste generated is akin to a deluge of detritus that our planet is struggling to cope with. Landfills are brimming, and the burden on waste management systems is immense.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
          className="mb-8 bg-green-50 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Environmental Impact Breakdown
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
              className="bg-white p-4 rounded-md shadow-sm"
            >
              <h3 className="font-bold text-green-600">Deforestation</h3>
              <p>Over <span className="font-bold text-red-600">20 million trees</span> are sacrificed annually for paper cup production. This deforestation contributes to habitat loss, biodiversity decline, and exacerbates climate change. Forests, which act as the lungs of our planet, are being decimated at an alarming rate.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 }}
              className="bg-white p-4 rounded-md shadow-sm"
            >
              <h3 className="font-bold text-green-600">Carbon Emissions</h3>
              <p>Each <span className="font-bold text-red-600">4 cups</span> generate approximately <span className="font-bold text-red-600">1 pound of CO2</span>. The production and transportation of these cups involve significant energy consumption, primarily from fossil fuels, leading to increased greenhouse gas emissions. This carbon footprint is a hidden cost that society bears in the form of climate change impacts.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
              className="bg-white p-4 rounded-md shadow-sm"
            >
              <h3 className="font-bold text-green-600">Recycling Challenge</h3>
              <p>Less than <span className="font-bold text-red-600">1%</span> of paper cups are successfully recycled. The plastic lining used in these cups complicates the recycling process, often rendering them non-recyclable in conventional facilities. This results in a majority of paper cups ending up in landfills or, worse, polluting our natural environments.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
              className="bg-white p-4 rounded-md shadow-sm"
            >
              <h3 className="font-bold text-green-600">Water Consumption</h3>
              <p><span className="font-bold text-red-600">4 billion gallons</span> of water are consumed annually in the production of paper cups. This is particularly concerning given the global water scarcity issues. The water-intensive processes involved in the manufacturing of paper cups further strain our already stressed water resources.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Microplastic and Long-Term Consequences
          </h2>
          <p className="text-lg mb-4">
            Paper cups contain a plastic lining that prevents them from being easily recycled. During decomposition, they release approximately <span className="font-bold text-red-600">250,000 microplastic particles</span>, contributing to widespread environmental contamination. These microplastics infiltrate soil, waterways, and eventually make their way into the food chain, posing health risks to wildlife and humans alike. The long-term environmental consequences of microplastic pollution are still being studied, but early indications suggest they could be dire.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            The Human Element
          </h2>
          <p className="text-lg mb-4">
            Despite the grim statistics, there is a silver lining. Public awareness and consumer behavior are powerful tools in combating the paper cup crisis. Individuals making conscientious choices can drive significant change. Simple actions such as using reusable cups, supporting cafes that offer discounts for personal containers, and advocating for campus-wide sustainable practices can collectively make a substantial impact.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.8 }}
          className="mb-8 bg-green-100 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Sustainable Alternatives
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Use reusable cups made from sustainable materials</li>
            <li>Support cafes offering discounts for personal containers</li>
            <li>Advocate for campus-wide sustainable practices</li>
            <li>Choose biodegradable options when disposables are necessary</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            The Road Ahead
          </h2>
          <p className="text-lg mb-4">
            The journey towards reducing paper cup waste is multifaceted and requires collective effort. From individual choices to systemic changes, every action counts. The key lies in fostering a culture of sustainability where convenience does not come at the cost of our planet. By embracing reusable options, advocating for policy changes, and supporting innovative solutions, we can mitigate the hidden environmental crisis of paper cups.
          </p>
        </motion.section>

        {/* Button to navigate to EventGame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 2.2 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => router.push('/EventGame')}
            className="text-white bg-green-600 px-6 py-3 rounded-md shadow-lg hover:bg-green-700 transition-colors"
          >
            Join the Movement
          </button>
        </motion.div>
      </div>
    </div>
  );
}
