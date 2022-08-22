import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    background: 'dark' | 'light'
    color: 'dark' | 'light'
    space?: boolean | null
}

const ModalButton: React.FC<ButtonProps> = ({
    children,
    background,
    color,
    space,
}): JSX.Element => {
    return (
        <button
            className={`${
                background === 'dark' ? 'bg-light-maroon' : 'bg-white'
            } 
      px-4  py-4 md:py-3  
      ${color === 'dark' ? 'text-black' : 'text-white'}  
        ${space ? 'mt-8 md:mt-4 sm:mt-2' : 'mt-0'}
        font-roboto-bold text-2xl md:text-lg sm:text-sm xs:text-xs rounded-[9px] hover:bg-light-maroon-dark transition-colors duration-300 drop-shadow-lg w-full
        `}
        >
            {children}
        </button>
    )
}

export default ModalButton
