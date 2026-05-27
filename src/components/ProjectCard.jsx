import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc,
    title,
    desc,
    tags,
    projectLink,
    classes = ''
}) => {

    return (

        <article
            className={`
                group relative overflow-hidden
                border-4 border-black
                bg-white
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-200 ease-in-out
                hover:-translate-y-2 hover:-translate-x-2
                hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]
                hover:bg-cyan-300
                ${classes}
            `}
        >

            {/* Thumbnail */}
            <figure className='relative overflow-hidden aspect-[4/3] border-b-4 border-black bg-zinc-200'>
                
                {/* Overlay transparan dihapus, diganti efek grayscale ke color */}
                <img
                    src={imgSrc}
                    alt={title}
                    loading='lazy'
                    className='w-full h-full object-cover
                    grayscale transition-all duration-500
                    group-hover:grayscale-0 group-hover:scale-105'
                />

            </figure>

            {/* Content */}
            <div className='p-6 md:p-8'>

                {/* Tags */}
                <div className='flex flex-wrap gap-3 mb-6'>

                    {tags.map((tag, key) => (

                        <span
                            key={key}
                            // Label tag diubah menjadi kotak solid dengan border tebal
                            className='px-3 py-1 bg-yellow-400
                            border-2 border-black
                            text-xs font-black text-black uppercase tracking-wider
                            shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                        >
                            {tag}
                        </span>

                    ))}

                </div>

                {/* Title */}
                <h3 className='text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-4'>
                    {title}
                </h3>

                {/* Description */}
                <p className='text-black font-bold leading-relaxed mb-8 border-l-4 border-black pl-4'>
                    {desc}
                </p>

                {/* Footer */}
                <div className='flex items-center justify-between mt-auto'>

                    <p className='text-sm text-black font-black uppercase tracking-widest'>
                        View Project
                    </p>

                    {/* Icon Box */}
                    {/* Kotak ikon pink yang terlihat tertekan saat card di-hover */}
                    <div className='w-12 h-12 border-2 border-black bg-pink-400 text-black 
                    grid place-items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-200
                    group-hover:bg-yellow-400 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none'>

                        <span className='material-symbols-rounded font-black text-xl'>
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
                aria-label={`View ${title} project`}
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