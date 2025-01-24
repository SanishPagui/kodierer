"use client";

import React, { useState, useEffect } from 'react';


const fetchQuestions = async () => {
  return [
    {
      question: "Which of the following is the most energy-efficient light bulb?",
      options: ["Incandescent", "LED", "CFL"],
      answer: "LED"
    },
    {
      question: "What simple action can help save energy while cooking?",
      options: ["Using a microwave", "Keeping the oven door open", "Boiling water in an open pot"],
      answer: "Using a microwave"
    },
    {
      question: "What does ECBC stand for in terms of building energy efficiency?",
      options: ["Energy Conservation Building Code", "Energy Consumption Building Code", "Efficient Construction Building Code"],
      answer: "Energy Conservation Building Code"
    },
    {
      question: "Which appliance typically consumes the most electricity in a household?",
      options: ["Washing Machine", "Refrigerator", "Television"],
      answer: "Refrigerator"
    },
    {
      question: "How can you reduce energy consumption when using air conditioning?",
      options: ["Set it to the lowest temperature", "Use fans to circulate air", "Keep windows open while running it"],
      answer: "Use fans to circulate air"
    },
    {
      question: "What is one way to save energy while doing laundry?",
      options: ["Wash in cold water", "Always use hot water", "Dry clothes in direct sunlight"],
      answer: "Wash in cold water"
    },
    {
      question: "Which of these actions can help reduce energy consumption at home?",
      options: ["Leaving lights on when not in use", "Unplugging devices when not in use", "Using old appliances"],
      answer: "Unplugging devices when not in use"
    },
    {
      question: "What is the benefit of using Energy Star appliances?",
      options: ["They are cheaper to buy", "They save energy and reduce costs", "They are more stylish"],
      answer: "They save energy and reduce costs"
    },
    {
      question: "Which type of window is best for energy efficiency?",
      options: ["Single-pane windows", "Double-pane windows", "Triple-pane windows"],
      answer: "Triple-pane windows"
    },
    {
      question: "What is a common way to insulate your home?",
      options: ["Using curtains", "Adding insulation to walls and attics", "Keeping doors open"],
      answer: "Adding insulation to walls and attics"
    },
    {
      question: "What should you do with your computer when not in use?",
      options: ["Leave it on", "Turn it off or put it in sleep mode", "Unplug it"],
      answer: "Turn it off or put it in sleep mode"
    },
    {
      question: "How can you save energy while showering?",
      options: ["Take long showers", "Use a low-flow showerhead", "Keep the water hot"],
      answer: "Use a low-flow showerhead"
    },
    {
      question: "What is one way to save energy when using a dishwasher?",
      options: ["Run it half full", "Use it during off-peak hours", "Wash dishes by hand instead"],
      answer: "Use it during off-peak hours"
    },
    {
      question: "Which of the following is a renewable source of energy?",
      options: ["Coal", "Natural Gas", "Solar Power"],
      answer: "Solar Power"
    },
    {
      question: "What is the purpose of a programmable thermostat?",
      options: ["To control humidity levels", "To schedule heating and cooling times", "To measure electricity usage"],
      answer: "To schedule heating and cooling times"
    },
    {
      question: "How much energy can you save by turning off lights when leaving a room?",
      options: ["10%", "25%", "50%"],
      answer: "25%"
    },
    {
      question: "What is an effective way to reduce heat loss in winter?",
      options: ["Open windows during the day", "Seal cracks around doors and windows", "Use fans to circulate air"],
      answer: "Seal cracks around doors and windows"
    },
    {
      question: "Which appliance uses the most energy in your home?",
      options: ["Oven", "Refrigerator", "Heating system"],
      answer: "Heating system"
    },
    {
      question: "What type of insulation is most effective for attics?",
      options: ["Fiberglass batts", "Spray foam insulation", "Cellulose insulation"],
      answer: "Spray foam insulation"
    },
    {
      question: 'What does LED stand for?',
      options: ['Light Emitting Diode', 'Light Energy Device', 'Long-lasting Energy Diode'],
      answer: 'Light Emitting Diode'
    },
    {
        question:'Which of these is NOT a benefit of using public transportation?',
        options:['Reduces traffic congestion', 'Saves money on fuel', 'Increases personal vehicle emissions'],
        answer:'Increases personal vehicle emissions'
     },
     {
        question:'How can using natural light help save energy?',
        options:['By reducing the need for artificial lighting', 'By heating up rooms', 'By creating shadows'],
        answer:'By reducing the need for artificial lighting'
     },
     {
        question:'What is the most efficient way to cook food?',
        options:['Using an electric stove', 'Using a microwave', 'Using a toaster oven'],
        answer:'Using a microwave'
     },
     {
        question:'How can you save energy while using your computer?',
        options:['Keep it on all night', 'Turn it off when not in use', 'Use multiple monitors'],
        answer:'Turn it off when not in use'
     },
     {
        question:'What should you do with your refrigerator settings to save energy?',
        options:['Set it to maximum cold', 'Set it to recommended temperature', 'Leave it unplugged'],
        answer:'Set it to recommended temperature'
     },
     {
        question:'Which of these practices helps conserve water and energy?',
        options:['Taking long showers', 'Fixing leaks promptly', 'Running dishwashers half-full'],
        answer:'Fixing leaks promptly'
     },
     {
        question:'How often should you clean your refrigerator coils for optimal efficiency?',
        options:['Every month', 'Every six months', 'Once a year'],
        answer:'Every six months'
     },
     {
       question:'What type of roof can help reduce heat absorption?',
       options:['Dark-colored roofs', 'Light-colored roofs', 'Wooden roofs'],
       answer:'Light-colored roofs'
     }, 
     {
       question:'Which appliance typically has the highest energy consumption during peak hours?',
       options:['Washing machine', 'Air conditioner', 'Television'],
       answer:'Air conditioner'
     }, 
     {
       question:'What does “phantom load” refer to?',
       options:['Energy used by devices when turned off but still plugged in', 'Energy wasted by old appliances', 'Energy used during peak hours'],
       answer:'Energy used by devices when turned off but still plugged in'
     }, 
     {
       question:'Which type of showerhead saves water and energy?',
       options:['Standard showerhead', 'Low-flow showerhead', 'High-pressure showerhead'],
       answer:'Low-flow showerhead'
     }, 
     { 
       question:'How does planting trees around your home help with energy conservation?',
       options:['They block wind, reducing heating costs', 'They absorb sunlight, increasing temperatures', 'They require maintenance that uses energy'],
       answer:'They block wind, reducing heating costs'
     }, 
     { 
       question:'What is one benefit of using solar panels at home?',
       options:['They increase electricity bills', 'They provide renewable energy source', 'They require constant maintenance'],
       answer:'They provide renewable energy source'
     }, 
     { 
       question:'How can you reduce your carbon footprint at home?',
       options:['By using more plastic products', 'By recycling and composting waste', 'By increasing electricity usage'],
       answer:'By recycling and composting waste'
     }, 
     { 
       question:'Which device can help monitor your home’s energy usage?',
       options:['Smart thermostat', 'Regular thermostat', 'Basic light switch'],
       answer:'Smart thermostat'
     }, 
     { 
       question:'What should you do with unused electronics?',
       options:['Keep them plugged in for updates', 'Unplug them when not in use', 'Store them without unplugging'],
       answer:'Unplug them when not in use'
     }, 
     { 
       question:'How much water can fixing a leaky faucet save per year?',
       options:['100 gallons', '500 gallons', '3,000 gallons'],
       answer:'3,000 gallons'
     }, 
     { 
       question:'What is an efficient way to heat your home during winter?',
       options:['Open all windows during sunny days','Use space heaters only where needed','Keep doors open between rooms'],
       answer:'Use space heaters only where needed'
     }, 
     { 
       question:'Why should you avoid using screen savers on computers?',
       options:['They conserve more power','They waste power','They improve performance'],
       answer:'They waste power'
     }, 
     { 
       question:'When should you run your dishwasher for maximum efficiency?',
       options:['During peak hours','At night or early morning','Whenever dishes pile up'],
       answer:'At night or early morning'
     }, 
     { 
       question:'How much money can be saved annually by switching to LED bulbs from incandescent bulbs?',
       options:['$10-$20','$30-$50','$50-$100'],
       answer:'$50-$100'
     }, 
     { 
       question:"What's one benefit of having a smart power strip?",
       options:["It increases power consumption","It helps manage multiple devices' power usage","It doesn't affect electricity bills"],
       answer:"It helps manage multiple devices' power usage"
     }, 
     { 
         question:"What's one way to improve your home's insulation?",
         options:["Install storm windows","Leave gaps between walls","Use single-pane glass"],
         answer:"Install storm windows"
     }, 
     { 
         question:"Why should you turn down your water heater's temperature?",
         options:["To increase heating speed","To save on heating costs","To make hot water last longer"],
         answer:"To save on heating costs"
     }, 
     { 
         question:"How does using natural gas instead of electricity benefit the environment?",
         options:["Natural gas produces more CO2","Natural gas burns cleaner than coal or oil","Natural gas requires more processing"],
         answer:"Natural gas burns cleaner than coal or oil"
     }, 
     { 
         question:"What type of appliance uses less water and saves energy compared to traditional models?",
         options:["High-efficiency washing machine","Standard washing machine","Old washing machine"],
         answer:"High-efficiency washing machine"
     },  
   ];
};


const EnergySavingGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      
      // Shuffle questions and set them
      const shuffledQuestions = fetchedQuestions.sort(() => Math.random() - 0.5);
      
      setQuestions(shuffledQuestions);
      
      // Get first set of questions
      setCurrentQuestions(shuffledQuestions.slice(0, 5)); // Get first 5 questions
    };
    
    loadQuestions();
  }, []);

  const handleOptionClick = (option) => {
    // Check if the selected option is correct
    if (option === currentQuestions[questionIndex].answer) {
      setScore(score + 1); // Increment score for correct answer
    }

    // Move to the next question or check if the game is over
    if (questionIndex < currentQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1); // Go to next question
    } else {
      // Check win condition (4 or more correct answers)
      if (score + (option === currentQuestions[questionIndex].answer ? 1 : 0) >= 4) {
        alert(`Congratulations! You win! Your score is ${score + (option === currentQuestions[questionIndex].answer ? 1 : 0)} out of ${currentQuestions.length}`);
      } else {
        alert(`Game Over! Your score is ${score + (option === currentQuestions[questionIndex].answer ? 1 : 0)} out of ${currentQuestions.length}`);
        resetGame();
        return;
      }
      
      // Load next set of questions
      loadNextSet();
    }
  };

  const loadNextSet = () => {
    const nextQuestionIndex = Math.floor(questionIndex / currentQuestions.length) + 1;
    
    if (nextQuestionIndex * 5 < questions.length) {
      // Load next batch of questions
      setCurrentQuestions(questions.slice(nextQuestionIndex * 5, nextQuestionIndex * 5 + 5));
      setQuestionIndex(0); // Reset question index for new batch
    } else {
       resetGame();
     }
   };

   const resetGame = () => {
     setIsPlaying(false);
     setScore(0);
     setQuestionIndex(0);
     setCurrentQuestions([]);
   };

   return (
     <div className="min-h-screen bg-yellow-50 flex flex-col">
       <div className="flex-grow flex items-center justify-center p-4">
         <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
           <h2 className="text-4xl font-bold mb-8 text-center text-yellow-800">⚡ Energy Saving Challenge Game! 🌍</h2>
           <p className="text-lg mb-4 text-center">
             Test your knowledge about energy conservation and win exciting rewards!
           </p>

           {!isPlaying ? (
             <>
               <p className="text-lg mb-4 text-center">
                 Click below to start the game and learn how to save energy!
               </p>
               <button 
                 onClick={() => {setIsPlaying(true); loadNextSet();}} 
                 className="w-full bg-yellow-600 text-white p-4 text-xl rounded-lg hover:bg-yellow-700 transition"
               >
                 Start Game
               </button>
             </>
           ) : (
             <div className="mt-6">
               <h3 className="text-xl font-semibold mb-4 text-center">{currentQuestions[questionIndex]?.question}</h3>
               <div className="flex flex-col items-center">
                 {currentQuestions[questionIndex]?.options.map((option, index) => (
                   <button 
                     key={index} 
                     onClick={() => handleOptionClick(option)} 
                     className="bg-yellow-500 text-white p-3 m-1 rounded-lg hover:bg-yellow-600 transition w-full"
                   >
                     {option}
                   </button>
                 ))}
               </div>
             </div>
           )}

           <p className="text-center mt-4 text-sm text-gray-600">
             Your participation can help create a more sustainable future!
           </p>
         </div>
       </div>
     </div>
   );
};

export default EnergySavingGame;