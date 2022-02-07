import styled from 'styled-components'
import { colors } from '../../styles/variables'

export const CommunityContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 50px;

    width: 100%;
    height: 600px;
    background-image: url("community_shape.svg");
    background-position: center;
    background-size: 1400px;

    z-index: 1;
`
export const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
`
