import React from 'react'

export const UnturnedPage = () => {
    return (
        <div className='text-light container'>
            <h2 className='text-center mb-4 mt-4 animate__animated animate__fadeInDown animate__delay-0s'>Votación Unturned</h2>
            <hr className='animate__animated animate__fadeInDown animate__delay-1s'/>
            <iframe className='w-100 text-center animate__animated animate__fadeIn animate__delay-1s' src="https://docs.google.com/forms/d/e/1FAIpQLSe9B0a0o6PDmxZ3g4nHjlw7bSVbW5jtTPhiKPeoQ-jcH040dw/viewform?embedded=true" height="960"></iframe>
        </div>
    )
}
