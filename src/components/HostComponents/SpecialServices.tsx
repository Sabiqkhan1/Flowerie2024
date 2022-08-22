import Grid from '@mui/material/Grid'
import logo2 from '../../assets/images/logo2.png'
import { hostItems } from '../../assets/data/static/hostItems'
import ServiceCard from '../cards/ServiceCard'
function SpecialServices(): JSX.Element {
    return (
        <section className="font-regular text-center my-16">
            <h2 className="font-semibold text-4xl">
                You can host your venue
                <br /> or provide a speical service
            </h2>
            {/* <div className="flex justify-center"> */}
            <Grid container sx={{ px: '5rem' }}>
                {hostItems.map((item, index) => (
                    <ServiceCard
                        key={index}
                        img={item.img}
                        label={item.label}
                    />
                ))}
            </Grid>

            <section className="my-8">
                <div className="flex justify-center items-center mb-8">
                    <div className="h-16 w-16">
                        <img
                            src={logo2}
                            alt="logo"
                            height="100%"
                            width="100%"
                        />
                    </div>
                    <div className="flex items-center text-5xl text-[#DF7E7E] font-semibold">
                        Flowerie
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <h2 className="text-[#BDBBBB] text-4xl font-semibold">
                        Host your <span className="text-[black]">venue</span>{' '}
                        while you{' '}
                        <span className="text-[black]">organise and earn</span>.
                    </h2>
                    <h2 className="text-[#BDBBBB] mt-8 mb-4 text-4xl font-semibold">
                        Provide your services with{' '}
                        <span className="text-[black]">safe payments</span>.
                    </h2>
                    <small className="font-regular text-xl">
                        Limitless earlinings
                    </small>
                </div>
            </section>
        </section>
    )
}

export default SpecialServices
