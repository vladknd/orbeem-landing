import Image from 'next/image';
import { Text } from '../../styles/components'
import { FooterContainer } from './Footer.styled'

const FooterComponent = () => {
    return (
        <FooterContainer>
            <Image
                src="/logo_horizontal.svg"
                width={200}
                height={100}
            />

            <Text
            >@2022 All rights reserved
                
            </Text>
        </FooterContainer>
    );
}

export default FooterComponent