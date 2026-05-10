import React from 'react'
import { ButtonPrimary } from './Button'

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rizkymaulanaa'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thinkaboutky___'
  },
  {
    label: 'Email',
    href: 'mailto:hello@rizkymaulana.web.id'
  }
]

const Footer = () => {
  return (
    <footer className='relative overflow-hidden pt-32 pb-10'>

      {/* Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full'></div>

      <div className='container relative z-10'>

        {/* Top CTA */}
        <div className='rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-14 mb-14 reveal-up'>

          <div className='lg:flex lg:items-center lg:justify-between gap-10'>

            <div className='mb-10 lg:mb-0'>

              <p className='text-sky-400 uppercase tracking-[0.2em] text-sm mb-4'>
                Let&apos;s Connect
              </p>

              <h2 className='headline-1 max-w-[12ch] mb-5'>
                Ready to build your next digital experience?
              </h2>

              <p className='text-zinc-400 max-w-[60ch]'>
                I create modern, scalable, and visually engaging web applications
                with clean architecture and premium user experiences.
              </p>

            </div>

            <div className='shrink-0'>
              <ButtonPrimary
                href='mailto:hello@rizkymaulana.web.id'
                label='Start Project'
                icon='arrow_forward'
              />
            </div>

          </div>

        </div>

        {/* Footer Links */}
        <div className='grid md:grid-cols-3 gap-10 border-t border-white/10 pt-12'>

          {/* Brand */}
          <div className='reveal-up'>

            <a
              href='/'
              className='flex items-center gap-4 mb-5'
            >
              <img
                src='/assets/favicon.ico'
                width={45}
                height={45}
                alt='Logo'
                className='rounded-xl'
              />

              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Rizky Maulana
                </h3>

                <p className='text-sm text-zinc-400'>
                  Full Stack Developer
                </p>
              </div>

            </a>

            <p className='text-zinc-500 leading-relaxed'>
              Passionate about building modern web applications,
              elegant interfaces, and scalable backend systems.
            </p>

          </div>

          {/* Sitemap */}
          <div className='reveal-up'>

            <p className='text-white font-medium mb-5'>
              Sitemap
            </p>

            <ul className='space-y-3'>

              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className='text-zinc-400 hover:text-sky-400 transition-colors duration-300'
                  >
                    {label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Social */}
          <div className='reveal-up'>

            <p className='text-white font-medium mb-5'>
              Socials
            </p>

            <ul className='space-y-3'>

              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-zinc-400 hover:text-sky-400 transition-colors duration-300'
                  >
                    {label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 mt-14 pt-8 reveal-up'>

          <p className='text-zinc-500 text-sm'>
            © {new Date().getFullYear()} Rizky Maulana. All rights reserved.
          </p>

          <p className='text-zinc-600 text-sm'>
            Designed & Developed with passion.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer