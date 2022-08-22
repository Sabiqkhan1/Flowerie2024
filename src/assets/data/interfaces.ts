export interface NavLinksProps {
    href: string
    label: string
}

export interface SocialButtonProps {
    children: React.ReactNode
    type: string
}

export interface ModalInputProps {
    placeholder: string
    name: string
    password: Boolean
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
    nextStep(): void
    prevStep(): void
}

export interface FileType extends File {
    preview: string
    path: string
}
export interface GalleryImageType {
    id: number
    file: FileType | null
    caption: string
}

export interface NavbarProps {
    placeholder: string
}
