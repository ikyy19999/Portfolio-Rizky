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
          A third-semester Computer Science student at Indraprasta PGRI University who readily learns 
          new things, communicates effectively, and is interested in exploring various fields. Areas of 
          interest include Web Development, IT Support, and IT Staff positions. Possesses a strong ability 
          to adapt to new technologies and is enthusiastic about developing skills in the IT sector. Actively 
          seeks opportunities to apply academic knowledge in practical projects and relevant work experiences.
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