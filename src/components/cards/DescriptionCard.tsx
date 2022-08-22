import React from 'react'

interface DescriptionCardProps {
    image: string
    label: string
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
    image,
    label,
}): JSX.Element => {
    return (
        <div className="flex flex-col m-4">
            <img
                src={image}
                alt="product"
                className="max-w-[330px] max-h-[239px] rounded-[30px] xs:max-w-[264px] xs:max-h-[191.2px]"
            />
            <span className="font-semibold text-2xl sm:text-xl xs:text-lg text-black mt-4">
                {label}
            </span>
        </div>
    )
}

export default DescriptionCard
