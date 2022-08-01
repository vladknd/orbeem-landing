import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import devices from '../../styles/devices'

export const HeaderContainer = styled.div`
    padding: 0px 20px;

    position: fixed; 
    z-index: 5;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 90px;

    background-color: ${colors.darkBg};
    
`

export const HeaderSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 10px;

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
        display: flex;
    }
    @media ${devices.laptopS} {
        display: flex;
    }
    @media ${devices.laptopM} {
        display: flex;
    }
    @media ${devices.laptopL} {
        display: flex;
    }
    @media ${devices.laptopXL} {
        display: flex;
    }
    @media ${devices.laptopXXL} {
        display: flex;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    height: 10px;
`
export const HeaderLink = styled.a`
    margin: 0px 15px;
    
    font-family: Inter;
    font-weight: 200;
    letter-spacing: 5px;

    color: white;
    opacity: 0.7;

    &:hover {
        opacity: 0.8;
        cursor: pointer
    }
    &:hover:active {
        opacity: 0.9;
        cursor: pointer
    }

    @media ${devices.mobileS} {
       font-size: 15px;
    }
    @media ${devices.mobileM} {
        font-size: 15px;
    }
    @media ${devices.mobileL} {
        font-size: 15px;
    }
    @media ${devices.laptopXS} {
        font-size: 10px;
    }
    @media ${devices.laptopS} {
        font-size: 12px;
    }
    @media ${devices.laptopM} {
        font-size: 13px;
    }
    @media ${devices.laptopL} {
        font-size: 15px;
    }
    @media ${devices.laptopXL} {
        font-size: 15px;
    }
    @media ${devices.laptopXXL} {
        font-size: 15px;
    }
`


export const AccountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    
    width: 600px;
    height: 40px;
    padding: 0px 15px;
    border-radius: 25px;
    background-color: rgba(112, 112, 112, 0.24);

    color: white;
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    letter-spacing: 2.5px;
    text-align: center;
    
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #6d52d1;
        background-color: rgba(112, 112, 112, 0.14);
        cursor: pointer;
    }
    &:hover:active {
        opacity: 0.9;
    }

    @media ${devices.mobileS} {
       font-size: 15px;
    }
    @media ${devices.mobileM} {
        font-size: 15px;
    }
    @media ${devices.mobileL} {
        font-size: 15px;
    }
    @media ${devices.laptopXS} {
        width: 420px;
        font-size: 10px;
    }
    @media ${devices.laptopS} {
        font-size: 15px;
    }
    @media ${devices.laptopM} {
        width: 550px;

        font-size: 14px;
    }
    @media ${devices.laptopL} {
        font-size: 15px;
    }
    @media ${devices.laptopXL} {
        font-size: 15px;
    }
    @media ${devices.laptopXXL} {
        font-size: 15px;
    }
`

export const MetamaskLogo = styled.div`
    margin: 0px 10px 0px 0px;
    /* width: 100%; */
    /* height: 100%; */
    /* display: block; */
`