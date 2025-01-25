"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Cursor from "../component/Cursor";
import { Navbar } from "../component/Navbar";

const PaperCupAnalysis = () => {
  const [analysisData] = useState([
    { month: "Jan", cupsSaved: 500, carbonSaved: 25.5 },
    { month: "Feb", cupsSaved: 750, carbonSaved: 38.2 },
    { month: "Mar", cupsSaved: 1000, carbonSaved: 52.7 },
    { month: "Apr", cupsSaved: 1100, carbonSaved: 61.5 },
    { month: "May", cupsSaved: 1230, carbonSaved: 72.2 },
    { month: "Jun", cupsSaved: 1275, carbonSaved: 77.7 },
    { month: "Jul", cupsSaved: 1300, carbonSaved: 27.5 },
    { month: "Aug", cupsSaved: 1411, carbonSaved: 120.2 },
    { month: "Sep", cupsSaved: 1500, carbonSaved: 131.7 },
    { month: "Oct", cupsSaved: 1512, carbonSaved: 151.5 },
    { month: "Nov", cupsSaved: 1590, carbonSaved: 169.2 },
    { month: "Dec", cupsSaved: 1630, carbonSaved: 180.7 },
  ]);

  const maxCupsSaved = analysisData.reduce(
    (max, entry) => (entry.cupsSaved > max.cupsSaved ? entry : max),
    analysisData[0]
  );
  const minCarbonEmission = analysisData.reduce(
    (min, entry) => (entry.carbonSaved < min.carbonSaved ? entry : min),
    analysisData[0]
  );

  const calculatedMetrics = {
    totalCupsSaved: analysisData.reduce((sum, entry) => sum + entry.cupsSaved, 0),
    carbonReduction: analysisData.reduce((sum, entry) => sum + entry.carbonSaved, 0).toFixed(2),
    progressPercentage: ((analysisData[analysisData.length - 1]?.cupsSaved / 1000) * 100).toFixed(1),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full"
    >
      <Cursor />
      <Navbar />
      <div className="w-full flex items-center pt-40 flex-col h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-2xl font-bold mb-4 pt-20 pl-8 text-green-700"
        >
          Campus Paper Cup Reduction Analysis
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mb-6 pl-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            className="bg-blue-50 p-4 rounded shadow-lg"
          >
            <h3 className="text-sm font-semibold text-green-700">Total Cups Saved</h3>
            <p className="text-2xl font-bold">{calculatedMetrics.totalCupsSaved}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            className="bg-green-50 p-4 rounded shadow-lg"
          >
            <h3 className="text-sm font-semibold text-green-700">Carbon Reduction (kg)</h3>
            <p className="text-2xl font-bold">{calculatedMetrics.carbonReduction}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
            className="bg-purple-50 p-4 rounded shadow-lg"
          >
            <h3 className="text-sm font-semibold text-green-700">Progress</h3>
            <p className="text-2xl font-bold">{calculatedMetrics.progressPercentage}%</p>
          </motion.div>
        </motion.div>
        <div className="flex w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
            className="w-1/2 flex justify-end pr-9"
          >
            <LineChart width={600} height={300} data={analysisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="cupsSaved" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="carbonSaved" stroke="#82ca9d" />
            </LineChart>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.4 }}
            className="max-w-lg text-lg text-gray-700 pl-7"
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">Graph Analysis</h3>
            <p>
              The graph visualizes the monthly progress of paper cup reduction and corresponding carbon emission reductions.
              The blue line represents the number of paper cups saved each month, while the green line indicates the carbon
              footprint reduction in kilograms.
              <br />
              <br />
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Most Cups Saved:</strong> {maxCupsSaved.month} with {maxCupsSaved.cupsSaved} cups saved.
              </li>
              <li>
                <strong>Least Carbon Emission:</strong> {minCarbonEmission.month} with {minCarbonEmission.carbonSaved} kg.
              </li>
            </ul>
            <p>This highlights the months where efforts were most and least impactful, emphasizing the importance of consistent initiatives.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaperCupAnalysis;
