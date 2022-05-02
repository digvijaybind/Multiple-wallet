import React,{useState} from 'react';
import './App.css';
import { Web3ReactProvider} from '@web3-react/core';
import Metamask from './MetaMaskFunctionality/Metamask';
import MultiWallet from './MultiWalletIntegration/MultiWallet';
import { Web3Provider } from '@ethersproject/providers';

const getProvider=(provider:any)=>{
  const library=new Web3Provider(provider)
  library.pollingInterval=12000
  return library
}

function App() {
  
  return (
    <>
     {/* <div>
      <Metamask />
      
     </div> */}
   
      <Web3ReactProvider getLibrary={getProvider}>
         <MultiWallet/>
      </Web3ReactProvider>
    </>
  );
}

export default App;
