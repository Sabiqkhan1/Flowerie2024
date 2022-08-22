import React from 'react'
import { SocialButtonProps } from '../../assets/data/interfaces'
import GoogleIcon from '../../assets/images/google.png'
import FacebookIcon from '../../assets/images/facebook.png'

const SocialButtons: React.FC<SocialButtonProps> = ({ children, type }) => {
    return (
        <button className="w-[262px] xs:w-full h-[53px]  border border-socialBorder rounded-lg  font-roboto-regular text-socialText text-lg  flex items-center justify-center hover:bg-slate/20 transition-colors duration-300">
            {type === 'google' ? (
                <span className="w-10 h-auto">
                    <img
                        src={GoogleIcon}
                        alt="google"
                        className="w-full h-full"
                    />
                </span>
            ) : (
                <span className="w-14 h-auto">
                    <img
                        src={FacebookIcon}
                        alt="facebook"
                        className="w-full h-full"
                    />
                </span>
            )}
            {children}
        </button>
    )
}

export default SocialButtons
