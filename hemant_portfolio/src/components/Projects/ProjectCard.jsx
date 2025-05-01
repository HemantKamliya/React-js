import React, { useState, useEffect, useRef } from 'react';

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    // Use Intersection Observer API for smoother scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add animation class with staggered delay based on index
                        setTimeout(() => {
                            entry.target.classList.add('card-visible');
                        }, index * 150);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 card-hidden
                       h-56 sm:h-60 md:h-64" // Responsive height
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d2755] via-[#2d2755]/70 to-transparent"></div>

            <div className="relative h-full p-4 sm:p-5 md:p-6 flex flex-col justify-end z-10">
                <h3 className="text-purple-300 text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{title}</h3>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-purple-900/70 text-purple-200 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Description overlay that appears on hover */}
                <div
                    className={`absolute inset-0 bg-[#2d2755]/95 p-4 sm:p-5 md:p-6 flex flex-col transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <h3 className="text-purple-300 text-xl sm:text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-auto overflow-y-auto max-h-28 sm:max-h-32">{description}</p>

                    <div className="flex space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 bg-purple-700 hover:bg-purple-600 text-white text-sm rounded-md transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                        </a>

                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 bg-purple-800 hover:bg-purple-700 text-white text-sm rounded-md transition-colors duration-300"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// You'll need to add this CSS to your global styles or component
// This is for the smooth animation instead of AOS
const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-hidden {
  opacity: 0;
  transform: translateY(30px);
}

.card-visible {
  animation: fadeInUp 0.8s ease forwards;
}
`;

const ProjectCardWithStyles = (props) => {
    return (
        <>
            <style>{styles}</style>
            <ProjectCard {...props} />
        </>
    );
};

export default ProjectCardWithStyles;