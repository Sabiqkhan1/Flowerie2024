import React from 'react';
import { ButtonProps } from '../../assets/data/interfaces';

interface ModalButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

const ModalButton = ({
    children,
    color,
    background,
    onClick,
    className
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${color === 'light' ? 'text-white' : ''} ${
                background === 'dark' ? 'bg-auth-button' : ''
            }`}
        >
            {children}
        </button>
    );
};

export { ModalButton };
