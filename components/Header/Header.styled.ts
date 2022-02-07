import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${colors.darkBg};
    width: 100%;
    height: 100px;

    position: fixed; 
    z-index: 5;
    
`