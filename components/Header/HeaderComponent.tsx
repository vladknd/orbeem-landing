//#------------------GLOBAL-IMPORTS------------------#
import type { NextPage } from 'next'
import Image from 'next/image'
//#------------------LOCAL-IMPORTS-------------------#
import { HeaderContainer } from './Header.styled'

const HeaderComponent: NextPage = () => {
    return (
        <HeaderContainer>
            <Image 
                src="/logo_vertical.svg"
                width={90}
                height={90}
            />
        </HeaderContainer>
    );
}

export default HeaderComponent;