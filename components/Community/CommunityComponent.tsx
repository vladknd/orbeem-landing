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
                <MediaIcon img="/media/inst.png" link="https://www.instagram.com/orbeem_orb/"/>
                <MediaIcon img="/media/discord.png"link="https://discord.gg/66C9NThy4Y"/>
                <MediaIcon img="/media/youtube.png" link="https://www.youtube.com/channel/UCzdsuAip2pnf5munqiVbnwQ"/>
                <MediaIcon img="/media/twitter.png" link="https://twitter.com/Orbeem_ORB"/>
                <MediaIcon img="/media/telegram.png" link="https://t.me/orbeemRBM"/>
                <MediaIcon img="/media/facebook.png" link="https://www.facebook.com/Orbeem/"/>
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