import type { FC } from 'react'
import Popover from '@mui/material/Popover'
interface LanguageDropDownProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    handleClose(): void
}

const LanguageDropDown: FC<LanguageDropDownProps> = ({
    id,
    open,
    anchorEl,
    handleClose,
}): JSX.Element => {
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            PaperProps={{
                elevation: 1,
            }}
        >
            <div className="w-36">
                <ul>
                    <li className="p-2 font-regular text-sm border-slate border-b border-solid hover:text-maroon focus:text-maroon cursor-pointer transition-colors hover:bg-maroon-300 duration-300">
                        English
                    </li>
                </ul>
            </div>
        </Popover>
    )
}

export default LanguageDropDown
