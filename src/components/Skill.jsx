// Import necessary dependencies
import React, { useState } from 'react';
import SkillCard from './SkillCard';

// Array of skill items with their details
const skillItem = [
    {
        imgSrc: '/assets/html.png',
        label: 'HTML',
        desc: 'Web Structure',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/css3.svg',
        label: 'CSS',
        desc: 'User Interface',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/javascript.svg',
        label: 'JavaScript',
        desc: 'Web Interaction',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/php.png',
        label: 'PHP',
        desc: 'Backend Development',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/Laravel.png',
        label: 'Laravel',
        desc: 'Backend Framework',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/react.svg',
        label: 'React',
        desc: 'Frontend Framework',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/tailwindcss.svg',
        label: 'Tailwind CSS',
        desc: 'UI Framework',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/mysql.png',
        label: 'MySQL',
        desc: 'Database',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/linux.jpg',
        label: 'Linux',
        desc: 'Operating System',
        category: 'system',
        tag: 'Work'
    },
    {
        imgSrc: '/assets/windows.jpg',
        label: 'Windows',
        desc: 'Operating System',
        category: 'system',
        tag: 'Work'
    },
    {
        imgSrc: '/assets/git.jpg',
        label: 'Git & GitHub',
        desc: 'Version Control',
        category: 'web',
        tag: 'Project'
    },
    {
        imgSrc: '/assets/cisco logo.jpg',
        label: 'Networking',
        desc: 'LAN/WAN & Troubleshooting',
        category: 'network',
        tag: 'Work'
    },
    {
        imgSrc: '/assets/cctv.jpg',
        label: 'CCTV Systems',
        desc: 'Installation & Maintenance',
        category: 'network',
        tag: 'Internship'
    }
];

// Skill component to display skill cards
const Skill = () => {

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredSkills = skillItem.filter(skill => {
        const matchCategory = filter === 'all' || skill.category === filter;
        const matchSearch = skill.label.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <section className="section">
            <div className="container">

                {/* Section headline */}
                <h2 className='headline-2 reveal-up'>
                    Primary Instruments I Depend On
                </h2>

                {/* Section description */}
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
                    Explore the tools and technologies I use across web development,
                    networking, and IT support.
                </p>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search skills..."
                    className="mb-6 p-3 rounded-xl bg-zinc-800 text-white w-full max-w-sm border border-zinc-700"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Filter Buttons */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    <button
                        onClick={() => setFilter('all')}
                        className="px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700"
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter('web')}
                        className="px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700"
                    >
                        Web Dev
                    </button>

                    <button
                        onClick={() => setFilter('network')}
                        className="px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700"
                    >
                        Networking
                    </button>

                    <button
                        onClick={() => setFilter('system')}
                        className="px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700"
                    >
                        System
                    </button>
                </div>

                {/* Skill Grid */}
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>

                    {filteredSkills.map(({ imgSrc, label, desc, tag }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={`${desc} • ${tag}`}
                            classes='reveal-up'
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skill;