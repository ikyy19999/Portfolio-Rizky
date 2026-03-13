import React from 'react'

// Array berisi item-item tentang pencapaian
const aboutItems = [
  {
    label: 'Project done',
    number: 5
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

// Komponen About untuk menampilkan informasi pribadi
const About = () => {
  return (
    <section
      id='about'
      className='section'
    >
      <div className="container">
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>

          {/* Paragraf deskripsi personal */}
          <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            A sixth-semester Computer Science student at Indraprasta PGRI University 
            with a strong interest in Information Technology. Experienced in IT support, 
            networking, and system maintenance through internships and professional work 
            experience. Skilled in hardware installation, network troubleshooting, CCTV configuration, 
            and basic web development using HTML, CSS, and JavaScript. Familiar with network monitoring 
            tools such as The Dude and experienced in handling email systems and IT infrastructure. A fast 
            learner who adapts quickly to new technologies, communicates effectively, and works well both 
            independently and in a team. Currently seeking opportunities to further develop technical skills 
            and contribute to the IT industry through practical projects and professional experiences.
          </p>

          {/* Container untuk pencapaian dan logo */}
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            
            {/* Mapping pencapaian */}
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className='flex items-center md:mb-2'>
                  <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                  <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                </div>

                <p className='text-sm text-zinc-400'>{label}</p>
              </div>
            ))}

            {/* Logo */}
            <img 
              src="/assets/favicon.ico" 
              alt="Logo"
              width={30}
              height={30}
              className='ml-auto md:w-[40px] md:h-[40px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About