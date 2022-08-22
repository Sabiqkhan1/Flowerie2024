import { AiOutlineWifi, AiOutlineBlock } from 'react-icons/ai'
import { MdLocalParking, MdPets } from 'react-icons/md'
import { GiCampCookingPot, GiFlatPlatform, GiPrayerBeads } from 'react-icons/gi'
import { RiCelsiusFill } from 'react-icons/ri'
import { IoMdMicrophone } from 'react-icons/io'
import { BiDrink } from 'react-icons/bi'
import { FaCampground, FaWheelchair, FaRestroom } from 'react-icons/fa'
import { BsFillDisplayFill } from 'react-icons/bs'

export const amenities = [
    {
        id: 0,
        label: 'Wi-fi',
        icon: <AiOutlineWifi />,
    },
    {
        id: 1,
        label: 'Parking',
        icon: <MdLocalParking />,
    },
    {
        id: 2,
        label: 'Kitchen',
        icon: <GiCampCookingPot />,
    },
    { id: 3, label: 'Air condition', icon: <RiCelsiusFill /> },
    {
        id: 4,
        label: 'Stage',
        icon: <GiFlatPlatform />,
    },
    {
        id: 5,
        label: 'Microphone System',
        icon: <IoMdMicrophone />,
    },
    {
        id: 6,
        label: 'Drinks bar',
        icon: <BiDrink />,
    },
    {
        id: 7,
        label: 'Segregation options',
        icon: <AiOutlineBlock />,
    },
    {
        id: 8,
        label: 'Outdoor space',
        icon: <FaCampground />,
    },
    {
        id: 9,
        label: 'Pet friendly',
        icon: <MdPets />,
    },
    {
        id: 10,
        label: 'Prayer room',
        icon: <GiPrayerBeads />,
    },
    {
        id: 11,
        label: 'Screen display',
        icon: <BsFillDisplayFill />,
    },
    {
        id: 12,
        label: 'Disability Access',
        icon: <FaWheelchair />,
    },
    {
        id: 13,
        label: 'Dressing room',
        icon: <FaRestroom />,
    },
]
