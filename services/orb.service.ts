declare let window: any

//__________________________GLOBAL-IMPORTS__________________________
import { ethers } from "ethers";
//__________________________LOCAL-IMPORTS___________________________
//CONFIGs___________________________________________________________
import { contracts } from "../config";
//SERVICES__________________________________________________________
import { checkMetaMask } from "./web3.services";
//ABIs______________________________________________________________
import Market from '../ABI/Market.json'
// import MintGuard from '../ABI/MintGuard.json'


//__________________________METHODS_________________________________
export const buyORB = async () => {
    // console.log("GOT ADDRESS", _address);
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    const signer = provider.getSigner()
    // const balance = await provider.getBalance(_address)
    const market = new ethers.Contract(contracts.marketContract, Market,signer)
    const options = {
        gasLimit: 3000000,
        value: ethers.utils.parseEther('0.1')
    }; 
    const tx = await market.buyORB(options)
    const txRes = tx.wait()
    console.log("SUCCESS", txRes);
    
    // return ethers.utils.formatEther(balance)
}

