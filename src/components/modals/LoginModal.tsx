import { Dialog, Grid } from '@mui/material'
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { toggleLogin, redirectSignup } from '../../redux/modals/modalSlice'
import Logo from '../../assets/images/Mesh_Red.png'
import SocialButtons from '../buttons/SocialButtons'
import { loginFields } from '../../assets/data/static/loginFields'
import { LoginFieldsType } from '../../assets/data/types'
import ModalInput from '../inputs/ModalInput'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ModalButton from '../buttons/ModalButton'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import LanguageSelect from '../select/LanguageSelect'

const LoginModal: React.FC = (): JSX.Element => {
    const open = useSelector((state: RootState) => state.modals.loginModal)
    const [visible, setVisible] = useState<Boolean>(false)
    const dispatch = useDispatch()

    const toggleVisibility = (): void => {
        setVisible(!visible)
    }

    return (
        <Dialog
            open={open}
            onClose={() => dispatch(toggleLogin())}
            PaperProps={{
                sx: {
                    width: 1152,
                    maxWidth: 'unset',
                    borderTopRightRadius: 36,
                    borderBottomRightRadius: 36,
                    borderTopLeftRadius: {
                        xs: 36,
                    },
                    borderBottomLeftRadius: {
                        xs: 36,
                    },
                },
            }}
        >
            <div className="h-full w-full">
                <Grid container>
                    <Grid
                        item
                        lg={4}
                        md={4}
                        sm={4}
                        xs={12}
                        className="xs:hidden"
                    >
                        <div className="bg-modalDark h-full flex flex-col">
                            <div className="py-8 px-4">
                                <div className="flex items-center">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="w-11 h-11 sm:w-12 xs:w-8 sm:h-12 xs:h-8"
                                    />
                                    <span className="ml-1 text-2xl text-light-maroon font-semibold">
                                        Flowerie
                                    </span>
                                </div>
                                <p className="text-modalWhite font-roboto-regular text-2xl mt-8 mb-12 sm:text-xl">
                                    Find your hosting and event <br />
                                    requirements, tools here.
                                </p>
                            </div>
                            <div className="bg-modal bg-no-repeat bg-cover flex-grow">
                                <div className="w-full h-full bg-black/30" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <div className="h-full w-full bg-modalDark">
                            <div className="w-full max-h-modalHeight overflow-auto no-scroll bg-dimWhite rounded-[36px] ">
                                <div className="px-10">
                                    <LanguageSelect />
                                </div>
                                <div className="mx-24 sm:mx-12 xs:mx-4">
                                    <h1 className="font-roboto-regular text-3xl text-black sm:text-2xl">
                                        Create Account
                                    </h1>
                                    <div className="flex justify-between py-6 flex-wrap items-center md:flex-col">
                                        <div className="xs:w-full">
                                            <SocialButtons type="google">
                                                Sign up with Google
                                            </SocialButtons>
                                        </div>
                                        <div className="md:mt-2 xs:w-full">
                                            <SocialButtons type="facebook">
                                                Sign up with Facebook
                                            </SocialButtons>
                                        </div>
                                    </div>
                                    <div className="text-center font-roboto-regular text-[#B8BCBC] text-xl">{`- OR -`}</div>
                                    {loginFields.map(
                                        (
                                            field: LoginFieldsType,
                                            index: React.Key
                                        ) => (
                                            <ModalInput
                                                name={field.name}
                                                placeholder={field.label}
                                                key={index}
                                                password={visible}
                                            />
                                        )
                                    )}
                                    <div className="text-right">
                                        <span
                                            onClick={toggleVisibility}
                                            className="cursor-pointer"
                                        >
                                            {visible ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </span>
                                    </div>
                                    <div className="mt-10">
                                        <ModalButton
                                            color="light"
                                            background="dark"
                                        >
                                            Create Account
                                        </ModalButton>
                                    </div>
                                    <div className="mt-8 mb-4 xs:mt-4 xs:mb-2 font-roboto-regular text-[#BFC6C7] underline underline-offset-1 decoration-[#7EBABD]">
                                        Already have an account?{' '}
                                        <span
                                            className="cursor-pointer"
                                            onClick={() =>
                                                dispatch(redirectSignup())
                                            }
                                        >
                                            Log in
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Dialog>
    )
}

export default LoginModal
