const SupplyChain = artifacts.require("SupplyChain");

module.exports = function (deployer) {
  deployer.deploy(SupplyChain, "0x5066087B678d4E18eD27660C3b9E0222f84230b6 ", {
    gas: 6721975, // Maximum block gas limit
  });
};
