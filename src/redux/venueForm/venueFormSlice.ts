import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Capacity, SceneDetails } from '../../assets/data/types'
import { GalleryImageType } from '../../assets/data/interfaces'

export interface VenueFormState {
    rooms: number
    capacities: Capacity[]
    amenities: number[]
    scene: SceneDetails
    gallery: Array<GalleryImageType>
}

const initialState: VenueFormState = {
    rooms: 0,
    capacities: [],
    amenities: [],
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

type keys = keyof VenueFormState

export const venueFormSlice = createSlice({
    name: 'venueForm',
    initialState,
    reducers: {
        setForm: (
            state: VenueFormState,
            action: PayloadAction<{ name: keys; value: any }>
        ) => {
            const { name, value } = action.payload
            state[name] = value
        },
    },
})

export const { setForm } = venueFormSlice.actions

export default venueFormSlice.reducer
