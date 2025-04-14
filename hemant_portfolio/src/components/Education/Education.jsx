import React from 'react';
import { motion } from "framer-motion";
import { educationData } from '../data/educationData';
import EducationCard from './EducationCard';
import eduImage from '../../assets/education/eduPurple.svg';

const Education = () => {
    return (
        <section id="education" className="w-full mx-auto px-4 sm:px-6 py-16 sm:py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center text-[#823ae0] text-3xl md:text-5xl font-bold mb-12"
            >
                Education
            </motion.h1>

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                {/* Education Cards - takes full width on mobile, 1/2 on desktop */}
                <div className="w-full px-[5%] lg:w-1/2 space-y-6">
                    {educationData.map((edu) => (
                        <EducationCard   
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            percentage={edu.percentage}
                        />
                    ))}
                </div>

                {/* Education Image - hidden on mobile, visible on lg screens */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden lg:flex lg:w-1/2 justify-center items-center p-8"
                >
                    <img 
                        src={eduImage} 
                        alt="Education illustration" 
                        className="w-full max-w-sm md:max-w-md rounded-xl shadow-2xl border-2 border-purple-600/30 hover:border-purple-600/50 transition-all duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Education;