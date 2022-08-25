import React, { useState } from 'react'
import WeddingCover from '../../assets/images/wedding-post.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import PrimaryImage from '../common/Img'
import AddIcon from '@mui/icons-material/Add'
import Divider from '@mui/material/Divider'
const OrderCollapse = () => {
    const [expand, setExpand] = useState<boolean>(false)

    const handleChange = () => {
        setExpand((prev) => !prev)
    }
    return (
        <Collapse
            in={expand}
            timeout={1000}
            collapsedSize={160}
            easing="linear"
            sx={{
                position: 'relative',
                boxShadow: '0px 2px 5px 0px #cdcdcd',
                borderRadius: '12px',
                my: 2,
            }}
        >
            <div className="absolute bottom-0 left-1/2">
                <IconButton size="small" onClick={handleChange}>
                    <KeyboardArrowDownIcon
                        sx={{
                            transition: 'transform 0.5s ease 0.3s',
                            transform: expand
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                        }}
                    />
                </IconButton>
            </div>
            <div className="flex rounded-xl">
                <section
                    className={`${
                        expand ? 'px-4' : 'p-0'
                    } transition-all duration-500`}
                >
                    <figure
                        className={`w-56 h-40 ${
                            expand ? 'my-4' : 'my-0'
                        } rounded-xl  overflow-hidden transition-all duration-500`}
                    >
                        <PrimaryImage src={WeddingCover} />
                    </figure>
                    <figure
                        className={`w-56 h-40 ${
                            expand ? 'my-4' : 'my-0'
                        } rounded-xl  overflow-hidden transition-all duration-500`}
                    >
                        <PrimaryImage src={WeddingCover} />
                    </figure>
                    <button
                        className={`w-56 h-40 ${
                            expand ? 'my-4' : 'my-0'
                        } rounded-xl  overflow-hidden bg-[#E8E5E5] flex flex-col items-center justify-center hover:bg-[#cecbcb] transition-all duration-500`}
                    >
                        <p className="font-medium text-lg text-[#8A8383]">
                            Add Image
                        </p>
                        <AddIcon sx={{ fontSize: 48 }} />
                    </button>
                </section>
                <section className="flex-grow flex flex-col px-4 pb-4">
                    <div className="flex-grow">
                        <div className="my-2">
                            <p className="font-medium text-lg text-[#786F6F]">
                                Dorset Wedding Venue
                            </p>
                        </div>
                        {expand && (
                            <div className=" my-2">
                                <p className="font-light text-lg text-[#1C1C1C]">
                                    {`{{ Description }}`}
                                </p>
                            </div>
                        )}
                        {!expand && (
                            <div className=" my-2">
                                <p className="font-light text-lg text-[#1C1C1C]">
                                    {`{{ Date }}`}
                                </p>
                            </div>
                        )}
                        {!expand && (
                            <div className=" my-2">
                                <p className="font-light text-lg text-[#1C1C1C]">
                                    {`{{ Customer Name }}`}
                                </p>
                            </div>
                        )}
                        {expand && (
                            <div className="my-2">
                                <p className="font-light text-lg text-[#42B06E]">
                                    {`{{ Price }}`}
                                </p>
                            </div>
                        )}
                        {expand && (
                            <div className=" my-2">
                                <p className="font-light text-lg text-[#1C1C1C]">
                                    {`{{ Amenities }}`}
                                </p>
                            </div>
                        )}
                        {!expand && (
                            <div className="flex justify-between items-center my-2">
                                <p className="font-light text-lg text-[#1C1C1C]">
                                    {`{{ Deposit Paid: `}{' '}
                                    <span className="text-[#42B06E]">Yes</span>{' '}
                                    {`}}`}
                                </p>
                                <p className="font-medium text-lg text-[#42B06E]">
                                    {`{{ Price }}`}
                                </p>
                            </div>
                        )}
                        <Divider sx={{ my: 4, borderColor: 'black' }} />

                        <div className=" my-2">
                            <p className="font-light text-lg text-[#1C1C1C]">
                                {`{{ Date }}`}
                            </p>
                        </div>
                        <div className=" my-2">
                            <p className="font-light text-lg text-[#1C1C1C]">
                                {`{{ Customer Name }}`}
                            </p>
                        </div>
                        <div className=" my-2">
                            <p className="font-light text-lg text-[#1C1C1C]">
                                {`{{ Customer Phone }}`}
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="font-light text-lg text-[#1C1C1C]">
                                {`{{ Deposit Paid: `}{' '}
                                <span className="text-[#42B06E]">Yes</span>{' '}
                                {`}}`}
                            </p>
                        </div>
                        <div className="my-2">
                            <p className="font-light text-lg text-[#1C1C1C]">
                                {`{{ Full Amount: `}{' '}
                                <span className="text-[#B04242]">No</span>{' '}
                                {`}}`}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-2">
                        <p className="font-medium text-lg text-[#1C1C1C]">
                            {`{{ Order ID }}`}
                        </p>

                        <button className="bg-[#E86B6B] font-bold text-sm text-white px-6 py-3 border border-black shadow-md rounded-md">
                            Cancel Order
                        </button>
                    </div>
                </section>
            </div>
        </Collapse>
    )
}

export default OrderCollapse
