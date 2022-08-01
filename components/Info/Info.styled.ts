import styled from 'styled-components'
import { colors } from '../../styles/colors'
import devices from '../../styles/devices'

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    height: 80vh;
    /* padding: 20px 0px; */
    background-color: ${colors.darkBg};

    @media(max-width: 600px){
        margin-top: 500px;
    }
    margin-top: 200px;

`

export const InfoContent = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    
    width: 55%;
`

export const InfoImage =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    /* width: 45%; */

    @media ${devices.mobileS} {
        width: 30%;
    }
    @media ${devices.mobileM} {
        width: 30%;
    }
    @media ${devices.mobileL} {
        width: 30%;
    }
    @media ${devices.laptopXS} {
        width: 30%;
    }
    @media ${devices.laptopS} {
        width: 30%;
    }
    @media ${devices.laptopM} {
        width: 35%;
    }
    @media ${devices.laptopL} {
        width: 30%;
    }
    @media ${devices.laptopXL} {
        width: 30%;
    }
    @media ${devices.laptopXXL} {
        width: 40%;
    }
`

export const InfoHeader = styled.h2`
    margin: 0px;
    padding: 0px 10px;

    font-size: 35px;
    font-family: Inter;
    font-weight: 200;
    color: white;
    letter-spacing: 5px;

    

    @media ${devices.mobileS} {
        font-size: 34px;
    }
    @media ${devices.mobileM} {
        font-size: 40px;
        line-height: 45px;
    }
    @media ${devices.mobileL} {
        font-size: 10px;
    }
    @media ${devices.laptopXS} {
        font-size: 28px;
    }
    @media ${devices.laptopS} {
        font-size: 40px;
    }
    @media ${devices.laptopM} {
        font-size: 40px;
    }
    @media ${devices.laptopL} {
        font-size: 40px;
    }
    @media ${devices.laptopXL} {
        font-size: 50px;
    }
    @media ${devices.laptopXXL} {
        font-size: 50px;
    }
`

export const InfoText = styled.p`
    margin: 20px 0px 0px 0px;
    padding: 0px 20px;
    color: white;
    opacity: 0.6;

    font-family: Inter;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 6px;

    @media ${devices.mobileS} {
        font-size: 16px;
    }
    @media ${devices.mobileM} {
        font-size: 16px;
    }
    @media ${devices.mobileL} {
        font-size: 10px;
    }
    @media ${devices.laptopXS} {
        font-size: 20px;
    }
    @media ${devices.laptopS} {
        font-size: 20px;
    }
    @media ${devices.laptopM} {
        font-size: 25px;
    }
    @media ${devices.laptopL} {
        font-size: 20px;
    }
    @media ${devices.laptopXL} {
        font-size: 22px;
    }
    @media ${devices.laptopXXL} {
        font-size: 25px;
    }
`