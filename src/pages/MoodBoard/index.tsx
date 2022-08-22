import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Link } from 'react-router-dom'
import MoodBoardNav from '../../components/drawers/MoodBoardNav'
import tool0 from '../../assets/images/tool0.png'
import tool1 from '../../assets/images/tool1.png'
import MoodBoardHeader from '../../components/headers/MoodBoardHeader'
import ToolAddButton from '../../components/buttons/ToolAddButton'
import Page from '../../components/MoodBoardComponents/Pages'
export type PageTypes = {
    pageIndex: number
    items: Array<any>
}

const MoodBoard = () => {
    const [pages, setPages] = useState<Array<PageTypes>>([
        {
            pageIndex: 0,
            items: [
                {
                    img: tool0,
                    name: 'London Venue',
                    price: '2143',
                },
                {
                    img: tool1,
                    name: 'London Caterer',
                    price: '648',
                },
            ],
        },
    ])

    const handleAddPage = (): void => {
        const newPages = [...pages]
        newPages.push({
            pageIndex: newPages.length,
            items: [],
        })
        setPages(newPages)
    }

    console.log('Pages ==> ', pages)
    return (
        <section className="h-screen flex flex-col">
            <div className="bg-gradient-to-l from-[#E4DBCE] to-[#E5AA514A] p-4">
                <Link to="/" className="flex items-center cursor-pointer">
                    <ArrowBackIosIcon sx={{ color: '#000' }} />
                    <h4 className="text-black font-semibold text-2xl">Back</h4>
                </Link>
            </div>
            <div className="flex flex-grow">
                <MoodBoardNav />
                <div className="bg-[#E3E3E3] h-[calc(100vh-64px)] flex-grow p-1 overflow-hidden">
                    <MoodBoardHeader />
                    <div>
                        <div className="flex flex-col items-center py-4">
                            {pages.map((page: PageTypes, index: React.Key) => (
                                <Page key={index} page={page} />
                            ))}
                            <ToolAddButton onClick={handleAddPage}>
                                + Add Page
                            </ToolAddButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoodBoard
