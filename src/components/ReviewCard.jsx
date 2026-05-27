import React from 'react'
import PropTypes from 'prop-types'

const ratings = new Array(5).fill({
  icon: 'star'
})

const ReviewCard = ({
  content,
  name,
  company
}) => {

  return (
    <div
      className='group relative flex flex-col justify-between
      min-w-[320px] lg:min-w-[430px] h-full
      border-4 border-black
      bg-white
      p-8
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      transition-all duration-200 ease-in-out
      hover:-translate-y-2 hover:-translate-x-2
      hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]
      hover:bg-cyan-300'
    >

      {/* Quote Icon - Diubah menjadi hitam pekat dengan opacity sebagai background */}
      <div
        className='absolute top-2 right-4 text-black
        text-8xl font-black opacity-10 pointer-events-none select-none
        group-hover:opacity-30 transition-opacity duration-200'
      >
        "
      </div>

      <div>
        {/* Rating */}
        <div className='relative z-10 flex items-center gap-1 mb-8'>

          {ratings.map(({ icon }, key) => (
            <span
              key={key}
              // Bintang diberi efek text-shadow hitam untuk mensimulasikan border
              className='material-symbols-rounded text-yellow-400 text-[24px] md:text-[28px]'
              style={{
                fontVariationSettings: '"FILL" 1',
                textShadow: '2px 2px 0px rgba(0,0,0,1)'
              }}
            >
              {icon}
            </span>
          ))}

        </div>

        {/* Content */}
        {/* Teks hitam tebal dengan aksen garis di sebelah kiri */}
        <p
          className='relative z-10 text-black font-bold leading-relaxed
          text-lg md:text-xl mb-10 border-l-4 border-black pl-5'
        >
          {content}
        </p>
      </div>

      {/* User Information */}
      {/* Menggunakan border-top tebal sebagai pemisah karena foto sudah tidak ada */}
      <div className='relative z-10 mt-auto pt-6 border-t-4 border-black'>

        <h3 className='text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-3'>
          {name}
        </h3>

        {/* Jabatan/Perusahaan dibuat menjadi label stiker bergaya brutalisme */}
        <p className='text-black font-black uppercase tracking-widest text-xs md:text-sm bg-yellow-400 inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
          {company}
        </p>

      </div>

    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  // Prop imgSrc dihapus karena sudah tidak digunakan
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
}

export default ReviewCard