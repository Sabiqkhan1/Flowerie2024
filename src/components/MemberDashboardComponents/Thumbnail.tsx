import React, { useState } from 'react'
import weddingCover from '../../assets/images/wedding-cover.webp'
import PrimaryImage from '../common/Img'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CountDown from './CountDown'
interface FileType extends File {
    preview: string
}

const Input = styled('input')({
    display: 'none',
})
const Thumbnail: React.FunctionComponent = (): JSX.Element => {
    const [cover, setCover] = useState<FileType | null>(null)

    const handleChange = (e: any) => {
        let newFile: Array<FileType> = [...e.target.files]
        newFile.forEach((file: File) => {
            return Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        })
        setCover(newFile[0])
    }
    return (
        <figure className="w-96 aspect-[450/400] relative">
            <div className="absolute w-full h-full flex flex-col justify-between">
                <div className="text-right p-4">
                    <label htmlFor="upload-wedding-image">
                        <Input
                            accept="image/*"
                            id="upload-wedding-image"
                            type="file"
                            onChange={handleChange}
                        />
                        <Button
                            variant="contained"
                            component="span"
                            sx={{
                                bgcolor: 'rgba(126, 119, 119, 0.29)',
                                fontFamily: 'semibold',
                                fontSize: 10,
                                color: '#fff',
                                borderRadius: '4px',
                                boxShadow:
                                    '0px 1px 4px 0px rgba(208, 204, 204, 0.25)',
                                '&:hover': {
                                    backgroundColor:
                                        'rgba(126, 119, 119, 0.40)',
                                },
                            }}
                        >
                            Change photo
                        </Button>
                    </label>
                </div>
                <CountDown />
            </div>
            <PrimaryImage src={cover?.preview || weddingCover} />
        </figure>
    )
}

export default Thumbnail
