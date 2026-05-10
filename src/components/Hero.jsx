import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button'

const stats = [
    {
        number: '20+',
        label: 'Projects Completed'
    },
    {
        number: '1+',
        label: 'Years Experience'
    },
    {
        number: '100%',
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
            id='home'
            className='relative overflow-hidden pt-28 lg:pt-40'
        >

            {/* Background Glow */}
            <div className='absolute inset-0 -z-10 overflow-hidden'>

                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
                bg-sky-500/20 blur-[140px] rounded-full'></div>

                <div className='absolute bottom-0 right-0 w-[500px] h-[500px]
                bg-fuchsia-500/10 blur-[120px] rounded-full'></div>

            </div>

            <div className='container'>

                <div className='grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-16'>

                    {/* LEFT CONTENT */}
                    <div>

                        {/* Availability Badge */}
                        <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full
                        border border-white/10 bg-white/5 backdrop-blur-xl mb-8 reveal-up'>

                            <span className='relative flex h-3 w-3'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-400'></span>
                            </span>

                            <p className='text-sm text-zinc-300 tracking-wide'>
                                Available for freelance projects
                            </p>

                        </div>

                        {/* Main Heading */}
                        <h1 className='headline-1 reveal-up max-w-[12ch] mb-6'>

                            Crafting premium digital experiences
                            for modern brands.

                        </h1>

                        {/* Description */}
                        <p className='text-zinc-400 text-lg leading-relaxed max-w-[60ch]
                        mb-10 reveal-up'>

                            Full Stack Developer focused on building
                            high-performance web applications with
                            modern UI/UX, scalable backend systems,
                            and seamless user experiences.

                        </p>

                        {/* CTA */}
                        <div className='flex flex-wrap items-center gap-4 mb-14 reveal-up'>

                            <ButtonPrimary
                                href={'/assets/CV - Rizky Maulana.pdf'}
                                label='Download CV'
                                icon='download'
                            />

                            <ButtonOutline
                                href='#work'
                                label='View Projects'
                                icon='arrow_outward'
                            />

                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 reveal-up'>

                            {stats.map(({ number, label }, key) => (

                                <div
                                    key={key}
                                    className='rounded-2xl border border-white/10
                                    bg-white/[0.03] backdrop-blur-xl p-5'
                                >

                                    <h2 className='text-3xl font-semibold text-white mb-2'>
                                        {number}
                                    </h2>

                                    <p className='text-sm text-zinc-400'>
                                        {label}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className='relative reveal-up'>

                        {/* Main Image Card */}
                        <div className='relative rounded-[40px] overflow-hidden
                        border border-white/10 bg-gradient-to-b
                        from-white/10 to-white/[0.02]
                        backdrop-blur-2xl p-4'>

                            {/* Gradient Glow */}
                            <div className='absolute inset-0 bg-gradient-to-tr
                            from-sky-500/20 via-transparent to-fuchsia-500/20'></div>

                            <figure className='relative rounded-[32px] overflow-hidden
                            bg-zinc-950'>

                                <img
                                    src='/assets/Foto.png'
                                    alt='Rizky Maulana'
                                    className='w-full h-[620px] object-cover'
                                />

                            </figure>

                        </div>

                        {/* Floating Card */}
                        <div className='absolute -bottom-8 -left-8 hidden md:flex
                        items-center gap-4 rounded-2xl border border-white/10
                        bg-zinc-950/80 backdrop-blur-xl p-5 shadow-2xl'>

                            <div className='w-14 h-14 rounded-xl
                            bg-sky-500/20 grid place-items-center'>

                                <span className='material-symbols-rounded text-sky-400'>
                                    code
                                </span>

                            </div>

                            <div>

                                <p className='text-sm text-zinc-400 mb-1'>
                                    Specialized In
                                </p>

                                <h3 className='font-semibold text-white'>
                                    Full Stack Development
                                </h3>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Tech Stack */}
                <div className='mt-24 reveal-up'>

                    <p className='text-sm uppercase tracking-[0.2em]
                    text-zinc-500 mb-6'>

                        Trusted Technologies

                    </p>

                    <div className='flex flex-wrap gap-4'>

                        {techStack.map((tech, key) => (

                            <div
                                key={key}
                                className='px-5 py-3 rounded-2xl
                                border border-white/10
                                bg-white/[0.03]
                                text-zinc-300 text-sm
                                backdrop-blur-xl'
                            >

                                {tech}

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero