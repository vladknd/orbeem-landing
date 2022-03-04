//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'
import Link from 'next/link'
//#------------------LOCAL-IMPORTS-------------------#
import { 
    HeaderContainer,
    HeaderSide,
    LogoContainer
} from './Header.styled'

// import { 
//     Text
// } from '../../styles/Components.styled'

interface HeaderProps {
    isMobile: boolean;
}
const HeaderComponent: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderSide>
            </HeaderSide> 

            <LogoContainer>
                <Image 
                    width={100}
                    height={100}
                    src="/logo_vertical.svg"
                /> 
            </LogoContainer>

            <HeaderSide>
            </HeaderSide>
        </HeaderContainer>
    );
}

export default HeaderComponent;