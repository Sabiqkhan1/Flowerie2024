import { GiDiamondRing } from 'react-icons/gi'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiCalculator, BiBookAlt } from 'react-icons/bi'
export const plannerLinks = [
    {
        label: 'My Wedding',
        icon: <GiDiamondRing className="text-3xl  sm:text-xl" />,
        link: 'wedding',
    },
    {
        label: 'Checklist',
        icon: <MdPlaylistAddCheck className="text-3xl  sm:text-xl" />,
        link: 'checklist',
    },
    {
        label: 'Suppliers ',
        icon: <BiBookAlt className="text-3xl  sm:text-xl" />,
        link: 'suppliers',
    },
    {
        label: 'Guest Lists',
        icon: <HiOutlineUserGroup className="text-3xl  sm:text-xl" />,
        link: 'guest-lists',
    },
    {
        label: 'Budget Planner',
        icon: <BiCalculator className="text-3xl  sm:text-xl" />,
        link: 'budget-planner',
    },
]
