// About.jsx
import React from "react";
import { motion } from "framer-motion";
import about from "../../assets/about.png";

const About = () => {  
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="w-full mx-auto px-6 py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-center text-[#823ae0] text-3xl md:text-5xl font-bold mb-12"
                >
                    About Me
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div 
                        variants={itemVariants}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <img
                            src={about}
                            alt="About"
                            className="w-full max-w-sm md:max-w-md rounded-xl shadow-2xl border-2 border-purple-600/30 hover:border-purple-600/50 transition-all duration-500"
                        />
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <motion.p 
                            variants={itemVariants}
                            className="text-lg md:text-xl text-[#fbd9ad] leading-relaxed"
                        >
                            My name is <span className="text-purple-600 font-semibold">Hemant Kamliya</span> and I am a
                            <span className="text-purple-600 font-semibold"> Computer Science and Engineering</span> student at
                            <span className="text-purple-600 font-semibold"> Shri Vaishnav Vidyapeeth Vishwavidyalaya</span> in Indore, India.
                        </motion.p>

                        <motion.p variants={itemVariants} className="mt-6 text-[#fbd9ad]">
                            I specialize in modern web development with expertise in <span className="text-purple-600 font-semibold">React, Node.js, and Tailwind CSS</span>, along with strong foundations in <span className="text-purple-600 font-semibold">C, C++, and Java</span>.
                        </motion.p>

                        <motion.p variants={itemVariants} className="mt-6 text-[#fbd9ad]">
                            My passion lies in building <span className="text-purple-600 font-semibold">scalable web applications</span> with clean architecture and intuitive user interfaces.
                        </motion.p>

                        <motion.p variants={itemVariants} className="mt-6 text-[#fbd9ad]">
                            When I'm not coding, I enjoy exploring new technologies and contributing to <span className="text-purple-600 font-semibold">open-source projects</span> that solve real-world problems.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;