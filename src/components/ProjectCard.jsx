// Import necessary dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { space } from 'postcss/lib/list';

// ProjectCard component to display individual project details
const ProjectCard = ({
    imgSrc,       // Source of project image
    title,        // Title of the project
    tags,         // Tags associated with the project
    projectLink,  // Link to the project
    classes       // Additional CSS classes
}) => {
    return (
        // Main card container with dynamic classes and hover effects
        <div className={
            'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors' 
            + classes
        }>
            {/* Project image container */}
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img 
                    src={imgSrc} 
                    alt={title}
                    loading='lazy'
                    className='img-cover' 
                />
            </figure>

            {/* Project details section */}
            <div className="flex items-center justify-between gap-4">
                <div>
                    {/* Project title */}
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>

                    {/* Project tags */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* {tags.map((label, key) => (
                            <span
                                key={key}
                                className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg'
                            >
                                {label}
                            </span>
                        ))} */}
                    </div>
                </div>

                {/* External link icon */}
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-500 text-zinc-950 shrink-0">
                    <span
                        className='material-symbols-rounded'
                        aria-hidden='true'
                    >
                        arrow_outward
                    </span>
                </div>
            </div>

            {/* Absolute link covering the entire card */}
            <a 
                href={projectLink}
                target='_blank'
                className='absolute inset-0'
            ></a>
        </div>
    );
};

// PropTypes for type checking and documentation
ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,       // Project image source (required)
    title: PropTypes.string.isRequired,        // Project title (required)
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,  // Project tags (required, array of strings)
    projectLink: PropTypes.string,             // Project link (optional)
    classes: PropTypes.string,                 // Additional CSS classes (optional)
};

export default ProjectCard;