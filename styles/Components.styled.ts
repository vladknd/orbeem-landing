import styled from 'styled-components'
import {colors} from './colors'

//------------------------------TEXT------------------------------:
interface TextProps {
    font?: string;
    size?: string;
    bold?: boolean;
    opacity?: number;
    lh?: number;
    m?: string;
    p?: string;

}

export const GlowText = styled.p`
    font-family: ${(props: TextProps) => props.font || "Inter"};
    font-weight: ${(props: TextProps) => props.bold ? "bold" : "300"};
    font-size: ${(props: TextProps) => props.size ? props.size : "80px"};

    color: white;
    opacity: ${(props: TextProps) => props.opacity || 1};
     
    margin: ${(props: TextProps) => props.m || 0};
    padding: ${(props: TextProps) => props.p || 0};
    line-height: ${(props: TextProps) => props.lh || 1}; 
    
    text-shadow: 0px 0px 6px rgba(29, 173, 255, 0.25), 0px 0px 33px #B04BFF;
    
    letter-spacing: 7px;
    @media(max-width: 600px) {
        font-size: 50px;
    }
`

//------------------------------BUTTON------------------------------:
interface ButtonProps {
    width?: string;
    height?: string;

    mt?: string;
    mb?: string;
    ml?: number;
    mr?: number;

    align?: string;
}
export const Button = styled.button`
    width: ${(props:ButtonProps) => props.width || "380px"};
    height: ${(props: ButtonProps) => props.height || "110px"};
    color: white;
    background: ${colors.gradientBg};

    margin-top: ${(props: ButtonProps) => props.mt || "0px"};
    margin-bottom: ${(props: ButtonProps) => props.mb || "0px"};
    border-radius: 19px;
    border: none;
    
    font-family: "Corbel";
    font-size: 30px;
    letter-spacing: 4px;

    align-self: center;
    /* justify-self:end; */
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


export const Box = styled.div`
    border: 0.1px solid rgba(117.117,117, 0.8);
    border-radius: 15px;

    background: rgba(14, 14, 14, 0.7);

    box-shadow: inset -5px -4px 4px rgba(0, 0, 0, 0.25);
    
`

export const BoxHeader = styled.h2`
    
    font-family: Inter;
    font-weight: 200;
    font-size: 35px;
    letter-spacing: 8px;
    color: white;

`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100vh;
    background-image: url('/bg.jpg');
`