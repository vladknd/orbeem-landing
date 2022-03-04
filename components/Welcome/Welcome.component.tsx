//#------------------GLOBAL-IMPORTS------------------#
import { useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

//#------------------LOCAL-IMPORTS-------------------#
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

//#------------------BODY-------------------#
interface MainProps {
    // handleModal(): any;
    isMobile: boolean;
}
const WelcomeComponent: React.FC<MainProps> = ({
    // handleModal,
    isMobile
}) => {
    return (
        <WelcomeContainer id="home-section">
            <WelcomeContent>
                <GlowText>
                 ORBEEM- <br/>
                 NFT UNIVERSE <br/>
                 FOR YOUR ART
                </GlowText>
                
                <WelcomeHeader>
                 ORB - NATIVE ASSET
                 OF ORBEEM ECOSYSTEM
                </WelcomeHeader>

                <WelcomeText>
                 NFT IS A BIG MILESTONE MARKING THE BEGINNING OF A NEW DIGITAL ERA.
                 ORB TOKEN IS AT THE CENTER OF THAT TRANSFORMATION
                 ALLOWING DIGITAL ARTISTS AND CRYPTO ENTHUSIASTS
                 TO DISCOVER NEW OPPORTUNITIES AND PERSPECTIVES
                </WelcomeText>

                <Button
                    mt={30}
                    align="center"
                    onClick={()=> {
                        // handleModal()
                    }}
                >
                    BUY ORBEEM COIN
                </Button>
            </WelcomeContent>
            <WelcomeImage>
                <Image 
                src="/welcome.webp"
                width={isMobile ? 600 : 800}
                height={isMobile ? 600 : 800}
                />
            </WelcomeImage>
        </WelcomeContainer>
    )
}

export default WelcomeComponent;