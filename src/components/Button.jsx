import React from 'react'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    type = 'button'
}) => {
    const handleAction = () => {
        Swal.fire({
            title: 'CV maintenance',
            text: 'I am currently updating my CV. Please come back later.',
            icon: 'info',
            confirmButtonText: 'Got it',
            buttonsStyling: false,
            background: '#0a0a0b',
            color: '#f4f4f5',
            customClass: {
                popup: `
                    border
                    border-white/[0.08]
                    shadow-[0_24px_80px_rgba(0,0,0,0.45)]
                `,
                title: `
                    text-2xl
                    font-semibold
                    tracking-[-0.035em]
                    text-zinc-50
                `,
                htmlContainer: `
                    text-sm
                    leading-6
                    text-zinc-400
                `,
                confirmButton: `
                    mt-3
                    inline-flex
                    min-w-[120px]
                    items-center
                    justify-center
                    bg-zinc-50
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-zinc-950
                    transition-all
                    duration-200
                    hover:bg-white
                    active:scale-[0.98]
                `
            },
            didOpen: () => {
                const popup = Swal.getPopup()
                const confirmButton = Swal.getConfirmButton()

                if (popup) {
                    popup.style.borderRadius = '16px'
                    popup.style.backdropFilter = 'blur(24px)'
                    popup.style.webkitBackdropFilter = 'blur(24px)'
                }

                if (confirmButton) {
                    confirmButton.style.borderRadius = '10px'
                }
            }
        })
    }

    return (
        <button
            type={type}
            onClick={handleAction}
            data-href={href || undefined}
            data-target={target}
            className={`
                group
                inline-flex
                h-11
                max-w-max
                items-center
                justify-center
                gap-2
                bg-zinc-50
                px-4
                text-sm
                font-medium
                tracking-[-0.015em]
                text-zinc-950
                transition-all
                duration-200
                hover:bg-white
                active:scale-[0.98]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/30
                ${classes}
            `}
            style={{
                borderRadius: '11px'
            }}
        >
            <span>
                {label}
            </span>

            {icon && (
                <span
                    className="
                        material-symbols-rounded
                        text-[18px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                    "
                    aria-hidden="true"
                >
                    {icon}
                </span>
            )}
        </button>
    )
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = '',
    type = 'button'
}) => {
    const buttonClasses = `
        group
        inline-flex
        h-11
        max-w-max
        items-center
        justify-center
        gap-2
        border
        border-white/[0.12]
        bg-transparent
        px-4
        text-sm
        font-medium
        tracking-[-0.015em]
        text-zinc-300
        transition-all
        duration-200
        hover:border-white/[0.22]
        hover:bg-white/[0.025]
        hover:text-white
        active:scale-[0.98]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/30
        ${classes}
    `

    const content = (
        <>
            <span>
                {label}
            </span>

            {icon && (
                <span
                    className="
                        material-symbols-rounded
                        text-[18px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                    "
                    aria-hidden="true"
                >
                    {icon}
                </span>
            )}
        </>
    )

    if (href) {
        const isExternal =
            target === '_blank' ||
            href.startsWith('http://') ||
            href.startsWith('https://')

        return (
            <a
                href={href}
                target={target}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={buttonClasses}
                style={{
                    borderRadius: '11px'
                }}
            >
                {content}
            </a>
        )
    }

    return (
        <button
            type={type}
            className={buttonClasses}
            style={{
                borderRadius: '11px'
            }}
        >
            {content}
        </button>
    )
}

ButtonPrimary.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string,
    type: PropTypes.string
}

ButtonOutline.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    classes: PropTypes.string,
    type: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}