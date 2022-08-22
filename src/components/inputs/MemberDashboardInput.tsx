import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
const MemberDashboardInput: React.FunctionComponent<TextFieldProps> = (
    props
): JSX.Element => {
    return (
        <TextField
            aria-labelledby="member-info"
            variant="standard"
            fullWidth
            {...props}
            InputLabelProps={{
                sx: {
                    fontFamily: 'semibold',
                    textTransform: 'uppercase',
                    color: '#2E2E4860',
                    fontSize: 16,
                    '&.Mui-focused': {
                        color: '#2E2E48',
                    },
                },
            }}
            InputProps={{
                ...props.InputProps,
                sx: {
                    fontFamily: 'regular',
                    fontSize: 18,
                },
            }}
            sx={{
                borderBottom: '0.8px solid #c4c4c4',
                '& .MuiInput-underline:after': {
                    borderBottomColor: '#DF7E7E',
                },
            }}
        />
    )
}

export default MemberDashboardInput
