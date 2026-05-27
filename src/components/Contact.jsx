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
      // Background terang untuk mendukung warna-warna kontras
      className='section relative overflow-hidden bg-white py-20'
    >
      <div className='container mx-auto px-4 relative z-10'>

        {/* Header */}
        <div className='text-center mb-16 reveal-up'>
          {/* Label diubah menjadi style tag solid */}
          <span className='inline-block bg-yellow-400 border-2 border-black text-black font-bold tracking-widest uppercase px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
            Contact
          </span>

          <h2 className='text-4xl md:text-5xl font-black text-black uppercase tracking-tight mx-auto mb-6'>
            Let’s Build Something Amazing
          </h2>

          <p className='text-black font-medium text-lg max-w-2xl mx-auto border-b-4 border-black pb-4'>
            Interested in working together, building modern web experiences,
            or discussing your next project? Let’s connect.
          </p>
        </div>

        {/* Main Grid */}
        <div className='grid lg:grid-cols-[1fr,1.2fr] gap-10 items-stretch'>

          {/* Left Card - Info */}
          {/* Card diubah menjadi pink dengan border dan shadow tebal */}
          <div className='rounded-none border-4 border-black bg-pink-400 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] reveal-up flex flex-col justify-between'>

            <div className='mb-10'>
              <p className='text-black font-bold uppercase tracking-wider mb-2'>
                Available For
              </p>

              <h3 className='text-3xl md:text-4xl font-black text-black uppercase leading-tight'>
                Freelance Projects,
                <br />
                Fullstack Development,
                <br />
                & Collaboration
              </h3>
            </div>

            {/* Status */}
            {/* Status box diubah menjadi putih dengan elemen neubrutalism */}
            <div className='flex items-center gap-4 p-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10'>
              <span className='relative flex h-4 w-4'>
                <span className='animate-ping absolute inline-flex h-full w-full bg-green-500 border-2 border-black'></span>
                <span className='relative inline-flex h-4 w-4 bg-green-500 border-2 border-black'></span>
              </span>

              <p className='text-black font-bold uppercase tracking-wider'>
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
                  // Tombol social media gaya retro button press
                  className='group flex items-center gap-3 px-5 py-3 bg-white border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all duration-100 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                >
                  <span className='material-symbols-rounded font-bold'>
                    {icon}
                  </span>
                  <span className='text-sm font-black uppercase tracking-wider'>
                    {label}
                  </span>
                </a>
              ))}
            </div>

          </div>

          {/* Form - Right Card */}
          {/* Form card diubah menjadi cyan */}
          <form
            action="https://getform.io/f/bvrrndyb"
            method='POST'
            className='rounded-none border-4 border-black bg-cyan-400 p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] reveal-up'
          >

            <div className='grid md:grid-cols-2 gap-6 mb-6'>

              <div>
                <label
                  htmlFor='name'
                  className='block text-black font-black uppercase tracking-wider mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  placeholder='JOHN DOE'
                  // Input gaya neubrutalism (fokus menghilangkan shadow dan tertekan)
                  className='w-full px-4 py-3 bg-white border-4 border-black text-black font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-100 focus:translate-x-[4px] focus:translate-y-[4px] focus:shadow-none'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-black font-black uppercase tracking-wider mb-2'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='YOU@EXAMPLE.COM'
                  className='w-full px-4 py-3 bg-white border-4 border-black text-black font-bold placeholder-gray-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-100 focus:translate-x-[4px] focus:translate-y-[4px] focus:shadow-none'
                />
              </div>

            </div>

            <div className='mb-8'>
              <label
                htmlFor='message'
                className='block text-black font-black uppercase tracking-wider mb-2'
              >
                Project Details
              </label>
              <textarea
                name='message'
                id='message'
                required
                placeholder='TELL ME ABOUT YOUR PROJECT...'
                className='w-full px-4 py-3 bg-white border-4 border-black text-black font-bold placeholder-gray-500 min-h-[180px] resize-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none transition-all duration-100 focus:translate-x-[4px] focus:translate-y-[4px] focus:shadow-none'
              ></textarea>
            </div>

            <button
              type='submit'
              // Submit button kuning solid
              className='w-full py-4 bg-yellow-400 border-4 border-black text-black font-black uppercase tracking-widest text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-100 hover:bg-white active:translate-x-[6px] active:translate-y-[6px] active:shadow-none'
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