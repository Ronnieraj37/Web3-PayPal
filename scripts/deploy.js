const hre = require("hardhat");

async function main() {
  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const PaypalInstance = await Paypal.deploy();
  await PaypalInstance.deployed();

  console.log(`Paypal deployed to ${PaypalInstance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
