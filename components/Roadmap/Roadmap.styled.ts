import styled from 'styled-components'
import { colors } from '../../styles/colors'
import devices from '../../styles/devices'

//-----------------------ROADMAP-CONTAINER-------------------------
export const RoadmapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 0px;
    
    width: 100%;
    height: 100%;
    background-color: rgba(14, 14, 14, 0.6);
    backdrop-filter: blur(41px);
`


//-----------------------ROADMAP-PHASE-------------------------
//PHASE-CONTAINER:
export const PhaseContainer = styled.div`
    width: 100%;
    height: 70vh;
    margin: 50px 0px;
`

//PHASE-CONTENT:
export enum EDirection {
    left,
    right
}
export interface IPhaseContent {
    direction: EDirection
}
export const PhaseContent = styled.div`
    display: flex;
    flex-direction: ${(props: IPhaseContent) => { 
        if(props.direction === EDirection.left) return "row"
        else if(props.direction === EDirection.right) return "row-reverse"
    }};
    justify-content: center;

    flex-wrap: wrap;

    width: 100%;
    height: 100%;
    
`

export const PhaseInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;

    margin: 50px;
`

export const PhaseImage = styled.div`
    margin: 25px;

    @media ${devices.mobileS} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.mobileM} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.mobileL} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.laptopXS} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.laptopS} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.laptopM} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.laptopL} {
        width: 40%;
        height: 100%;
    }
    @media ${devices.laptopXL} {
        width: 20%;
        height: 20%;
    }
    @media ${devices.laptopXXL} {
        width: 25%;
        height: 20%;
    }
`

export const PhaseHeader = styled.h2`
    margin: 0px 0px 25px 0px;

    font-family: 'Play';
    
    color: white;
    opacity: 0.8;

    @media ${devices.mobileS} {
        font-size: 12px;
    }
    @media ${devices.mobileM} {
        font-size: 17px;
    }
    @media ${devices.mobileL} {
        font-size: 15px;
    }
    @media ${devices.laptopXS} {
        font-size: 35px;
    }
    @media ${devices.laptopS} {
        font-size: 35px;
    }
    @media ${devices.laptopM} {
        font-size: 50px;
    }
    @media ${devices.laptopL} {
        font-size: 60px;
    }
    @media ${devices.laptopXL} {
        font-size: 60px;
    }
    @media ${devices.laptopXXL} {
        font-size: 65px;
    }
`

export const PhaseText = styled.div`
    font-family: Inter;
    font-weight: 200;
    font-size: 18px;
    letter-spacing: 5px;
    color: white;
    opacity: 0.5;   
    width: 100%;
    @media ${devices.mobileS} {
        font-size: 12px;
    }
    @media ${devices.mobileM} {
        font-size: 17px;
    }
    @media ${devices.mobileL} {
        font-size: 10px;
    }
    @media ${devices.laptopXS} {
        font-size: 18px;
    }
    @media ${devices.laptopS} {
        font-size: 22px;
    }
    @media ${devices.laptopM} {
        font-size: 26px;
    }
    @media ${devices.laptopL} {
        font-size: 30px;
    }
    @media ${devices.laptopXL} {
        font-size: 30px;
    }
    @media ${devices.laptopXXL} {
        font-size: 30px;
    }
    
`