import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
    // State untuk mengontrol navigasi mobile
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header 
            className='fixed top-0 left-0 w-full h-20 flex items-center z-40 
            bg-gradient-to-b from-zinc-900'
        >
            <div 
                className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between 
                items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'
            >
                {/* Logo */}
                <h1>
                    <a href="#" className='logo'>
                        <img 
                            src="/assets/favicon.ico" 
                            width={40} 
                            height={40} 
                            alt="Logo" 
                        />
                    </a>
                </h1>

                {/* Navigasi */}
                <div className='relative md:justify-self-center'>
                    {/* Tombol menu untuk mobile */}
                    <button 
                        className='menu-btn md:hidden' 
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className='material-symbols-rounded'>
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} />
                </div>
                
                {/* Tombol kontak untuk desktop */}
                <a 
                    href="#contact" 
                    className='btn btn-secondary max-md:hidden md:justify-self-end'
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;