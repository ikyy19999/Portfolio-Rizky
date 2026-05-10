import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div
            className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-sky-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_0_50px_rgba(56,189,248,0.12)]
                ${classes}
            `}
        >

            {/* Glow Effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <div className='absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 blur-3xl rounded-full'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 flex items-start gap-4'>

                {/* Icon */}
                <figure
                    className='
                        flex
                        items-center
                        justify-center
                        w-14
                        h-14
                        rounded-2xl
                        bg-zinc-900/80
                        border
                        border-white/10
                        shrink-0
                        transition-transform
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                    '
                >
                    <img
                        src={imgSrc}
                        width={32}
                        height={32}
                        alt={label}
                        className='object-contain'
                    />
                </figure>

                {/* Text */}
                <div className='flex-1'>

                    <div className='flex items-center justify-between gap-3 mb-2'>

                        <h3 className='text-white text-lg font-semibold tracking-wide'>
                            {label}
                        </h3>

                        <span
                            className='
                                text-[11px]
                                uppercase
                                tracking-widest
                                text-sky-300
                                bg-sky-500/10
                                border
                                border-sky-400/20
                                px-2
                                py-1
                                rounded-full
                            '
                        >
                            Active
                        </span>

                    </div>

                    <p className='text-zinc-400 text-sm leading-6'>
                        {desc}
                    </p>

                </div>

            </div>

        </div>
    )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default SkillCard