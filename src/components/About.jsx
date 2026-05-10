import React from 'react'

const aboutItems = [
  {
    label: 'Projects Completed',
    number: '5'
  },
  // {
  //   label: 'Happy Clients',
  //   number: '0'
  // },
  {
    label: 'Years Experience',
    number: '03'
  }
]

const About = () => {
  return (
    <section
      id='about'
      className='section relative overflow-hidden'
    >
      {/* Background Blur */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full'></div>

      <div className="container relative z-10">

        <div className='grid lg:grid-cols-[1fr,0.8fr] gap-8 items-center'>

          {/* LEFT CONTENT */}
          <div className='reveal-up'>

            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-sky-300 mb-6 backdrop-blur-xl'>
              About Me
            </span>

            <h2 className='headline-2 mb-6 max-w-[15ch]'>
              Building modern digital experiences for the future.
            </h2>

            <p className='text-zinc-400 text-base leading-8 max-w-[60ch] mb-6'>
              A Computer Science student and experienced Full Stack Developer with a strong 
              background in IT infrastructure. Proficient in building robust web applications 
              using Laravel, PHP, and React, supported by efficient MySQL database management and Tailwind CSS. 
              Alongside development, I possess professional expertise in networking, system maintenance, and IT support. A versatile tech professional who bridges the gap between software development and IT infrastructure.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className='reveal-up'>

            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8'>

              {/* Glow */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full'></div>

              <div className='relative z-10'>

                <div className='flex items-center gap-4 mb-8'>
                  <div className='w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-sky-400/30'>
                    <img
                      src="/assets/Foto.png"
                      alt="Rizky Maulana"
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold text-white'>
                      Rizky Maulana
                    </h3>

                    <p className='text-zinc-400 text-sm'>
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-4'>

                  {aboutItems.map(({ label, number }, key) => (
                    <div
                      key={key}
                      className='rounded-2xl bg-white/5 border border-white/10 p-5 text-center'
                    >
                      <h4 className='text-3xl font-bold text-white mb-2'>
                        {number}
                        <span className='text-sky-400'>+</span>
                      </h4>

                      <p className='text-xs text-zinc-400 leading-5'>
                        {label}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About