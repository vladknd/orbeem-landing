//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'

//#------------------LOCAL-IMPORTS-------------------#
//-------------------COMPONENTS:
import MediaIcon from './MediaIcon'

//-------------------STYLED-COMPONENTS:
import {
    CommunityContainer,
    MediaContainer
} from './Community.styled'
import {
    Text,
    Divider
} from '../../styles/components'

//#------------------BODY-------------------#
const CommunityComponent = () => {
    return (
        <>
        <Divider/>
        <CommunityContainer>
            <Text
                font="Corbel"
                size="16px"
                m="10px 0 0 0"
            >
                THE ENTRANCE TO A NEW REALITY IS HERE.
            </Text>
            <Text
                font="Corbel"
                size="35px"
                m="0 0 40px 0"
            >
                JOIN OUR COMMUNITY
            </Text>
            <MediaContainer>
                <MediaIcon img="/twitter.svg"/>
                <MediaIcon img="/inst.svg"/>
                <MediaIcon img="/facebook.svg"/>
                <MediaIcon img="/vk.svg"/>
                <MediaIcon img="/telegram.svg"/>
            </MediaContainer>
            <Text
                font="Corbel"
                size="35px"
                m="30px 0 0 0"
            >
                LET'S CONNECT THE <br/>
                FUTURE WITH THE PRESENT
            </Text>
        </CommunityContainer>
        <Divider/>
        </>
    )
}

export default CommunityComponent