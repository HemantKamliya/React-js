import React, { useState, useEffect } from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import hemantpfp1 from '../../assets/hemantpfp1.jpg'
import hemantpfp2 from '../../assets/hemantpfp2.jpg'
import hemantpfp3 from '../../assets/hemantpfp3.jpg'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsSection from '../Projects/ProjectsSection ';

const Home = () => {
    const [professionIndex, setProfessionIndex] = useState(0);
    const professions = ["Web Developer", "Software Developer", "Programmer", "Coder"];

    useEffect(() => {
        const interval = setInterval(() => {
            setProfessionIndex((prev) => (prev + 1) % professions.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full mt-15 bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-scroll '>
            {/* Original Container */}
            <div className='flex px-10 flex-col md:flex-row w-full md:w-[80%] justify-center md:mx-auto pt-20 border-b-4 pb-48'>
                {/* Left Text Column */}
                <div className='flex flex-col gap-6 lg:mr-8'>
                    <div className='flex flex-col gap-8 font-bold'>
                        <h1 className='text-4xl md:text-6xl text-[#fbd9ad]'>
                            Hi There!
                        </h1>
                        <h1 className='text-4xl md:text-6xl text-[#cb70ff]'>
                            <span className='text-[#fbd9ad]'>I'M </span>HEMANT KAMLIYA
                        </h1>

                        {/* Enhanced Profession Animation */}
                        <div className='text-3xl md:text-5xl text-[#cb70ff] h-16 flex items-center'>
                            <span className='text-[#fbd9ad]'>I Am </span>
                            <div className='relative h-full flex items-center ml-2'>
                                <AnimatePresence mode='wait'>
                                    <motion.span
                                        key={professionIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: 'spring',
                                                damping: 10,
                                                stiffness: 100
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            transition: { duration: 0.2 }
                                        }}
                                        className='absolute'
                                    >
                                        {professions[professionIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="social-media flex flex-row mt-4">
                        <SocialMedia />
                    </div>
                </div>

                <div className='flex justify-center mt-6 md:mt-0 lg:ml-10 md:pt-4 md:pl-20'>
                    <img
                        src={hemantpfp2}
                        alt="Hemant Kamliya"
                        className='w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg hover:scale-105 transition duration-300'
                    />
                </div>
            </div>

            <About />
            <Education />
            <Skills />
            <ProjectsSection/>
        </div>
    );
};

export default Home;