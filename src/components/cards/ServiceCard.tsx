import React from 'react'
import Grid from '@mui/material/Grid'
import PrimaryImage from '../common/Img'
import '../../styles/ServiceCard.css'
interface ServiceCardProps {
    img: string
    label: string
}
const ServiceCard: React.FC<ServiceCardProps> = ({
    img,
    label,
}): JSX.Element => {
    return (
        <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div className="my-8">
                <figure>
                    <div className="h-96 aspect-[350/380] relative service-card xs:h-72">
                        <div className="service-card-overlay">
                            <h4 className="text-2xl text-white">{label}</h4>
                        </div>
                        <PrimaryImage src={img} borderRadius={20} />
                    </div>
                    <figcaption className="text-left font-regular text-2xl mt-3">
                        {label}
                    </figcaption>
                </figure>
            </div>
        </Grid>
    )
}

export default ServiceCard
