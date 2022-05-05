import Market from '../ABI/Market'
import DAI from '../ABI/DAI';

import { ethers } from 'ethers';
import { setCookies } from 'cookies-next';
import Router from 'next/router';

declare let window: any;

//-------------------------------------------------------------------------------------------------------------
export const buyToken = async (amountUSDT: number) => {
    if(typeof window.ethereum !== "undefined"){
        const numberOfTokens = ethers.utils.parseUnits(amountUSDT.toString(), 18);
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        
        const market = new ethers.Contract("0x72B52c1D413CfDF585334352098a0ED49973836D", Market, signer)
        const dai = new ethers.Contract("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", DAI, signer)
        
        await dai.approve("0x72B52c1D413CfDF585334352098a0ED49973836D", numberOfTokens)

        const options = {
            gasLimit: 100000,
            gasPrice: ethers.utils.parseUnits('100.0', 'gwei')
        };    
        
        const tx = await market.buyWithDAI(numberOfTokens, options)
        const usdtBalance = await tx.wait()

        console.log("TX", tx)
        console.log("USDT BAL",usdtBalance);
    }
}

export const checkBalanceDAI = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x72B52c1D413CfDF585334352098a0ED49973836D", Market, signer)
        const tx = await market.balanceDAI()
        const balance = ethers.utils.formatEther(tx.toString());
        console.log("BALANCE", balance)
        return balance
    }
}

export const withdrawDAI = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x72B52c1D413CfDF585334352098a0ED49973836D", Market, signer)
        const tx = await market.withdrawDAI()
        await tx.wait()
    }
}

export const checkBalanceORBM = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x72B52c1D413CfDF585334352098a0ED49973836D", Market, signer)
        const tx = await market.balanceORBM()
        const balance = ethers.utils.formatEther(tx.toString());
        console.log("BALANCE", balance)
        return balance
    }
}

export const withdrawORBM = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x72B52c1D413CfDF585334352098a0ED49973836D", Market, signer)
        const tx = await market.withdrawORBM()
        await tx.wait()
    }
}
//-------------------------------------------------------------------------------------------------------------


export const getAccount = async () => {
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    await provider.send("eth_requestAccounts", []);
    const accounts = await provider.listAccounts()
    console.log("ADDR", accounts);
    
    return accounts[0]
}

export const checkMetaMask = async () => {
    let web3
    if(window.ethereum){
        // window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 =  await window.ethereum 
        console.log("WEB3", web3)
        return web3
    } else if(window.web3){
        web3 = await window.web3.currentProvider
        console.log("WEB3", web3)
        return web3
    } else{
        console.log("NO METAMASK")
        alert("INSTALL METAMASK")
    }
}

export const signMessage = async (nonce: string, publicAddress: string) => {
    let web3
    if(window.ethereum){
        web3 =  await window.ethereum 
    } else if(window.web3){
        web3 = await window.web3.currentProvider
    } else{
        console.log("NO METAMASK")
    }
    const provider = new ethers.providers.Web3Provider(web3)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(`I am signing my one-time nonce: ${nonce}`)

    return { 
        publicAddress,
        signature
    }
}

//-------------------------------------LOGIN--------------------------------------------------------
export const login = async () => {
    console.log("LOGIN PROCEDURE INITIATED..")
    
    const addr = await getAccount()
    console.log("LOGIN PROCEDURE: CURRENT ADDRESS", addr);

    console.log("LOGIN PROCEDURE: CHECK USER REQUEST")
    const checkUserRes = await fetch("https://orbeem-landing-api.herokuapp.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query Query($publicAddress: String!) {
                    findUser(publicAddress: $publicAddress) {
                    publicAddress
                    nonce
                    }
                }
            `,
            variables: {
                publicAddress: addr
            }
        })
    })
    const checkUserData = await checkUserRes.json()
    console.log("LOGIN PROCEDURE: CHECK USER DATA", checkUserData);

    if(!checkUserData.data.findUser){
        console.log("LOGIN PROCEDURE: USER NOT FOUND")
        Router.push('/registration')
        throw new Error("USER DOES NOT EXIST")
    } else { 
        const { nonce, publicAddress } = checkUserData.data.findUser
        const sigMsg = await signMessage(nonce, publicAddress)
        console.log("LOGIN PROCEDURE: SIGNATURE",sigMsg)

        console.log("LOGIN PROCEDURE: USER VERIFICATION REQUEST")
        const verifyUserRes = await fetch("https://orbeem-landing-api.herokuapp.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `
                    mutation VerifyUser($publicAddress: String!, $signature: String!) {
                        verifyUser(publicAddress: $publicAddress, signature: $signature) {
                            token,
                            user {
                                publicAddress
                                firstName
                                surname
                                email
                                username
                            }
                        }
                    }
                `,
                variables: sigMsg
    
            })
        })
        const verifyUserData = await verifyUserRes.json()
        console.log("LOGIN PROCEDURE: VERIFY USER DATA", verifyUserData)

        const token = verifyUserData.data.verifyUser.token
        const user = verifyUserData.data.verifyUser.user
        console.log("LOGIN PROCEDURE:TOKEN", token);
        console.log("LOGIN PROCEDURE:USER", user);
        setCookies("jwt", token)
        console.log("LOGIN PROCEDURE: COOKIES SET")
        
        return user
    }
}

export const checkAdmin = async () => {
    const addr = await getAccount()
    console.log("DONE", addr);
    if(addr === "0x16bD38012725eFEc123C31338Ab724573813e36C") return true
    return false
}