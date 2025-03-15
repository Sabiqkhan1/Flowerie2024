import React from 'react'
import {
    Link,
    LinkProps,
    Outlet,
    useMatch,
    useResolvedPath,
} from 'react-router-dom'
import { guestListTabs } from '../../../assets/data/static/guestListTabs'
import ManagedGuestContext from '../../../contexts/guest.context'

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <li
            style={{ backgroundColor: match ? '#DF7E7E' : '#F3F3F3' }}
            className="border border-[rgba(196,196,196,1)] border-r-0 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md last:border-r
          
            "
        >
            <Link
                to={to}
                {...props}
                className={`block font-medium py-2 px-8 ${
                    match
                        ? 'text-white hover:bg-light-maroon-dark'
                        : 'text-black hover:bg-[#E6E6E6]'
                } transition-colors duration-200
                sm:px-2 sm:font-regular sm:text-sm xs:text-[10px] xs-px-1
                `}
            >
                {children}
            </Link>
        </li>
    )
}

const GuestList = () => {
    return (
        <div className="px-20 sm:px-4 ">
            <div className="my-6">
                <ul className="w-max mx-auto flex rounded-md">
                    {guestListTabs.map((tab: any, index: React.Key) => (
                        <CustomLink key={index} to={tab.to}>
                            {tab.label}
                        </CustomLink>
                    ))}
                </ul>
            </div>
            <ManagedGuestContext>
                <Outlet />
            </ManagedGuestContext>
        </div>
    )
}

export default GuestList
