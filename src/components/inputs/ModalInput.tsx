import { TextField } from '@mui/material'
import React from 'react'
import { ModalInputProps } from '../../assets/data/interfaces'
const ModalInput: React.FC<ModalInputProps> = ({
    name,
    placeholder,
    password,
}): JSX.Element => {
    return (
        <TextField
            type={!password ? 'password' : 'text'}
            id={`login-${name}`}
            InputProps={{
                placeholder: placeholder,
                style: {
                    fontSize: 18,
                    fontFamily: 'roboto-regular',
                },
            }}
            variant="standard"
            name={name}
            fullWidth
            sx={{ marginTop: 2 }}
        />
    )
}

export default ModalInput
