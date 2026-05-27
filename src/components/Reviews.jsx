import React from 'react'
import ReviewCard from './ReviewCard'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Array data telah diperbarui dengan menghapus properti imgSrc
const reviews = [
  // {
  //   content:
  //     'Exceptional fullstack development with modern UI/UX execution and scalable backend architecture.',
  //   name: 'Sophia Ramirez',
  //   company: 'PixelForge'
  // },
  // {
  //   content:
  //     'Delivered an elegant and responsive application with impressive performance optimization.',
  //   name: 'Ethan Caldwell',
  //   company: 'NexaWave'
  // },
  // {
  //   content:
  //     'Very professional workflow, clean code structure, and excellent communication throughout the project.',
  //   name: 'Liam Bennett',
  //   company: 'CodeCraft'
  // },
  // {
  //   content:
  //     'The interface design feels premium and modern. Highly recommended for frontend and backend projects.',
  //   name: 'Ava Thompson',
  //   company: 'BrightWeb'
  // },
  // {
  //   content:
  //     'Fast delivery, scalable system architecture, and smooth user experience on every device.',
  //   name: 'Jonathan Lee',
  //   company: 'Skyline Digital'
  // }
]

const Reviews = () => {

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      gsap.to('.reviews-track', {
        x: () => -(document.querySelector('.reviews-track').scrollWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: '.reviews-section',
          start: 'top top',
          end: '+=2500',
          scrub: true,
          pin: true
        }
      })
    })
  })

  return (
    <section
      id='reviews'
      // Memberikan background terang dengan garis pembatas hitam tebal di bawah
      className='reviews-section relative overflow-hidden bg-white py-20 border-b-8 border-black'
    >

      <div className='container mx-auto px-4 relative z-10'>

        {/* Header */}
        <div className='mb-16 reveal-up'>

          {/* Label diubah menjadi badge solid kotak bergaya brutal */}
          <span className='inline-block bg-pink-400 border-2 border-black text-black font-black uppercase tracking-[0.2em] px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
            Testimonials
          </span>

          {/* Tipografi headline ditebalkan dan dikapitalisasi penuh */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight max-w-[16ch] mb-6 leading-[1.1]'>
            Trusted by clients who value quality experiences
          </h2>

          {/* Deskripsi ditebalkan dan diberi aksen pinggir */}
          <p className='text-black font-bold text-lg md:text-xl max-w-2xl border-l-8 border-yellow-400 pl-5 bg-gray-50 py-3 pr-3'>
            Feedback from clients and collaborators who experienced
            my development workflow, communication, and product quality.
          </p>

        </div>

        {/* Reviews */}
        {/* Padding ditambahkan (py-4 pr-4) agar saat card di-hover (memantul naik dan mengeluarkan shadow), shadownya tidak terpotong oleh overflow */}
        <div className='reviews-track flex gap-6 lg:gap-8 w-max py-4 pr-4'>

          {reviews.map(({ content, name, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              company={company}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Reviews