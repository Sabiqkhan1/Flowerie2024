import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom'
import { plannerLinks } from '../../assets/data/static/plannerLinks'
import MainFooter from '../footers/MainFooter'

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: false })
    return (
        <Link
            className={`flex flex-col items-center mt-2 mx-12 sm:mx-2  sm:text-xs sm:font-regular xs:h-[84px] xs:justify-evenly  ${
                match ? 'text-textBlack' : 'text-[#85858C]'
            } ${
                !match && 'hover:text-textBlack'
            } transition-colors duration-300`}
            to={to}
            {...props}
        >
            {children}
            {match && (
                <hr className="border-b-[2px] border-light-maroon h-[2px] w-full mt-1" />
            )}
        </Link>
    )
}

const Steps: React.FC = (): JSX.Element => {
    return (
        <div>
            <header className="border-y border-gray xs:m-0 xs:p-0">
                <div className="flex items-center justify-center  ">
                    {plannerLinks.map((link, index) => (
                        <CustomLink to={link.link} key={index}>
                            {link.icon}
                            <h4 className="font-medium text-lg sm:font-regular sm:text-center sm:text-sm xs:text-[10px]  ">
                                {link.label}
                            </h4>
                        </CustomLink>
                    ))}
                </div>
            </header>
            <div>
                <Outlet />
            </div>
            <MainFooter space="mt-24" />
        </div>
    )
}

export default Steps
