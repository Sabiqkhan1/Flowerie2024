import { Dialog, Grid } from '@mui/material'
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { openLoginModal, closeLoginModal, openSignupModal } from '../../redux/modals/modalSlice'
import Logo from '../../assets/images/Mesh_Red.png'
import SocialButtons from '../buttons/SocialButtons'
import { loginFields } from '../../assets/data/static/loginFields'
import { LoginFieldsType } from '../../assets/data/types'
import ModalInput from '../inputs/ModalInput'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { ModalButton } from '../buttons/ModalButton'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import LanguageSelect from '../select/LanguageSelect'
import API from '../../services/api.service'

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
    isOpen,
    onClose,
    onSuccess
}) => {
    const open = useSelector((state: RootState) => state.modals.loginOpen)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const toggleVisibility = (): void => {
        setVisible(!visible)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await API.post('/auth/login', {
                email: email,
                password: password
            });
            
            // Save token
            localStorage.setItem('token', response.data.token);
            
            // Close modal and update state
            onSuccess();
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <Dialog
            open={open}
            onClose={() => dispatch(closeLoginModal())}
            maxWidth="md"
            fullWidth
            classes={{
                paper: 'rounded-2xl overflow-hidden'
            }}
        >
            <Grid container>
                <Grid item lg={4} md={4} sm={4} xs={12} className="xs:hidden">
                    <div className="bg-auth-bg h-full flex flex-col">
                        <div className="py-8 px-6">
                            <div className="flex items-center">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-10 h-10"
                                />
                                <span className="ml-3 text-xl text-auth-text font-medium">
                                    Flowerie
                                </span>
                            </div>
                            <p className="text-auth-text font-medium text-2xl mt-8 mb-6">
                                Welcome back to your creative journey
                            </p>
                        </div>
                        <div className="bg-auth-bg flex-grow">
                            <div className="w-full h-full bg-black/30" />
                        </div>
                    </div>
                </Grid>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                    <div className="p-8 bg-white">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-3xl font-medium text-auth-text mb-8">
                                Sign in to Flowerie
                            </h1>
                            
                            <div className="space-y-4 mb-8">
                                <SocialButtons 
                                    provider="google"
                                    className="w-full rounded-lg border border-auth-border hover:bg-auth-bg transition-colors duration-200"
                                >
                                    Continue with Google
                                </SocialButtons>
                                <SocialButtons 
                                    provider="facebook"
                                    className="w-full rounded-lg border border-auth-border hover:bg-auth-bg transition-colors duration-200"
                                >
                                    Continue with Facebook
                                </SocialButtons>
                            </div>

                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-auth-border"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-4 bg-white text-sm text-gray-500">
                                        or continue with email
                                    </span>
                                </div>
                            </div>

                            {loginFields.map((field: LoginFieldsType, index: React.Key) => (
                                <ModalInput
                                    key={index}
                                    name={field.name}
                                    placeholder={field.label}
                                    className="w-full mb-4 rounded-lg border border-auth-border px-4 py-3 focus:border-auth-button focus:ring-1 focus:ring-auth-button transition-colors duration-200"
                                    password={field.name === 'password' ? visible : false}
                                />
                            ))}

                            <ModalButton
                                className="w-full bg-auth-button hover:bg-auth-button-hover text-white rounded-lg py-3 mt-6 transition-colors duration-200"
                            >
                                Sign In
                            </ModalButton>

                            <p className="mt-6 text-center text-sm text-gray-600">
                                Don't have an account?{' '}
                                <span
                                    className="text-auth-button hover:underline cursor-pointer"
                                    onClick={() => {
                                        dispatch(closeLoginModal());
                                        dispatch(openSignupModal());
                                    }}
                                >
                                    Create one now
                                </span>
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default LoginModal
