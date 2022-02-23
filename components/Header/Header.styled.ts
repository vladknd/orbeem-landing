import styled from 'styled-components'
import Link from 'next/link'
import { colors } from '../../styles/variables'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: ${colors.darkBg};
    width: 100%;
    height: 100px;
    padding: 0px 20px; 

    position: fixed; 
    z-index: 5;
    
`

export const HeaderSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 600px;
    height: 10px;
`