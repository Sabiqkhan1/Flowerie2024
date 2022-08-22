import { GiDiamondRing } from 'react-icons/gi'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { BiCalculator, BiBookAlt } from 'react-icons/bi'
export const plannerLinks = [
    {
        label: 'My Wedding',
        icon: <GiDiamondRing style={{ fontSize: 36 }} />,
        link: 'wedding',
    },
    {
        label: 'Checklist',
        icon: <MdPlaylistAddCheck style={{ fontSize: 36 }} />,
        link: 'checklist',
    },
    {
        label: 'Suppliers ',
        icon: <BiBookAlt style={{ fontSize: 36 }} />,
        link: 'suppliers',
    },
    {
        label: 'Guest Lists',
        icon: <HiOutlineUserGroup style={{ fontSize: 36 }} />,
        link: 'guest-lists',
    },
    {
        label: 'Budget Planner',
        icon: <BiCalculator style={{ fontSize: 36 }} />,
        link: 'budget-planner',
    },
]
