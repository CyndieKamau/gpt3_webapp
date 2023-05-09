import Web3 from 'web3';

const createWallet = () => {
    // Initialize web3 using the Celo network RPC URL
    const web3 = new Web3('https://alfajores-forno.celo-testnet.org'); 
  
    // Generate a new wallet
    const wallet = web3.eth.accounts.create();
  
    // Store the wallet address and private key securely
    console.log('Wallet address:', wallet.address);
    console.log('Private key:', wallet.privateKey);

    return wallet;
  };
  
  export { createWallet };
