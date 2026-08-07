import React from 'react'
import ReactLenis from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const App = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up')

        elements.forEach((element) => {
            gsap.to(element, {
                y: 0,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 92%',
                    end: 'top 65%',
                    scrub: 0.6,
                },
            })
        })
    }, [])

    return (
        <ReactLenis
            root
            options={{
                duration: 1.1,
                smoothWheel: true,
                touchMultiplier: 1.1,
            }}
        >
            <div className="relative min-h-screen overflow-x-hidden">
                <CursorFollower />

                <Header />

                <main>
                    <Hero />
                    <About />
                    <Skill />
                    <Work />
                    <Reviews />
                    <Contact />
                </main>

                <Footer />
            </div>
        </ReactLenis>
    )
}

export default App