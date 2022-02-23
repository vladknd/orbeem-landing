import { useState } from 'react'
import { buyToken} from '../../web3/web3Utils'
import { 
    Modal,
    ModalContainer,
    Button,
    Text,
    Input,
    Label
} from "../../styles/components";


interface ModalProps {
    handleModal(): any;
}
const ModalBuyComponent: React.FC<ModalProps> = ({
    handleModal
}) => {
    const [amount, setAmount] = useState(0)

    const handleForm = (e: any) => {
        let amount = parseFloat(e.target.value);

        if (isNaN(amount) || amount < 0) {
            amount = 0;
        }
        setAmount(amount)
    }

    return (
        <ModalContainer
            onClick={(e) => {
                handleModal()
            }}
        >
            <Modal
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <Text
                    font="Arial"
                    m="20px 0 0 0"
                >BUY ORBEEM COIN
                </Text>


                <Label 
                    htmlFor="matic"
                    top="130px"
                    left="580px"
                >MATIC
                </Label>
                <Input 
                    type="number" 
                    id="matic" 
                    placeholder="0"
                    onChange={(e) => {
                        // setAmount(Number(e.target.value))
                        handleForm(e)
                    }}
                />
                

                <Label 
                    htmlFor="orb"
                    top="243px"
                    left="580px"
                >ORB 
                </Label>
                <Input 
                    id="orb" 
                    value={amount*166}
                />

                <Button 
                    width="250px"
                    height="75px"
                    mb={20}
                    onClick={() => {
                        buyToken(amount)
                    }}
                >BUY
                </Button>
            </Modal>
        </ModalContainer>
    );
}

export default ModalBuyComponent;