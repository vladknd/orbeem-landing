import styled from 'styled-components'
import { Box } from '../../styles/Components.styled'
export const UserContianer = styled.div`
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
    
    height: 90vh;
`


//-------------CALCULATOR-----------------------
export const CalculatorContainer = styled(Box)`
    width: 50%;
    height: 90%;

    display: flex;
    flex-direction: column; 
    align-items: center;

`
export const Input = styled.input`
    width: 90%;
    height: 100%;
    background: transparent;
    color: white;
    border: none;
    outline: none;
    //TODO: ADD border color on focus
`
export const FieldContainer = styled.div`
    margin-bottom: 20px;
    padding: 0px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 80%;
    height: 50px;

    border: none;
    border-radius: 12px;
    background-color: rgba(164, 164, 164, 0.17);


`

export const FieldText = styled.p`
    font-family: Inter;
    font-weight: 200;
    font-size: 18px;
    letter-spacing: 3px;

    color: white;


`

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    
    margin-top: 60px;
    
`

export const PriceText = styled.p`
    color: white;
`

export const Coin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

//---------------------PROFILE-INFO------------------------
export const InfoContainer = styled(Box)`
    width: 800px;
    height: 600px;

    display: flex;
    flex-direction: column; 
    align-items: center;
`
export const FieldLabel = styled.p`
    color: white;
    opacity: 0.6;
    width: 150px;

    margin: 0px 10px;
`

export const WalletContainer = styled(Box)`
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 90%;
`

export const WalletImage = styled.div`
    margin-bottom: 30px;
    height: 30%;
    width: 30%;
`