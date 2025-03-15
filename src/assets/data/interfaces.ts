import { ReactNode } from 'react';

export interface NavLinksProps {
    href: string
    label: string
}

export interface SocialButtonProps {
    provider: 'google' | 'facebook'
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export interface ModalInputProps {
    name: string
    placeholder: string
    password?: boolean
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export interface SearchTagObject {
    name: string
    location: string
    description: string
    attributes: string
    price: string
    img: string[]
}

export interface SearchTagProps {
    tag: SearchTagObject
}

export interface TabProps {
    nextStep: () => void;
    prevStep: () => void;
}

export interface FileType extends File {
    preview: string
    path: string
}
export interface GalleryImageType {
    id: number;
    file: {
        preview?: string;
        path?: string;
    } | null;
    caption: string;
}

export interface FilterOptions {
    category?: string;
    priceRange?: [number, number];
    location?: string;
    amenities?: string[];
    capacity?: number;
}

export interface NavbarProps {
    placeholder: string;
    onSearch: (query: string) => void;
    onFilter: (filters: FilterOptions) => void;
}

export interface ButtonProps {
    children: React.ReactNode
    color?: 'light' | 'dark'
    background?: 'light' | 'dark'
    onClick?: () => void
    className?: string
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImage?: string;
}

export interface Event {
    id: string;
    title: string;
    date: Date;
    location: Location;
    budget: number;
    vendors: Vendor[];
}

export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface Review {
    id: string;
    rating: number;
    comment: string;
    userId: string;
}

export interface Vendor {
    id: string;
    name: string;
    services: Service[];
    rating: number;
    reviews: Review[];
}

export interface SceneDetails {
    id?: string;
    name?: string;
    description?: string;
    capacity?: number;
    amenities?: string[];
    images?: string[];
}

export interface CapacityType {
    id: string;
    type: string;
    capacity: number;
    price: number;
}
