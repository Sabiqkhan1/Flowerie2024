import PrimaryImage from '../common/Img'
import cover from '../../assets/images/host-cover.webp'
import ContainedButton from '../buttons/ContainedButton'
function HostHero(): JSX.Element {
    return (
        <header>
            <figure className="relative aspect-[1512/700] sm:h-[300px] sm:aspect-auto  ">
                <div className="absolute top-0 w-full h-full p-20 flex flex-col justify-end  sm:p-6 ">
                    <section className="w-[350px] aspect-[415/291] rounded-20 bg-gradient-to-b from-[#C78454] to-[rgba(241,101,0,0.53)] flex flex-col items-center justify-center sm:w-[250px] sm:mx-auto  ">
                        <small className="font-regular text-white text-[1rem] sm:text-sm">
                            Join the Flowerie family
                        </small>
                        <h4 className="font-bold text-white text-xl my-2 sm:text-[0.9rem] sm:px-4">
                            Start your journey with us
                        </h4>
                        <div className="w-2/4">
                            <ContainedButton
                                color="white"
                                background="bg-[#5C947C]"
                                fontSize={22}
                                style={{
                                    boxShadow:
                                        '0px 4px 4px 0px rgba(0,0,0,0.3)',
                                }}
                            >
                                Say Hello
                            </ContainedButton>
                        </div>
                    </section>
                </div>
                <PrimaryImage src={cover} />
            </figure>
        </header>
    )
}

export default HostHero
