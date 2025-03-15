import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
    loginOpen: boolean
    signupOpen: boolean
    imageOpen: boolean
    offerOpen: boolean
    imageModal: boolean
    offerModal: boolean
    signupModal: boolean
}

const initialState: ModalState = {
    loginOpen: false,
    signupOpen: false,
    imageOpen: false,
    offerOpen: false,
    imageModal: false,
    offerModal: false,
    signupModal: false
}

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.loginOpen = true
        },
        closeLoginModal: (state) => {
            state.loginOpen = false
        },
        openSignupModal: (state) => {
            state.signupOpen = true
        },
        closeSignupModal: (state) => {
            state.signupOpen = false
        },
        toggleImage: (state) => {
            state.imageOpen = !state.imageOpen
        },
        toggleOffer: (state) => {
            state.offerOpen = !state.offerOpen
        },
        toggleLogin: (state) => {
            state.loginOpen = !state.loginOpen
        },
        toggleSignup: (state) => {
            state.signupOpen = !state.signupOpen
        }
    }
})

export const {
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
    toggleImage,
    toggleOffer,
    toggleLogin,
    toggleSignup
} = modalSlice.actions

export default modalSlice.reducer
