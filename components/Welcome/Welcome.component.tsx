//#------------------GLOBAL-IMPORTS------------------#
import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Router from 'next/router'
//#------------------LOCAL-IMPORTS-------------------#
import { login } from '../../web3/web3Utils'
import data from './Welcome.data'
//-------------------STYLED-COMPONENTS:
import { 
    Button,
    GlowText,
} from '../../styles/Components.styled'

import {
    WelcomeContainer,
    WelcomeContent,
    WelcomeHeader,
    WelcomeText,
    WelcomeImage
} from './Welcome.styled'
import { useUser } from '../../auth/userContext'


declare let window: any
//#------------------BODY-------------------#
interface MainProps {
    isMobile: boolean;
}
const WelcomeComponent: React.FC<MainProps> = ({
    isMobile
}) => {
    const {setLoggedIn} = useUser()

    return (
        <WelcomeContainer id="home-section">
            <WelcomeContent>
                <GlowText>
                 {data.header}
                </GlowText>
            
                <WelcomeText>
                 {data.text}
                </WelcomeText> 

                <Button
                    mt="30px"
                    align="center"
                    onClick={() => {
                        login()
                        .then(user => {
                            setLoggedIn(user)
                            Router.push('/profile')
                        })
                        .catch((error) => {
                            console.log("ERROR:", error)  
                        })
                    }}
                >CONNECT</Button>

            </WelcomeContent>
            <WelcomeImage>
                <Image src="/welcome.webp" width={isMobile ? 600 : 600} height={isMobile ? 600 : 600}/>
            </WelcomeImage>
        </WelcomeContainer>
    )
}

export default WelcomeComponent;