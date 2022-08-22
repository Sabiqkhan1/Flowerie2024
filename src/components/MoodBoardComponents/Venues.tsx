import React from 'react'
import ToolSearchInput from '../inputs/ToolSearchInput'
import Masonry from '@mui/lab/Masonry'
import { Card, CardMedia, ImageListItem } from '@mui/material'
import { toolVenues } from '../../assets/data/static/toolVenues'

const Venues: React.FC = (): JSX.Element => {
    return (
        <>
            <ToolSearchInput placeholder="Search for venues" />
            <div className="flex flex-col py-2">
                {toolVenues.map((venue, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-[#D9D6D6]">
                            {venue.label}
                        </h4>
                        <Masonry columns={2} spacing={2}>
                            {venue.venues.map((item, index) => (
                                <ImageListItem key={index}>
                                    <Card
                                        sx={{
                                            maxWidth: 140,
                                            margin: 1,
                                            height: 'max-content',
                                            cursor: 'pointer',
                                        }}
                                        draggable
                                    >
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image={item.img}
                                            alt="venues"
                                            key={index}
                                        />
                                    </Card>
                                </ImageListItem>
                            ))}
                        </Masonry>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Venues
