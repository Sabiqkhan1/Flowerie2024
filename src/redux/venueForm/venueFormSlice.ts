import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SceneDetails, Capacity, CapacityType } from '../../assets/data/types'
import { GalleryImageType } from '../../assets/data/interfaces'

interface VenueFormState {
    scene: SceneDetails
    capacity: CapacityType[]
    location: {
        address: string
        city: string
        coordinates: [number, number]
    }
    amenities: number[]
    images: string[]
    pricing: {
        basePrice: number
        currency: string
    }
    gallery: GalleryImageType[]
    rooms: number
}

const initialState: VenueFormState = {
    scene: {
        name: '',
        description: '',
        other: ''
    },
    capacity: [],
    location: {
        address: '',
        city: '',
        coordinates: [0, 0]
    },
    amenities: [],
    images: [],
    pricing: {
        basePrice: 0,
        currency: 'USD'
    },
    gallery: [],
    rooms: 0
}

const venueFormSlice = createSlice({
    name: 'venueForm',
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<{name: keyof VenueFormState; value: any}>) => {
            const { name, value } = action.payload;
            (state[name] as any) = value;
        },
        resetForm: () => initialState
    }
})

export const { setForm, resetForm } = venueFormSlice.actions
export default venueFormSlice.reducer
