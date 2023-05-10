const hre = require("hardhat");

async function main() {
  // Replace the Lock import with the CrowdFunding import
  const CrowdFunding = await hre.ethers.getContractFactory("crowdFunding");
  
  // Deploy the CrowdFunding contract
  const crowdFunding = await CrowdFunding.deploy();
  await crowdFunding.deployed();

  console.log("CrowdFunding deployed to:", crowdFunding.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
