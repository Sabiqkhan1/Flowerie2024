import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { FilterTagType } from '../../assets/data/types'
interface FilterTagProps {
    tag: FilterTagType
    handleDelete(tag: FilterTagType): void
}

const FilterTag: React.FC<FilterTagProps> = ({
    tag,
    handleDelete,
}): JSX.Element => {
    return (
        <button className="border border-gray rounded-full px-4 py-2 min-w-max bg-filterBackground font-regular text-textBlack text-xs hover:bg-[#dfdede] transition-colors duration-300 flex items-center mx-2 mb-2 xs:px-1 xs:py-1">
            {tag.label}
            <span className="ml-1">
                <CloseIcon
                    sx={{
                        fontSize: {
                            sm: 16,
                        },
                        transition:
                            'transform 0.3s ease-in-out, opacity 0.5s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                    onClick={() => handleDelete(tag)}
                />
            </span>
        </button>
    )
}

export default FilterTag
