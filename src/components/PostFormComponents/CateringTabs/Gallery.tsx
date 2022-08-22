/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/gallery-cover.webp'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import { useDropzone } from 'react-dropzone'
import { styled } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ImageDropDown from '../../popovers/ImageDropDown'
import ImageModal from '../../modals/ImageModal'
import { toggleImage } from '../../../redux/modals/modalSlice'
import { GalleryImageType } from '../../../assets/data/interfaces'
import { RootState } from '../../../redux/store'
import { setForm } from '../../../redux/cateringForm/cateringFormSlice'
import AnnouncementIcon from '@mui/icons-material/Announcement'

const Img = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '24px',
})
const Gallery: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const files_from_redux = useSelector(
        (state: RootState) => state.venueForm.gallery
    )
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
    const [files, setFiles] = useState<Array<GalleryImageType>>([
        {
            id: 0,
            file: null,
            caption: '',
        },
    ])
    const [counter, setCounter] = useState<number>(0)
    const [file, setFile] = useState<GalleryImageType>({
        id: 0,
        file: null,
        caption: '',
    })
    const dispatch = useDispatch()

    const next = (): void => {
        dispatch(setForm({ name: 'gallery', value: files }))
        nextStep()
    }

    const back = (): void => {
        prevStep()
    }

    // DROP IMAGES
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            image: ['.jpg', '.png', '.jpeg'],
        },
        maxFiles: 1,
        onDrop: (acceptedFiles: any) => {
            acceptedFiles.forEach((file: File) => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            })

            let newFiles: Array<GalleryImageType> = [...files]
            let id: number = files.length
            newFiles[counter]['file'] = acceptedFiles[0]
            if (newFiles.length <= 1) {
                for (let i = id; i <= 4; i++) {
                    newFiles.push({
                        id: i,
                        file: null,
                        caption: '',
                    })
                }
            } else if (counter === id - 1) {
                newFiles.push({
                    id: id + 1,
                    file: null,
                    caption: '',
                })
            }
            setFiles(newFiles)
            setCounter((prevCount: number) => prevCount + 1)
        },
        noClick: true,
        noKeyboard: true,
    })

    const handleDropDownOpen = (
        event: React.MouseEvent<HTMLButtonElement | null>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleDropDownClose = () => {
        setAnchorEl(null)
    }

    const handleAddCaption = (file: GalleryImageType): void => {
        setFile(file)
        dispatch(toggleImage())
        handleDropDownClose()
    }

    const handleSaveCaption = (value: string, id: number): void => {
        let newFiles: Array<GalleryImageType> = [...files]
        newFiles.find((file) => file.id === id)!.caption = value
        setFiles(newFiles)
        dispatch(toggleImage())
    }

    const handleDelete = (id: number): void => {
        let newFiles: Array<GalleryImageType> = [...files]
        newFiles = newFiles.filter((file: GalleryImageType) => file.id !== id)
        setFiles(newFiles)
    }
    const dropDownOpen = Boolean(anchorEl)
    const id = dropDownOpen ? 'nav-dropdown' : undefined
    console.log('Images ==>', files)
    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="Let’s add some photos of your place"
        >
            <ImageModal image={file!} handleSaveCaption={handleSaveCaption} />
            <div className="w-full h-[calc(100vh-190px)] overflow-auto thin-scroll">
                <div className="w-full h-full flex items-center justify-center px-4 flex-col">
                    {files.length < 2 ? (
                        <>
                            <div className="text-right py-4">
                                <AnnouncementIcon
                                    sx={{ fontSize: 16, color: '#F9D978' }}
                                />
                                <p className="font-semibold text-xs text-[#666565]">
                                    Please dont forget to upload an electronic
                                    version of your menu
                                </p>
                            </div>
                            <div
                                {...getRootProps()}
                                className="w-4/5 h-4/5 rounded-2xl border border-black border-dashed flex flex-col justify-between items-center py-8"
                            >
                                <div className="flex flex-col items-center">
                                    <PhotoOutlinedIcon
                                        sx={{ fontSize: 96, color: '#434343' }}
                                    />
                                    <p className="font-medium text-lg">
                                        Drag your photos here
                                    </p>
                                    <p className="font-light text-lg">
                                        Add atleast 5 photos
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    id="image-upload"
                                    hidden
                                    {...getInputProps()}
                                />
                                <label
                                    htmlFor="image-upload"
                                    className="font-semibold text-lg underline underline-offset-1 cursor-pointer"
                                >
                                    Upload from your device
                                </label>
                            </div>
                        </>
                    ) : (
                        <div className="w-4/5 h-full flex flex-wrap">
                            {files.map(
                                (file: GalleryImageType, index: React.Key) => {
                                    if (index === 0) {
                                        return (
                                            <div
                                                className="w-full aspect-[545/245] relative"
                                                key={index}
                                            >
                                                <div className="absolute top-0 w-full flex items-center justify-between p-4">
                                                    <p className="text-black font-semibold px-4 py-2 bg-white rounded-lg">
                                                        Cover photo
                                                    </p>
                                                    <button
                                                        aria-describedby={id}
                                                        onClick={
                                                            handleDropDownOpen
                                                        }
                                                        className="w-6 h-6 rounded-full bg-[#F0EDED] flex items-center justify-center"
                                                    >
                                                        <MoreHorizIcon
                                                            sx={{
                                                                fontSize: 18,
                                                            }}
                                                        />
                                                    </button>
                                                    <ImageDropDown
                                                        id={id}
                                                        open={dropDownOpen}
                                                        anchorEl={anchorEl}
                                                        handleClose={
                                                            handleDropDownClose
                                                        }
                                                        handleAddCaption={
                                                            handleAddCaption
                                                        }
                                                        handleDelete={() =>
                                                            handleDelete(
                                                                file.id
                                                            )
                                                        }
                                                        image={file}
                                                    />
                                                </div>
                                                <Img
                                                    src={file.file?.preview}
                                                    alt={file.file?.path}
                                                />
                                            </div>
                                        )
                                    } else {
                                        return !file.file ? (
                                            <div
                                                key={index}
                                                className="w-1/2 aspect-[4/3] p-2"
                                            >
                                                <div
                                                    {...getRootProps()}
                                                    className="w-full h-full border-[0.5px] border-dashed border-black rounded-2xl flex flex-col items-center justify-center"
                                                >
                                                    <PhotoOutlinedIcon
                                                        sx={{
                                                            fontSize: 48,
                                                            color: '#434343',
                                                        }}
                                                    />
                                                    <input
                                                        type="file"
                                                        id="image-upload"
                                                        hidden
                                                        {...getInputProps()}
                                                    />
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="font-semibold text-xs underline underline-offset-1 cursor-pointer"
                                                    >
                                                        Add image
                                                    </label>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                key={index}
                                                className="w-1/2 aspect-[4/3] p-2"
                                            >
                                                <div className="w-full h-full">
                                                    <Img
                                                        src={file.file?.preview}
                                                        alt={file.file?.path}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Template>
    )
}

export default Gallery
