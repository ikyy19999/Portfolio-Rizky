import React from 'react'
import { ButtonPrimary } from './Button'

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' }
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rizkymaulanaa' },
  { label: 'Instagram', href: 'https://www.instagram.com/thinkaboutky___' },
  { label: 'Email', href: 'mailto:hello@rizkymaulana.web.id' }
]

const Footer = () => {
  return (
    // Background putih dengan border atas tebal sebagai pembatas antar section
    <footer className='relative overflow-hidden pt-32 pb-10 bg-white border-t-8 border-black'>

      <div className='container mx-auto px-4 relative z-10'>

        {/* Top CTA */}
        {/* Card diubah menjadi kuning solid dengan border hitam dan shadow brutalism */}
        <div className='rounded-none border-4 border-black bg-yellow-400 p-8 lg:p-14 mb-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] reveal-up'>

          <div className='lg:flex lg:items-center lg:justify-between gap-10'>

            <div className='mb-10 lg:mb-0'>

              {/* Label diganti menjadi badge kotak pink */}
              <span className='inline-block bg-pink-400 border-2 border-black text-black font-black uppercase tracking-[0.2em] px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                Let&apos;s Connect
              </span>

              <h2 className='text-4xl md:text-5xl font-black text-black uppercase tracking-tight max-w-[15ch] mb-6 leading-tight'>
                Ready to build your next digital experience?
              </h2>

              <p className='text-black font-bold text-lg max-w-[60ch] border-l-4 border-black pl-4 bg-white/50 p-2'>
                I create modern, scalable, and visually engaging web applications
                with clean architecture and premium user experiences.
              </p>

            </div>

            <div className='shrink-0'>
              {/* Asumsi komponen ButtonPrimary sudah menggunakan gaya neubrutalism sebelumnya */}
              <ButtonPrimary
                href='mailto:hello@rizkymaulana.web.id'
                label='START PROJECT'
                icon='arrow_forward'
                classes='text-lg py-4 px-8'
              />
            </div>

          </div>

        </div>

        {/* Footer Links */}
        <div className='grid md:grid-cols-3 gap-12 border-t-4 border-black pt-12'>

          {/* Brand */}
          <div className='reveal-up'>

            <a
              href='/'
              className='flex items-center gap-4 mb-6 group'
            >
              <img
                src='/assets/favicon.ico'
                width={45}
                height={45}
                alt='Logo'
                // Gambar diberi border tebal
                className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1'
              />

              <div>
                <h3 className='text-xl font-black text-black uppercase tracking-wide'>
                  Rizky Maulana
                </h3>

                <p className='text-black font-bold border-b-2 border-black inline-block'>
                  Full Stack Developer
                </p>
              </div>

            </a>

            <p className='text-black font-semibold leading-relaxed'>
              Passionate about building modern web applications,
              elegant interfaces, and scalable backend systems.
            </p>

          </div>

          {/* Sitemap */}
          <div className='reveal-up'>

            <p className='text-black font-black uppercase tracking-widest text-lg mb-6 border-b-4 border-black pb-2 inline-block'>
              Sitemap
            </p>

            <ul className='space-y-4'>
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    // Efek hover menjadi blok interaktif ala brutalism
                    className='block w-fit text-black font-bold uppercase tracking-wider border-2 border-transparent px-3 py-1 transition-all duration-100 hover:border-black hover:bg-cyan-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Social */}
          <div className='reveal-up'>

            <p className='text-black font-black uppercase tracking-widest text-lg mb-6 border-b-4 border-black pb-2 inline-block'>
              Socials
            </p>

            <ul className='space-y-4'>
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    // Efek hover interaktif
                    className='block w-fit text-black font-bold uppercase tracking-wider border-2 border-transparent px-3 py-1 transition-all duration-100 hover:border-black hover:bg-pink-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-black mt-16 pt-8 reveal-up'>

          <p className='text-black font-bold uppercase text-sm tracking-wider'>
            © {new Date().getFullYear()} Rizky Maulana. All rights reserved.
          </p>

          <p className='text-black font-bold uppercase text-sm tracking-wider bg-yellow-300 px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
            Designed & Developed with passion.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer