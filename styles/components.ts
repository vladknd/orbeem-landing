import styled from 'styled-components'
import {colors} from './variables'

//------------------------------BUTTON------------------------------:
interface ButtonProps {
    width?: string;
    height?: string;

    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
}
export const Button = styled.button`
    width: ${(props:ButtonProps) => props.width || "380px"};
    height: ${(props: ButtonProps) => props.height || "110px"};

    margin-top: ${(props) => `${props.mt}px` || "0px"};
    margin-bottom: ${(props) => `${props.mb}px` || "0px"};
    border-radius: 19px;
    border: none;
    
    
    font-family: "Corbel";
    font-size: 30px;
    letter-spacing: 4px;

    color: white;
    background: ${colors.gradientBg};

    z-index: 4;
    
    &&:hover {
        opacity: 0.9;
    }

    &&:hover:active {
        opacity: 0.7;
    }

`

//------------------------------TEXT------------------------------:
interface TextProps {
    font?: string;
    bold?: boolean;
    size?: string;
    opacity?: number;
    lh?: number;
    m?: string;
}
export const Text = styled.p`
     font-family: ${(props: TextProps) => props.font || "Arial"};
     font-size: ${(props: TextProps) => props.size || "20px"};
     font-weight: ${(props: TextProps) => props.bold ? "bold" : "normal"};
     /* letter-spacing: 4px; */
     color: white;
     opacity: ${(props: TextProps) => props.opacity || 1};
     
     margin: ${(props: TextProps) => props.m || 0};
     line-height: ${(props: TextProps) => props.lh || 1};
`


export const RoadText = styled.p`
    position: absolute;
    margin: 10px 0 0 900px;
`

export const GlowText = styled(Text)`
    text-shadow: 0px 0px 6px rgba(29, 173, 255, 0.25), 0px 0px 33px #B04BFF;
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

//------------------------------MODAL------------------------------
export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background: rgba(56, 56, 56, 0.5);
    backdrop-filter: blur(4px);

    position: fixed;
    z-index: 10;
`

interface ModalProps {
    width?: string;
    height?: string;
}
export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: ${(props: ModalProps) => props.width || "800px"};
    height: ${(props: ModalProps) => props.height || "450px"};
    background: rgba(14, 14, 14, 0.5);
    box-shadow: inset -5px -4px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(30px);
    border-radius: 30px;

    position: fixed;
    z-index: 11;

    //HIDING INPUT ARROWS:
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield; 
    }
`


//------------------------------INPUT------------------------------
interface InputProps {
    width?: string;
    height?: string;
}
export const Input = styled.input`
    width: ${(props: InputProps) => props.width || "500px"};
    height: ${(props: InputProps) => props.height || "65px"};
    background: rgba(71, 71, 71, 0.51);
    border-radius: 10px;  
    border: none;

    color: white;
    font-size: 20px;
    text-align: center;

    min: "1";
`

interface LabelProps {
    top?: string;
    left?: string;
}
export const Label = styled.label`
    color: white;

    position: absolute;
    top: ${(props: LabelProps) => props.top || "0px"};
    left: ${(props: LabelProps) => props.left || "0px"};
    
`

//------------------------------CARD------------------------------
interface CardProps {
    width?: string;
    height?: string;
    m?: string;
}
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: ${(props: CardProps) => props.width};
    height: ${(props: CardProps) => props.height};
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(35px);
    
    margin: ${(props: CardProps) => props.m || "0px 0px 0px 0px"};
`