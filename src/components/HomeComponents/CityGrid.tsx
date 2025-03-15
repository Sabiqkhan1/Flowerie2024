import { FC } from 'react'
import { Grid } from '@mui/material'
import CityCard from '../cards/CityCard'
import { cities } from '../../assets/data/static/city'
import { CityType } from '../../assets/data/types'

const CityGrid: FC = () => (
  <Grid container spacing={{ xs: 1, sm: 1, md: 2, lg: 4 }}>
    {cities.map((city: CityType, index: React.Key | null) => (
      <CityCard
        city={city.city}
        distance={city.distance}
        img={city.img}
        key={index}
      />
    ))}
  </Grid>
)

export default CityGrid
