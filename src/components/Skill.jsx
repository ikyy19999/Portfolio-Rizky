// Import necessary dependencies
import React from 'react';
import SkillCard from './SkillCard';

// Array of skill items with their details
const skillItem = [
    {
        imgSrc: '/assets/html.png',
        label: 'HTML',
        desc: 'Basic Tool'
    },
    {
        imgSrc: '/assets/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/assets/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/assets/php.png',
        label: 'Php',
        desc: 'Interaction'
    },
    {
        imgSrc: '/assets/python.png',
        label: 'Python',
        desc: 'Interaction'
    },
    {
        imgSrc: '/assets/java.png',
        label: 'Java',
        desc: 'Interaction'
    },
    {
        imgSrc: '/assets/mysql.png',
        label: 'MySQL',
        desc: 'Database'
    },
    {
        imgSrc: '/assets/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/assets/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/assets/Laravel.png',
        label: 'Laravel',
        desc: 'Framework'
    }
];

// Skill component to display skill cards
const Skill = () => {
    return (
        // Main section for skills
        <section className="section">
            <div className="container">
                {/* Section headline */}
                <h2 className='headline-2 reveal-up'>Primary Instruments I Depend On</h2>
                
                {/* Section description */}
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
                    Explore the amazing tools and technologies I use to build 
                    outstanding, high-performance websites and applications.
                </p>
                
                {/* Grid layout for skill cards */}
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    {/* Map through skill items and render SkillCard components */}
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            classes='reveal-up'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;