import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes = ''
}) => {
    return (
        <div
            className={`
                group
                relative
                overflow-hidden
                border-4 border-black bg-white
                p-5
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-200 ease-in-out
                hover:-translate-y-1 hover:-translate-x-1
                hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
                hover:bg-cyan-300
                ${classes}
            `}
        >
            {/* Glow Effect DIHAPUS - Diganti dengan Background Solid di parent */}

            {/* Content */}
            <div className='relative z-10 flex items-start gap-4'>

                {/* Icon */}
                <figure
                    className='
                        flex items-center justify-center
                        w-14 h-14 shrink-0
                        border-4 border-black bg-white
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                        transition-transform duration-200
                        group-hover:scale-105
                        group-hover:-rotate-3
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
                <div className='flex-1 overflow-hidden'>

                    <div className='flex items-start justify-between gap-2 mb-1'>

                        {/* Judul diubah ke hitam pekat, uppercase, dan font-black */}
                        <h3 className='text-black text-lg md:text-xl font-black uppercase tracking-tight truncate'>
                            {label}
                        </h3>

                        {/* Badge "Active" diubah jadi stiker hijau stabilo */}
                        <span
                            className='
                                shrink-0
                                text-[10px]
                                font-black
                                text-black
                                uppercase
                                tracking-widest
                                bg-green-400
                                border-2 border-black
                                px-2 py-1
                                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                            '
                        >
                            Active
                        </span>

                    </div>

                    {/* Deskripsi diubah ke hitam tebal dengan aksen garis bawah */}
                    <p className='text-black text-xs font-bold uppercase tracking-wider leading-relaxed border-b-2 border-black inline-block pb-0.5 truncate max-w-full'>
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