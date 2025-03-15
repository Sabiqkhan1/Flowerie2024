import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import modalReducer from './modals/modalSlice'
import venueFormReducer from './venueForm/venueFormSlice'
import cateringFormReducer from './cateringForm/cateringFormSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        modals: modalReducer,
        venueForm: venueFormReducer,
        cateringForm: cateringFormReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
