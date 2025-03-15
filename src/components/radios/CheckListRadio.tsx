import React from 'react'

export interface CheckListRadioProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    radioColor?: 'orange' | 'green' | string
    label: string
    handleClick?(): void
}

const generateColor = (value: string): string => {
    if (value === 'orange') return '#E58E0B'
    if (value === 'green') return '#60C63C'
    return value
}

const CheckListRadio: React.FunctionComponent<CheckListRadioProps> = ({
    radioColor = '#c4c4c4',
    label,
    style,
    handleClick,
}) => {
    const color = generateColor(radioColor)
    return (
        <li className="flex items-center" style={{ ...style }}>
            <button
                style={{ backgroundColor: color }}
                onClick={handleClick}
                className={`w-3 h-3 rounded-full hover:scale-110`}
            />
            <p className="font-regular text-xs text-textBlack ml-2 leading-none">
                {label}
            </p>
        </li>
    )
}

export default CheckListRadio
