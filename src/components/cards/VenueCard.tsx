import Grid from '@mui/material/Grid'
import type { FC } from 'react'
import PrimaryImage from '../common/Img'
interface CityCardProps {
    venue: string
    img: string
}

const VenueCard: FC<CityCardProps> = ({ venue, img }): JSX.Element => {
    return (
        <Grid item>
            <div className="flex flex-col cursor-pointer hover:scale-95 transition-transform duration-300">
                <figure className="w-venue-w aspect-[350/380]">
                    <PrimaryImage borderRadius={20} src={img} alt="luxe" />
                </figure>
                <sub className="font-regular text-xl text-black mt-1 pl-2">
                    {venue}
                </sub>
            </div>
        </Grid>
    )
}

export default VenueCard
