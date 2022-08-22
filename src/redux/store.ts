import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modals/modalSlice'
import venueFormReducer from './venueForm/venueFormSlice'
import cateringFormReducer from './cateringForm/cateringFormSlice'
import decorFormReducer from './decorForm/decorFormSlice'
export const store = configureStore({
    reducer: {
        modals: modalReducer,
        venueForm: venueFormReducer,
        cateringForm: cateringFormReducer,
        decorForm: decorFormReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
