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
          A fifth-semester Computer Science student at Indraprasta PGRI University who
          is eager to deepen knowledge, communicate effectively, and explore various IT fields. 
          Areas of interest include Web Development, IT Support, and IT Staff roles. Possesses strong 
          adaptability to new technologies and enthusiasm for advancing skills in the IT sector. Actively 
          seeks opportunities to apply academic knowledge through practical projects and relevant work experiences.
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