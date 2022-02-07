import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    padding: 100px;

    width: 100%;
    height: 900px;
    background-color: ${colors.darkBg};
    background-image: url("/logo_0.png");
    background-repeat: no-repeat;
    background-size: contain;

    z-index: 1;
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    width: 1200px;
`
export const InfoImage = styled.div`
    width: 100%;
    height: 500px;
`