import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    background-image: url('/mainBg.jpg');
    width: 100%;
    height: 800px;
`

export const WelcomeContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 4 0px;

`

export const WelcomeImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 600px;
`

