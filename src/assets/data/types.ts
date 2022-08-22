import { GalleryImageType } from './interfaces'

export type CityType = {
    city: string
    distance: string
    img: string
}

export type VenueType = {
    venue: string
    img: string
}

export type NavLinksType = {
    label: string
    href: string
}

export type LoginFieldsType = {
    label: string
    name: string
}

export type FilterTagType = {
    id: number
    label: string
    value: string
}

export type SceneDetails = {
    name: string
    description: string
    other: string
}

export type Capacity = {
    id: number
    name: string
    rooms: number
}
export type QuantityType = {
    min: number
    max: number
}
export type GalleryKeyType = keyof GalleryImageType
export type QuantityTypeKey = keyof QuantityType
