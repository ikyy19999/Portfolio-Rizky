import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Header = () => {

    const [navOpen, setNavOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (

        <header
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-500
                ${scrolled
                    ? 'py-4'
                    : 'py-6'
                }
            `}
        >

            <div className='container'>

                <div
                    className={`
                        flex items-center justify-between
                        rounded-3xl border border-white/10
                        backdrop-blur-2xl
                        transition-all duration-500
                        px-5 lg:px-7
                        ${scrolled
                            ? 'bg-zinc-950/70 shadow-2xl py-4'
                            : 'bg-white/[0.03] py-5'
                        }
                    `}
                >

                    {/* Logo */}
                    <a
                        href='#home'
                        className='flex items-center gap-4'
                    >

                        <div className='relative'>

                            <div className='absolute inset-0 bg-sky-500/30 blur-2xl rounded-full'></div>

                            <img
                                src='/assets/favicon.ico'
                                alt='Logo'
                                width={42}
                                height={42}
                                className='relative rounded-xl'
                            />

                        </div>

                        <div className='hidden sm:block'>

                            <h2 className='text-white font-semibold tracking-wide'>
                                Rizky Maulana
                            </h2>

                            <p className='text-xs text-zinc-400'>
                                Full Stack Developer
                            </p>

                        </div>

                    </a>

                    {/* Desktop Nav */}
                    <div className='hidden md:flex'>

                        <Navbar />

                    </div>

                    {/* Right Side */}
                    <div className='flex items-center gap-3'>

                        {/* CTA */}
                        <a
                            href='#contact'
                            className='hidden md:flex items-center gap-2
                            px-5 py-3 rounded-2xl
                            bg-sky-500 text-white
                            hover:bg-sky-400
                            transition-all duration-300
                            hover:scale-[1.03]
                            active:scale-95
                            shadow-lg shadow-sky-500/20'
                        >

                            Let's Talk

                            <span className='material-symbols-rounded text-[18px]'>
                                arrow_outward
                            </span>

                        </a>

                        {/* Mobile Menu */}
                        <button
                            onClick={() => setNavOpen(prev => !prev)}
                            className='md:hidden w-12 h-12
                            rounded-2xl
                            border border-white/10
                            bg-white/[0.05]
                            backdrop-blur-xl
                            grid place-items-center
                            hover:bg-white/[0.08]
                            transition-all'
                        >

                            <span className='material-symbols-rounded text-white'>
                                {navOpen ? 'close' : 'menu'}
                            </span>

                        </button>

                    </div>

                </div>

                {/* Mobile Navbar */}
                <div
                    className={`
                        md:hidden overflow-hidden
                        transition-all duration-500
                        ${navOpen
                            ? 'max-h-[400px] opacity-100 mt-4'
                            : 'max-h-0 opacity-0'
                        }
                    `}
                >

                    <div
                        className='rounded-3xl
                        border border-white/10
                        bg-zinc-950/80
                        backdrop-blur-2xl
                        p-4'
                    >

                        <Navbar mobile />

                    </div>

                </div>

            </div>

        </header>

    )
}

export default Header