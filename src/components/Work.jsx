import React, { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'

const works = [
    {
        imgSrc: '/assets/Galaxy-S22+-sportix.madebyrizky.my.id.png',
        title: 'Sports Booking Platform',
        desc: 'Online sports court reservation system with a responsive booking experience.',
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
        desc: 'Instant QR code generator with a simple and focused interface.',
        category: 'tool',
        tech: ['JavaScript', 'API'],
        demo: '/assets/QR/index.html'
    },
    {
        imgSrc: '/assets/Calculator.png',
        title: 'Calculator Tool',
        desc: 'Simple utility calculator focused on usability and accessibility.',
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
        desc: 'Personal finance tracking application with budgeting features.',
        category: 'tool',
        tech: ['HTML', 'JavaScript'],
        demo: '/assets/Personal Finance Tracker/index.html'
    }
]

const filters = [
    {
        label: 'All Projects',
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

    const filteredProjects = useMemo(() => {
        return works.filter((project) => {
            return filter === 'all' || project.category === filter
        })
    }, [filter])

    return (
        <section
            id="work"
            className="
                section
                section-divider
                relative
                overflow-hidden
            "
        >
            <div className="container">
                <div
                    className="
                        reveal-up
                        grid
                        gap-10
                        lg:grid-cols-[0.9fr_1.1fr]
                        lg:gap-20
                        xl:gap-28
                    "
                >
                    <div>
                        <div
                            className="
                                mb-8
                                flex
                                items-center
                                gap-4
                                text-xs
                                font-medium
                                tracking-[0.12em]
                                text-zinc-600
                            "
                        >
                            <span>
                                04
                            </span>

                            <span
                                className="
                                    h-px
                                    w-10
                                    bg-white/[0.12]
                                "
                                aria-hidden="true"
                            />

                            <span>
                                Selected Work
                            </span>
                        </div>

                        <h2 className="headline-2 max-w-[15ch]">
                            Digital products built around real ideas and useful experiences.
                        </h2>
                    </div>

                    <div
                        className="
                            flex
                            flex-col
                            justify-end
                        "
                    >
                        <p
                            className="
                                max-w-xl
                                text-[15px]
                                leading-7
                                text-zinc-500
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            A selection of web applications and tools
                            I&apos;ve designed and developed across
                            frontend, backend, database, and product
                            interface work.
                        </p>
                    </div>
                </div>

                <div
                    className="
                        reveal-up
                        mt-14
                        flex
                        flex-col
                        gap-6
                        border-b
                        border-white/[0.08]
                        sm:mt-16
                        sm:flex-row
                        sm:items-end
                        sm:justify-between
                    "
                >
                    <div
                        className="
                            flex
                            gap-x-7
                            overflow-x-auto
                            sm:overflow-visible
                        "
                        aria-label="Project categories"
                    >
                        {filters.map((item) => {
                            const isActive = filter === item.value

                            return (
                                <button
                                    key={item.value}
                                    type="button"
                                    onClick={() =>
                                        setFilter(item.value)
                                    }
                                    className={`
                                        relative
                                        shrink-0
                                        pb-4
                                        text-sm
                                        font-medium
                                        tracking-[-0.015em]
                                        transition-colors
                                        duration-200
                                        ${
                                            isActive
                                                ? 'text-zinc-100'
                                                : 'text-zinc-600 hover:text-zinc-300'
                                        }
                                    `}
                                    aria-pressed={isActive}
                                >
                                    {item.label}

                                    <span
                                        className={`
                                            absolute
                                            bottom-0
                                            left-0
                                            h-px
                                            bg-zinc-100
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? 'w-full opacity-100'
                                                    : 'w-0 opacity-0'
                                            }
                                        `}
                                        aria-hidden="true"
                                    />
                                </button>
                            )
                        })}
                    </div>

                    <p
                        className="
                            hidden
                            pb-4
                            text-xs
                            text-zinc-700
                            sm:block
                        "
                    >
                        {String(filteredProjects.length).padStart(2, '0')} projects
                    </p>
                </div>

                {filteredProjects.length > 0 ? (
                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-1
                            gap-x-6
                            gap-y-12
                            sm:mt-10
                            md:grid-cols-2
                            lg:gap-x-8
                            lg:gap-y-16
                        "
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                imgSrc={project.imgSrc}
                                title={project.title}
                                desc={project.desc}
                                tags={project.tech}
                                projectLink={project.demo}
                                index={index + 1}
                            />
                        ))}
                    </div>
                ) : (
                    <div
                        className="
                            flex
                            min-h-[300px]
                            flex-col
                            items-center
                            justify-center
                            border-b
                            border-white/[0.08]
                            text-center
                        "
                    >
                        <span
                            className="
                                material-symbols-rounded
                                text-[30px]
                                text-zinc-700
                            "
                            aria-hidden="true"
                        >
                            folder_off
                        </span>

                        <h3
                            className="
                                mt-4
                                text-lg
                                font-medium
                                tracking-[-0.025em]
                                text-zinc-300
                            "
                        >
                            No projects found
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-zinc-600
                            "
                        >
                            Try another project category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Work