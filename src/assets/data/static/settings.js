import SettingsIcon from '@mui/icons-material/Settings'
import BrushIcon from '@mui/icons-material/Brush'
import ShieldIcon from '@mui/icons-material/Shield'
import ImageIcon from '@mui/icons-material/Image'
import DevicesIcon from '@mui/icons-material/Devices'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupIcon from '@mui/icons-material/Group'
import MicIcon from '@mui/icons-material/Mic'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined'

export const settings = [
    {
        label: 'General Settings',
        to: '',
        icon: <SettingsIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Appearance',
        to: 'appearance',
        icon: <BrushIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Privacy and Security',
        to: 'privacy-security',
        icon: <ShieldIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Multimedia',
        to: 'multimedia',
        icon: <ImageIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Other Devices',
        to: 'other-devices',
        icon: <DevicesIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Time and Language',
        to: 'time-language',
        icon: <AccessTimeIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Contacts',
        to: 'contacts',
        icon: <GroupIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Hey, Celia',
        to: 'account',
        icon: <MicIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Sync with Litee Cloud',
        to: 'sync',
        icon: <CloudQueueIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Litee Account',
        to: 'litee-account',
        icon: <PersonOutlineIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'About Litee Chat',
        to: 'litee-chat',
        icon: <InfoOutlinedIcon sx={{ fontSize: 18, color: '#212121' }} />,
    },
    {
        label: 'Update',
        to: 'update',
        icon: (
            <ArrowCircleUpOutlinedIcon
                sx={{ fontSize: 18, color: '#212121' }}
            />
        ),
    },
]
