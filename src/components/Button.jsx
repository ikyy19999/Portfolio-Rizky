import React from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

// Komponen Button Primer dengan Popup Maintenance
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    type = 'button'
}) => {
    const handleAction = (e) => {
        e.preventDefault() // Mencegah navigasi default agar Swal muncul dulu
        
        Swal.fire({
            title: 'MAINTENANCE',
            text: 'I am currently updating my CV. Please come back later!',
            icon: 'warning',
            confirmButtonText: 'UNDERSTOOD',
            buttonsStyling: false,
            background: '#ffffff',
            color: '#000000',
            customClass: {
                popup: 'border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none',
                confirmButton: 'bg-cyan-400 text-black font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 transition-all hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
            }
        })
    }

    return (
        <button
            type={type}
            onClick={handleAction}
            className={`
                relative flex items-center justify-center gap-2 px-6 py-3
                bg-cyan-400 text-black font-bold uppercase tracking-wider
                border-4 border-black
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-100 ease-in-out
                hover:bg-yellow-400
                active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
                ${classes}
            `}
        >
            {label}
            {icon && (
                <span className='material-symbols-rounded text-2xl' aria-hidden='true'>
                    {icon}
                </span>
            )}
        </button>
    )
}

// Komponen Button Outline
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
}) => {
    const neubrutalismClasses = `
        relative flex items-center justify-center gap-2 px-6 py-3
        bg-white text-black font-bold uppercase tracking-wider
        border-4 border-black
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-100 ease-in-out
        hover:bg-pink-400
        active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
        ${classes}
    `

    if (href) {
        return (
            <a href={href} target={target} className={neubrutalismClasses}>
                {label}
                {icon && <span className='material-symbols-rounded text-2xl'>{icon}</span>}
            </a>
        )
    }

    return (
        <button className={neubrutalismClasses}>
            {label}
            {icon && <span className='material-symbols-rounded text-2xl'>{icon}</span>}
        </button>
    )
}

// Validasi props
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    type: PropTypes.string
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}

export { ButtonPrimary, ButtonOutline }
