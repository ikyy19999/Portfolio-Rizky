import React, { useState } from 'react';
import SkillCard from './SkillCard';

// Array of skill items with their details
const skillItem = [
    { imgSrc: '/assets/html.png', label: 'HTML', desc: 'Web Structure', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/css3.svg', label: 'CSS', desc: 'User Interface', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/javascript.svg', label: 'JavaScript', desc: 'Web Interaction', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/php.png', label: 'PHP', desc: 'Backend Development', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/Laravel.png', label: 'Laravel', desc: 'Backend Framework', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/react.svg', label: 'React', desc: 'Frontend Framework', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/tailwindcss.svg', label: 'Tailwind CSS', desc: 'UI Framework', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/mysql.png', label: 'MySQL', desc: 'Database', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/linux.jpg', label: 'Linux', desc: 'Operating System', category: 'system', tag: 'Work' },
    { imgSrc: '/assets/windows.jpg', label: 'Windows', desc: 'Operating System', category: 'system', tag: 'Work' },
    { imgSrc: '/assets/git.jpg', label: 'Git & GitHub', desc: 'Version Control', category: 'web', tag: 'Project' },
    { imgSrc: '/assets/cisco logo.jpg', label: 'Networking', desc: 'LAN/WAN & Troubleshooting', category: 'network', tag: 'Work' },
    { imgSrc: '/assets/cctv.jpg', label: 'CCTV Systems', desc: 'Installation & Maintenance', category: 'network', tag: 'Internship' }
];

const Skill = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredSkills = skillItem.filter(skill => {
        const matchCategory = filter === 'all' || skill.category === filter;
        const matchSearch = skill.label.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Helper function untuk style tombol filter (Aktif vs Tidak Aktif)
    const getFilterBtnStyle = (currentFilter) => {
        const baseStyle = "px-6 py-3 border-4 border-black font-black uppercase tracking-wider transition-all duration-100";
        
        if (filter === currentFilter) {
            // STATE AKTIF: Warna pink, efek tertekan (shadow hilang, posisi bergeser)
            return `${baseStyle} bg-pink-400 translate-x-[4px] translate-y-[4px] shadow-none text-black`;
        } else {
            // STATE TIDAK AKTIF: Warna putih, shadow solid, efek hover memantul
            return `${baseStyle} bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-yellow-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`;
        }
    };

    return (
        <section id="skills" className="section relative overflow-hidden bg-white py-20 border-b-8 border-black">
            <div className="container mx-auto px-4">

                {/* Section Headline */}
                <div className='mb-12 reveal-up'>
                    <span className='inline-block bg-yellow-400 border-2 border-black text-black font-black uppercase tracking-[0.2em] px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                        My Arsenal
                    </span>

                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight max-w-[20ch] mb-6 leading-[1.1]'>
                        Primary Instruments I Depend On
                    </h2>

                    <p className='text-black font-bold text-lg border-l-8 border-cyan-400 pl-5 bg-gray-50 py-3 pr-3 max-w-[50ch]'>
                        Explore the tools and technologies I use across web development,
                        networking, and IT support.
                    </p>
                </div>

                {/* Search & Filter Controls */}
                <div className="mb-14 reveal-up">
                    
                    {/* Search Input gaya Brutalism */}
                    <input
                        type="text"
                        placeholder="SEARCH SKILLS..."
                        className="w-full max-w-md p-4 mb-8 bg-white border-4 border-black text-black font-black uppercase placeholder-gray-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[4px] focus:translate-y-[4px] focus:shadow-none transition-all duration-100"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Filter Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <button
                            onClick={() => setFilter('all')}
                            className={getFilterBtnStyle('all')}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('web')}
                            className={getFilterBtnStyle('web')}
                        >
                            Web Dev
                        </button>
                        <button
                            onClick={() => setFilter('network')}
                            className={getFilterBtnStyle('network')}
                        >
                            Networking
                        </button>
                        <button
                            onClick={() => setFilter('system')}
                            className={getFilterBtnStyle('system')}
                        >
                            System
                        </button>
                    </div>

                </div>

                {/* Skill Grid */}
                {/* Asumsi komponen SkillCard nantinya juga akan diubah ke gaya neubrutalism secara terpisah */}
                <div className='grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                    {filteredSkills.length > 0 ? (
                        filteredSkills.map(({ imgSrc, label, desc, tag }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={`${desc} • ${tag}`}
                                classes='reveal-up'
                            />
                        ))
                    ) : (
                        // Tampilan jika pencarian tidak menemukan hasil
                        <div className="col-span-full p-8 border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-2xl font-black text-black uppercase">No Skills Found</h3>
                            <p className="font-bold text-black mt-2">Try adjusting your search or filter.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Skill;