import React from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../context/LanguageContext'

const ratings = Array.from({ length: 5 }, (_, index) => index)

const ReviewCard = ({
    content,
    name,
    company,
    index = 1
}) => {
    const { copy } = useLanguage()
    const reviewNumber = String(index).padStart(2, '0')

    return (
        <article
            className="
                group
                relative
                flex
                min-h-[320px]
                flex-col
                border-b
                border-white/[0.08]
                py-8
                transition-colors
                duration-300
                hover:bg-white/[0.015]
                md:w-[420px]
                md:shrink-0
                md:border-b-0
                md:border-r
                md:px-8
                md:py-9
                lg:w-[470px]
                lg:px-10
                lg:py-10
            "
        >
            <div
                className="
                    flex
                    items-start
                    justify-between
                    gap-6
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-1
                    "
                    aria-label={copy.reviews.rating}
                >
                    {ratings.map((rating) => (
                        <span
                            key={rating}
                            className="
                                material-symbols-rounded
                                text-[17px]
                                text-zinc-500
                                transition-colors
                                duration-300
                                group-hover:text-zinc-300
                            "
                            style={{
                                fontVariationSettings:
                                    '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 20'
                            }}
                            aria-hidden="true"
                        >
                            star
                        </span>
                    ))}
                </div>

                <span
                    className="
                        text-xs
                        font-medium
                        tracking-[0.1em]
                        text-zinc-700
                    "
                >
                    {reviewNumber}
                </span>
            </div>

            <blockquote
                className="
                    mt-8
                    flex-1
                    text-lg
                    font-medium
                    leading-8
                    tracking-[-0.025em]
                    text-zinc-300
                    sm:text-xl
                    sm:leading-9
                    lg:text-[1.35rem]
                "
            >
                <span
                    className="
                        mr-1
                        text-zinc-600
                    "
                    aria-hidden="true"
                >
                    “
                </span>

                {content}

                <span
                    className="
                        ml-1
                        text-zinc-600
                    "
                    aria-hidden="true"
                >
                    ”
                </span>
            </blockquote>

            <footer
                className="
                    mt-10
                    border-t
                    border-white/[0.08]
                    pt-5
                "
            >
                <div
                    className="
                        flex
                        items-end
                        justify-between
                        gap-6
                    "
                >
                    <div>
                        <p
                            className="
                                text-sm
                                font-medium
                                tracking-[-0.015em]
                                text-zinc-200
                            "
                        >
                            {name}
                        </p>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-zinc-600
                            "
                        >
                            {company}
                        </p>
                    </div>

                    <span
                        className="
                            select-none
                            font-serif
                            text-4xl
                            leading-none
                            text-zinc-800
                            transition-colors
                            duration-300
                            group-hover:text-zinc-700
                        "
                        aria-hidden="true"
                    >
                        ”
                    </span>
                </div>
            </footer>
        </article>
    )
}

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    index: PropTypes.number
}

export default ReviewCard
