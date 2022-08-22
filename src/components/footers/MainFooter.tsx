import Grid from '@mui/material/Grid'
import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../../assets/data/static/footerLinks'
interface MainFooterProps {
    space: string
}
const MainFooter: React.FC<MainFooterProps> = ({ space }): JSX.Element => {
    return (
        <footer
            className={`w-full h-[336px] bg-[#f3f4f6] ${space} px-36 flex justify-center items-center`}
        >
            <Grid container>
                {footerLinks.map((footerLink, index) => (
                    <Grid
                        key={index}
                        item
                        lg={3}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <h4 className="font-inter-bold text-xs text-black uppercase my-3">
                            {footerLink.title}
                        </h4>
                        {footerLink.links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="font-inter-regular text-xs text-black my-3 hover:opacity-80 transition-opacity duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </footer>
    )
}

export default MainFooter
