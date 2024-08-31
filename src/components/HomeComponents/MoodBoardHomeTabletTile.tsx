import { FC } from 'react'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import cover from '../../assets/images/tool-cover.webp'
import Logo from '../../assets/images/Mesh_Red.png'
import ContainedButton from '../buttons/ContainedButton'

const Img = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '24px',
})

const MoodBoardHomeTabletTile: FC = () => (
  <section className="pr-28 md:pr-16 sm:pr-8 xs:pr-0">
    <figure className="relative w-full h-[320px] bg-[#e2e2e2] rounded-3xl overflow-auto sm:h-[200px]">
      <div className="absolute top-0 w-full h-full">
        <div className="w-1/2 h-full bg-gradient-to-b from-[rgba(0,0,0,0.41)] float-right px-4 pb-4 sm:w-full sm:bg-gradient-to-t sm:from-[rgba(256,256,256,0.20)]">
          <div className="h-full flex flex-col justify-between pt-4">
            <div>
              <section className="flex items-center xs:relative">
                <img src={Logo} alt="logo" className="w-12 h-12 sm:w-8 xs:w-8 sm:h-8 xs:h-8" />
                <h3 className="ml-1 text-3xl text-light-maroon font-semibold sm:text-xl">
                  Flowerie
                </h3>
              </section>
              <h3 className="font-mark text-3xl text-white pl-24 mt-[-12px] sm:text-xl">
                MoodBoard
              </h3>
            </div>
            <section className="sm:absolute sm:right-1 sm:bottom-1">
              <p className="font-semibold text-white text-lg sm:text-sm">
                Use our optimised event planning tool for your special day.
              </p>
              <p className="font-semibold text-textBlack my-2 sm:text-sm">
                Manage every detail.
              </p>
              <div>
                <Link to={`/member-dashboard/${1}`} className="float-right xs:mr-4">
                  <ContainedButton color="white" background="bg-dark">
                    Try Free
                  </ContainedButton>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Img src={cover} />
    </figure>
  </section>
)

export default MoodBoardHomeTabletTile
