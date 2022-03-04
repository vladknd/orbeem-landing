import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: ${colors.darkBg};
    width: 100%;
    height: 100px;
    padding: 0px 20px; 
    /* @media (max-width: 600px) {
        height: 200px;   
    } */

    position: fixed; 
    z-index: 5;
    
`

export const HeaderSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 900px;
    height: 10px;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 500px;
`