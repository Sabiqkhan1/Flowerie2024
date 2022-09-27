import { IoHomeOutline, IoAirplaneOutline } from 'react-icons/io5'
import { BiDish } from 'react-icons/bi'
import {
    GiButterflyFlower,
    GiLipstick,
    GiMicrophone,
    GiCarnivalMask,
    GiAmpleDress,
    GiCakeSlice,
} from 'react-icons/gi'
import { AiOutlineMail } from 'react-icons/ai'
import { RiShirtLine } from 'react-icons/ri'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined'
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined'
import { FiTruck } from 'react-icons/fi'
import { MdVideoCameraBack } from 'react-icons/md'
export const suppliers = [
    {
        label: 'Venues',
        icon: (
            <IoHomeOutline className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Catering ',
        icon: <BiDish className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />,
    },
    {
        label: 'Photography',
        icon: (
            // <VideoCameraBackOutlinedIcon
            //     style={{ fontSize: { lg: '56px', sm: '1.25rem' } }}
            //     className="text-[#2E2E48]"
            // />
            <MdVideoCameraBack className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Decor & LIghting',
        icon: (
            <GiButterflyFlower className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Transport',
        icon: (
            // <AirportShuttleOutlinedIcon
            //     style={{ fontSize: { lg: '56px', md: '56px', sm: '1.25rem' } }}
            //     className="text-[#2E2E48]"
            // />
            <FiTruck className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Hair and Makeup',
        icon: (
            <GiLipstick className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Music',
        icon: (
            <GiMicrophone className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Entertainment',
        icon: (
            <GiCarnivalMask className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Invitation',
        icon: (
            <AiOutlineMail className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Canapes',
        icon: (
            <GiCakeSlice className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Groom Attire',
        icon: (
            <RiShirtLine className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Honeymoon',
        icon: (
            <IoAirplaneOutline className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Bridal Attire',
        icon: (
            <GiAmpleDress className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
    {
        label: 'Other',
        icon: (
            <HiOutlineDotsCircleHorizontal className="text-[56px]  sm:text-[32px] text-[#2E2E48]" />
        ),
    },
]
