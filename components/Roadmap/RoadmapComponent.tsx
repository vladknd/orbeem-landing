//#------------------GLOBAL-IMPORTS------------------#
import Image from 'next/image'

//#------------------LOCAL-IMPORTS-------------------#
//-------------------STYLED-COMPONENTS:
import { 
    RoadmapContainer 
} from './Roadmap.styled'

//#------------------BODY-------------------#
const RoadmapComponent = () => {
    return (
        <RoadmapContainer id="roadmap-section">
            <Image
                src="/road.svg"
                width={1920}
                height={500}
            />  
        </RoadmapContainer>
    )
}

export default RoadmapComponent