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

    const handleAction = () => {
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
                confirmButton: 'bg-red-400 text-black font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 transition-none hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
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
                <span className='material-symbols-rounded font-bold' aria-hidden='true'>
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
                {icon && <span className='material-symbols-rounded font-bold'>{icon}</span>}
            </a>
        )
    }

    return (
        <button className={neubrutalismClasses}>
            {label}
            {icon && <span className='material-symbols-rounded font-bold'>{icon}</span>}
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


// CV RUNNING
// import React from 'react'
// import PropTypes from 'prop-types'
// import Swal from 'sweetalert2'

// // Komponen Button Primer dengan SweetAlert (Gaya Neubrutalism)
// const ButtonPrimary = ({
//     href,
//     target = '_self',
//     label,
//     icon,
//     classes = '',
//     type = 'button'
// }) => {

//     // Fungsi untuk handle CV atau Email
//     const handleAction = () => {

//         // Logika untuk CV
//         if (href && href.includes('.pdf')) {

//             Swal.fire({
//                 title: 'CV ACTION',
//                 text: 'Choose how you want to access the CV.',
//                 icon: 'question',
//                 showCancelButton: true,
//                 confirmButtonText: 'VIEW CV',
//                 cancelButtonText: 'DOWNLOAD',
//                 buttonsStyling: false,
//                 background: '#ffffff', // Background putih terang
//                 color: '#000000',      // Teks hitam pekat
//                 customClass: {
//                     // Styling popup ala neubrutalism
//                     popup: 'border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none',
//                     // Styling tombol confirm (Cyan)
//                     confirmButton: 'bg-cyan-400 text-black font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-5 py-2 mr-4 transition-none hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
//                     // Styling tombol cancel (Pink)
//                     cancelButton: 'bg-pink-400 text-black font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-5 py-2 transition-none hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
//                 }
//             }).then((result) => {

//                 // Preview CV
//                 if (result.isConfirmed) {

//                     Swal.fire({
//                         width: '85%',
//                         padding: '1.5rem',
//                         background: '#ffffff',
//                         color: '#000000',
//                         showCloseButton: true,
//                         showConfirmButton: false,
//                         buttonsStyling: false,
//                         customClass: {
//                             popup: 'border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none',
//                             // Menyesuaikan tombol close bawaan Swal
//                             closeButton: 'border-2 border-black bg-pink-400 hover:bg-yellow-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none m-2'
//                         },
//                         html: `
//                             <div class="flex flex-col gap-5">

//                                 <div class="text-center mb-2">
//                                     <h2 class="text-4xl font-black text-black uppercase tracking-widest">
//                                         PREVIEW CV
//                                     </h2>
//                                 </div>

//                                 <iframe 
//                                     src="${href}" 
//                                     width="100%" 
//                                     height="700px"
//                                     style="
//                                         border: 4px solid black;
//                                         border-radius: 0;
//                                         background: white;
//                                         box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
//                                     "
//                                 ></iframe>

//                             </div>
//                         `
//                     })

//                 }

//                 // Download CV
//                 else if (result.dismiss === Swal.DismissReason.cancel) {
//                     const link = document.createElement('a')
//                     link.href = href
//                     link.download = 'CV - Rizky Maulana.pdf'
//                     document.body.appendChild(link)
//                     link.click()
//                     document.body.removeChild(link)
//                 }

//             })

//         }

//         // Logika untuk Email
//         else if (href && href.startsWith('mailto:')) {
//             window.location.href = href
//         }

//         // Logika default
//         else {

//             Swal.fire({
//                 icon: 'info',
//                 title: 'UNAVAILABLE',
//                 text: 'This action is currently unavailable.',
//                 confirmButtonText: 'UNDERSTOOD',
//                 buttonsStyling: false,
//                 background: '#ffffff',
//                 color: '#000000',
//                 customClass: {
//                     popup: 'border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none',
//                     confirmButton: 'bg-yellow-400 text-black font-bold uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 transition-none hover:bg-cyan-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
//                 }
//             })

//         }

//     }

//     // Render button
//     return (
//         <button
//             type={type}
//             onClick={handleAction}
//             className={`
//                 relative flex items-center justify-center gap-2 px-6 py-3
//                 bg-cyan-400 text-black font-bold uppercase tracking-wider
//                 border-4 border-black
//                 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
//                 transition-all duration-100 ease-in-out
//                 hover:bg-yellow-400
//                 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
//                 ${classes}
//             `}
//         >
//             {label}
//             {icon && (
//                 <span className='material-symbols-rounded font-bold' aria-hidden='true'>
//                     {icon}
//                 </span>
//             )}
//         </button>
//     )
// }

// // Komponen Button Outline (Gaya Neubrutalism)
// const ButtonOutline = ({
//     href,
//     target = '_self',
//     label,
//     icon,
//     classes = ''
// }) => {

//     const neubrutalismClasses = `
//         relative flex items-center justify-center gap-2 px-6 py-3
//         bg-white text-black font-bold uppercase tracking-wider
//         border-4 border-black
//         shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
//         transition-all duration-100 ease-in-out
//         hover:bg-pink-400
//         active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
//         ${classes}
//     `

//     // Render sebagai link jika href tersedia
//     if (href) {
//         return (
//             <a
//                 href={href}
//                 target={target}
//                 className={neubrutalismClasses}
//             >
//                 {label}
//                 {icon && (
//                     <span className='material-symbols-rounded font-bold' aria-hidden='true'>
//                         {icon}
//                     </span>
//                 )}
//             </a>
//         )
//     }

//     // Render sebagai button jika href tidak tersedia
//     return (
//         <button className={neubrutalismClasses}>
//             {label}
//             {icon && (
//                 <span className='material-symbols-rounded font-bold' aria-hidden='true'>
//                     {icon}
//                 </span>
//             )}
//         </button>
//     )
// }

// // Validasi props
// ButtonPrimary.propTypes = {
//     label: PropTypes.string.isRequired,
//     href: PropTypes.string,
//     target: PropTypes.string,
//     icon: PropTypes.string,
//     classes: PropTypes.string,
//     type: PropTypes.string
// }

// ButtonOutline.propTypes = {
//     label: PropTypes.string.isRequired,
//     href: PropTypes.string,
//     target: PropTypes.string,
//     icon: PropTypes.string,
//     classes: PropTypes.string,
// }

// export {
//     ButtonPrimary,
//     ButtonOutline
// }