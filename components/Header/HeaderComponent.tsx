//#------------------GLOBAL-IMPORTS------------------#
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
//#------------------LOCAL-IMPORTS-------------------#
import { 
    HeaderContainer,
    HeaderSide,
    HeaderLink
} from './Header.styled'

import { 
    Text
} from '../../styles/components'

const HeaderComponent: NextPage = () => {
    return (
        <HeaderContainer>
            <HeaderSide>
                <Link href="#home-section">
                    <Text size="15px" opacity={1}>
                        HOME
                    </Text>
                </Link>
                <Link href="#info-section">
                    <Text size="15px" opacity={0.7}>
                        ABOUT
                    </Text>
                </Link>
                <Link href="#community-section">
                    <Text size="15px" opacity={0.7}>
                        CONTACTS
                    </Text>
                </Link>
                <Link href="#roadmap-section">
                    <Text size="15px" opacity={0.7}>
                        ROADMAP
                    </Text>
                </Link>
                <Link href="#partners-section">
                    <Text size="15px" opacity={0.7}>
                        PARTNERS
                    </Text>
                </Link>
            </HeaderSide>
            <Image 
                src="/logo_vertical.svg"
                width={90}
                height={90}
            />
            <HeaderSide>
            </HeaderSide>
        </HeaderContainer>
    );
}

export default HeaderComponent;