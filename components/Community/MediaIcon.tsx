import Image from 'next/image';
import {
    IconContainer
} from './MediaIcon.styled'

interface MediaIconProps {
    img: string;
}
const MediaIcon:React.FC<MediaIconProps> = ({img}) => {
    return (
        <IconContainer>
            <Image
                src={img}
                width={50}
                height={45}
            />
        </IconContainer>
    );
}

export default MediaIcon