module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  
  networks: {
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 6721975,          // Gas sent with each transaction (default: ~6700000)
      gasPrice: 20000000000  // 20 gwei (in wei) (default: 100 gwei)
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",  // Solidity version
      settings: {        // Solidity optimizer settings
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
