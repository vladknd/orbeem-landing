import styled from 'styled-components'
import { colors } from '../../styles/variables'
export const IconContainer = styled.div`
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, rgba(0,100,200,1) 0%, rgba(100,170,240,1) 35%, rgba(130,60,200,1) 86%);
    display: grid;
    place-items: center;
    clip-path: polygon(50% 0, 89% 24%, 89% 70%, 50% 95%, 10% 70%, 10% 24%);
    
    &&:hover {
        /* background: linear-gradient(70deg, rgba(0,100,200,1) 0%, rgba(100,100,240,1) 35%, rgba(130,20,200,1) 86%); */
        opacity: 0.8;
    }
`

