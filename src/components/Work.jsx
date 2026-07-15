import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const works = [
    // {
    //     imgSrc: '/assets/Screenshot 2026-03-16 045059.png',
    //     title: 'Online Ramen Shop',
    //     desc: 'Modern ramen e-commerce platform with elegant UI and CMS dashboard.',
    //     category: 'web',
    //     tech: ['Laravel', 'Filament', 'Livewire'],
    //     demo: 'https://tokoramen.rizkymaulana.web.id'
    // },
    {
        imgSrc: '/assets/Galaxy-S22+-sportix.madebyrizky.my.id.png',
        title: 'Sports Booking Platform',
        desc: 'Online sports court reservation system with responsive experience.',
        category: 'web',
        tech: ['Laravel', 'Filament', 'Livewire'],
        demo: 'https://sportix.madebyrizky.my.id'
    },
    {
        imgSrc: '/assets/Web Music.png',
        title: 'Music Streaming Website',
        desc: 'Interactive music platform integrated with public APIs.',
        category: 'web',
        tech: ['HTML', 'CSS', 'JavaScript'],
        demo: '/assets/Web Music/music.html'
    },
    {
        imgSrc: '/assets/Book.png',
        title: 'Bookshelf App',
        desc: 'Minimal reading management application with local storage.',
        category: 'tool',
        tech: ['JavaScript', 'LocalStorage'],
        demo: '/assets/Bookshelf App/book.html'
    },
    {
        imgSrc: '/assets/QR.png',
        title: 'QR Generator',
        desc: 'Instant QR code generator with clean modern interface.',
        category: 'tool',
        tech: ['JavaScript', 'API'],
        demo: '/assets/QR/index.html'
    },
    {
        imgSrc: '/assets/Calculator.png',
        title: 'Calculator Tool',
        desc: 'Simple utility calculator focused on usability.',
        category: 'tool',
        tech: ['HTML', 'JavaScript'],
        demo: '/assets/Calculator/index.html'
    },
    {
        imgSrc: '/assets/Calender.png',
        title: 'Calendar App',
        desc: 'Interactive calendar application with event management.',
        category: 'tool',
        tech: ['HTML', 'JavaScript'],
        demo: '/assets/Calender/index.html'
    },
    {
        imgSrc: '/assets/Finance.png',
        title: 'Finance Tracker',
        desc: 'Interactive finance tracking application with budgeting features.',
        category: 'tool',
        tech: ['HTML', 'JavaScript'],
        demo: '/assets/Personal Finance Tracker/index.html'
    },
]

const filters = [
    { label: 'All', value: 'all' },
    { label: 'Web Apps', value: 'web' },
    { label: 'Tools', value: 'tool' }
]

const Work = () => {

    const [filter, setFilter] = useState('all')

    const filteredProjects = works.filter(project =>
        filter === 'all' || project.category === filter
    )

    // Helper function untuk style tombol filter (Aktif vs Tidak Aktif)
    const getFilterBtnStyle = (currentValue) => {
        const baseStyle = "px-6 py-3 border-4 border-black font-black uppercase tracking-wider transition-all duration-100";
        
        if (filter === currentValue) {
            // STATE AKTIF: Warna pink, efek tertekan mekanikal
            return `${baseStyle} bg-pink-400 translate-x-[4px] translate-y-[4px] shadow-none text-black`;
        } else {
            // STATE TIDAK AKTIF: Warna putih, shadow solid, efek hover memantul
            return `${baseStyle} bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:bg-yellow-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`;
        }
    };

    return (

        <section
            id='work'
            // Background solid terang dan garis pemisah tegas
            className='section relative overflow-hidden bg-white py-20 border-b-8 border-black'
        >

            {/* Background Glow Dihapus */}

            <div className='container mx-auto px-4'>

                {/* Top Header */}
                <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16'>

                    <div>
                        {/* Label Badge Brutalism */}
                        <span className='inline-block bg-cyan-400 border-2 border-black text-black font-black uppercase tracking-[0.2em] px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] reveal-up'>
                            Featured Projects
                        </span>

                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight max-w-[15ch] mb-6 leading-[1.1] reveal-up'>
                            Selected work crafted with precision.
                        </h2>

                        {/* Deskripsi ditebalkan dengan garis pinggir (border-l) */}
                        <p className='text-black font-bold text-lg md:text-xl border-l-8 border-yellow-400 pl-5 bg-gray-50 py-3 pr-3 max-w-[50ch] reveal-up'>
                            Explore some of the projects I’ve designed and developed,
                            combining modern UI/UX with scalable backend architecture.
                        </p>

                    </div>

                    {/* Filters */}
                    <div className='flex flex-wrap gap-4 reveal-up'>

                        {filters.map((item, key) => (
                            <button
                                key={key}
                                onClick={() => setFilter(item.value)}
                                className={getFilterBtnStyle(item.value)}
                            >
                                {item.label}
                            </button>
                        ))}

                    </div>

                </div>

                {/* Project Grid */}
                {/* Gap diperbesar (gap-10) untuk memberi ruang pada bayangan kartu brutalism agar tidak bertabrakan */}
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 pb-4 pr-4'>

                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, key) => (
                            <ProjectCard
                                key={key}
                                imgSrc={project.imgSrc}
                                title={project.title}
                                desc={project.desc}
                                tags={project.tech}
                                projectLink={project.demo}
                                classes='reveal-up'
                            />
                        ))
                    ) : (
                        // Fallback message jika tidak ada proyek (meski array saat ini tidak kosong, ini untuk best practice)
                        <div className="col-span-full p-8 border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                            <h3 className="text-2xl font-black text-black uppercase">No Projects Found</h3>
                        </div>
                    )}

                </div>

            </div>

        </section>

    )
}

export default Work
