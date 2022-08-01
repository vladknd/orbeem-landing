//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
//#------------------LOCAL-IMPORTS-------------------#
import { 
    AccountContainer,
    HeaderContainer,
    HeaderSide,
    LogoContainer,
    HeaderLink,
    MetamaskLogo
} from './Header.styled'
// import { getAccount } from '../../web3/web3Utils'
import { QUERY_USER_BY_PUBLIC_ADDRESS } from '../../graphql/queries/user.queries'
import { useLazyQuery, useMutation } from '@apollo/client'
import { VERIFY_USER } from '../../graphql/mutations/user.mutations'
import { useEffect, useState } from 'react'
import { useWeb3 } from '../../services/web3.services'

// const AccountComponent: React.FC = () => { 
//     const [checkUser] = useLazyQuery(QUERY_USER_BY_PUBLIC_ADDRESS)
//     const [verifyUser] = useMutation(VERIFY_USER)
//     const [address, setAddress ] = useState("NOT CONNECTED")
    
    
//     useEffect(() => {
//         getAccount().then((result) => {
//           console.log("CONNECTED ACCOUNT:", result);
//           setAddress(result)
//         })
//       }, [])
//     return(
//         <AccountContainer
//         onClick={async ()=> {
            
//         }}>
//             {address}
//         </AccountContainer>
//     )
// }

interface HeaderProps {
    isMobile: boolean;
}
const HeaderComponent: React.FC = () => {
    const Router = useRouter()
    const {connectWeb3, publicAddress} = useWeb3()
    console.log(Router.pathname);
    useEffect(()=> {
        console.log(publicAddress);
        
    },[])
    return (
        <HeaderContainer>
            
            <HeaderSide>
                {Router.pathname === "/" ? 
                <>
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
                </>: null}
            </HeaderSide> 

            <LogoContainer>
                <Image 
                    width={90}
                    height={90}
                    src="/logo_vertical.svg"
                /> 
            </LogoContainer>

            <HeaderSide>
                <AccountContainer
                    onClick={async() => {
                        if(!publicAddress){
                            await connectWeb3()
                        } else {
                            Router.push("profile")
                        }
                    }}
                >
                    <MetamaskLogo>
                        <Image src="/metamask.svg" width={25} height={25} layout="intrinsic" />
                    </MetamaskLogo>
                    {publicAddress ? publicAddress : "CONNECT METAMASK"}
                </AccountContainer>
            </HeaderSide>
        </HeaderContainer>
    );
}

export default HeaderComponent;