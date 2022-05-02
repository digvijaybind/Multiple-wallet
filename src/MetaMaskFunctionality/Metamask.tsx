import React,{useEffect, useState} from 'react'
import { injected } from "./networkId";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import * as Styles from "./metamask.style"

let web3=new Web3(Web3.givenProvider);
declare var window:any
const Metamask = () => {

 const { activate, deactivate,chainId,account,active} = useWeb3React();
 const [balance,setBalance]=useState<any>(null);
 const [chainID,setChainID]=useState<any>(undefined);

 console.log(1234,chainID,balance);

 const getUserAddress = async () => {
   const accounts = await window.ethereum.request({
     method: "eth_requestAccounts",
   });
   const accountAddress = accounts[0];
   return accountAddress;
 };

    const getMainBalance = async () => {
      let address = await getUserAddress();
      let balance = await web3.eth.getBalance(address);
      let mainBalance = web3.utils.fromWei(balance);
      return mainBalance;
    };

   const userBalanceNotFound=()=>{
    if(chainID){
      getMainBalance();
     }
  
   }

   useEffect(()=>{
       
   },[])
      

   useEffect(()=>{
       if(chainId!==undefined){
         console.log("chain Id found");
       }else if(chainID!==chainID){
             alert("network is changed");
       }
       else{
           console.log("network is not found");
       }
   },[chainId])


   const connect = async () => {
    try {
      await activate(injected);
      await userBalanceNotFound();
      let userBalance= await getMainBalance();
      setBalance(userBalance);
      setChainID(chainId);
    } catch (err) {
      console.log("not connected to wallet",err);
    }
  };


  const disconnect = async () => {
    try {
      await deactivate();
      setBalance(null);  
    } catch (err) {
      console.log("not disconnect to wallet", err);
    }
  };
 

  return (
    <div>
      <Styles.Heading> Wallet Account Details</Styles.Heading>
      <Styles.Section>
        <Styles.MainCard>
          <Styles.CardItem>
            <h3>Available Address</h3>
            <p>
              <strong>
                {account !== undefined ? account : "Currently not Available"}
              </strong>
            </p>
          </Styles.CardItem>
          <Styles.CardItem>
            <h3>Main Balance</h3>
            <p>
              <strong>
                {balance !== null ? parseFloat(balance).toFixed(5) : "0.00"} ETH
              </strong>
            </p>
          </Styles.CardItem>
          <Styles.CardItem>
            <h3>User NetworkId</h3>
            <p>
              <strong>
                {chainId !== undefined ? chainId : "not available"}
              </strong>
            </p>
          </Styles.CardItem>
          <Styles.buttonContainer>
            
              <Styles.ConnectButton onClick={connect}>
                Connect
              </Styles.ConnectButton>
               <Styles.ConnectButton onClick={disconnect}>
                Disconnect
              </Styles.ConnectButton>
          </Styles.buttonContainer>
        </Styles.MainCard>
      </Styles.Section>
    </div>
  );
}

export default Metamask;