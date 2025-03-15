import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SceneDetails, QuantityType } from '../../assets/data/types'
import { GalleryImageType } from '../../assets/data/interfaces'

interface CateringFormState {
    scene: SceneDetails
    quantity: QuantityType
    location: {
        address: string
        city: string
        coordinates: [number, number]
    }
    cuisine: string[]
    images: string[]
    pricing: {
        basePrice: number
        currency: string
    }
    gallery: GalleryImageType[]
}

const initialState: CateringFormState = {
    scene: {
        name: '',
        description: '',
        other: ''
    },
    quantity: {
        min: 0,
        max: 0
    },
    location: {
        address: '',
        city: '',
        coordinates: [0, 0]
    },
    cuisine: [],
    images: [],
    pricing: {
        basePrice: 0,
        currency: 'USD'
    },
    gallery: []
}

const cateringFormSlice = createSlice({
    name: 'cateringForm',
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<{name: keyof CateringFormState; value: any}>) => {
            const { name, value } = action.payload;
            (state[name] as any) = value;
        },
        resetForm: () => initialState
    }
})

export const { setForm, resetForm } = cateringFormSlice.actions
export default cateringFormSlice.reducer
