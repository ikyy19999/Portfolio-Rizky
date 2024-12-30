import React from 'react';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    // Referensi untuk link terakhir yang aktif
    const lastActiveLink = useRef(null);
    
    // Referensi untuk kotak aktif
    const activeBox = useRef(null);

    // Fungsi inisialisasi posisi kotak aktif
    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };

    // Panggil inisialisasi saat komponen dimuat
    useEffect(initActiveBox, []);
    
    // Tambahkan event listener resize
    window.addEventListener('resize', initActiveBox);

    // Fungsi untuk mengaktifkan link yang dipilih
    const activeCurrentLink = (event) => {
        // Hapus kelas 'active' dari semua link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke link yang diklik
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        // Update posisi active box
        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    };

    // Daftar item navigasi
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active', // Gunakan 'active' bukan 'nav-link-active'
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={'navbar' + (navOpen ? ' active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a 
                    href={link} 
                    key={key} 
                    ref={ref} 
                    className={className} 
                    onClick={activeCurrentLink}
                > 
                    {label} 
                </a>
            ))}

            <div className='active-box' ref={activeBox}></div>
        </nav>
    );
};

// Validasi prop types
Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;