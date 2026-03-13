// Import necessary dependencies
import React from 'react';
import SkillCard from './SkillCard';

// Array of skill items with their details
const skillItem = [
    {
        imgSrc: '/assets/html.png',
        label: 'HTML',
        desc: 'Web Structure'
    },
    {
        imgSrc: '/assets/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/assets/javascript.svg',
        label: 'JavaScript',
        desc: 'Web Interaction'
    },
    {
        imgSrc: '/assets/php.png',
        label: 'PHP',
        desc: 'Backend Development'
    },
    {
        imgSrc: '/assets/Laravel.png',
        label: 'Laravel',
        desc: 'Backend Framework'
    },
    {
        imgSrc: '/assets/react.svg',
        label: 'React',
        desc: 'Frontend Framework'
    },
    {
        imgSrc: '/assets/tailwindcss.svg',
        label: 'Tailwind CSS',
        desc: 'UI Framework'
    },
    {
        imgSrc: '/assets/mysql.png',
        label: 'MySQL',
        desc: 'Database'
    },
    {
        imgSrc: '/assets/linux.jpg',
        label: 'Linux',
        desc: 'Operating System'
    },
    {
        imgSrc: '/assets/windows.jpg',
        label: 'Windows',
        desc: 'Operating System'
    },
    {
        imgSrc: '/assets/git.jpg',
        label: 'Git & GitHub',
        desc: 'Version Control'
    },
    {
        imgSrc: '/assets/cisco logo.jpg',
        label: 'Networking',
        desc: 'LAN/WAN & Troubleshooting'
    },
    {
        imgSrc: '/assets/cctv.jpg',
        label: 'CCTV Systems',
        desc: 'Installation & Maintenance'
    },
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
                    Explore the tools and technologies I use in various IT fields, 
                    including web development, networking, and system support.
                </p>
                
                {/* Grid layout for skill cards */}
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    {/* Map through skill items and render SkillCard components */}
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes='reveal-up'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;