const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

const { name, symbol } = require("../constants");

async function main() {
  const aniContract = await ethers.getContractFactory("UNNY");

  console.log("deploying...");

  // deploy the contract
  const deployedAniContract = await aniContract.deploy(name, symbol);

  await deployedAniContract.deployed();

  // print the address of the deployed contract
  console.log("ANI Contract Address:", deployedAniContract.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(60000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedAniContract.address,
    constructorArguments: [name, symbol],
    contract: "contracts/UNNY.sol:UNNY"
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });