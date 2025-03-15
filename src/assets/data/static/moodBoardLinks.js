import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded'
import LightOutlinedIcon from '@mui/icons-material/LightOutlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined'
import LivingOutlinedIcon from '@mui/icons-material/LivingOutlined'
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined'
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined'
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined'
export const moodBoardLinks = [
    {
        label: 'Venues',
        to: '',
        icon: (
            <AccountBalanceRoundedIcon
                sx={{ color: '#fff', fontSize: '1.8rem' }}
            />
        ),
    },
    {
        label: 'Catering',
        to: 'catering',
        icon: (
            <LocalDiningRoundedIcon
                sx={{ color: '#fff', fontSize: '1.8rem' }}
            />
        ),
    },
    {
        label: 'Decor & Lighting',
        to: 'decor&lighting',
        icon: <LightOutlinedIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />,
    },
    {
        label: 'Videography',
        to: 'videography',
        icon: (
            <VideocamOutlinedIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
        ),
    },
    {
        label: 'Transport',
        to: 'transport',
        icon: (
            <DirectionsBusOutlinedIcon
                sx={{ color: '#fff', fontSize: '1.8rem' }}
            />
        ),
    },
    {
        label: 'Hair & Beauty',
        to: 'hair&beauty',
        icon: <LivingOutlinedIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />,
    },
    {
        label: 'Musician',
        to: 'musician',
        icon: (
            <MusicNoteOutlinedIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
        ),
    },
    {
        label: 'Show Stoppers',
        to: 'show-stoppers',
        icon: (
            <TheaterComedyOutlinedIcon
                sx={{ color: '#fff', fontSize: '1.8rem' }}
            />
        ),
    },
    {
        label: 'Other +',
        to: 'other',
        icon: (
            <AddToPhotosOutlinedIcon
                sx={{ color: '#fff', fontSize: '1.8rem' }}
            />
        ),
    },
]
