//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image';

//#------------------LOCAL-IMPORTS-------------------#
//-------------------STYLED-COMPONENTS:
import { 
    Text,
    Divider
} from '../../styles/components'
import { 
    InfoContainer,
    InfoContent,
    InfoImage
} from './Info.styled'

//#------------------BODY-------------------#
const InfoComponent = () => {
    return (
        <>
            <Divider
                mt="150px"
            />
            <InfoContainer>
                <InfoContent>
                    <Text
                        font="Arial"
                        size="40px"
                        bold={true}
                        lh={1.5}
                    >ORBEEM ECOSYSTEM <br/>
                     EFFICIENT, SECURE AND RELIABLE<br/>
                     NFT PLATFORM.<br/>
                    </Text>

                    <Text
                        font="Corbel"
                        size="24px"
                        opacity={0.5}
                        lh={1.2}
                        m="20px 0 0 0"
                    >ORBEEM UNIVERSE - IS A HIGH-END BLOCKCHAIN ECOSYSTEM, MADE FOR CREATORS AND ADMIRERS OF DIGITAL ART AS WELL AS CRYPTO-ENTHUSIASTS.<br/>
                     BESIDES ORB TOKEN, ORBEEM UNIVERSE OFFERS A WIDE RANGE OF MEDIA SERVICES RELATED TO NFT, DIGITAL ART, eSPORTS AND MODERN BLOCKCHAIN TECHNOLOGIES.<br/>
                     OUR TEAM IS DEVELOPING A MODERN NFT MARKETPLACE.<br/>
                     MOREOVER, WE ARE ALWAYS LOOKING FOR LATEST ADVANCEMENTS IN THE FIELD AND MOST INNOVATIVE IDEAS TO BE IMPLEMENTED AS PARTS OF OUR PRODUCTS.<br/>
                    </Text>
                </InfoContent>

                <InfoImage>
                    <Image
                        src="/image_info.png"
                        width={700}
                        height={700}
                    />
                </InfoImage>
            </InfoContainer>
            <Divider/>
        </>
    );
}

export default InfoComponent