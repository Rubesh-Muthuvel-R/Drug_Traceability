const Proof = artifacts.require("dummy");
module.exports = function(deployer) {
  deployer.deploy(Proof);
};