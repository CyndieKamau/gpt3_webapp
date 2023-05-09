/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'alfajores',
    networks: {
      hardhat: {},
      alfajores: {
        url: "https://alfajores-forno.celo-testnet.org",
        accounts: {
          mnemonic: process.env.PRIVATE_KEY,
          path: "m/44'/52752'/0'/0"
        },
        chainId: 44787
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
