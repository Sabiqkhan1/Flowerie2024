import type { FC } from 'react'
import Popover from '@mui/material/Popover'
import { GalleryImageType } from '../../assets/data/interfaces'
interface ImageDropDownProps {
    id: string | undefined
    open: boolean
    anchorEl: HTMLButtonElement | null
    handleClose(): void
    handleAddCaption(image: GalleryImageType): void
    handleDelete(): void
    image: GalleryImageType
}

const ImageDropDown: FC<ImageDropDownProps> = ({
    id,
    open,
    anchorEl,
    handleClose,
    handleAddCaption,
    image,
    handleDelete,
}): JSX.Element => {
    const editable: boolean = !(image.caption === '')
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
                sx: { borderRadius: 2 },
            }}
        >
            <div className="w-24">
                <ul>
                    <li
                        onClick={handleDelete}
                        className="p-2 font-semibold text-xs border-slate border-b border-solid cursor-pointer hover:bg-[#e7e7e7] transition-colors duration-300"
                    >
                        Delete
                    </li>
                    <li
                        onClick={() => handleAddCaption(image)}
                        className="p-2 font-semibold text-xs border-slate border-b border-solid cursor-pointer hover:bg-[#e7e7e7] transition-colors duration-300"
                    >
                        {editable ? 'Edit Caption' : 'Add Caption'}
                    </li>
                </ul>
            </div>
        </Popover>
    )
}

export default ImageDropDown
