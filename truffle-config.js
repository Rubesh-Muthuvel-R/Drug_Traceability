require("babel-register");
require("babel-polyfill");

// "react-particles-js": "^3.5.3",
// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // $ truffle test --network <network-name>
  defaultNetwork: "ganache",
  networks: {
    deployment: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*",
    },
  },
  //   compilers: {
  //     solc: {
  //       version: "^0.4.23",
  //     },
  //   },
  // },

  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/truffle_abis",

  // Set default mocha options here, use special reporters, etc.
  // mocha: {
  //   // timeout: 100000
  // },

  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 200,
      },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
