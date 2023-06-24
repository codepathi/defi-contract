/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goreli',
    networks :{
      hardhat: {},
      goreli: {
        url: 'https://rpc.ankr.com/eth_goreli',
        accounts: ['0x5f257dbca05e8ea526146b8a63b72609d6b432f3d6df9e29b9765b2f685ec993']
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
