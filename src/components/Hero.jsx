import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button'

const stats = [
    {
        number: '5+',
        label: 'Projects Completed'
    },
    {
        number: '1+',
        label: 'Years Experience'
    },
    {
        number: '99%',
        label: 'Responsive Design'
    }
]

const techStack = [
    'Laravel',
    'React',
    'Tailwind',
    'GSAP',
    'Livewire',
    'MySQL'
]

const Hero = () => {
    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                overflow-hidden
                pt-32
                sm:pt-36
                lg:flex
                lg:items-center
                lg:pt-40
            "
        >
            <div className="container">
                <div
                    className="
                        grid
                        gap-14
                        lg:grid-cols-[1fr_300px]
                        lg:items-end
                        lg:gap-16
                        xl:grid-cols-[1fr_340px]
                    "
                >
                    <div className="max-w-5xl">
                        <div
                            className="
                                reveal-up
                                mb-8
                                flex
                                items-center
                                gap-4
                                text-xs
                                font-medium
                                tracking-[0.12em]
                                text-zinc-600
                                sm:mb-10
                            "
                        >
                            <span>
                                01
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
                                Full Stack Developer
                            </span>
                        </div>

                        <h1 className="headline-1 reveal-up">
                            I build digital products with clarity,
                            performance, and purpose.
                        </h1>

                        <div
                            className="
                                reveal-up
                                mt-8
                                grid
                                gap-8
                                sm:mt-10
                                md:grid-cols-[1fr_auto]
                                md:items-end
                                md:gap-12
                            "
                        >
                            <p
                                className="
                                    max-w-2xl
                                    text-[15px]
                                    leading-7
                                    text-zinc-400
                                    sm:text-lg
                                    sm:leading-8
                                "
                            >
                                Full Stack Developer working across
                                modern web interfaces, scalable
                                backend systems, and the
                                infrastructure behind them.
                            </p>

                            <div
                                className="
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-3
                                "
                            >
                                <ButtonPrimary
                                    href="/assets/CV - Rizky Maulana.pdf"
                                    label="Download CV"
                                    icon="download"
                                />

                                <ButtonOutline
                                    href="#work"
                                    label="View Projects"
                                    icon="arrow_outward"
                                />
                            </div>
                        </div>
                    </div>

                    <aside
                        className="
                            reveal-up
                            border-t
                            border-white/[0.09]
                            pt-6
                            lg:border-l
                            lg:border-t-0
                            lg:pl-8
                            lg:pt-0
                        "
                    >
                        <p className="eyebrow">
                            Core stack
                        </p>

                        <div className="mt-5">
                            {techStack.map((tech, index) => (
                                <div
                                    key={tech}
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        border-b
                                        border-white/[0.07]
                                        py-3
                                    "
                                >
                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            tracking-[-0.015em]
                                            text-zinc-400
                                            transition-colors
                                            duration-200
                                            group-hover:text-zinc-100
                                        "
                                    >
                                        {tech}
                                    </span>

                                    <span
                                        className="
                                            text-[10px]
                                            font-medium
                                            text-zinc-700
                                        "
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>

                <div
                    className="
                        reveal-up
                        mt-20
                        border-y
                        border-white/[0.08]
                        sm:mt-24
                        lg:mt-28
                    "
                >
                    <div
                        className="
                            grid
                            grid-cols-2
                            md:grid-cols-3
                        "
                    >
                        {stats.map(({ number, label }, index) => (
                            <div
                                key={label}
                                className={`
                                    group
                                    relative
                                    py-6
                                    transition-colors
                                    duration-300
                                    hover:bg-white/[0.018]
                                    sm:py-8
                                    ${
                                        index === 0
                                            ? 'pr-5'
                                            : 'px-5'
                                    }
                                    ${
                                        index !== stats.length - 1
                                            ? 'md:border-r md:border-white/[0.08]'
                                            : ''
                                    }
                                `}
                            >
                                <p
                                    className="
                                        text-3xl
                                        font-semibold
                                        tracking-[-0.05em]
                                        text-zinc-50
                                        sm:text-4xl
                                        lg:text-5xl
                                    "
                                >
                                    {number}
                                </p>

                                <p
                                    className="
                                        mt-2
                                        max-w-[14ch]
                                        text-xs
                                        leading-5
                                        text-zinc-600
                                        transition-colors
                                        duration-300
                                        group-hover:text-zinc-400
                                        sm:text-sm
                                    "
                                >
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
