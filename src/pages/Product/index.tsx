import React, { useState } from 'react'
import Navbar from '../../components/navbars/SearchNavbar'
import ribbon from '../../assets/images/ribbon.png'
import { Divider, Grid, Avatar, ButtonBase } from '@mui/material'
import DescriptionCard from '../../components/cards/DescriptionCard'
import avatar from '../../assets/images/avatar.png'
import Gallery from '../../components/common/Gallery'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from 'react-icons/io'
import { productImages } from '../../assets/data/static/productImages'
import { descriptions } from '../../assets/data/static/productDescription'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker'
import AddIcon from '@mui/icons-material/Add'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp'
import OfferModal from '../../components/modals/OfferModal'
import { useDispatch } from 'react-redux'
import { toggleOffer } from '../../redux/modals/modalSlice'
const minDate = new Date()

const Product = () => {
    const [count, setCount] = useState<number>(1)
    const [date, setDate] = React.useState<Date | null>(new Date())
    const dispatch = useDispatch()
    return (
        <>
            <Navbar placeholder="Want to discover your dream venue?" />
            <OfferModal />
            <div className="w-full mt-36 md:mt-32 sm:mt-16 xs:mt-14 px-20 md:px-14 sm:px-8 xs:px-4">
                <h1 className="font-semibold text-4xl sm:text-3xl xs:text-2xl">
                    Bright & Contemporary 350 Seat Wedding Hall
                </h1>
                <div className="flex flex-wrap items-center my-4 xs:my-2">
                    <div className="flex items-center font-light text-2xl sm:text-lg xs:text-sm  text-black">
                        <img
                            src={ribbon}
                            className="w-[36px] h-[36px] sm:w-7 xs:w-5 sm:h-7 xs:h-5 sm: mr-1"
                            alt="ribbon"
                        />
                        SuperVendor
                    </div>
                    <p className="font-semibold text-2xl sm:text-lg xs:text-sm text-[#454444] ml-3 sm:ml-0 sm:mt-1">
                        <span className="sm:hidden">|</span> Greater London,
                        England, United Kingdom
                    </p>
                </div>
                <div className=" w-full rounded-20 box-border relative">
                    <Gallery images={productImages} />
                </div>
                <div className="w-full mt-12 xs:mt-8">
                    <Grid container spacing={{ lg: 4, md: 4, sm: 4 }}>
                        <Grid item lg={7} md={7} sm={6} xs={12}>
                            <div className="w-full pb-10">
                                <div className="flex items-center justify-between">
                                    <div className="mr-2">
                                        <h2 className="font-semibold text-2xl xs:text-lg text-black">
                                            Entire Hall hosted by James
                                        </h2>
                                        <p className="font-light text-lg xs:text-sm text-black mt-1">
                                            350 Guests | 4 Rooms | Kitchen |
                                            Free Parking | Wifi
                                        </p>
                                    </div>
                                    <Avatar
                                        src={avatar}
                                        sx={{
                                            width: {
                                                lg: 85,
                                                md: 75,
                                                sm: 65,
                                                xs: 55,
                                            },
                                            height: {
                                                lg: 85,
                                                md: 75,
                                                sm: 65,
                                                xs: 55,
                                            },
                                        }}
                                    />
                                </div>
                                <Divider
                                    color="#000"
                                    style={{ margin: '10px 0' }}
                                />
                                <div className="my-8">
                                    <div className="flex items-center">
                                        <LocationOnIcon
                                            sx={{
                                                width: {
                                                    lg: 45,
                                                    md: 40,
                                                    sm: 35,
                                                    xs: 30,
                                                },
                                                height: {
                                                    lg: 45,
                                                    md: 40,
                                                    sm: 35,
                                                    xs: 30,
                                                },
                                            }}
                                        />
                                        <div className="ml-2">
                                            <h4 className="font-semibold text-black text-lg xs:text-sm">
                                                Prime Location
                                            </h4>
                                            <p className="font-regular text-[#615F5F] text-lg xs:text-sm">
                                                High demand
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-8">
                                        <LocationOnIcon
                                            sx={{
                                                width: {
                                                    lg: 45,
                                                    md: 40,
                                                    sm: 35,
                                                    xs: 30,
                                                },
                                                height: {
                                                    lg: 45,
                                                    md: 40,
                                                    sm: 35,
                                                    xs: 30,
                                                },
                                            }}
                                        />
                                        <div className="ml-2">
                                            <h4 className="font-semibold text-black text-lg xs:text-sm">
                                                James is a SuperVendor
                                            </h4>
                                            <p className="font-regular text-[#615F5F] text-lg xs:text-sm">
                                                Highly experienced and highly
                                                rated. Always going the extra
                                                mile.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <LocalOfferRoundedIcon
                                            sx={{
                                                width: {
                                                    lg: 45,
                                                    md: 40,
                                                    sm: 35,
                                                    xs: 30,
                                                },
                                                height: {
                                                    lg: 45,
                                                    md: 40,
                                                    sm: 35,
                                                    xs: 30,
                                                },
                                            }}
                                        />
                                        <div className="ml-2">
                                            <h4 className="font-semibold text-black text-lg xs:text-sm">
                                                Great Price
                                            </h4>
                                            <p className="font-regular text-[#615F5F] text-lg xs:text-sm">
                                                Competitive Price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Divider
                                    color="#000"
                                    style={{ margin: '10px 0' }}
                                />
                                <div className="my-8 pl-4 xs:pl-0">
                                    <p className="font-regular text-[#615F5F] text-lg">
                                        Description :
                                    </p>
                                    <p className="font-regular text-black text-lg xs:text-sm my-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam mattis dignissim
                                        dui malesuada varius. Donec vitae justo
                                        hendrerit, ullamcorper quam nec, luctus
                                        lorem. Mauris alique t tristique diam eu
                                        finibus. Ut sit amet tincidunt lorem.
                                        Cras in tortor vitae lacus faucibus
                                        feugiat. Sed venenatis nec sapien ac
                                        lacinia. Duis vestibulum sed ex sed
                                        venenatis. Integer dapibus massa justo,
                                        vitae venenatis quam malesuada ut.
                                    </p>
                                    <p className="font-regular text-black text-lg xs:text-sm flex items-center cursor-pointer">
                                        Show more
                                        <ArrowForwardIosIcon
                                            sx={{
                                                marginLeft: '2px',
                                                fontSize: { sm: 16, xs: 14 },
                                            }}
                                        />
                                    </p>
                                </div>
                                <Divider
                                    color="#000"
                                    style={{ margin: '10px 0' }}
                                />
                                <div className="my-8 pl-4 xs:pl-0">
                                    <div className="flex items-center justify-between">
                                        <p className="font-regular text-[#615F5F] text-lg">
                                            Package Description
                                        </p>
                                        <div className="flex items-center">
                                            <p className="font-medium text-black text-lg xs:text-sm mr-4">
                                                {count}/4
                                            </p>
                                            <div className="flex items-center text-4xl xs:text-2xl">
                                                <ButtonBase
                                                    disabled={count === 1}
                                                    onClick={() =>
                                                        setCount(
                                                            (
                                                                prevCount: number
                                                            ) => prevCount - 1
                                                        )
                                                    }
                                                >
                                                    <IoIosArrowDropleftCircle
                                                        className={
                                                            count === 1
                                                                ? 'text-black/20'
                                                                : 'text-black'
                                                        }
                                                    />
                                                </ButtonBase>
                                                <ButtonBase
                                                    disabled={count === 4}
                                                    onClick={() =>
                                                        setCount(
                                                            (
                                                                prevCount: number
                                                            ) => prevCount + 1
                                                        )
                                                    }
                                                >
                                                    <IoIosArrowDroprightCircle
                                                        className={
                                                            count === 4
                                                                ? 'text-black/20'
                                                                : 'text-black'
                                                        }
                                                    />
                                                </ButtonBase>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex sm:justify-center sm:flex-wrap">
                                        {descriptions
                                            .slice((count - 1) * 2, count * 2)
                                            .map((description, index) => (
                                                <DescriptionCard
                                                    key={index}
                                                    image={description.image}
                                                    label={description.label}
                                                />
                                            ))}
                                    </div>
                                    <Divider
                                        color="#000"
                                        style={{ margin: '10px 0' }}
                                    />
                                    <div className="my-8 pl-4 xs:pl-0 flex flex-col  items-center ">
                                        <p className="w-full font-medium text-[#615F5F] text-3xl sm:text-xl xs-text-sm">
                                            Experiment with dates
                                        </p>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDateFns}
                                        >
                                            <CalendarPicker
                                                className="calendar-picker"
                                                minDate={minDate}
                                                date={date}
                                                onChange={(newDate) =>
                                                    setDate(newDate)
                                                }
                                            />
                                        </LocalizationProvider>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={5} md={5} sm={6} xs={12}>
                            <div className="w-full xs:mt-[-80px] xs:mb-4">
                                <div className="w-full py-11 sm:py-7 xs:py-5 px-6 rounded-20 border-[0.3px] border-black shadow-md">
                                    <span className="font-inter-medium text-4xl sm:text-2xl xs:text-xl text-black">
                                        £2,450{' '}
                                        <span className="text-black/70 text-xl sm:text-lg xs:text-sm">
                                            <span className="text-black">
                                                /
                                            </span>{' '}
                                            event
                                        </span>
                                    </span>
                                    <div className="w-full border-black border-[0.3px] rounded-20 shadow-md my-6">
                                        <Grid container>
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    borderRight:
                                                        '1px solid #000',
                                                }}
                                            >
                                                <div className="w-full pt-4 pb-5 pl-6 sm:pt-3 sm:pb-4">
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black">
                                                        Date
                                                    </p>
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black">
                                                        24/08/22
                                                    </p>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="w-full pt-4 pb-5 sm:pt-3 sm:pb-4">
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black text-center">
                                                        Add range
                                                    </p>
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black text-center">
                                                        <AddIcon
                                                            sx={{
                                                                fontSize: {
                                                                    md: 30,
                                                                    sm: 24,
                                                                },
                                                                cursor: 'pointer',
                                                            }}
                                                        />
                                                    </p>
                                                </div>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    borderRight:
                                                        '1px solid #000',
                                                    borderTop: '1px solid #000',
                                                }}
                                            >
                                                <div className="w-full pt-4 pb-5 pl-6 sm:pt-3 sm:pb-4 sm:pl-5">
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black">
                                                        Guests
                                                    </p>
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black">
                                                        280
                                                    </p>
                                                </div>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                sx={{
                                                    borderTop: '1px solid #000',
                                                }}
                                            >
                                                <div className="w-full pt-4 pb-5 sm:pt-3 sm:pb-4">
                                                    <p className="font-inter-medium text-lg sm:text-sm text-black text-center">
                                                        Ammend guests
                                                    </p>
                                                    <span className="font-inter-medium text-black text-center flex flex-col items-center">
                                                        <AddIcon
                                                            sx={{
                                                                fontSize: {
                                                                    md: 30,
                                                                    sm: 24,
                                                                },
                                                                cursor: 'pointer',
                                                            }}
                                                        />
                                                        <RemoveSharpIcon
                                                            sx={{
                                                                marginTop: {
                                                                    md: '-16px',
                                                                    sm: '-12px',
                                                                    xs: '-12px',
                                                                },
                                                                fontSize: {
                                                                    md: 30,
                                                                    sm: 24,
                                                                },
                                                                cursor: 'pointer',
                                                            }}
                                                        />
                                                    </span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <ButtonBase sx={{ width: '100%' }}>
                                        <button className="w-full py-6 sm:py-4 text-center bg-light-maroon font-semibold text-2xl text-white rounded-20 shadow-lg">
                                            Reserve
                                        </button>
                                    </ButtonBase>
                                    <div className="w-full flex flex-col my-2">
                                        <p className="font-regular text-2xl sm:text-xl xs:text-lg text-black text-center">
                                            You won’t be charged yet
                                        </p>
                                        <div className="w-full mt-3">
                                            <div className="flex justify-between items-center py-1">
                                                <span className="font-regular text-lg xs:text-sm text-black">
                                                    Evening event
                                                </span>
                                                <span className="font-regular text-lg xs:text-sm text-black">
                                                    £2,120
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-1">
                                                <span className="font-regular text-lg xs:text-sm text-black">
                                                    Cleaning fee
                                                </span>
                                                <span className="font-regular text-lg xs:text-sm text-black">
                                                    £450
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-1">
                                                <span className="font-regular text-lg xs:text-sm text-black">
                                                    Discount
                                                </span>
                                                <span className="font-regular text-lg xs:text-sm text-black">
                                                    -£320
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider
                                        color="#000"
                                        style={{ margin: '10px 0' }}
                                    />
                                    <div className="mt-1 flex justify-between items-center">
                                        <span className="font-bold text-4xl sm:text-3xl sx:text-2xl text-black">
                                            Total
                                        </span>
                                        <span className="font-bold text-4xl sm:text-3xl sx:text-2xl text-black">
                                            £2,570
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ButtonBase sx={{ width: '100%' }}>
                                        <button
                                            onClick={() =>
                                                dispatch(toggleOffer())
                                            }
                                            className="w-3/4 py-6 sm:py-4 text-center bg-dark font-semibold text-2xl text-white rounded-20 shadow-lg"
                                        >
                                            Make an offer
                                        </button>
                                    </ButtonBase>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Product
