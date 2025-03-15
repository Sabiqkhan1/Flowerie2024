import { FC } from 'react'
import CityGrid from './CityGrid'
import MoodBoardHomeTabletTile from './MoodBoardHomeTabletTile'
import VenueGrid from './VenueGrid'

const Venues: FC = (): JSX.Element => {
  return (
    <div className="pl-28 py-12 md:pl-16 md:py-14 sm:pl-8 xs:pl-4 xs:pr-4 xs:py-8" id="venues">
      <h1 className="font-regular text-black text-3xl xs:text-2xl">
        Explore Venues Nearby
      </h1>
      <section className="my-10 pr-28 md:pr-16 sm:pr-8 xs:my-8 xs:pr-0">
        <CityGrid />
      </section>

      <MoodBoardHomeTabletTile />

      <h1 className="my-10 font-regular text-black text-3xl xs:text-2xl">
        Luxe Locations
      </h1>
      <div id="scrollable" className="overflow-x-auto no-scroll pb-2">
        <VenueGrid />
      </div>
    </div>
  )
}

export default Venues
