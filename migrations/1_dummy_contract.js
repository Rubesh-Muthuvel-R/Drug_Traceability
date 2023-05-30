const dummy = artifacts.require("dummy");

module.exports = async function (deployer) {
  await deployer.deploy(dummy);
};
