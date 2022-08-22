import React from 'react'
import { styled, Button } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
const Input = styled('input')({
    display: 'none',
})

const UploadButton: React.FC = (): JSX.Element => {
    return (
        <label htmlFor="room-image-upload">
            <Input
                accept="image/*"
                id="room-image-upload"
                multiple
                type="file"
            />
            <Button
                variant="contained"
                component="span"
                startIcon={<AddPhotoAlternateIcon />}
                sx={{
                    textTransform: 'none',
                    fontFamily: 'semibold',
                    backgroundColor: '#DF7E7E',
                    padding: 0,
                    width: '100%',
                    '&:hover': {
                        backgroundColor: '#DF7E7E',
                    },
                }}
            >
                Upload Images
            </Button>
        </label>
    )
}

export default UploadButton
