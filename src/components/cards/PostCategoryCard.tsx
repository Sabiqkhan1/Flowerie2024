import { Card, CardContent, CardMedia } from '@mui/material'
import React, { useState } from 'react'
import { Link, LinkProps } from 'react-router-dom'
export interface PostCategoryCardProps extends LinkProps {
    label: string
    thumb: string
}

const PostCategoryCard: React.FC<PostCategoryCardProps> = ({
    to,
    label,
    thumb,
}): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true)
    const imageLoaded = () => setLoading(false)
    return (
        <Link to={to}>
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 1,
                    my: 1,
                    border: '1px solid #858585',
                    borderRadius: 3,
                    boxShadow: 'none',
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#C0C0C0',
                    },
                }}
            >
                <CardContent>
                    <p className="font-semibold text-lg text-black">{label}</p>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{
                        width: 88,
                        borderRadius: 3,
                        visibility: loading ? 'hidden' : 'visible',
                    }}
                    image={thumb}
                    alt={label}
                    onLoad={imageLoaded}
                />
            </Card>
        </Link>
    )
}

export default PostCategoryCard
