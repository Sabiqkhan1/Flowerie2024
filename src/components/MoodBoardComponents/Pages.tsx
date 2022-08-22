import React from 'react'
import ToolItemCard from '../cards/ToolItemCard'
import ToolPageFooter from '../footers/ToolPageFooter'
import { PageTypes } from '../../pages/MoodBoard'

export interface PagesProps {
    page: PageTypes
}

const Pages: React.FC<PagesProps> = ({ page }): JSX.Element => {
    return (
        <div className="bg-white w-[90%] shadow-lg h-[525px] m-4 flex flex-col justify-between overflow-hidden">
            <div className="h-[calc(100%-80px) overflow-auto thin-scroll">
                <div
                    className="p-8 flex flex-wrap"
                    onDragEnterCapture={() => console.log('I have incoming')}
                >
                    {page.items.map((item, index) => (
                        <ToolItemCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <ToolPageFooter />
        </div>
    )
}

export default Pages
