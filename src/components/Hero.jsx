import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button'

// Komponen Hero untuk halaman utama
const Hero = () => {
  return (
    // Bagian hero dengan padding top responsif
    <section id='home' className='pt-28 lg:pt-36'>
        {/* Container dengan grid layout responsif */}
        <div className='container lg:grid lg:grid-cols-2 
        items-center lg:gap-10'>
            {/* Kolom kiri - Konten teks */}
            <div>
                {/* Header dengan foto profil dan status */}
                <div className='flex items-center gap-3'>
                    {/* Foto profil */}
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img 
                            src="/assets/Foto.png" 
                            width={40} 
                            height={40} 
                            alt="Rizky Maulana" 
                            className='img-cover' 
                        />
                    </figure>

                    {/* Status ketersediaan */}
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>

                        Available for work
                    </div>
                </div>

                {/* Headline utama */}
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] 
                lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Full Stack Web Developer Based In Jakarta, Indonesia
                </h2>

                {/* Tombol aksi */}
                <div className='flex items-center gap-3'>
                    <ButtonPrimary 
                        href={'/assets/CV - Rizky Maulana.pdf'}
                        label='Download CV'
                        icon='download'
                    />

                    <ButtonOutline 
                        href="#about" 
                        label='Scroll Down' 
                        icon='arrow_downward' 
                    />
                </div>
            </div>

            {/* Kolom kanan - Gambar profil (hanya tampil di layar besar) */}
            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 
                to-65% rounded-[60px] overflow-hidden'>
                    <img 
                        src="/assets/Foto.png" 
                        width={656} 
                        height={800} 
                        alt="Rizky Maulana" 
                        className='w-full 
                        h-auto object-cover md:max-w-[656PX] mx-auto' 
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero