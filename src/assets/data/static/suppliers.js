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
export const suppliers = [
    {
        label: 'Venues',
        icon: <IoHomeOutline style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Catering ',
        icon: <BiDish style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Photography',
        icon: (
            <VideoCameraBackOutlinedIcon
                style={{ fontSize: 56, color: '#2E2E48' }}
            />
        ),
    },
    {
        label: 'Decor & LIghting',
        icon: <GiButterflyFlower style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Transport',
        icon: (
            <AirportShuttleOutlinedIcon
                style={{ fontSize: 56, color: '#2E2E48' }}
            />
        ),
    },
    {
        label: 'Hair and Makeup',
        icon: <GiLipstick style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Music',
        icon: <GiMicrophone style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Entertainment',
        icon: <GiCarnivalMask style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Invitation',
        icon: <AiOutlineMail style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Canapes',
        icon: <GiCakeSlice style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Groom Attire',
        icon: <RiShirtLine style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Honeymoon',
        icon: <IoAirplaneOutline style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Bridal Attire',
        icon: <GiAmpleDress style={{ fontSize: 56, color: '#2E2E48' }} />,
    },
    {
        label: 'Other',
        icon: (
            <HiOutlineDotsCircleHorizontal
                style={{ fontSize: 56, color: '#2E2E48' }}
            />
        ),
    },
]
