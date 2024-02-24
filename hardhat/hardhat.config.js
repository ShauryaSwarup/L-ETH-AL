require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.24",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        // mumbai: {
        //     url: process.env.RPC_URL,
        //     accounts: [process.env.PRIVATE_KEY],
        // }
    },
};
