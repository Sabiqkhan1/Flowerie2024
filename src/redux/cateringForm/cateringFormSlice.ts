import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuantityType, SceneDetails } from '../../assets/data/types'
import { GalleryImageType } from '../../assets/data/interfaces'

export interface CateringFormState {
    quantity: QuantityType
    cuisine: string
    scene: SceneDetails
    gallery: Array<GalleryImageType>
}

const initialState: CateringFormState = {
    quantity: {
        min: 0,
        max: 0,
    },
    cuisine: '',
    scene: {
        name: '',
        description: '',
        other: '',
    },
    gallery: [
        {
            id: 0,
            file: null,
            caption: '',
        },
    ],
}

type keys = keyof CateringFormState

export const cateringFormSlice = createSlice({
    name: 'cateringForm',
    initialState,
    reducers: {
        setForm: (
            state: CateringFormState,
            action: PayloadAction<{ name: keys; value: any }>
        ) => {
            const { name, value } = action.payload
            state[name] = value
        },
    },
})

export const { setForm } = cateringFormSlice.actions

export default cateringFormSlice.reducer
