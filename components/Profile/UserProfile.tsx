import Image from "next/image"
import { Button, GlowText } from "../../styles/Components.styled";
import {  
    CalculatorContainer, 
    FieldContainer, 
    Input,
    UserContianer,
    InfoContainer,
    FieldLabel,
    PriceContainer,
    Coin,
    PriceText,
    WalletContainer,
    WalletImage,
    FieldText
} from "./Profile.styled"
import {BoxHeader} from '../../styles/Components.styled'
// import { buyToken } from '../../web3/web3Utils'
import { useContext, useState } from "react";
import { useQuery } from '@apollo/client'
import { UserContext, useUser} from '../../auth/userContext'
import { buyORB } from "../../services/orb.service";
import { useWeb3 } from "../../services/web3.services";

//-------------------CALCULATOR-COMPONENT----------------------------------
interface IInputField {
    placeholder: string;
    image: string;
    change?: (e: any) => void;
    value?: number;
}
const InputField = (props: IInputField) => {
    return (
        <FieldContainer>
            <Input type="text" placeholder={props.placeholder} value={props.value}
                onChange={(e) => {
                    if(props.change) props.change(e)
                }}
                
            /> 
            <Image src={props.image} width={30} height={30}/>
        </FieldContainer> 
    )
}



interface IField {
    img: string;
    text: string;
}
const Field = (props: IField) => {
    return (
        <FieldContainer>
            <FieldText>{props.text}</FieldText>
            <Image src={props.img} width={30} height={30}/>
        </FieldContainer>
    )
}


// const PriceComponent = () => {
//     return (
//         <PriceContainer>
//             <Coin>
//                 <Image src="/ORB.svg" width={130} height={130}/>
//                 <PriceText> 1 ORBM</PriceText>
//             </Coin>
//             <GlowText size="35px">FOR</GlowText>
//             <Coin>
//                 <Image src="/DAI.svg" width={130} height={130}/>
//                 <PriceText> 0.1 DAI</PriceText>
//             </Coin>
//         </PriceContainer>
//     )
// }


const Calculator: React.FC = () => {
    //--------AMOUNT OF DAI ENTERED:
    const [amountDAI, setAmount] = useState<number>(0)
    console.log(amountDAI)
    const { publicAddress } = useWeb3()

    if(publicAddress) {return (
        
        <CalculatorContainer>
            <BoxHeader>
                PURCHASE TOKENS
            </BoxHeader>

            <InputField placeholder="DAI" image="/DAI.svg"
                change={(e)=> {
                    setAmount(e.target.value)
                }}
            />
            <InputField placeholder="ORB" image="/ORB.svg" value={amountDAI/0.1}/>
            <Button width="200px" height="60px"
                onClick={() => {
                    buyORB().then((_promise) => {
                        console.log("SOOOO", _promise);
                        
                    })
                }}
            >BUY
            </Button>
            {/* <PriceComponent></PriceComponent> */}
        </CalculatorContainer> 
    ) } else return null
}

const Wallet: React.FC = () => {
    return (
        <WalletContainer>
            <WalletImage>
                <Image src="/metamask.svg" width={600} height={600}/>
            </WalletImage>
            <BoxHeader>
                WALLET
            </BoxHeader>

            <Field img="/ORB.svg" text="1000"/>
            <Field img="/polygon.svg" text="1000"/>
        </WalletContainer>
    )
}


//-------------------INFO-COMPONENT----------------------------------
// interface IInfoField {
//     placeholder: string;
//     label: string;
// }
// const InfoField = (props: IInfoField) => {
//     return (
//         <FieldContainer>
//             <FieldLabel>{props.label}</FieldLabel>
//             <Input type="text" placeholder={props.placeholder} disabled/> 
//         </FieldContainer> 
//     )
// }




// const ProfileInfo = () => {
//     const {user} = useUser()
//     if(user) {

//     }
//     console.log("CTX", user);

//     return (
//         <InfoContainer>
//             <BoxHeader>
//                 PROFILE INFO
//             </BoxHeader>
//             <InfoField placeholder={user?.username ? user.username : ""} label="USERNAME:"/>
//             <InfoField placeholder={user?.email ? user.email : ""} label="EMAIL:"/>
//             <InfoField placeholder={user?.firstName ? user.firstName : ""} label="FIRST NAME:"/>
//             <InfoField placeholder={user?.surname ? user.surname : ""} label="LAST NAME:"/>
//         </InfoContainer>
//     )
// }




//-----------------USER-PROFILE COMPONENT--------------------------------
const UserProfile: React.FC = () => {
    return(
        <UserContianer>
            <Calculator/>
            <Wallet/>
            {/* <ProfileInfo/> */}
        </UserContianer>
    )
}

export default UserProfile