import React from 'react'
import GoogleIcon from '../../assets/images/google.png'
import FacebookIcon from '../../assets/images/facebook.png'

interface SocialButtonProps {
    provider: 'google' | 'facebook' | 'apple';
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

const SocialButtons = ({
    provider,
    onClick,
    className,
    children
}: SocialButtonProps) => {
    const icon = provider === 'google' ? GoogleIcon : FacebookIcon;
    
    return (
        <button
            onClick={onClick}
            className={className}
        >
            <img src={icon} alt={`${provider} icon`} className="w-5 h-5 mr-2" />
            {children}
        </button>
    );
};

export default SocialButtons;
