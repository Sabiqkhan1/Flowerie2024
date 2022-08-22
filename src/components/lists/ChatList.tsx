import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { chats } from '../../assets/data/static/chats'
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Badge,
    styled,
} from '@mui/material'

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <div
            style={{
                backgroundColor: match ? 'rgba(0, 0, 0, 3.73%)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 5,
            }}
        >
            {match && (
                <span
                    style={{
                        width: 3,
                        height: 30,
                        background: 'rgba(0, 95, 184, 1)',
                        borderRadius: 2,
                    }}
                />
            )}
            <Link
                to={to}
                {...props}
                className="flex-grow flex items-center justify-between pr-2"
            >
                {children}
            </Link>
        </div>
    )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))

const ChatList: React.FC = (): JSX.Element => {
    return (
        <List sx={{ width: '100%' }}>
            {chats.map((chat, index) => (
                <CustomLink to={chat.user_id} key={index}>
                    <ListItem sx={{ py: '4px' }}>
                        <ListItemAvatar>
                            {/* <Avatar sizes="small">
                                <img src={chat.profile} alt="chat" />
                            </Avatar> */}
                            {chat.active ? (
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar sizes="small">
                                        <img src={chat.profile} alt="chat" />
                                    </Avatar>
                                </StyledBadge>
                            ) : (
                                <Avatar sizes="small">
                                    <img src={chat.profile} alt="chat" />
                                </Avatar>
                            )}
                        </ListItemAvatar>
                        <ListItemText
                            primary={chat.name}
                            secondary={chat.message || chat.status}
                            primaryTypographyProps={{
                                fontSize: 14,
                                fontFamily: 'segoe-regular',
                                color: 'rgba(0, 0, 0, 0.9)',
                            }}
                            secondaryTypographyProps={{
                                fontSize: 10,
                                fontFamily: 'segoe-regular',
                                color: 'rgba(0, 0, 0, 0.9)',
                            }}
                        />
                    </ListItem>
                    {chat.unread > 0 && (
                        <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[rgba(0,95,184,1)] text-white text-[8px] font-light">
                            {chat.unread}
                        </span>
                    )}
                </CustomLink>
            ))}
        </List>
    )
}

export default ChatList
