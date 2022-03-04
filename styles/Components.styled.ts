import styled from 'styled-components'
import {colors} from './colors'

//------------------------------TEXT------------------------------:
interface TextProps {
    font?: string;
    bold?: boolean;
    opacity?: number;
    lh?: number;
    m?: string;
    p?: string;
}

// export const Text = styled.p`
//      font-family: ${(props: TextProps) => props.font || "Arial"};
//      font-weight: ${(props: TextProps) => props.bold ? "bold" : "normal"};

//      color: white;
//      opacity: ${(props: TextProps) => props.opacity || 1};
     
//      margin: ${(props: TextProps) => props.m || 0};
//      padding: ${(props: TextProps) => props.p || 0};
//      line-height: ${(props: TextProps) => props.lh || 1};     
// `

// export const RoadText = styled.p`
//     position: absolute;
//     margin: 10px 0 0 900px;
// `

export const GlowText = styled.p`
    font-family: ${(props: TextProps) => props.font || "Arial"};
    font-weight: ${(props: TextProps) => props.bold ? "bold" : "normal"};

    color: white;
    opacity: ${(props: TextProps) => props.opacity || 1};
     
    margin: ${(props: TextProps) => props.m || 0};
    padding: ${(props: TextProps) => props.p || 0};
    line-height: ${(props: TextProps) => props.lh || 1}; 
    
    text-shadow: 0px 0px 6px rgba(29, 173, 255, 0.25), 0px 0px 33px #B04BFF;
    font-size: 120px;

    @media(max-width: 600px) {
        font-size: 50px;
    }
`

// export const HeaderText = styled(Text)`
//     font-size: 40px;
//     @media(max-width: 600px) {
//         font-size: 30px;
//     }
// `

// export const PlainText = styled(Text)`
//     font-size: 25px;
//     @media(max-width: 600px) {
//         font-size: 20px;
//     }
// `

//------------------------------BUTTON------------------------------:
interface ButtonProps {
    width?: string;
    height?: string;

    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;

    align?: string;
}
export const Button = styled.button`
    width: ${(props:ButtonProps) => props.width || "380px"};
    height: ${(props: ButtonProps) => props.height || "110px"};
    color: white;
    background: ${colors.gradientBg};

    margin-top: ${(props) => `${props.mt}px` || "0px"};
    margin-bottom: ${(props) => `${props.mb}px` || "0px"};
    border-radius: 19px;
    border: none;
    
    font-family: "Corbel";
    font-size: 30px;
    letter-spacing: 4px;

    align-self: ${(props: ButtonProps) => props.align || "start"};
    z-index: 4;
    
    &&:hover {
        opacity: 0.9;
    }

    &&:hover:active {
        opacity: 0.7;
    }

    @media(max-width: 600px){
        width: 300px;
        height: 100px;
    }
`

//------------------------------DIVIDER------------------------------
interface DividerProps {
    mt?: string;
    mb?: string;
}
export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 187, 0, 0) 0%, #FFBB00 50.02%, rgba(255, 187, 0, 0) 100%);
    
    margin-top: ${(props: DividerProps) => props.mt || 0};
    margin-bottom: ${(props: DividerProps) => props.mb || 0};

`