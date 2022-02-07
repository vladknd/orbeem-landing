//#------------------GLOBAL-IMPORTS------------------#
import { useState } from 'react'
import Image from 'next/image'

//#------------------LOCAL-IMPORTS-------------------#
//-------------------STYLED-COMPONENTS:
import { 
    Text,
    Button,
    GlowText
} from '../../styles/components'
import {
    WelcomeContainer,
    WelcomeContent,
    WelcomeImage
} from './Welcome.styled'

//#------------------BODY-------------------#
interface WelcomeProps {
    handleModal(): any;
}
const WelcomeComponent: React.FC<WelcomeProps> = ({
    handleModal
}) => {
    
    return (
        <WelcomeContainer>
            <WelcomeContent>
                <GlowText
                    size="90px"
                >ORBEEM- <br/>
                NFT UNIVERSE <br/>
                FOR YOUR ART
                </GlowText>
                
                <Text
                    font="Arial"
                    size="25px"
                    bold={true}
                    lh={1.1}
                    m="20px 0 10px 0"
                >ORB - NATIVE ASSET <br/>
                 OF ORBEEM ECOSYSTEM
                </Text>

                <Text
                    font="Arial"
                    size="16px"
                    opacity={0.6}
                    lh={1.1}
                >NFT IS A BIG MILESTONE MARKING THE BEGINNING OF A NEW DIGITAL ERA.<br/>
                 ORB TOKEN IS AT THE CENTER OF THAT TRANSFORMATION<br/>
                 ALLOWING DIGITAL ARTISTS AND CRYPTO ENTHUSIASTS <br/>
                 TO DISCOVER NEW OPPORTUNITIES AND PERSPECTIVES<br/>
                </Text>

                <Button
                    mt={30}
                    onClick={()=> {
                        handleModal()
                    }}
                >
                    BUY ORBEEM COIN
                </Button>
            </WelcomeContent>
            <WelcomeImage>
                <Image 
                src="/image.svg"
                width={600}
                height={600}
                />
            </WelcomeImage>
        </WelcomeContainer>
    )
}

export default WelcomeComponent;