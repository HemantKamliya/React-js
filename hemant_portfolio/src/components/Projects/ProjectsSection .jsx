import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsdata';

const ProjectsSection = () => {
    return (
        <div className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black px-[3%]">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-purple-300">
                        Projects
                    </h2>
                </div>

                {/* Using Marquee component for smooth scrolling */}
                <div className="relative overflow-hidden">
                    <Marquee
                        gradient={true}
                        gradientColor={[40, 40, 45]} // Dark gradient color similar to your background
                        gradientWidth={64}
                        speed={100}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {projectsData.map((project, index) => (
                            <div 
                                key={`project-${index}`} 
                                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] mx-3"
                            >
                                <ProjectCard {...project} index={index} />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* View All Button */}
                <div className="flex w-full justify-end mt-8 pr-2">
                    <Link
                        to="/projects"
                        className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
                    >
                        <span className="mr-2">View All</span>
                        <ArrowRight
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            size={20}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;