import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
    children,
    onClick,
    className,
    ...props
}): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className={`
                flex items-center gap-2 
                px-4 py-2.5 
                bg-[#F5F5F7] 
                hover:bg-[#E8E8ED]
                text-[#1D1D1F]
                rounded-full 
                font-medium 
                text-sm
                transition-all duration-200 
                shadow-sm 
                hover:shadow-md
                ${className || ''}
            `}
            {...props}
        >
            <FilterListIcon sx={{ fontSize: 20 }} />
            {children || 'Add Filters'}
        </button>
    );
};

export default FilterButton;
