// Import necessary dependencies
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// Array of project works with their details
const works = [
  {
    imgSrc: '/assets/Web Music.png',
    title: 'Music Website',
    desc: 'Music streaming interface using public API.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: '/assets/Web Music/music.html',
    github: '#'
  },
  {
    imgSrc: '/assets/Book.png',
    title: 'Bookshelf App',
    desc: 'Simple SPA for managing reading lists.',
    category: 'web',
    tech: ['JavaScript', 'LocalStorage'],
    demo: '/assets/Bookshelf App/book.html',
    github: '#'
  },
  {
    imgSrc: '/assets/Kuis.png',
    title: 'Quiz Website',
    desc: 'Interactive quiz application.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: '/assets/quiz/index.html',
    github: '#'
  },
  {
    imgSrc: '/assets/Calculator.png',
    title: 'Calculator Website',
    desc: 'Simple web calculator tool.',
    category: 'tool',
    tech: ['HTML', 'JavaScript'],
    demo: '/assets/Calculator/index.html',
    github: '#'
  },
  {
    imgSrc: '/assets/Calender.png',
    title: 'Calendar Website',
    desc: 'Dynamic calendar interface.',
    category: 'tool',
    tech: ['JavaScript'],
    demo: '/assets/Calender/index.html',
    github: '#'
  },
  {
    imgSrc: '/assets/QR.png',
    title: 'QR Code Generator',
    desc: 'Generate QR codes instantly.',
    category: 'tool',
    tech: ['JavaScript', 'API'],
    demo: '/assets/QR/index.html',
    github: '#'
  },
  {
    imgSrc: '/assets/Finance.png',
    title: 'Finance Tracker',
    desc: 'Track income and expenses easily.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    github: '#'
  },
  {
    imgSrc: '/assets/Pastry.png',
    title: 'Online Pastry Shop',
    desc: 'Simple e-commerce pastry website.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    github: '#'
  }
];

// Work component to display project portfolio
const Work = () => {

  const [filter, setFilter] = useState('all');

  const filteredProjects = works.filter(project =>
    filter === 'all' || project.category === filter
  );

  return (
    <section id='work' className="section">
      <div className="container">

        {/* Section headline */}
        <h2 className='headline-2 mb-6 reveal-up'>
          My Portfolio Highlights
        </h2>

        {/* Filter buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">

          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer select-none transition
            ${filter === 'all'
                ? 'bg-sky-500 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer select-none transition
            ${filter === 'web'
                ? 'bg-sky-500 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            Web App
          </button>

          <button
            onClick={() => setFilter('tool')}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer select-none transition
            ${filter === 'tool'
                ? 'bg-sky-500 text-white'
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            }`}
          >
            Tools
          </button>

        </div>

        {/* Grid layout for project cards */}
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>

          {filteredProjects.map((project, key) => (
            <ProjectCard
              key={key}
              imgSrc={project.imgSrc}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              demo={project.demo}
              github={project.github}
              classes='reveal-up'
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Work;