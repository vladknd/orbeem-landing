import Image from 'next/image'
import Link from 'next/link'

import {
    IconContainer
} from './MediaIcon.styled'

interface MediaIconProps {
    img: string;
    link: string;
}
const MediaIcon:React.FC<MediaIconProps> = ({img,link}) => {
    return (
        <Link href={link}>
        <IconContainer>
            <Image
                src={img}
                width={50}
                height={50}
            />
        </IconContainer>
        </Link>
    );
}

export default MediaIcon