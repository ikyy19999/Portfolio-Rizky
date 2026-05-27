import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#work' },
    { label: 'Contact', link: '#contact' }
]

const Navbar = ({ mobile = false }) => {
    const [activeSection, setActiveSection] = useState('#home')

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item =>
                document.querySelector(item.link)
            )
            
            sections.forEach(section => {
                if (!section) return
                const rect = section.getBoundingClientRect()
                // Perbaikan: Menambahkan backtick agar string interpolation berjalan
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveSection(`#${section.id}`)
                }
            })
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            // Perbaikan: Menambahkan backtick pada class container
            className={`flex ${mobile ? 'flex-col gap-4' : 'items-center gap-4'}`}
        >
            {navItems.map((item, key) => (
                // Perbaikan: Menambahkan tag pembuka <a> yang hilang
                <a
                    key={key}
                    href={item.link}
                    className={`
                        block px-5 py-3 rounded-md
                        border-2 border-black
                        text-sm font-bold uppercase tracking-wider
                        transition-all duration-200 ease-in-out
                        ${activeSection === item.link
                            ? `
                                /* STATE AKTIF: Efek ditekan (pressed) */
                                bg-yellow-400 
                                text-black
                                translate-x-[4px] translate-y-[4px]
                                shadow-none
                            `
                            : `
                                /* STATE TIDAK AKTIF: Melayang dengan bayangan solid */
                                bg-white 
                                text-black
                                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                hover:bg-cyan-300
                                hover:-translate-y-[2px] hover:-translate-x-[2px]
                                hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                            `
                        }
                    `}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    )
}

Navbar.propTypes = {
    mobile: PropTypes.bool
}

export default Navbar