import React from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

// Komponen Button Primer dengan SweetAlert
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
    type = 'button'
}) => {
    // Fungsi untuk handle CV atau Email
    const handleAction = () => {
        // Logika untuk CV
        if (href.includes('.pdf')) {
            Swal.fire({
                title: 'CV Action',
                text: 'Choose how you want to view the CV.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'View CV',
                cancelButtonText: 'Download CV',
                confirmButtonColor: '#0ea5e9',
                cancelButtonColor: '#0ea5e9'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Lihat CV
                    window.open(href, '_blank')
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Download CV
                    const link = document.createElement('a')
                    link.href = href
                    link.download = 'public/assets/CV - Rizky Maulana.pdf'
                    link.click()
                }
            })
        } 
        // Logika untuk Email
        else if (href.startsWith('mailto:')) {
            window.location.href = href
        }
        // Logika default
        else {
            Swal.fire({
                icon: 'info',
                title: 'CV is currently unavailable.',
                text: 'CV is currently unavailable at the moment. Please feel free to contact me.',
                confirmButtonText: 'Understood',
                confirmButtonColor: '#0ea5e9'
            })
        }
    }

    // Render button
    return (
        <button 
            type={type}
            onClick={handleAction}
            className={`
                relative 
                px-4 
                py-2 
                rounded-lg 
                bg-sky-500 hover:bg-sky-600
                text-white 
                transition-colors 
                flex 
                items-center 
                gap-2 
                ${classes}
            `}
        >
            {label}
            {icon && (
                <span 
                    className='material-symbols-rounded' 
                    aria-hidden='true'
                >
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
    classes
}) => {
    // Render sebagai link jika href tersedia
    if (href) {
        return (
            <a 
                href={href} 
                target={target} 
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon && (
                    <span 
                        className='material-symbols-rounded' 
                        aria-hidden='true'
                    >
                        {icon}
                    </span>
                )}
            </a>
        )
    }
    
    // Render sebagai button jika href tidak tersedia
    return (
        <button className={'btn btn-outline ' + classes}>
            {label}
            {icon && (
                <span 
                    className='material-symbols-rounded' 
                    aria-hidden='true'
                >
                    {icon}
                </span>
            )}
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

export {
    ButtonPrimary,
    ButtonOutline
}