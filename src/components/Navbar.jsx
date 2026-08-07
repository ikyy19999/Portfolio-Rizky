import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const navItems = [
    {
        label: 'Home',
        link: '#home',
        icon: 'home'
    },
    {
        label: 'About',
        link: '#about',
        icon: 'person'
    },
    {
        label: 'Skills',
        link: '#skills',
        icon: 'code'
    },
    {
        label: 'Projects',
        link: '#work',
        icon: 'grid_view'
    },
    {
        label: 'Contact',
        link: '#contact',
        icon: 'mail'
    }
]

const Navbar = ({ mobile = false }) => {
    const [activeSection, setActiveSection] = useState('#home')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180
            let currentSection = '#home'

            navItems.forEach((item) => {
                const section = document.querySelector(item.link)

                if (!section) return

                if (scrollPosition >= section.offsetTop) {
                    currentSection = item.link
                }
            })

            setActiveSection(currentSection)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, {
            passive: true
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNavigation = (event, link) => {
        event.preventDefault()

        const section = document.querySelector(link)

        if (!section) return

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        setActiveSection(link)
    }

    if (mobile) {
        return (
            <nav
                className="mobile-bottom-nav"
                aria-label="Mobile navigation"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.link

                    return (
                        <a
                            key={item.link}
                            href={item.link}
                            onClick={(event) =>
                                handleNavigation(event, item.link)
                            }
                            className={`mobile-nav-link ${
                                isActive ? 'active' : ''
                            }`}
                            aria-current={
                                isActive ? 'page' : undefined
                            }
                        >
                            {isActive && (
                                <span
                                    className="mobile-nav-indicator"
                                    aria-hidden="true"
                                />
                            )}

                            <span
                                className="material-symbols-rounded"
                                aria-hidden="true"
                            >
                                {item.icon}
                            </span>

                            <span>
                                {item.label}
                            </span>
                        </a>
                    )
                })}
            </nav>
        )
    }

    return (
        <nav
            className="navbar"
            aria-label="Primary navigation"
        >
            {navItems.map((item) => {
                const isActive = activeSection === item.link

                return (
                    <a
                        key={item.link}
                        href={item.link}
                        onClick={(event) =>
                            handleNavigation(event, item.link)
                        }
                        className={`nav-link ${
                            isActive ? 'active' : ''
                        }`}
                        aria-current={
                            isActive ? 'page' : undefined
                        }
                    >
                        {item.label}
                    </a>
                )
            })}
        </nav>
    )
}

Navbar.propTypes = {
    mobile: PropTypes.bool
}

export default Navbar