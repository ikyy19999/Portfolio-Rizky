import React, { useMemo, useState } from 'react'
import SkillCard from './SkillCard'

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
]

const filters = [
    {
        label: 'All',
        value: 'all'
    },
    {
        label: 'Web Development',
        value: 'web'
    },
    {
        label: 'Networking',
        value: 'network'
    },
    {
        label: 'Systems',
        value: 'system'
    }
]

const Skill = () => {
    const [filter, setFilter] = useState('all')
    const [search, setSearch] = useState('')

    const filteredSkills = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase()

        return skillItem.filter((skill) => {
            const matchCategory =
                filter === 'all' || skill.category === filter

            const matchSearch =
                normalizedSearch === '' ||
                skill.label.toLowerCase().includes(normalizedSearch) ||
                skill.desc.toLowerCase().includes(normalizedSearch) ||
                skill.tag.toLowerCase().includes(normalizedSearch)

            return matchCategory && matchSearch
        })
    }, [filter, search])

    return (
        <section
            id="skills"
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
                        lg:grid-cols-[0.85fr_1.15fr]
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
                            <span>03</span>

                            <span
                                className="
                                    h-px
                                    w-10
                                    bg-white/[0.12]
                                "
                                aria-hidden="true"
                            />

                            <span>Skills</span>
                        </div>

                        <h2 className="headline-2 max-w-[16ch]">
                            Technologies I use across product development and infrastructure.
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-lg
                                text-[15px]
                                leading-7
                                text-zinc-500
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            My toolkit covers frontend, backend,
                            databases, networking, operating systems,
                            and the technologies behind reliable web
                            products.
                        </p>
                    </div>

                    <div
                        className="
                            flex
                            flex-col
                            justify-end
                            gap-8
                        "
                    >
                        <div>
                            <label
                                htmlFor="skill-search"
                                className="eyebrow"
                            >
                                Search
                            </label>

                            <div className="relative mt-3 max-w-lg">
                                <span
                                    className="
                                        material-symbols-rounded
                                        pointer-events-none
                                        absolute
                                        left-0
                                        top-1/2
                                        z-10
                                        -translate-y-1/2
                                        text-[20px]
                                        text-zinc-600
                                    "
                                    aria-hidden="true"
                                >
                                    search
                                </span>

                                <input
                                    id="skill-search"
                                    type="search"
                                    value={search}
                                    placeholder="Search technologies"
                                    autoComplete="off"
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    className="
                                        line-input
                                        pl-9
                                        pr-9
                                    "
                                />

                                {search.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={() => setSearch('')}
                                        className="
                                            absolute
                                            right-0
                                            top-1/2
                                            z-10
                                            grid
                                            h-8
                                            w-8
                                            -translate-y-1/2
                                            place-items-center
                                            text-zinc-600
                                            transition-colors
                                            duration-200
                                            hover:text-zinc-300
                                            focus:outline-none
                                        "
                                        aria-label="Clear search"
                                    >
                                        <span
                                            className="
                                                material-symbols-rounded
                                                text-[18px]
                                            "
                                            aria-hidden="true"
                                        >
                                            close
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div>
                            <p className="eyebrow">
                                Category
                            </p>

                            <div
                                className="
                                    mt-4
                                    flex
                                    gap-x-7
                                    overflow-x-auto
                                    border-b
                                    border-white/[0.08]
                                    sm:flex-wrap
                                    sm:overflow-visible
                                "
                                aria-label="Skill categories"
                            >
                                {filters.map((item) => {
                                    const isActive =
                                        filter === item.value

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
                                                pb-3
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
                        </div>
                    </div>
                </div>

                <div
                    className="
                        reveal-up
                        mt-14
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/[0.08]
                        pb-4
                        sm:mt-16
                    "
                >
                    <p
                        className="
                            text-sm
                            font-medium
                            tracking-[-0.015em]
                            text-zinc-400
                        "
                    >
                        Technology index
                    </p>

                    <p className="text-xs text-zinc-700">
                        {filteredSkills.length} / {skillItem.length}
                    </p>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        border-b
                        border-white/[0.08]
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {filteredSkills.length > 0 ? (
                        filteredSkills.map(
                            ({
                                imgSrc,
                                label,
                                desc,
                                tag
                            }) => (
                                <SkillCard
                                    key={label}
                                    imgSrc={imgSrc}
                                    label={label}
                                    desc={`${desc} · ${tag}`}
                                />
                            )
                        )
                    ) : (
                        <div
                            className="
                                col-span-full
                                flex
                                min-h-[240px]
                                flex-col
                                items-center
                                justify-center
                                py-16
                                text-center
                            "
                        >
                            <span
                                className="
                                    material-symbols-rounded
                                    text-[28px]
                                    text-zinc-700
                                "
                                aria-hidden="true"
                            >
                                search_off
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
                                No technologies found
                            </h3>

                            <p
                                className="
                                    mt-2
                                    max-w-sm
                                    text-sm
                                    leading-6
                                    text-zinc-600
                                "
                            >
                                Try another keyword or switch to a different category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Skill