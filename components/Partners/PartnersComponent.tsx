//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'

//#------------------LOCAL-IMPORTS-------------------#
//-------------------STYLED-COMPONENTS:
import { 
    PartnersContainer,
    Tokens,
    Partners
} from './Partners.styled'
import { 
    Card, 
    Text 
} from '../../styles/components'


const PartnersComponent = () => {
    return (
        <PartnersContainer id="partners-section">
            <Card
                width="1100px"
                height="250px"
            >
                <Tokens>
                    <Image
                        src="/logo.svg"
                        width={100}
                        height={100}
                    />

                    <Text
                        m="2px 0 0 0"
                    >Totally mined
                    </Text>

                    <Text
                        m="3px 0 0 0"
                    >300,000,000 MC
                    </Text>
                </Tokens>
            </Card>

            <Card
                width="1100px"
                height="320px"
                m="10px 0 0 0"
            >
                <Text
                    m="40px 0 0 0"
                >PARTNERSHIPS 
                </Text>

                <Text
                    m="40px 100px 50px 100px"
                    opacity={0.6}
                >Our partners in building the Orbeem ecosystem.
                </Text>

                <Partners>
                    <Image
                        src="/partners/orb.online.svg"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/partners/orb.cyber.svg"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="/partners/orb.io.svg"
                        width={100}
                        height={100}
                    />
                </Partners>
            </Card>
        </PartnersContainer>
    )
}

export default PartnersComponent