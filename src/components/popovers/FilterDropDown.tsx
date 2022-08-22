import type { FC } from 'react'
import Popover from '@mui/material/Popover'
import Checkbox from '@mui/material/Checkbox'
import { filters } from '../../assets/data/static/filter.js'
import type { FilterTagType } from '../../assets/data/types.js'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
interface NavDropDownProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    tagList: Array<FilterTagType>
    handleClose(): void
    handleChange(tag: FilterTagType): void
}

const FilterDropDown: FC<NavDropDownProps> = ({
    id,
    open,
    anchorEl,
    tagList,
    handleClose,
    handleChange,
}): JSX.Element => {
    const isChecked = (id: number): boolean => {
        if (tagList.some((t: FilterTagType) => t.id === id)) {
            return true
        }
        return false
    }

    const handleCheck = (id: number): boolean => {
        return isChecked(id)
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <div className="max-h-[200px] overflow-auto thin-scroll">
                <ul>
                    {filters.map((filter: FilterTagType, index: React.Key) => (
                        <li
                            key={index}
                            className="py-2 px-4 font-semibold text-l border-slate border-b border-solid cursor-pointer flex items-center"
                        >
                            <Checkbox
                                {...label}
                                sx={{
                                    color: '#6F3939',
                                    '&:hover': { bgcolor: 'transparent' },
                                    '&.Mui-checked': {
                                        color: '#6F3939',
                                    },
                                }}
                                onChange={() => handleChange(filter)}
                                checked={handleCheck(filter.id)}
                            />
                            <span>{filter.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Popover>
    )
}

export default FilterDropDown
