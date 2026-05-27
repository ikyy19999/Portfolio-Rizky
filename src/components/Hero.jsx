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
            className='relative overflow-hidden pt-36 pb-20 lg:pt-48 bg-white border-b-8 border-black'
        >
            <div className='container mx-auto px-4'>

                {/* Container max-width agar teks tidak terlalu melebar, menggantikan grid sebelumnya */}
                <div className='max-w-5xl'>

                    {/* Availability Badge */}
                    <div className='inline-flex items-center gap-3 px-4 py-2 border-4 border-black bg-green-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10 reveal-up'>

                        <span className='relative flex h-4 w-4'>
                            <span className='animate-ping absolute inline-flex h-full w-full bg-white border-2 border-black'></span>
                            <span className='relative inline-flex h-4 w-4 bg-white border-2 border-black'></span>
                        </span>

                        <p className='text-xs md:text-sm text-black font-black uppercase tracking-wider'>
                            Available for freelance projects
                        </p>

                    </div>

                    {/* Main Heading */}
                    {/* Ukuran font diperbesar (lg:text-8xl) karena tidak ada foto, agar lebih lantang ala Brutalism */}
                    <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-black uppercase tracking-tighter leading-[1.05] reveal-up max-w-[15ch] mb-8'>
                        Crafting premium digital experiences.
                    </h1>

                    {/* Description */}
                    <p className='text-black font-bold text-lg md:text-2xl leading-relaxed max-w-[55ch] mb-12 reveal-up border-l-8 border-yellow-400 pl-6 bg-gray-50 py-4 pr-4'>
                        Full Stack Developer focused on building
                        high-performance web applications with
                        modern UI/UX, scalable backend systems,
                        and seamless user experiences.
                    </p>

                    {/* CTA */}
                    <div className='flex flex-wrap items-center gap-5 mb-16 reveal-up'>
                        <ButtonPrimary
                            href={'/assets/CV - Rizky Maulana.pdf'}
                            label='DOWNLOAD CV'
                            icon='download'
                        />

                        <ButtonOutline
                            href='#work'
                            label='VIEW PROJECTS'
                            icon='arrow_outward'
                        />
                    </div>

                    {/* Stats */}
                    {/* Kotak stat dibuat max-w agar tidak terlalu memanjang ke kanan */}
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl reveal-up'>
                        {stats.map(({ number, label }, key) => (
                            <div
                                key={key}
                                className='border-4 border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-cyan-300'
                            >
                                <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-black mb-2'>
                                    {number}
                                </h2>

                                <p className='text-xs font-bold text-black uppercase tracking-widest leading-tight'>
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Tech Stack */}
                <div className='mt-28 reveal-up max-w-5xl'>

                    <p className='text-lg font-black uppercase tracking-widest text-black mb-6 border-b-4 border-black pb-2 inline-block'>
                        Trusted Technologies
                    </p>

                    <div className='flex flex-wrap gap-4'>
                        {techStack.map((tech, key) => (
                            <div
                                key={key}
                                className='px-6 py-3 border-4 border-black bg-white text-black font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300'
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