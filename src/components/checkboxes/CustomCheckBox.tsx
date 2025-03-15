import React from 'react'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const BpIcon = styled('span')({
    borderRadius: 3,
    width: 24,
    height: 24,
    backgroundColor: 'rgba(223, 223, 223, 0.67)',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    border: '1px solid #c4c4c4',
})
const CustomCheckBox: React.FunctionComponent<CheckboxProps> = ({
    ...props
}) => {
    return (
        <Checkbox
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            icon={<BpIcon />}
            checkedIcon={
                <CheckCircleIcon
                    sx={{
                        color: '#2E2E48',
                    }}
                />
            }
            {...props}
        />
    )
}

export default CustomCheckBox
