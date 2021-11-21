const contractRandomString = "randomString"

const mainRandomString = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory(contractRandomString);
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
  /* let txn = await nftContract.makeARandomString()
  await txn.wait() */
};



const runMain = async () => {
  try {
    await mainRandomString();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();