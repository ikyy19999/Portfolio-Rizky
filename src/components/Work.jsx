import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const works = [
    {
        imgSrc: '/assets/Screenshot 2026-03-16 045059.png',
        title: 'Online Ramen Shop',
        desc: 'Modern ramen e-commerce platform with elegant UI and CMS dashboard.',
        category: 'web',
        tech: ['Laravel', 'Filament', 'Livewire'],
        demo: 'https://tokoramen.rizkymaulana.web.id/en/ramenenak.id'
    },
    {
        imgSrc: '/assets/Lapangan.png',
        title: 'Sports Booking Platform',
        desc: 'Online sports court reservation system with responsive experience.',
        category: 'web',
        tech: ['Laravel', 'Filament', 'Livewire'],
        demo: 'https://booking-lapangan.rizkymaulana.web.id/'
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
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Web Apps',
        value: 'web'
    },
    {
        label: 'Tools',
        value: 'tool'
    }
]

const Work = () => {

    const [filter, setFilter] = useState('all')

    const filteredProjects = works.filter(project =>
        filter === 'all' || project.category === filter
    )

    return (

        <section
            id='work'
            className='section relative overflow-hidden'
        >

            {/* Background Glow */}
            <div className='absolute inset-0 -z-10 overflow-hidden'>

                <div className='absolute top-0 right-0
                w-[500px] h-[500px]
                bg-sky-500/10 blur-[120px]
                rounded-full'></div>

            </div>

            <div className='container'>

                {/* Top Header */}
                <div className='flex flex-col lg:flex-row
                lg:items-end lg:justify-between gap-8 mb-14'>

                    <div>

                        <p className='text-sm uppercase tracking-[0.2em]
                        text-zinc-500 mb-5 reveal-up'>

                            Featured Projects

                        </p>

                        <h2 className='headline-2 reveal-up max-w-[14ch] mb-6'>

                            Selected work crafted
                            with precision.

                        </h2>

                        <p className='text-zinc-400 max-w-[60ch] reveal-up'>

                            Explore some of the projects I’ve designed and developed,
                            combining modern UI/UX with scalable backend architecture.

                        </p>

                    </div>

                    {/* Filters */}
                    <div className='flex flex-wrap gap-3 reveal-up'>

                        {filters.map((item, key) => (

                            <button
                                key={key}
                                onClick={() => setFilter(item.value)}
                                className={`
                                    px-5 py-3 rounded-2xl
                                    text-sm font-medium
                                    transition-all duration-300

                                    ${filter === item.value
                                        ? `
                                            bg-sky-500
                                            text-white
                                            shadow-lg shadow-sky-500/20
                                        `
                                        : `
                                            bg-white/[0.03]
                                            border border-white/10
                                            text-zinc-400
                                            hover:bg-white/[0.06]
                                            hover:text-white
                                        `
                                    }
                                `}
                            >

                                {item.label}

                            </button>

                        ))}

                    </div>

                </div>

                {/* Project Grid */}
                <div className='grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-7'>

                    {filteredProjects.map((project, key) => (

                        <ProjectCard
                            key={key}
                            imgSrc={project.imgSrc}
                            title={project.title}
                            desc={project.desc}
                            tags={project.tech}
                            projectLink={project.demo}
                            classes='reveal-up'
                        />

                    ))}

                </div>

            </div>

        </section>

    )
}

export default Work