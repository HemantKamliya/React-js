import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import hemantpfp from '../../assets/hemantpfp.jpg';
import About from '../About/About';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        // Home container with full width and height of the screen, with top padding
        <div className='w-full  mt-15 bg-gradient-to-r from-gray-900 via-gray-800 to-black'>
            {/* Introduction container having name, social media, and image */}
            <div className=' flex flex-col md:flex-row w-full md:w-[80%] md:mx-auto  pt-20 border-b-4 pb-48 '>
                {/* Introduction div */}
                <div className='flex flex-col  gap-6 lg:mr-8'>
                    <div className='flex flex-col gap-8 font-bold'>
                        <h1 className='text-4xl md:text-6xl text-[#fbd9ad] transition duration-300 ease-in-out'>Hi There!</h1>
                        <h1 className='text-4xl md:text-6xl text-[#cb70ff]'>
                            <span className='text-[#fbd9ad]'>I'M </span>HEMANT KAMLIYA
                        </h1>
                        <h1 className='text-4xl md:text-6xl text-[#cb70ff]'>
                            <span className='text-[#fbd9ad]'>Web </span>Developer
                        </h1>
                    </div>
                    {/* Social media links */}
                    <div className="social-media flex flex-row mt-4">
                        <SocialMedia />
                    </div>
                </div>

                {/* Profile image div */}
                <div className='flex justify-center mt-6 md:mt-0 lg:ml-10 md:pt-4 md:pl-20'>
                    <img 
                        src={hemantpfp} 
                        alt="Hemant Kamliya Profile" 
                        className='w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg transform transition duration-300 hover:scale-105'
                    />
                </div>
            </div>
            <About/>
            <Skills/>
        </div>
    );
};

export default Home;
