const contractRandomString = "randomString"
const main = async () => {
    const nftContractFactory = await ethers.getContractFactory(contractRandomString);
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let txn = await nftContract.makeARandomString();
    await txn.wait();

    txn = await nftContract.makeARandomString();
    await txn.wait();
    
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();