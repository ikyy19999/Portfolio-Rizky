import React from 'react'

const aboutItems = [
    {
        label: 'Projects Completed',
        number: '5+'
    },
    {
        label: 'Years Experience',
        number: '1+'
    }
]

const About = () => {
    return (
        <section
            id="about"
            className="
                section
                section-divider
            "
        >
            <div className="container">
                <div
                    className="
                        grid
                        gap-14
                        lg:grid-cols-[0.85fr_1.15fr]
                        lg:gap-20
                        xl:gap-28
                    "
                >
                    <div className="reveal-up">
                        <div
                            className="
                                mb-8
                                flex items-center
                                gap-4
                                text-xs
                                font-medium
                                tracking-[0.12em]
                                text-zinc-600
                            "
                        >
                            <span>
                                02
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
                                About
                            </span>
                        </div>

                        <h2
                            className="
                                headline-2
                                max-w-[16ch]
                            "
                        >
                            Bridging software development and IT infrastructure.
                        </h2>
                    </div>

                    <div className="reveal-up">
                        <div
                            className="
                                max-w-3xl
                                text-[15px]
                                leading-7
                                text-zinc-400
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            <p>
                                I&apos;m a Computer Science student and Full Stack Developer
                                with experience across web development and IT infrastructure.
                                My work focuses on building reliable digital products with
                                thoughtful interfaces and scalable backend systems.
                            </p>

                            <p className="mt-5">
                                I work primarily with Laravel, PHP, React, MySQL, and
                                Tailwind CSS. Beyond development, I also have hands-on
                                experience with networking, system maintenance,
                                troubleshooting, and IT support.
                            </p>

                            <p className="mt-5">
                                That combination gives me a broader perspective when
                                building technology. I understand both the software users
                                interact with and the infrastructure supporting it behind
                                the scenes.
                            </p>
                        </div>

                        <div
                            className="
                                mt-12
                                border-y
                                border-white/[0.08]
                                sm:mt-14
                            "
                        >
                            {aboutItems.map(({ label, number }, index) => (
                                <div
                                    key={label}
                                    className="
                                        group
                                        grid
                                        grid-cols-[90px_1fr]
                                        items-center
                                        gap-6
                                        border-b
                                        border-white/[0.08]
                                        py-6
                                        last:border-b-0
                                        sm:grid-cols-[130px_1fr]
                                        sm:py-7
                                    "
                                >
                                    <p
                                        className="
                                            text-3xl
                                            font-semibold
                                            tracking-[-0.05em]
                                            text-zinc-100
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            sm:text-4xl
                                        "
                                    >
                                        {number}
                                    </p>

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-4
                                        "
                                    >
                                        <p
                                            className="
                                                text-sm
                                                text-zinc-500
                                                transition-colors
                                                duration-200
                                                group-hover:text-zinc-300
                                            "
                                        >
                                            {label}
                                        </p>

                                        <span
                                            className="
                                                material-symbols-rounded
                                                text-[18px]
                                                text-zinc-800
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:text-zinc-500
                                            "
                                            aria-hidden="true"
                                        >
                                            east
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            className="
                                mt-10
                                grid
                                gap-7
                                border-t
                                border-white/[0.08]
                                pt-8
                                sm:grid-cols-2
                                lg:mt-12
                            "
                        >
                            <div>
                                <p className="eyebrow">
                                    Focus
                                </p>

                                <p
                                    className="
                                        mt-3
                                        max-w-[26ch]
                                        text-sm
                                        leading-6
                                        text-zinc-400
                                    "
                                >
                                    Full stack web development, UI/UX, backend systems,
                                    and product-focused engineering.
                                </p>
                            </div>

                            <div>
                                <p className="eyebrow">
                                    Beyond code
                                </p>

                                <p
                                    className="
                                        mt-3
                                        max-w-[26ch]
                                        text-sm
                                        leading-6
                                        text-zinc-400
                                    "
                                >
                                    Networking, infrastructure, system maintenance,
                                    troubleshooting, and IT support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About