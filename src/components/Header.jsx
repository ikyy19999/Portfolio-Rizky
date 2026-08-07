import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, {
            passive: true
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleHomeClick = (event) => {
        event.preventDefault()

        const section = document.querySelector('#home')

        if (!section) return

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <>
            <header
                className={`
                    fixed left-0 top-0 z-50 w-full
                    transition-all duration-300
                    ${scrolled ? 'pt-3' : 'pt-4 sm:pt-5'}
                `}
            >
                <div className="container">
                    <div
                        className={`
                            flex items-center justify-between
                            transition-all duration-300
                            ${
                                scrolled
                                    ? `
                                        liquid-glass
                                        px-3 py-2
                                        sm:px-4
                                        md:px-5
                                    `
                                    : `
                                        border border-transparent
                                        bg-transparent
                                        px-0 py-2
                                    `
                            }
                        `}
                        style={{
                            borderRadius: scrolled ? '16px' : '0px'
                        }}
                    >
                        <a
                            href="#home"
                            onClick={handleHomeClick}
                            className="
                                group
                                flex min-w-0
                                items-center gap-3
                                focus:outline-none
                            "
                            aria-label="Go to home"
                        >
                            <div
                                className="
                                    relative
                                    flex h-10 w-10
                                    shrink-0
                                    items-center justify-center
                                    overflow-hidden
                                    border border-white/[0.08]
                                    bg-white/[0.035]
                                    transition-all duration-300
                                    group-hover:border-white/[0.15]
                                    group-hover:bg-white/[0.055]
                                "
                                style={{
                                    borderRadius: '11px'
                                }}
                            >
                                <img
                                    src="/assets/favicon.ico"
                                    alt="Rizky Maulana"
                                    width={30}
                                    height={30}
                                    className="
                                        h-7 w-7
                                        object-contain
                                        transition-transform duration-300
                                        group-hover:scale-[1.05]
                                    "
                                />
                            </div>

                            <div className="hidden min-w-0 sm:block">
                                <p
                                    className="
                                        truncate
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
                                        mt-0.5
                                        truncate
                                        text-xs
                                        font-normal
                                        tracking-[-0.01em]
                                        text-zinc-600
                                    "
                                >
                                    Full Stack Developer
                                </p>
                            </div>
                        </a>

                        <div className="hidden md:flex md:items-center">
                            <Navbar />
                        </div>

                        <div className="hidden md:flex md:items-center">
                            <a
                                href="#contact"
                                className="
                                    group
                                    inline-flex h-10
                                    items-center gap-2
                                    border border-white/[0.1]
                                    bg-white/[0.04]
                                    px-4
                                    text-sm font-medium
                                    tracking-[-0.015em]
                                    text-zinc-200
                                    transition-all duration-200
                                    hover:border-white/[0.18]
                                    hover:bg-white/[0.07]
                                    hover:text-white
                                    active:scale-[0.98]
                                "
                                style={{
                                    borderRadius: '11px'
                                }}
                            >
                                Let&apos;s Talk

                                <span
                                    className="
                                        material-symbols-rounded
                                        text-[18px]
                                        transition-transform duration-200
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    "
                                    aria-hidden="true"
                                >
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <Navbar mobile />
        </>
    )
}

export default Header