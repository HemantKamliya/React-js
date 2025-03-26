import React from 'react';
import { skillsData } from '../data/skillsData';
import { skillsImage } from '../../assets/skillsImage';
import { div } from 'framer-motion/client';

const skillColors = {
  'HTML': 'bg-orange-600',
  'CSS': 'bg-blue-600',
  'JavaScript': 'bg-yellow-600',
  'React': 'bg-cyan-600',
  'Bootstrap': 'bg-purple-600',
  'Tailwind': 'bg-teal-600',
  'C': 'bg-red-600',
  'C++': 'bg-indigo-600',
  'Java': 'bg-pink-600',
  'Python': 'bg-green-600',
  'Git': 'bg-orange-700',
  'Ubuntu': 'bg-red-700'
};

const SkillsGrid = () => {
  return (
    <div className=' flex justify-center pt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black'>
    <div className="w-full pt-10 min-h-screen flex flex-wrap justify-center gap-6 px-10 md:w-[65rem] ">
      {skillsData.map((skill) => (
        <div
          key={skill}
          className={`flex flex-col items-center justify-center 
                      w-36 h-36 
                      ${skillColors[skill] || 'bg-gray-800'}
                      rounded-2xl 
                      hover:bg-opacity-80
                      transition-all duration-300 
                      ease-in-out 
                      transform hover:scale-105 
                      shadow-[0_0_25px_rgba(128,0,128,0.6)]
                      p-4`}
        >
          <img
            src={skillsImage(skill)}
            alt={skill}
            className="w-16 h-16 mb-3"
          />
          <span className="text-white text-base font-medium">
            {skill}
          </span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SkillsGrid;