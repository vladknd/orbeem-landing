import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { Button, GlowText } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap-reverse;

    width: 100%;
    height: 100vh;

    margin: 150px 0px 20px 0px;
    
`

export const WelcomeContent = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 4 0px;
    width: 50%;

`

export const WelcomeImage = styled.div`
    /* display: flex; */
    /* justify-content: center; */

    z-index: 1;
    
    @media ${devices.mobileS} {
        width: 60%;
        height: 60%;
    }
    @media ${devices.mobileM} {
        width: 80%;
        height: 80%;
    }
    @media ${devices.mobileL} {
        width: 60%;
        height: 60%;
    }
    @media ${devices.laptopXS} {
        width: 40%;
        height: 100%;
    }
    @media ${devices.laptopS} {
        width: 40%;
        height: 100%;
    }
    @media ${devices.laptopM} {
        width: 40%;
        height: 100%;
    }
    @media ${devices.laptopL} {
        width: 40%;
        height: 100%;
    }
    @media ${devices.laptopXL} {
        width: 40%;
        height: 100%;
    }
    @media ${devices.laptopXXL} {
        width: 40%;
        height: 100%;
    }
`

export const WelcomeHeader = styled(GlowText)`
    padding: 0px 10px;

    line-height: 40px;
    
    @media ${devices.mobileS} {
        font-size: 34px;
    }
    @media ${devices.mobileM} {
        font-size: 40px;
        line-height: 45px;
    }
    @media ${devices.mobileL} {
        font-size: 50px;
    }
    @media ${devices.laptopXS} {
        font-size: 60px;
        line-height: 60px;
    }
    @media ${devices.laptopS} {
        font-size: 60px;
    }
    @media ${devices.laptopM} {
        font-size: 60px;
    }
    @media ${devices.laptopL} {
        font-size: 80px;
        line-height: 80px;
    }
    @media ${devices.laptopXL} {
        font-size: 80px;
    }
    @media ${devices.laptopXXL} {
        font-size: 100px;
        line-height: 100px;
    }
`

export const WelcomeText = styled.p`
    font-size: 25px;
    font-family: Inter;
    font-weight: 200;
    letter-spacing: 3px;
    color: white;
    opacity: 0.8;
    width: 100%;

    padding: 0px 20px;
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
        
    }
    @media ${devices.laptopXL} {
       
    }
    @media ${devices.laptopXXL} {
        font-size: 30px;
    }
`

export const WelcomeButton = styled(Button)`
    @media ${devices.mobileS} {
        display: none;
    }
    @media ${devices.mobileM} {
        display: none;
    }
    @media ${devices.mobileL} {
        display: none;
    }
    @media ${devices.laptopXS} {

    }
    @media ${devices.laptopS} {
        
    }
    @media ${devices.laptopM} {
       
    }
    @media ${devices.laptopL} {
        
    }
    @media ${devices.laptopXL} {
       
    }
    @media ${devices.laptopXXL} {
        
    }
`