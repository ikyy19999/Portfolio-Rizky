import React from 'react'

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
        label: 'Projects',
        href: '#work'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
]

const socials = [
    {
        label: 'LinkedIn',
        href: '#',
        external: false
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/thinkaboutky___',
        external: true
    },
    {
        label: 'Email',
        href: 'mailto:hello@madebyrizky.my.id',
        external: false
    }
]

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const handleNavigation = (event, href) => {
        if (!href.startsWith('#')) return

        event.preventDefault()

        const section = document.querySelector(href)

        if (!section) return

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <footer
            className="
                relative
                border-t
                border-white/[0.08]
                pb-28
                pt-16
                sm:pt-20
                md:pb-10
                lg:pt-24
            "
        >
            <div className="container">
                <div
                    className="
                        reveal-up
                        grid
                        gap-10
                        border-b
                        border-white/[0.08]
                        pb-14
                        sm:pb-16
                        lg:grid-cols-[1fr_auto]
                        lg:items-end
                        lg:gap-20
                    "
                >
                    <div>
                        <p
                            className="
                                text-xs
                                font-medium
                                tracking-[0.12em]
                                text-zinc-600
                            "
                        >
                            Have something in mind?
                        </p>

                        <h2
                            className="
                                mt-5
                                max-w-[15ch]
                                text-3xl
                                font-semibold
                                leading-[1.02]
                                tracking-[-0.045em]
                                text-zinc-50
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Let&apos;s create something thoughtful
                            and useful.
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-xl
                                text-[15px]
                                leading-7
                                text-zinc-500
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            From product interfaces to scalable web
                            applications, I&apos;m open to projects
                            where thoughtful design and solid
                            engineering matter.
                        </p>
                    </div>

                    <a
                        href="mailto:hello@madebyrizky.my.id"
                        className="
                            group
                            inline-flex
                            h-12
                            w-full
                            items-center
                            justify-between
                            gap-5
                            bg-zinc-50
                            px-5
                            text-sm
                            font-medium
                            tracking-[-0.015em]
                            text-zinc-950
                            transition-all
                            duration-200
                            hover:bg-white
                            active:scale-[0.99]
                            sm:w-auto
                            sm:min-w-[180px]
                        "
                        style={{
                            borderRadius: '11px'
                        }}
                    >
                        <span>
                            Start a project
                        </span>

                        <span
                            className="
                                material-symbols-rounded
                                text-[18px]
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                            aria-hidden="true"
                        >
                            arrow_outward
                        </span>
                    </a>
                </div>

                <div
                    className="
                        grid
                        gap-12
                        py-12
                        sm:py-14
                        md:grid-cols-2
                        lg:grid-cols-[1.2fr_0.7fr_0.7fr]
                        lg:gap-16
                    "
                >
                    <div className="reveal-up">
                        <a
                            href="#home"
                            onClick={(event) =>
                                handleNavigation(event, '#home')
                            }
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    border
                                    border-white/[0.08]
                                    bg-white/[0.03]
                                    transition-colors
                                    duration-300
                                    group-hover:border-white/[0.14]
                                    group-hover:bg-white/[0.05]
                                "
                                style={{
                                    borderRadius: '11px'
                                }}
                            >
                                <img
                                    src="/assets/favicon.ico"
                                    width={28}
                                    height={28}
                                    alt="Rizky Maulana"
                                    className="
                                        h-7
                                        w-7
                                        object-contain
                                        transition-transform
                                        duration-300
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-[15px]
                                        font-semibold
                                        leading-tight
                                        tracking-[-0.025em]
                                        text-zinc-100
                                    "
                                >
                                    Rizky Maulana
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-zinc-600
                                    "
                                >
                                    Full Stack Developer
                                </p>
                            </div>
                        </a>

                        <p
                            className="
                                mt-6
                                max-w-sm
                                text-sm
                                leading-7
                                text-zinc-600
                            "
                        >
                            Building modern digital products across
                            frontend, backend, interface design, and
                            IT infrastructure.
                        </p>

                        <a
                            href="mailto:hello@madebyrizky.my.id"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                text-zinc-400
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            hello@madebyrizky.my.id

                            <span
                                className="
                                    material-symbols-rounded
                                    text-[16px]
                                "
                                aria-hidden="true"
                            >
                                north_east
                            </span>
                        </a>
                    </div>

                    <div className="reveal-up">
                        <p className="eyebrow">
                            Navigation
                        </p>

                        <nav
                            className="
                                mt-5
                                border-t
                                border-white/[0.08]
                            "
                            aria-label="Footer navigation"
                        >
                            {sitemap.map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={(event) =>
                                        handleNavigation(event, href)
                                    }
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        gap-5
                                        border-b
                                        border-white/[0.08]
                                        py-3.5
                                        text-sm
                                        text-zinc-500
                                        transition-colors
                                        duration-200
                                        hover:text-zinc-100
                                    "
                                >
                                    <span>
                                        {label}
                                    </span>

                                    <span
                                        className="
                                            material-symbols-rounded
                                            translate-x-1
                                            text-[16px]
                                            text-zinc-800
                                            opacity-0
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-0
                                            group-hover:text-zinc-500
                                            group-hover:opacity-100
                                        "
                                        aria-hidden="true"
                                    >
                                        east
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="reveal-up">
                        <p className="eyebrow">
                            Connect
                        </p>

                        <div
                            className="
                                mt-5
                                border-t
                                border-white/[0.08]
                            "
                        >
                            {socials.map(
                                ({
                                    label,
                                    href,
                                    external
                                }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={
                                            external
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            external
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            gap-5
                                            border-b
                                            border-white/[0.08]
                                            py-3.5
                                            text-sm
                                            text-zinc-500
                                            transition-colors
                                            duration-200
                                            hover:text-zinc-100
                                        "
                                    >
                                        <span>
                                            {label}
                                        </span>

                                        <span
                                            className="
                                                material-symbols-rounded
                                                text-[16px]
                                                text-zinc-800
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-0.5
                                                group-hover:-translate-y-0.5
                                                group-hover:text-zinc-500
                                            "
                                            aria-hidden="true"
                                        >
                                            north_east
                                        </span>
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className="
                        reveal-up
                        flex
                        flex-col
                        gap-4
                        border-t
                        border-white/[0.08]
                        pt-6
                        text-xs
                        text-zinc-700
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © {currentYear} Rizky Maulana. All rights reserved.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            })
                        }}
                        className="
                            group
                            flex
                            w-fit
                            items-center
                            gap-2
                            text-zinc-600
                            transition-colors
                            duration-200
                            hover:text-zinc-300
                        "
                    >
                        Back to top

                        <span
                            className="
                                material-symbols-rounded
                                text-[16px]
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                            "
                            aria-hidden="true"
                        >
                            north
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer