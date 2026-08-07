import React, { useRef } from 'react'
import ReviewCard from './ReviewCard'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
    // {
    //     content:
    //         'Exceptional fullstack development with modern UI/UX execution and scalable backend architecture.',
    //     name: 'Sophia Ramirez',
    //     company: 'PixelForge'
    // },
    // {
    //     content:
    //         'Delivered an elegant and responsive application with impressive performance optimization.',
    //     name: 'Ethan Caldwell',
    //     company: 'NexaWave'
    // }
]

const Reviews = () => {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)

    useGSAP(
        () => {
            if (reviews.length === 0) return

            const track = trackRef.current
            const section = sectionRef.current

            if (!track || !section) return

            const mm = gsap.matchMedia()

            mm.add('(min-width: 768px)', () => {
                const getScrollDistance = () => {
                    const overflow =
                        track.scrollWidth - track.clientWidth

                    return Math.max(0, overflow)
                }

                if (getScrollDistance() <= 0) return

                const animation = gsap.to(track, {
                    x: () => -getScrollDistance(),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: () =>
                            `+=${Math.max(
                                getScrollDistance() * 1.25,
                                900
                            )}`,
                        scrub: 0.8,
                        pin: true,
                        invalidateOnRefresh: true
                    }
                })

                return () => {
                    animation.scrollTrigger?.kill()
                    animation.kill()
                }
            })

            return () => {
                mm.revert()
            }
        },
        {
            scope: sectionRef,
            dependencies: []
        }
    )

    if (reviews.length === 0) {
        return null
    }

    return (
        <section
            ref={sectionRef}
            id="reviews"
            className="
                reviews-section
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
                            <span>
                                05
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
                                Testimonials
                            </span>
                        </div>

                        <h2
                            className="
                                headline-2
                                max-w-[16ch]
                            "
                        >
                            Words from people I&apos;ve worked with.
                        </h2>
                    </div>

                    <div
                        className="
                            flex
                            items-end
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
                            Feedback from clients and collaborators
                            on the process, communication, and
                            quality behind the work.
                        </p>
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
                        Client feedback
                    </p>

                    <p
                        className="
                            text-xs
                            text-zinc-700
                        "
                    >
                        {String(reviews.length).padStart(2, '0')} reviews
                    </p>
                </div>

                <div
                    className="
                        mt-8
                        overflow-visible
                        sm:mt-10
                        md:overflow-hidden
                    "
                >
                    <div
                        ref={trackRef}
                        className="
                            reviews-track
                            grid
                            grid-cols-1
                            gap-0
                            md:flex
                            md:w-max
                        "
                    >
                        {reviews.map(
                            ({
                                content,
                                name,
                                company
                            }, index) => (
                                <ReviewCard
                                    key={`${name}-${company}`}
                                    content={content}
                                    name={name}
                                    company={company}
                                    index={index + 1}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews