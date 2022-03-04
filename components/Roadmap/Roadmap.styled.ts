import styled from 'styled-components'

export const RoadmapContainer = styled.div`
    height: 400px;
    background-image: url('horizontal_roadmap.svg');
    background-size: 2000px;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    margin: 30px 0px;

    @media(max-width: 600px){
        background-image: url('vertical_roadmap.svg');
        background-size: 370px; 
        background-position: 50% 100%;
        height: 780px;
    }
`