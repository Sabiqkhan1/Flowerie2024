import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import { Carousel } from 'react-responsive-carousel'
import { SearchTagProps } from '../../assets/data/interfaces'
import { Link } from 'react-router-dom'
import PrimaryImage from '../common/Img'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-multi-carousel/lib/styles.css'
import '../../styles/SearchCard.css'
const SearchCard: React.FC<SearchTagProps> = ({ tag }): JSX.Element => {
    const [liked, setLiked] = useState<Boolean>(false)

    const toggleLike = (): void => {
        setLiked(!liked)
    }
    return (
        <Paper
            sx={{
                margin: {
                    lg: '20px auto',
                    md: '20px auto',
                    sm: '20px auto',
                    xs: '15px auto',
                },
                flexGrow: 1,
                background: 'transparent',
                borderRadius: 5,
                border: '1px solid #c4c4c4',
                boxShadow: {
                    lg: 'none',
                    md: 'none',
                    sm: 'none',
                    xs: '1px 3px 5px 0px #efefef',
                },
                p: {
                    lg: 2,
                    md: 0,
                    sm: 0,
                    xs: 0,
                },
            }}
            elevation={0}
        >
            <Grid
                container
                // spacing={{ md: 2, sm: 2, xs: 0 }}
                // rowSpacing={{ md: 0, sm: 0, xs: 2 }}
                sx={{
                    justifyContent: {
                        sm: 'flex-start',
                        xs: 'center',
                    },
                }}
            >
                <Grid item sm={4} xs={12}>
                    <Box
                        sx={{
                            height: '176px',
                            aspectRatio: '226/176',
                            width: '100%',
                        }}
                    >
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showArrows={false}
                            showIndicators={false}
                            showThumbs={false}
                            showStatus={false}
                            transitionTime={1000}
                            interval={10000}
                            swipeable={false}
                            className="search-carousel"
                        >
                            {tag.img.map((item, index) => (
                                <PrimaryImage
                                    alt="search"
                                    src={item}
                                    key={index}
                                    borderRadius={20}
                                />
                            ))}
                        </Carousel>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm
                    container
                    sx={{
                        flexDirection: {
                            md: 'row',
                            sm: 'column',
                            xs: 'column',
                        },

                        padding: 2,
                    }}
                >
                    <Grid item xs container direction="column">
                        <Grid item xs>
                            <Link to="/product">
                                <h3 className="font-extrabold text-searchPlaceholder text-lg underline underline-offset-1 xs:text-sm">{`${tag.name} in ${tag.location}`}</h3>
                            </Link>
                            <p className="font-bold text-black text-lg my-2 xs:text-sm">
                                {tag.description}
                            </p>
                            <p className="font-semibold text-black xs:text-sm">
                                {tag.attributes}
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            sx={{
                                height: '100%',
                                flexDirection: {
                                    lg: 'column',
                                    md: 'column',
                                    sm: 'row-reverse',
                                    xs: 'row-reverse',
                                },
                                alignItems: {
                                    md: 'end',
                                    sm: 'center',
                                    xs: 'center',
                                },
                            }}
                        >
                            <span
                                className="cursor-pointer flex justify-end"
                                onClick={toggleLike}
                            >
                                {liked ? (
                                    <FavoriteOutlinedIcon
                                        sx={{
                                            color: '#F23F3F',
                                            fontSize: 30,
                                        }}
                                    />
                                ) : (
                                    <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                                )}
                            </span>
                            <span className="font-semibold text-black">
                                {tag.price}
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SearchCard
