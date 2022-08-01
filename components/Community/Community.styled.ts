import styled from 'styled-components'
import { colors } from '../../styles/colors'
import devices from '../../styles/devices'

export const CommunityContainer = styled.div`
    padding-left: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    height: 630px;

    background-image: url("comm.svg");
    background-position: 50% 0%;
    background-size: 1400px;

    @media (max-width: 600px) {
        align-items: center;

        height: 500px;
        background-size: 900px;
        background-position: center;
        background-image: url("circ.svg");
    }

    @media ${devices.mobileS} {
   
    }
    @media ${devices.mobileM} {
        
    }
    @media ${devices.mobileL} {
        
    }
    @media ${devices.laptopXS} {
        background-size: 1350px;
    }
    @media ${devices.laptopS} {
        
    }
    @media ${devices.laptopM} {
        
    }
    @media ${devices.laptopL} {
        
    }
    @media ${devices.laptopXL} {
        height: 700px;
        background-size: 1800px;
    }
    @media ${devices.laptopXXL} {
        height: 700px;
        background-size: 1800px;
        
    }
`

export const ContentContainer = styled.div`
    
    @media (max-width: 600px) {
        margin-top: 900px;
    }
`
