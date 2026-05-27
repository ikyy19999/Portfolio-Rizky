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
    number: '1'
  }
]

const About = () => {
  return (
    <section
      id='about'
      className='section relative overflow-hidden bg-white py-20'
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className='grid lg:grid-cols-[1fr,0.8fr] gap-12 items-center'>

          {/* LEFT CONTENT */}
          <div className='reveal-up'>

            <span className='inline-flex items-center gap-2 px-5 py-2 bg-pink-400 border-2 border-black text-sm font-bold text-black uppercase tracking-wider mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              About Me
            </span>

            <h2 className='text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight max-w-[15ch]'>
              Building modern digital experiences for the future.
            </h2>

            <p className='text-black font-medium text-base md:text-lg leading-relaxed max-w-[60ch] mb-6 border-l-4 border-black pl-5'>
              A Computer Science student and experienced Full Stack Developer with a strong 
              background in IT infrastructure. Proficient in building robust web applications 
              using Laravel, PHP, and React, supported by efficient MySQL database management and Tailwind CSS. 
              Alongside development, I possess professional expertise in networking, system maintenance, and IT support. A versatile tech professional who bridges the gap between software development and IT infrastructure.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className='reveal-up'>

            {/* Bentuk card dibuat lebih kaku (rounded-none) atau sesuai selera brutalism */}
            <div className='relative border-4 border-black bg-cyan-300 p-8 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'>

              <div className='relative z-10'>

                {/* Karena foto hilang, nama dan jabatan menjadi fokus utama di header card */}
                <div className='mb-10'>
                  <h3 className='text-4xl font-black text-black uppercase tracking-tight mb-2'>
                    Rizky Maulana
                  </h3>
                  
                  {/* Jabatan diperbesar dan border bawah ditebalkan */}
                  <p className='text-black font-bold uppercase tracking-widest border-b-4 border-black inline-block mt-1'>
                    Full Stack Developer
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-6'>

                  {aboutItems.map(({ label, number }, key) => (
                    <div
                      key={key}
                      className='bg-white border-4 border-black p-5 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300'
                    >
                      <h4 className='text-4xl md:text-5xl font-black text-black mb-2'>
                        {number}
                        <span className='text-pink-500 ml-1'>+</span>
                      </h4>

                      <p className='text-sm font-bold text-black uppercase leading-tight'>
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