// Import necessary dependencies
import React from 'react';
import ProjectCard from './ProjectCard';

// Array of project works with their details
const works = [
    {
        imgSrc: '/assets/Web Music.png',
        title: 'Music Website',
        tags: ['API', 'MVC', 'Development'],
        projectLink: '/assets/Web Music/music.html'
    },
    {
        imgSrc: '/assets/Book.png',
        title: 'Bookshelf Website',
        tags: ['API', 'SPA'],
        projectLink: '/assets/Bookshelf App/book.html'
    },
    {
        imgSrc: '/assets/Kuis.png',
        title: 'Kuis Website',
        tags: ['Development', 'API'],
        projectLink: '/assets/Kuis App/weather.html'
    },
    {
        imgSrc: '/assets/Calculator.png',
        title: 'Calculator Website',
        tags: ['Web-design', 'Development'],
        projectLink: '/assets/Calculator/index.html'
    },
    {
        imgSrc: '/assets/Calender.png',
        title: 'Calender website',
        tags: ['eCommerce', 'Development'],
        projectLink: '/assets/Calender/index.html'
    },
    {
        imgSrc: '/assets/QR.png',
        title: 'QR Code Generator',
        tags: ['Web-design', 'Development'],
        projectLink: '/assets/QR/index.html'
    },
    {
        imgSrc: '/assets/Finance.png',
        title: 'Finance Tracker',
        tags: ['Web-design', 'Development'],
        projectLink: '/assets/Personal Finance Tracker/index.html'
    }
];

// Work component to display project portfolio
const Work = () => {
    return (
        // Section for showcasing portfolio works
        <section 
            id='work'
            className="section"
        >
            <div className="container">
                {/* Section headline */}
                <h2 className='headline-2 mb-2 reveal-up'>My portfolio highlights</h2>

                {/* Grid layout for project cards */}
                <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                    {/* Map through works and render ProjectCard components */}
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink} 
                            classes='reveal-up'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;