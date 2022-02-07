import { ethers } from 'ethers'
import ABI from '../ABI/Market'
declare let window: any;

const rpcURL = "https://speedy-nodes-nyc.moralis.io/d7e06cd98ab031958d2d3943/polygon/mumbai"

const requestAccount = async () => {
    await window.ethereum.request({method: "eth_requestAccounts"})
}

export const buyToken = async (amount: number) => {
    if(typeof window.ethereum !== "undefined"){
        await requestAccount()
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract("0x5628f3fb5a57354005215168E2ea8208b32d576e", ABI, signer)
        const overrides = {
            value: (amount*1000000000000000000).toString()
        }
        const transaction = await contract.buyORB(overrides)
        await transaction.wait()
    }
}