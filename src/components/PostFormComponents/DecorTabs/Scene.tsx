import React, { useState } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Template from '../Template'
import cover from '../../../assets/images/scene-cover.webp'
import type { SceneDetails } from '../../../assets/data/types'
import { RootState } from '../../../redux/store'
import { setForm } from '../../../redux/decorForm/decorFormSlice'
const Scene: React.FC<TabProps> = ({ nextStep, prevStep }): JSX.Element => {
    const scene_from_redux = useSelector(
        (state: RootState) => state.cateringForm.scene
    )
    const [sceneDetails, setSceneDetails] =
        useState<SceneDetails>(scene_from_redux)
    const dispatch = useDispatch()
    const next = (): void => {
        dispatch(setForm({ name: 'scene', value: sceneDetails }))
        nextStep()
    }

    const back = (): void => {
        prevStep()
    }

    const handleSceneDetails = (e: any) => {
        const newSceneDetails = JSON.parse(JSON.stringify(sceneDetails))
        newSceneDetails[e.target.name] = e.target.value
        setSceneDetails(newSceneDetails)
    }
    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="Let’s set the scene!"
        >
            <div className="w-full h-[calc(100vh-190px)] overflow-auto thin-scroll">
                <div className="w-full px-4 h-full flex flex-col">
                    <div>
                        <label className="font-regular mb-1">
                            Firstly let’s name your service
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleSceneDetails}
                            value={sceneDetails.name}
                            className="bg-[#FBFBFB] w-full px-4 py-2 border border-[rgba(0,0,0,0.6)] rounded-md focus-visible:outline-none font-regular text-sm"
                        />
                    </div>
                    <div className="my-4 flex-grow flex flex-col">
                        <label className="font-regular mb-1">
                            Describe your service
                        </label>
                        <p className="font-regular text-[#797979]">
                            Provide more information about what makes your space
                            unique.
                        </p>
                        <div className="flex-grow">
                            <textarea
                                name="description"
                                onChange={handleSceneDetails}
                                value={sceneDetails.description}
                                className="bg-[#FBFBFB] h-full flex-grow w-full px-4 py-2 border border-[rgba(0,0,0,0.6)] rounded-md focus-visible:outline-none font-regular text-sm resize-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="font-regular mb-1">
                            Other things to note
                        </label>
                        <p className="font-regular text-[#797979]">
                            Mention other details that guests should know that
                            may be relevant.
                        </p>
                        <textarea
                            name="other"
                            onChange={handleSceneDetails}
                            value={sceneDetails.other}
                            className="bg-[#FBFBFB] min-h-[100px] w-full px-4 py-2 border border-[rgba(0,0,0,0.6)] rounded-md focus-visible:outline-none font-regular text-sm resize-none"
                        />
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Scene
