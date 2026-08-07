import React from 'react'
import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc,
    title,
    desc,
    tags,
    projectLink,
    index = 1,
    classes = ''
}) => {
    const projectNumber = String(index).padStart(2, '0')

    return (
        <article
            data-cursor="view"
            className={`
                group
                relative
                overflow-hidden
                border-t
                border-white/[0.09]
                pt-4
                transition-colors
                duration-300
                focus-within:border-white/[0.18]
                ${classes}
            `}
        >
            <div
                className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    gap-6
                "
            >
                <span
                    className="
                        text-xs
                        font-medium
                        tracking-[0.1em]
                        text-zinc-700
                    "
                >
                    {projectNumber}
                </span>

                <span
                    className="
                        material-symbols-rounded
                        translate-x-1
                        text-[19px]
                        text-zinc-700
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:-translate-y-0.5
                        group-hover:text-zinc-300
                    "
                    aria-hidden="true"
                >
                    north_east
                </span>
            </div>

            <figure
                className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    border
                    border-white/[0.07]
                    bg-zinc-900
                    sm:aspect-[4/3]
                    lg:aspect-[16/10]
                "
                style={{
                    borderRadius: '16px'
                }}
            >
                <img
                    src={imgSrc}
                    alt={`${title} preview`}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        brightness-[0.92]
                        transition-all
                        duration-700
                        ease-out
                        group-hover:scale-[1.015]
                        group-hover:brightness-100
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/10
                        via-transparent
                        to-white/[0.02]
                    "
                    aria-hidden="true"
                />
            </figure>

            <div className="pt-6 sm:pt-7">
                <div
                    className="
                        flex
                        flex-col
                        gap-5
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                    "
                >
                    <div className="max-w-xl">
                        <h3
                            className="
                                text-xl
                                font-semibold
                                leading-tight
                                tracking-[-0.035em]
                                text-zinc-100
                                transition-colors
                                duration-200
                                group-hover:text-white
                                sm:text-2xl
                                lg:text-[1.65rem]
                            "
                        >
                            {title}
                        </h3>

                        <p
                            className="
                                mt-3
                                max-w-lg
                                text-sm
                                leading-6
                                text-zinc-500
                                sm:text-[15px]
                                sm:leading-7
                            "
                        >
                            {desc}
                        </p>
                    </div>

                    <span
                        className="
                            hidden
                            shrink-0
                            text-xs
                            font-medium
                            text-zinc-700
                            sm:block
                        "
                    >
                        Project {projectNumber}
                    </span>
                </div>

                <div
                    className="
                        mt-6
                        flex
                        flex-col
                        gap-5
                        border-t
                        border-white/[0.07]
                        pt-5
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-x-2
                            gap-y-1
                        "
                    >
                        {tags.map((tag, tagIndex) => (
                            <React.Fragment key={tag}>
                                <span
                                    className="
                                        text-xs
                                        font-medium
                                        tracking-[-0.01em]
                                        text-zinc-500
                                    "
                                >
                                    {tag}
                                </span>

                                {tagIndex < tags.length - 1 && (
                                    <span
                                        className="
                                            text-xs
                                            text-zinc-800
                                        "
                                        aria-hidden="true"
                                    >
                                        ·
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-medium
                            tracking-[-0.015em]
                            text-zinc-400
                            transition-colors
                            duration-200
                            group-hover:text-zinc-100
                        "
                    >
                        <span>
                            View project
                        </span>

                        <span
                            className="
                                material-symbols-rounded
                                text-[17px]
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
                            aria-hidden="true"
                        >
                            arrow_outward
                        </span>
                    </div>
                </div>
            </div>

            {projectLink && (
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="view"
                    className="
                        absolute
                        inset-0
                        z-10
                        focus:outline-none
                    "
                    aria-label={`View ${title} project`}
                />
            )}
        </article>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink: PropTypes.string,
    index: PropTypes.number,
    classes: PropTypes.string
}

export default ProjectCard