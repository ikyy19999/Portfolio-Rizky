import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc,
    title,
    desc,
    tags,
    projectLink,
    classes
}) => {

    return (

        <article
            className={`
                group relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:border-sky-500/30
                hover:shadow-2xl
                hover:shadow-sky-500/10
                ${classes}
            `}
        >

            {/* Thumbnail */}
            <figure className='relative overflow-hidden aspect-[4/3]'>

                {/* Overlay */}
                <div className='absolute inset-0 z-10
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent'></div>

                <img
                    src={imgSrc}
                    alt={title}
                    loading='lazy'
                    className='w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110'
                />

            </figure>

            {/* Content */}
            <div className='p-7'>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-5'>

                    {tags.map((tag, key) => (

                        <span
                            key={key}
                            className='px-3 py-1 rounded-full
                            bg-white/[0.05]
                            border border-white/10
                            text-xs text-zinc-300'
                        >

                            {tag}

                        </span>

                    ))}

                </div>

                {/* Title */}
                <h3 className='text-2xl font-semibold
                text-white mb-4
                transition-colors duration-300
                group-hover:text-sky-400'>

                    {title}

                </h3>

                {/* Description */}
                <p className='text-zinc-400 leading-relaxed mb-7'>

                    {desc}

                </p>

                {/* Footer */}
                <div className='flex items-center justify-between'>

                    <p className='text-sm text-zinc-500'>
                        View Project
                    </p>

                    <div className='w-12 h-12 rounded-2xl
                    bg-sky-500 text-white
                    grid place-items-center
                    transition-all duration-300
                    group-hover:rotate-45'>

                        <span className='material-symbols-rounded'>
                            arrow_outward
                        </span>

                    </div>

                </div>

            </div>

            {/* Full Link */}
            <a
                href={projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='absolute inset-0 z-20'
            ></a>

        </article>

    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard