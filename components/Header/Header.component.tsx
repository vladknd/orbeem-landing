//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
//#------------------LOCAL-IMPORTS-------------------#
import { 
    AccountContainer,
    HeaderContainer,
    HeaderSide,
    LogoContainer,
    HeaderLink
} from './Header.styled'
import { getAccount } from '../../web3/web3Utils'
import { QUERY_USER_BY_PUBLIC_ADDRESS } from '../../graphql/queries/user.queries'
import { useLazyQuery, useMutation } from '@apollo/client'
import { VERIFY_USER } from '../../graphql/mutations/user.mutations'
import { useEffect, useState } from 'react'

const AccountComponent: React.FC = () => { 
    const [checkUser] = useLazyQuery(QUERY_USER_BY_PUBLIC_ADDRESS)
    const [verifyUser] = useMutation(VERIFY_USER)
    const [address, setAddress ] = useState("NOT CONNECTED")
    useEffect(() => {
        getAccount().then((result) => {
          console.log("CONNECTED ACCOUNT:", result);
          setAddress(result)
        })
      }, [])
    return(
        <AccountContainer
        onClick={async ()=> {
            
        }}>
            {address}
        </AccountContainer>
    )
}

interface HeaderProps {
    isMobile: boolean;
}
const HeaderComponent: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderSide>
                <Link href="#home-section">
                    <HeaderLink>HOME</HeaderLink>
                </Link>
                <Link href="#info-section">
                    <HeaderLink>ABOUT</HeaderLink>
                </Link>
                <Link href="#community-section">
                    <HeaderLink>CONTACTS</HeaderLink>
                </Link>
                <Link href="#roadmap-section">
                    <HeaderLink>ROADMAP</HeaderLink>
                </Link>
                <Link href="#ecosystem-section">
                    <HeaderLink>ECOSYSTEM</HeaderLink>
                </Link>
            </HeaderSide> 

            <LogoContainer>
                <Image 
                    width={90}
                    height={90}
                    src="/logo_vertical.svg"
                /> 
            </LogoContainer>

            <HeaderSide>
                <AccountComponent/>
            </HeaderSide>
        </HeaderContainer>
    );
}

export default HeaderComponent;