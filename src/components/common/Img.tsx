import { styled } from '@mui/material/styles'

interface PrimaryImageProps
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    borderRadius?: number
}

export const Img = styled('img')({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '24px',
})

const PrimaryImage: React.FC<PrimaryImageProps> = ({
    src,
    alt,
    borderRadius = 0,
}): JSX.Element => {
    return <Img src={src} alt={alt} style={{ borderRadius: borderRadius }} />
}

export default PrimaryImage
