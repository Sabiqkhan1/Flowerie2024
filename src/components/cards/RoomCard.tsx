import { ButtonBase, Grid } from '@mui/material'
import React, { useState } from 'react'
import UploadButton from '../buttons/UploadButton'
import RoomCardTextArea from '../textareas/RoomCardTextArea'

export interface RoomCardProps {
    label: string
}

const RoomCard: React.FC<RoomCardProps> = ({ label }): JSX.Element => {
    const [guestCount, setGuestCount] = useState<number>(1)

    return (
        <Grid item lg={4} md={6} sm={12} xs={12}>
            <div className="w-full">
                <p className="font-regular text-black text-lg">{label}</p>
                <div className="w-full bg-roomCard px-2 py-1 rounded-xl">
                    <h4 className="font-regular text-black">Capacity</h4>
                    <div className="flex items-center">
                        <ButtonBase
                            onClick={() =>
                                setGuestCount((prevCount) => prevCount - 1)
                            }
                            disabled={guestCount < 1}
                        >
                            <div
                                className={`${
                                    guestCount > 0
                                        ? 'bg-[#F2F2F2]'
                                        : 'bg-[#dfdfdf80]'
                                } w-6 h-6 bg-[#F2F2F2] rounded-full flex items-center justify-center font-regular text-2xl text-black shadow-lg`}
                            >
                                -
                            </div>
                        </ButtonBase>
                        <span className="mx-4 font-regular text-sm text-black">
                            {guestCount}
                        </span>
                        <ButtonBase
                            onClick={() =>
                                setGuestCount((prevCount) => prevCount + 1)
                            }
                        >
                            <div className="w-6 h-6 bg-[#F2F2F2] rounded-full flex items-center justify-center font-regular text-2xl text-black shadow-lg">
                                +
                            </div>
                        </ButtonBase>
                    </div>
                    <div className="mt-2">
                        <label className="font-regular text-sm">
                            Summary description
                        </label>
                        <RoomCardTextArea />
                    </div>
                </div>
                <div className="w-full mt-1">
                    <UploadButton />
                </div>
            </div>
        </Grid>
    )
}

export default RoomCard
