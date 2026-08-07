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
                border-b
                border-white/[0.08]
                px-0
                py-6
                transition-colors
                duration-300
                hover:bg-white/[0.018]
                sm:border-r
                sm:px-6
                sm:py-7
                lg:px-7
                ${classes}
            `}
        >
            <div className="flex items-center gap-4">
                <figure
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                    "
                >
                    <img
                        src={imgSrc}
                        width={30}
                        height={30}
                        alt={label}
                        loading="lazy"
                        className="
                            h-7
                            w-7
                            object-contain
                            opacity-80
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:opacity-100
                        "
                    />
                </figure>

                <div className="min-w-0 flex-1">
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            gap-4
                        "
                    >
                        <h3
                            className="
                                truncate
                                text-base
                                font-medium
                                tracking-[-0.02em]
                                text-zinc-300
                                transition-colors
                                duration-200
                                group-hover:text-white
                                sm:text-[17px]
                            "
                        >
                            {label}
                        </h3>

                        <span
                            className="
                                material-symbols-rounded
                                shrink-0
                                translate-x-1
                                text-[17px]
                                text-zinc-800
                                opacity-0
                                transition-all
                                duration-300
                                group-hover:translate-x-0
                                group-hover:text-zinc-500
                                group-hover:opacity-100
                            "
                            aria-hidden="true"
                        >
                            north_east
                        </span>
                    </div>

                    <p
                        className="
                            mt-1
                            truncate
                            text-xs
                            leading-5
                            text-zinc-600
                            sm:text-sm
                        "
                    >
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