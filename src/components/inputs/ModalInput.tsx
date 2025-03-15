import React from 'react'
import { ModalInputProps } from '../../assets/data/interfaces'

const ModalInput = ({
    name,
    placeholder,
    password = false,
    className,
    onChange,
    value
}: ModalInputProps): JSX.Element => {
    return (
        <input
            type={password ? "password" : "text"}
            name={name}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            value={value}
        />
    );
};

export default ModalInput;
