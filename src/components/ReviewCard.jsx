import React from 'react'
import PropTypes from 'prop-types'

const ratings = new Array(5).fill({
  icon: 'star'
})

const ReviewCard = ({
  content,
  imgSrc,
  name,
  company
}) => {

  return (
    <div
      className='group relative overflow-hidden
      min-w-[320px] lg:min-w-[430px]
      rounded-[28px]
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      p-7
      transition-all duration-500
      hover:-translate-y-2
      hover:border-sky-400/30'
    >

      {/* Hover Glow */}
      <div
        className='absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/10'
      ></div>

      {/* Quote Icon */}
      <div
        className='absolute top-5 right-5 text-white/5
        text-7xl font-bold pointer-events-none select-none'
      >
        ”
      </div>

      {/* Rating */}
      <div className='relative z-10 flex items-center gap-1 mb-6'>

        {ratings.map(({ icon }, key) => (
          <span
            key={key}
            className='material-symbols-rounded text-yellow-300 text-[18px]'
            style={{
              fontVariationSettings: '"FILL" 1'
            }}
          >
            {icon}
          </span>
        ))}

      </div>

      {/* Content */}
      <p
        className='relative z-10 text-zinc-300 leading-relaxed
        text-[15px] mb-10'
      >
        {content}
      </p>

      {/* User */}
      <div className='relative z-10 flex items-center gap-4 mt-auto'>

        <figure
          className='w-14 h-14 rounded-2xl overflow-hidden
          ring-2 ring-white/10'
        >
          <img
            src={imgSrc}
            alt={name}
            width={56}
            height={56}
            loading='lazy'
            className='w-full h-full object-cover'
          />
        </figure>

        <div>

          <h3 className='text-white font-medium tracking-wide'>
            {name}
          </h3>

          <p className='text-sm text-zinc-400'>
            {company}
          </p>

        </div>

      </div>

    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
}

export default ReviewCard