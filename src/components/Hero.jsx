import React from 'react'
import { motion } from 'framer-motion'
import { ButtonPrimary, ButtonOutline } from './Button'

const stats = [
  { number: '5+', label: 'Projects Completed' },
  { number: '1+', label: 'Years Experience' },
  { number: '99%', label: 'Responsive Design' }
]

const techStack = [
  'Laravel',
  'React',
  'Tailwind',
  'GSAP',
  'Livewire',
  'MySQL',
  'Next.js',
  'Framer Motion'
]

// Variant animasi Framer Motion untuk efek Cinematic Stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay antar elemen
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } // Efek spring yang playful tapi smooth
  }
}

const Hero = () => {
  return (
    <section 
      id='home' 
      className='relative min-h-screen flex flex-col justify-center pt-32 pb-20 lg:pt-40 overflow-hidden bg-zinc-950'
    >
      
      {/* Decorative Cinematic Background Elements (Blur halus, bukan gradient AI biasa) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className='container relative z-10'>
        <motion.div 
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Availability Badge (Playful + Brutalist) */}
          <motion.div variants={itemVariants} className='inline-flex items-center gap-3 px-4 py-2 border-2 border-zinc-800 bg-zinc-900/80 backdrop-blur-sm mb-8'>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-cyan-400 border-2 border-zinc-950'></span>
            </span>
            <p className='text-xs font-mono-tech text-cyan-400 uppercase tracking-widest'>
              Available for sada projects
            </p>
          </motion.div>

          {/* 2. Main Heading (Editorial + Brutalist Mix) */}
          <motion.div variants={itemVariants} className='mb-10'>
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-serif-editorial text-zinc-50 leading-[0.9] tracking-tight'>
              Crafting <span className='italic text-zinc-500'>premium</span> <br />
              <span className='font-sans-brutal font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-600'>
                Digital Experiences.
              </span>
            </h1>
          </motion.div>

          {/* 3. Description & CTA (Asymmetrical Layout) */}
          <motion.div variants={itemVariants} className='grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20'>
            {/* Kolom Kiri: Deskripsi dengan aksen brutalist */}
            <div className='lg:col-span-5 border-l-4 border-cyan-400 pl-6 py-2'>
              <p className='text-lg md:text-xl text-zinc-400 font-sans-brutal leading-relaxed'>
                Full Stack Developer focused on building high-performance web applications. 
                Blending <span className='text-zinc-100 font-bold'>modern UI/UX</span> with scalable backend systems.
              </p>
            </div>

            {/* Kolom Kanan: CTA Buttons (Menggunakan komponen Button kamu) */}
            <div className='lg:col-span-7 flex flex-wrap items-center gap-5'>
              <ButtonPrimary
                href='/assets/CV - Rizky Maulana.pdf'
                label='DOWNLOAD CV'
                icon='download'
              />
              <ButtonOutline
                href='#work'
                label='VIEW PROJECTS'
                icon='arrow_outward'
              />
            </div>
          </motion.div>

          {/* 4. Stats (Neo-Brutalist Cards, Dark Mode Adapted) */}
          <motion.div variants={itemVariants} className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mb-24'>
            {stats.map(({ number, label }, key) => (
              <div
                key={key}
                className='group relative border-2 border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:border-cyan-400 hover:shadow-[8px_8px_0px_0px_rgba(34,211,238,1)]'
              >
                <h2 className='text-4xl md:text-5xl font-sans-brutal font-black text-zinc-100 mb-2 group-hover:text-cyan-400 transition-colors'>
                  {number}
                </h2>
                <p className='text-xs font-mono-tech text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300'>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 5. Tech Stack (Editorial Clean Grid) */}
          <motion.div variants={itemVariants} className='border-t border-zinc-800 pt-10'>
            <p className='font-mono-tech text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6'>
              Trusted Technologies
            </p>
            <div className='flex flex-wrap gap-3'>
              {techStack.map((tech, key) => (
                <div
                  key={key}
                  className='px-5 py-2 border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-mono-tech text-sm uppercase tracking-wider transition-all duration-300 cursor-default hover:bg-zinc-100 hover:text-zinc-950 hover:border-zinc-100 hover:-translate-y-1'
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
