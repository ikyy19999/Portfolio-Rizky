import React from 'react'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/rizkymaulanaa',
    label: 'LinkedIn',
    icon: 'work'
  },
  {
    href: 'https://www.instagram.com/thinkaboutky___',
    label: 'Instagram',
    icon: 'photo_camera'
  },
  {
    href: 'mailto:hello@rizkymaulana.web.id',
    label: 'Email',
    icon: 'mail'
  }
]

const Contact = () => {
  return (
    <section
      id='contact'
      className='section relative overflow-hidden'
    >

      {/* Background Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full'></div>

      <div className='container relative z-10'>

        {/* Header */}
        <div className='text-center mb-14 reveal-up'>
          <p className='text-sky-400 font-medium tracking-widest uppercase mb-3'>
            Contact
          </p>

          <h2 className='headline-2 mx-auto mb-4'>
            Let’s Build Something Amazing
          </h2>

          <p className='text-zinc-400 max-w-2xl mx-auto'>
            Interested in working together, building modern web experiences,
            or discussing your next project? Let’s connect.
          </p>
        </div>

        {/* Main Grid */}
        <div className='grid lg:grid-cols-[1fr,1.2fr] gap-8 items-stretch'>

          {/* Left Card */}
          <div className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 reveal-up'>

            <div className='mb-10'>
              <p className='text-zinc-400 mb-2'>
                Available For
              </p>

              <h3 className='text-3xl font-semibold text-white leading-tight'>
                Freelance Projects,
                <br />
                Fullstack Development,
                <br />
                & Collaboration
              </h3>
            </div>

            {/* Status */}
            <div className='flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-white/5 mb-10'>
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>

                <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-400'></span>
              </span>

              <p className='text-zinc-300'>
                Currently available for work
              </p>
            </div>

            {/* Socials */}
            <div className='flex flex-wrap gap-4'>

              {socialLinks.map(({ href, label, icon }, key) => (
                <a
                  key={key}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-3 px-5 py-4 rounded-2xl
                  bg-zinc-900/70 border border-white/5
                  hover:bg-sky-500 hover:text-white
                  transition-all duration-300 hover:-translate-y-1'
                >

                  <span className='material-symbols-rounded'>
                    {icon}
                  </span>

                  <span className='text-sm font-medium'>
                    {label}
                  </span>

                </a>
              ))}

            </div>

          </div>

          {/* Form */}
          <form
            action="https://getform.io/f/bvrrndyb"
            method='POST'
            className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 reveal-up'
          >

            <div className='grid md:grid-cols-2 gap-5 mb-5'>

              <div>
                <label
                  htmlFor='name'
                  className='label'
                >
                  Your Name
                </label>

                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  placeholder='John Doe'
                  className='text-field'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='label'
                >
                  Email Address
                </label>

                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='you@example.com'
                  className='text-field'
                />
              </div>

            </div>

            <div className='mb-5'>

              <label
                htmlFor='message'
                className='label'
              >
                Project Details
              </label>

              <textarea
                name='message'
                id='message'
                required
                placeholder='Tell me about your project...'
                className='text-field min-h-[180px] resize-none'
              ></textarea>

            </div>

            <button
              type='submit'
              className='w-full h-14 rounded-2xl bg-sky-500
              hover:bg-sky-400 text-white font-medium
              transition-all duration-300 hover:scale-[1.01]
              active:scale-[0.99]'
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact