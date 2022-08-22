import React from 'react'

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    background: string
    color: string
    fontSize?: number
    fontFamily?: string
}

const ContainedButton: React.FC<ButtonProps> = ({
    children,
    background,
    color,
    fontSize = 16,
    style,
    fontFamily = 'regular',
}): JSX.Element => {
    return (
        <button
            style={{ ...style, fontSize: fontSize }}
            className={`${background} px-4  py-3  text-${color} font-${fontFamily} sm:text-sm xs:text-xs rounded-xl w-full hover:scale-105 transition-transform duration-300 drop-shadow-lg`}
        >
            {children}
        </button>
    )
}

export default ContainedButton
