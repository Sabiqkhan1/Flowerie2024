import React from 'react'
import Button from '@mui/material/Button'

const SupplierRadio = () => {
    const [categoryId, setCategoryId] = React.useState<number>(0)

    return (
        <div className="w-max flex border border-gray/50 rounded-md ml-auto">
            <Button
                onClick={() => setCategoryId(0)}
                variant="text"
                sx={{
                    color: 'black',
                    fontFamily: 'medium',
                    textTransform: 'none',
                    py: '8px',
                    px: '24px',
                    borderRadius: '6px 0 0 6px',
                    borderColor: 'rgb(196 196 196 / 0.5)',
                    borderRight: '1px solid #c4c4c4',
                    bgcolor: categoryId === 0 ? '#E6E6E6' : 'transparent',
                    '&:hover': {
                        bgcolor: '#A4A4A3',
                        color: '#fff',
                    },
                }}
            >
                Liked
            </Button>
            <Button
                onClick={() => setCategoryId(1)}
                variant="text"
                sx={{
                    color: 'black',
                    fontFamily: 'medium',
                    textTransform: 'none',
                    borderRadius: '0px 6px 6px 0px',
                    borderColor: 'rgb(196 196 196 / 0.5)',
                    py: '8px',
                    px: '24px',
                    bgcolor: categoryId === 1 ? '#E6E6E6' : 'transparent',
                    '&:hover': {
                        bgcolor: '#A4A4A3',
                        color: '#fff',
                    },
                }}
            >
                Hired
            </Button>
        </div>
    )
}

export default SupplierRadio
