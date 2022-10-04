import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import Divider from '@mui/material/Divider'
import FlatButton from '../buttons/FlatButton'
const Offer: React.FC = (): JSX.Element => {
    return (
        <div>
            <div className="flex items-center">
                <MdWavingHand className="rotate-[270deg] text-[#FBD527] text-2xl" />
                <span className="text-[#FFA14E] font-bold text-lg ml-3">
                    Hey Anddy!
                </span>
            </div>
            <div className="w-full rounded-xl bg-notificationBackground p-4 my-4">
                <h3 className="font-roboto-regular text-xl uppercase">
                    New offer
                </h3>
                <Divider
                    sx={{
                        borderColor: 'black',
                        mt: 1,
                    }}
                />
                <p className="font-roboto-regular my-2 xs:text-center">{`{{Name of listing}}`}</p>
                <p className="font-roboto-regular my-2 xs:text-center">{`{{Price offered}}`}</p>
                <p className="font-roboto-regular my-2 xs:text-center">{`{{Message from customer}}`}</p>
                <div className="mt-12 flex   justify-around md:justify-between gap-1 xs:flex-col xs:items-center">
                    <FlatButton background="green">Accept offer</FlatButton>
                    <FlatButton background="maroon" sx={{}}>
                        Send counter offer
                    </FlatButton>
                    <FlatButton background="maroon">Decline</FlatButton>
                </div>
            </div>
        </div>
    )
}

export default Offer
