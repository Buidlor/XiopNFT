
const hre = require("hardhat");
async function main() {
  const XiopNFT = await hre.ethers.getContractFactory("XiopNFT");
  const xiopNFT = await XiopNFT.deploy();
  await xiopNFT.deployed();
  console.log("XiopNFT deployed to:", xiopNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
