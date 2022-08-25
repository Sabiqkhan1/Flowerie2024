import React, { useState } from 'react'
import WeddingCover from '../../assets/images/wedding-post.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import PrimaryImage from '../common/Img'
import AddIcon from '@mui/icons-material/Add'
const PostCollapse = () => {
    const [expand, setExpand] = useState<boolean>(false)

    const handleChange = () => {
        setExpand((prev) => !prev)
    }
    return (
        <Collapse
            in={expand}
            timeout={1000}
            collapsedSize={160}
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
                        <div className="flex justify-between items-center my-2">
                            <p className="font-medium text-lg text-[#786F6F]">
                                Dorset Wedding Venue
                            </p>
                            {expand && (
                                <button className="bg-gray font-medium text-sm text-black px-6 py-1 border shadow-md rounded-xl">
                                    Edit
                                </button>
                            )}
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <p className="font-medium text-lg text-[#1C1C1C]">
                                {`{{ Description }}`}
                            </p>
                            {expand && (
                                <button className="bg-gray font-medium text-sm text-black px-6 py-1 border shadow-md rounded-xl">
                                    Edit
                                </button>
                            )}
                        </div>
                        {expand && (
                            <div className="flex justify-between items-center my-2">
                                <p className="font-medium text-lg text-[#42B06E]">
                                    {`{{ Price }}`}
                                </p>
                                {expand && (
                                    <button className="bg-gray font-medium text-sm text-black px-6 py-1 border shadow-md rounded-xl">
                                        Edit
                                    </button>
                                )}
                            </div>
                        )}
                        {expand && (
                            <div className="flex justify-between items-center my-2">
                                <p className="font-medium text-lg text-[#1C1C1C]">
                                    {`{{ Amenities }}`}
                                </p>
                                {expand && (
                                    <button className="bg-gray font-medium text-sm text-black px-6 py-1 border shadow-md rounded-xl">
                                        Edit
                                    </button>
                                )}
                            </div>
                        )}
                        {!expand && (
                            <div className="my-2">
                                <p className="font-medium text-lg text-[#1C1C1C]">
                                    {`{{ Post ID }}`}
                                </p>
                            </div>
                        )}
                        {!expand && (
                            <div className="my-2">
                                <p className="font-medium text-lg text-[#42B06E] text-right">
                                    {`{{ Price }}`}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-center my-2">
                        <p className="font-medium text-lg text-[#1C1C1C]">
                            {`{{ Post ID }}`}
                        </p>
                        <div className="flex">
                            <button className="bg-gray font-medium text-sm text-black px-6 py-1 border shadow-md rounded-xl">
                                Cancel
                            </button>
                            <button className="bg-[#E86B6B] ml-3 font-medium text-sm text-black px-6 py-1 border shadow-md rounded-xl">
                                Save
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Collapse>
    )
}

export default PostCollapse
