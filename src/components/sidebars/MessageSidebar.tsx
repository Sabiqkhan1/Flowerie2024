import { Box, styled, Tab, Tabs } from '@mui/material'
import type { TabsProps } from '@mui/material'
import React from 'react'
import MessageCard, { MessageCardProps } from '../cards/MessageCard'
import { messages } from '../../assets/data/static/messages'
interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

interface StyledTabsProps extends TabsProps {
    children?: React.ReactNode
    value: number
    onChange: (event: React.SyntheticEvent, newValue: number) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        display: 'none',
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
})

interface StyledTabProps {
    label: string
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'semibold',
    fontSize: 14,
    marginRight: theme.spacing(1),
    color: '#E0E0E0',
    '&.Mui-selected': {
        color: '#333333',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}))

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className="h-full overflow-auto no-scroll pb-8"
        >
            {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const MessageSidebar: React.FC = (): JSX.Element => {
    const [value, setValue] = React.useState(1)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }
    return (
        <div className="w-[260px] h-messageSidebarHeight xs:h-messageSidebarMobileHeight bg-[#F9F9F9] rounded-tl-[64px] px-4 pt-6 overflow-hidden sm:hidden">
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                    >
                        <StyledTab label="Stats" {...a11yProps(0)} />
                        <StyledTab label="Messages" {...a11yProps(1)} />
                    </StyledTabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {messages.map(
                        (message: MessageCardProps, index: React.Key) => (
                            <MessageCard
                                key={index}
                                date={message.date}
                                name={message.name}
                                message={message.message}
                            />
                        )
                    )}
                </TabPanel>
            </Box>
        </div>
    )
}

export default MessageSidebar
