import React from 'react'
import ReviewCard from './ReviewCard'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  // {
  //   content:
  //     'Exceptional fullstack development with modern UI/UX execution and scalable backend architecture.',
  //   name: 'Sophia Ramirez',
  //   imgSrc: '/images/people-1.jpg',
  //   company: 'PixelForge'
  // },
  // {
  //   content:
  //     'Delivered an elegant and responsive application with impressive performance optimization.',
  //   name: 'Ethan Caldwell',
  //   imgSrc: '/images/people-2.jpg',
  //   company: 'NexaWave'
  // },
  // {
  //   content:
  //     'Very professional workflow, clean code structure, and excellent communication throughout the project.',
  //   name: 'Liam Bennett',
  //   imgSrc: '/images/people-3.jpg',
  //   company: 'CodeCraft'
  // },
  // {
  //   content:
  //     'The interface design feels premium and modern. Highly recommended for frontend and backend projects.',
  //   name: 'Ava Thompson',
  //   imgSrc: '/images/people-4.jpg',
  //   company: 'BrightWeb'
  // },
  // {
  //   content:
  //     'Fast delivery, scalable system architecture, and smooth user experience on every device.',
  //   name: 'Jonathan Lee',
  //   imgSrc: '/images/people-5.jpg',
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
      className='reviews-section relative section overflow-hidden'
    >

      {/* Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[140px] rounded-full'></div>

      <div className='container relative z-10'>

        {/* Header */}
        <div className='mb-14 reveal-up'>

          <p className='text-sky-400 uppercase tracking-[0.2em] text-sm mb-4'>
            Testimonials
          </p>

          <h2 className='headline-2 max-w-[16ch] mb-5'>
            Trusted by clients who value quality experiences
          </h2>

          <p className='text-zinc-400 max-w-2xl'>
            Feedback from clients and collaborators who experienced
            my development workflow, communication, and product quality.
          </p>

        </div>

        {/* Reviews */}
        <div className='reviews-track flex gap-6 w-max'>

          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Reviews