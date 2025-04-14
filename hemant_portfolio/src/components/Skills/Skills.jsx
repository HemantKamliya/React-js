
import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { styled } from '@mui/system';
import './Skills.css'
import { ArrowRight } from 'lucide-react';
import { skillsData } from '../data/skillsData'
import { skillsImage } from '../../assets/skillsImage'
import purpleThemegirl from '../../assets/purpleTheme-girl.svg'
import { Link } from "react-router-dom";
const theme = {
    type: 'dark',
    primary: '#823ae0',
    primary400: '#9456e5',
    primary600: '#762ad9',
    primary80: '#823ae0cc',
    primary50: '#823ae080',
    primary30: '#823ae04d',
    secondary: '#212121',
    secondary70: '#212121b3',
    secondary50: '#21212180',
    tertiary: '#eaeaea',
    tertiary80: '#eaeaeacc',
    tertiary70: '#eaeaeab3',
    tertiary50: '#eaeaea80',
    aboutimg1: purpleThemegirl,
}


function Skills() {



    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }



    return (
        <div className="skills w-full dark:bg-grid-white/[0.4] bg-gradient-to-r from-gray-900 via-gray-800 to-black  flex items-center justify-center" style={{ backgroundColor: theme.secondary }} id='skills'>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer ">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className='flex w-full  justify-end mt-6 pr-2 '>
                <Link
                    to="/SkillsGrid"
                    className="inline-flex items-center justify-center bg-purple-600 text-white  px-4 py-2  rounded-full  font-semibold hover:bg-purple-700         transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
                >
                    <span className="mr-2">View All</span>
                    <ArrowRight
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        size={20}
                    />
                </Link>


            </div>

        </div>
    )
}

export default Skills
