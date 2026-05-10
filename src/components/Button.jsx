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
                text: 'Choose how you want to access the CV.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'View CV',
                cancelButtonText: 'Download CV',
                confirmButtonColor: '#38bdf8',
                cancelButtonColor: '#27272a',
                background: '#09090b',
                color: '#ffffff'
            }).then((result) => {

                // Preview CV
                if (result.isConfirmed) {

                    Swal.fire({
                        width: '85%',
                        padding: '1.25rem',
                        background: '#09090b',
                        color: '#fff',
                        showCloseButton: true,
                        showConfirmButton: false,

                        html: `
                            <div class="flex flex-col gap-5">

                                <div class="text-center">
                                    <h2 class="text-4xl font-semibold text-white">
                                        Preview CV
                                    </h2>
                                </div>

                                <iframe 
                                    src="${href}" 
                                    width="100%" 
                                    height="700px"
                                    style="
                                        border:none;
                                        border-radius:18px;
                                        background:white;
                                    "
                                ></iframe>

                            </div>
                        `
                    })

                }

                // Download CV
                else if (result.dismiss === Swal.DismissReason.cancel) {

                    const link = document.createElement('a')

                    link.href = href
                    link.download = 'CV - Rizky Maulana.pdf'

                    document.body.appendChild(link)

                    link.click()

                    document.body.removeChild(link)
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
                title: 'Unavailable',
                text: 'This action is currently unavailable.',
                confirmButtonText: 'Understood',
                confirmButtonColor: '#38bdf8',
                background: '#09090b',
                color: '#ffffff'
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
                bg-sky-500
                hover:bg-sky-600
                text-white
                transition-all
                duration-300
                flex
                items-center
                gap-2
                hover:scale-[1.02]
                active:scale-95
                shadow-md
                hover:shadow-lg
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