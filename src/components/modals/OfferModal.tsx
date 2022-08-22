import { Avatar, ButtonBase, Dialog, Divider } from '@mui/material'
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { toggleOffer } from '../../redux/modals/modalSlice'
import Logo from '../../assets/images/Mesh_Red.png'
import avatar from '../../assets/images/avatar.png'

// eslint-disable-next-line
import { Link } from 'react-router-dom'

const OfferModal: React.FC = (): JSX.Element => {
    const open = useSelector((state: RootState) => state.modals.offerModal)
    const dispatch = useDispatch()
    return (
        <Dialog
            open={open}
            onClose={() => dispatch(toggleOffer())}
            PaperProps={{
                sx: {
                    width: 1209,
                    maxWidth: 'unset',
                    borderRadius: '20px',
                },
            }}
        >
            <div className="h-full w-full bg-white p-7 sm:p-6 xs:p-4">
                <div className="flex items-center">
                    <div className="flex items-center xs:hidden">
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-11 h-11 sm:w-12 xs:w-8 sm:h-12 xs:h-8"
                        />
                        <span className="ml-1 text-2xl text-light-maroon font-semibold">
                            Flowerie
                        </span>
                    </div>
                    <div className="flex-grow text-center">
                        <span className="font-semibold text-2xl text-light-maroon">
                            Make an offer
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="mr-2">
                        <h2 className="font-semibold text-2xl xs:text-lg text-black">
                            Entire Hall hosted by James
                        </h2>
                        <p className="font-light text-lg xs:text-sm text-black mt-1">
                            350 Guests | 4 Rooms | Kitchen | Free Parking | Wifi
                        </p>
                    </div>
                    <Avatar
                        src={avatar}
                        sx={{
                            width: {
                                lg: 85,
                                md: 75,
                                sm: 65,
                                xs: 55,
                            },
                            height: {
                                lg: 85,
                                md: 75,
                                sm: 65,
                                xs: 55,
                            },
                        }}
                    />
                </div>
                <Divider color="#000" style={{ margin: '10px 0' }} />
                <div className="w-full pl-8 sm:pl-4 xs:pl-0">
                    <div>
                        <p className="font-regular text-2xl sm:text-xl xs:text-sm text-black">
                            Price you want to offer
                        </p>
                        <input className="border border-[rgba(0,0,0, 0.6)] rounded-[4px] min-w-[400px] xs:min-w-full p-3 font-roboto-regular mt-2 focus-visible:outline-none " />
                    </div>

                    <div className="mt-4">
                        <p className="font-regular text-2xl sm:text-xl xs:text-sm text-black">
                            Say hello to James and give a reason for your offer
                        </p>
                        <textarea className="resize-none no-scroll h-[109px] border border-[rgba(0,0,0, 0.6)] rounded-[4px] w-full p-3 font-roboto-regular mt-2 focus-visible:outline-none " />
                    </div>
                </div>
                <div className="text-right mt-2">
                    <ButtonBase sx={{ width: { sm: 'unset', xs: '100%' } }}>
                        <button
                            onClick={() => dispatch(toggleOffer())}
                            className="px-14 py-3 xs:w-full text-center bg-light-maroon font-regular text-2xl xs:text-xl text-white rounded-20 shadow-lg"
                        >
                            Send
                        </button>
                    </ButtonBase>
                </div>
            </div>
        </Dialog>
    )
}

export default OfferModal
