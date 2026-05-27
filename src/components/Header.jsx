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
                transition-all duration-300
                ${scrolled ? 'pt-2' : 'pt-6'}
            `}
        >
            <div className='container mx-auto px-4'>

                {/* Navbar Container Utama */}
                <div
                    className={`
                        flex items-center justify-between
                        border-4 border-black bg-white
                        transition-all duration-300
                        px-5 lg:px-7
                        ${scrolled
                            // State saat di-scroll: Kotak sedikit mengecil dan bayangan berkurang
                            ? 'py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                            // State awal: Kotak lebih besar dengan bayangan tebal
                            : 'py-5 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
                        }
                    `}
                >

                    {/* Logo */}
                    <a
                        href='#home'
                        className='flex items-center gap-4 group'
                    >
                        <div className='relative'>
                            {/* Efek Glow dihapus, diganti dengan border tebal pada gambar */}
                            <img
                                src='/assets/favicon.ico'
                                alt='Logo'
                                width={42}
                                height={42}
                                className='relative border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1'
                            />
                        </div>

                        <div className='hidden sm:block'>
                            <h2 className='text-black font-black uppercase tracking-wider text-lg leading-tight'>
                                Rizky Maulana
                            </h2>
                            <p className='text-black font-bold uppercase text-xs border-b-2 border-black inline-block'>
                                Full Stack Developer
                            </p>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className='hidden md:flex'>
                        {/* Komponen Navbar ini akan memuat gaya Neubrutalism yang sudah kita buat sebelumnya */}
                        <Navbar />
                    </div>

                    {/* Right Side */}
                    <div className='flex items-center gap-4'>

                        {/* CTA Button */}
                        <a
                            href='#contact'
                            className='hidden md:flex items-center gap-2
                            px-6 py-3
                            bg-pink-400 text-black font-black uppercase tracking-wider
                            border-4 border-black
                            transition-all duration-100 ease-in-out
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                            hover:bg-yellow-400
                            active:translate-y-[4px] active:translate-x-[4px] active:shadow-none'
                        >
                            Let&apos;s Talk
                            <span className='material-symbols-rounded font-bold text-[20px]'>
                                arrow_outward
                            </span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setNavOpen(prev => !prev)}
                            // Tombol diubah menjadi kotak warna cyan padat
                            className='md:hidden w-12 h-12
                            border-4 border-black
                            bg-cyan-400 text-black
                            grid place-items-center
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-100
                            hover:bg-yellow-400
                            active:translate-y-[4px] active:translate-x-[4px] active:shadow-none'
                        >
                            <span className='material-symbols-rounded font-black'>
                                {navOpen ? 'close' : 'menu'}
                            </span>
                        </button>

                    </div>

                </div>

                {/* Mobile Navbar Dropdown */}
                <div
                    className={`
                        md:hidden overflow-hidden
                        transition-all duration-300 origin-top
                        ${navOpen
                            ? 'max-h-[500px] opacity-100 scale-y-100 mt-4'
                            : 'max-h-0 opacity-0 scale-y-0'
                        }
                    `}
                >
                    {/* Wadah menu mobile dengan gaya brutal */}
                    <div
                        className='border-4 border-black
                        bg-yellow-400
                        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                        p-6 mb-4'
                    >
                        <Navbar mobile />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header