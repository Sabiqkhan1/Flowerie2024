import { FC } from 'react'
import { Grid } from '@mui/material'
import VenueCard from '../cards/VenueCard'
import { venues } from '../../assets/data/static/venue'
import { VenueType } from '../../assets/data/types'

const VenueGrid: FC = () => (
  <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} wrap="nowrap">
    {venues.map((venue: VenueType, index: React.Key | null) => (
      <VenueCard
        venue={venue.venue}
        img={venue.img}
        key={index}
      />
    ))}
  </Grid>
)

export default VenueGrid
