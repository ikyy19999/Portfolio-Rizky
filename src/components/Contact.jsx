import React, { useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

const socialLinks = [
    {
        href: '#',
        label: 'LinkedIn',
        icon: 'work',
        external: false
    },
    {
        href: 'https://www.instagram.com/thinkaboutky___',
        label: 'Instagram',
        icon: 'photo_camera',
        external: true
    },
    {
        href: 'mailto:hello@madebyrizky.my.id',
        label: 'Email',
        icon: 'mail',
        external: false
    }
]

const Contact = () => {
    const [token, setToken] = useState('')

    const handleSubmit = (event) => {
        if (!token) {
            event.preventDefault()
            alert('Please complete the verification first.')
        }
    }

    return (
        <section
            id="contact"
            className="
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
                                Contact
                            </span>
                        </div>

                        <h2
                            className="
                                headline-2
                                max-w-[15ch]
                            "
                        >
                            Let&apos;s build something worth using.
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-lg
                                text-[15px]
                                leading-7
                                text-zinc-500
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            Have a project, product idea, or collaboration
                            in mind? Send me the details and I&apos;ll get
                            back to you when I can.
                        </p>
                    </div>

                    <div
                        className="
                            flex
                            flex-col
                            justify-end
                        "
                    >
                        <div
                            className="
                                border-t
                                border-white/[0.08]
                            "
                        >
                            <div
                                className="
                                    grid
                                    grid-cols-[110px_1fr]
                                    gap-6
                                    border-b
                                    border-white/[0.08]
                                    py-5
                                    sm:grid-cols-[150px_1fr]
                                "
                            >
                                <p className="text-sm text-zinc-600">
                                    Available for
                                </p>

                                <p
                                    className="
                                        text-sm
                                        leading-6
                                        text-zinc-300
                                    "
                                >
                                    Freelance projects, full stack
                                    development, and collaboration.
                                </p>
                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-[110px_1fr]
                                    gap-6
                                    border-b
                                    border-white/[0.08]
                                    py-5
                                    sm:grid-cols-[150px_1fr]
                                "
                            >
                                <p className="text-sm text-zinc-600">
                                    Status
                                </p>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <span
                                        className="
                                            h-2
                                            w-2
                                            shrink-0
                                            bg-emerald-400
                                        "
                                        aria-hidden="true"
                                    />

                                    <p
                                        className="
                                            text-sm
                                            text-zinc-300
                                        "
                                    >
                                        Currently available for work
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="
                        mt-14
                        grid
                        gap-12
                        sm:mt-16
                        lg:grid-cols-[0.7fr_1.3fr]
                        lg:gap-16
                        xl:gap-20
                    "
                >
                    <div
                        className="
                            reveal-up
                            flex
                            flex-col
                        "
                    >
                        <div
                            className="
                                border-t
                                border-white/[0.08]
                            "
                        >
                            {socialLinks.map(
                                ({
                                    href,
                                    label,
                                    icon,
                                    external
                                }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={
                                            external
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            external
                                                ? 'noopener noreferrer'
                                                : undefined
                                        }
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            gap-6
                                            border-b
                                            border-white/[0.08]
                                            py-5
                                            transition-colors
                                            duration-200
                                            hover:bg-white/[0.015]
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-4
                                            "
                                        >
                                            <span
                                                className="
                                                    material-symbols-rounded
                                                    text-[20px]
                                                    text-zinc-600
                                                    transition-colors
                                                    duration-200
                                                    group-hover:text-zinc-300
                                                "
                                                aria-hidden="true"
                                            >
                                                {icon}
                                            </span>

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
                                                {label}
                                            </span>
                                        </div>

                                        <span
                                            className="
                                                material-symbols-rounded
                                                text-[18px]
                                                text-zinc-700
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-0.5
                                                group-hover:-translate-y-0.5
                                                group-hover:text-zinc-400
                                            "
                                            aria-hidden="true"
                                        >
                                            arrow_outward
                                        </span>
                                    </a>
                                )
                            )}
                        </div>

                        <div
                            className="
                                mt-10
                                hidden
                                border-t
                                border-white/[0.08]
                                pt-6
                                lg:block
                            "
                        >
                            <p className="eyebrow">
                                Direct email
                            </p>

                            <a
                                href="mailto:hello@madebyrizky.my.id"
                                className="
                                    mt-3
                                    inline-block
                                    text-sm
                                    text-zinc-400
                                    transition-colors
                                    duration-200
                                    hover:text-white
                                "
                            >
                                hello@madebyrizky.my.id
                            </a>
                        </div>
                    </div>

                    <form
                        action="https://getform.io/f/bvrrndyb"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="
                            reveal-up
                            liquid-glass
                            p-5
                            sm:p-7
                            lg:p-8
                        "
                        style={{
                            borderRadius: '16px'
                        }}
                    >
                        <input
                            type="hidden"
                            name="cf-turnstile-response"
                            value={token}
                        />

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-6
                                border-b
                                border-white/[0.08]
                                pb-5
                            "
                        >
                            <div>
                                <p
                                    className="
                                        text-lg
                                        font-medium
                                        tracking-[-0.025em]
                                        text-zinc-100
                                    "
                                >
                                    Send a message
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-5
                                        text-zinc-600
                                    "
                                >
                                    Tell me a little about what you&apos;re
                                    working on.
                                </p>
                            </div>

                            <span
                                className="
                                    material-symbols-rounded
                                    text-[21px]
                                    text-zinc-700
                                "
                                aria-hidden="true"
                            >
                                north_east
                            </span>
                        </div>

                        <div
                            className="
                                mt-7
                                grid
                                gap-6
                                sm:grid-cols-2
                            "
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="label"
                                >
                                    Your name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    className="text-field"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="label"
                                >
                                    Email address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="text-field"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="message"
                                className="label"
                            >
                                Project details
                            </label>

                            <textarea
                                name="message"
                                id="message"
                                required
                                placeholder="Tell me about your project..."
                                className="
                                    text-field
                                    min-h-[170px]
                                    resize-y
                                "
                            />
                        </div>

                        <div
                            className="
                                mt-6
                                overflow-hidden
                            "
                        >
                            <Turnstile
                                siteKey="0x4AAAAAADmpHRfJpKM4Dw5U"
                                options={{
                                    theme: 'dark'
                                }}
                                onSuccess={(value) =>
                                    setToken(value)
                                }
                                onError={() =>
                                    setToken('')
                                }
                                onExpire={() =>
                                    setToken('')
                                }
                            />
                        </div>

                        <div
                            className="
                                mt-7
                                border-t
                                border-white/[0.08]
                                pt-6
                            "
                        >
                            <button
                                type="submit"
                                disabled={!token}
                                className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    bg-zinc-50
                                    px-5
                                    py-3.5
                                    text-sm
                                    font-medium
                                    tracking-[-0.015em]
                                    text-zinc-950
                                    transition-all
                                    duration-200
                                    hover:bg-white
                                    active:scale-[0.99]
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                "
                                style={{
                                    borderRadius: '11px'
                                }}
                            >
                                <span>
                                    Send message
                                </span>

                                <span
                                    className="
                                        material-symbols-rounded
                                        text-[18px]
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                    "
                                    aria-hidden="true"
                                >
                                    arrow_outward
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact