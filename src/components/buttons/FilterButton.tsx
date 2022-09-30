import React from 'react'

interface FilterButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const FilterButton: React.FC<FilterButtonProps> = ({
    children,
    onClick,
}): JSX.Element => {
    return (
        <button
            className="border-[0.5px] border-gray rounded-full px-4 py-3 min-w-max bg-filterBackground font-regular text-textBlack text-xs hover:bg-[#dfdede] transition-colors duration-300
            sm:px-2 sm:py-2
            "
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default FilterButton
