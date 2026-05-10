import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const navItems = [
    {
        label: 'Home',
        link: '#home'
    },
    {
        label: 'About',
        link: '#about'
    },
    {
        label: 'Skills',
        link: '#skills'
    },
    {
        label: 'Projects',
        link: '#work'
    },
    {
        label: 'Contact',
        link: '#contact'
    }
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
            className={`
                flex
                ${mobile
                    ? 'flex-col gap-2'
                    : 'items-center gap-2'
                }
            `}
        >

            {navItems.map((item, key) => (

                <a
                    key={key}
                    href={item.link}
                    className={`
                        relative px-5 py-3 rounded-2xl
                        text-sm font-medium tracking-wide
                        transition-all duration-300

                        ${activeSection === item.link
                            ? `
                                text-white
                                bg-white/[0.08]
                                border border-white/10
                                shadow-lg
                            `
                            : `
                                text-zinc-400
                                hover:text-white
                                hover:bg-white/[0.04]
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