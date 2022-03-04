

import Image from 'next/image'
import { InfoContainer, InfoContent, InfoHeader, InfoText, InfoImage } from './Info.styled'
import { Divider } from '../../styles/Components.styled'

const InfoComponent: React.FC = () => {
    return(
        <>
        
        <InfoContainer>
        <Divider mb="20px"/>
            <InfoContent>   
                <InfoHeader>
                 ORBEEM ECOSYSTEM
                 EFFICIENT, SECURE AND RELIABLE
                 NFT PLATFORM.
                </InfoHeader>

                <InfoText>
                 ORBEEM UNIVERSE - IS A HIGH-END BLOCKCHAIN ECOSYSTEM, MADE FOR CREATORS AND ADMIRERS OF DIGITAL ART AS WELL AS CRYPTO-ENTHUSIASTS.
                 BESIDES ORB TOKEN, ORBEEM UNIVERSE OFFERS A WIDE RANGE OF MEDIA SERVICES RELATED TO NFT, DIGITAL ART, eSPORTS AND MODERN BLOCKCHAIN TECHNOLOGIES.
                 OUR TEAM IS DEVELOPING A MODERN NFT MARKETPLACE.
                 MOREOVER, WE ARE ALWAYS LOOKING FOR LATEST ADVANCEMENTS IN THE FIELD AND MOST INNOVATIVE IDEAS TO BE IMPLEMENTED AS PARTS OF OUR PRODUCTS.
                </InfoText>
            </InfoContent>

            <InfoImage>
                <Image src="/image_info.webp" width={600} height={600}/>
            </InfoImage>
    
        </InfoContainer>
        <Divider/>
        </>
    )
}

export default InfoComponent