import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SceneDetails } from '../../assets/data/types'
import { GalleryImageType } from '../../assets/data/interfaces'

export interface DecorFormState {
    scene: SceneDetails
    amenities: number[]
    gallery: Array<GalleryImageType>
}

const initialState: DecorFormState = {
    scene: {
        name: '',
        description: '',
        other: '',
    },
    amenities: [],
    gallery: [
        {
            id: 0,
            file: null,
            caption: '',
        },
    ],
}

type keys = keyof DecorFormState

export const decorFormSlice = createSlice({
    name: 'decorForm',
    initialState,
    reducers: {
        setForm: (
            state: DecorFormState,
            action: PayloadAction<{ name: keys; value: any }>
        ) => {
            const { name, value } = action.payload
            state[name] = value
        },
    },
})

export const { setForm } = decorFormSlice.actions

export default decorFormSlice.reducer
