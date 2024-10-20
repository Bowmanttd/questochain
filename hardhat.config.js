/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "volta",
  networks: {
    hardhat: {},
    volta: {
      url: process.env.API_URL || "https://volta-rpc.energyweb.org",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 73799 // Volta's Chain ID
    }
  },
};
