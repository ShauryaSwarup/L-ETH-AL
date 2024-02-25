const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("DWagesNFT Test", function () {
    let DWagesNFT, dwagesNFT, owner, addr1, addr2, wcmDeployedAddress;

    beforeEach(async () => {
        WorkerCompanyMgmt = await ethers.getContractFactory("WorkerCompanyMgmt");
		workerCompanyMgmt = await WorkerCompanyMgmt.deploy();
        wcmDeployedAddress = await workerCompanyMgmt.getAddress();
        DWagesNFT = await ethers.getContractFactory("DWagesNFT");
        [owner, addr1, addr2] = await ethers.getSigners();
        dwagesNFT = await DWagesNFT.deploy(wcmDeployedAddress);
        await workerCompanyMgmt.addWorker(addr1, "Kandivali");
    });

    it("Should Verify if Worker", async function(){
        expect(await dwagesNFT.connect(addr1).findRole()).to.be.true;
    })

    it("Should mint and list a token", async function () {
        const price = ethers.parseEther("0.1");
        expect(await dwagesNFT.connect(addr1).mint(price)).to.emit(dwagesNFT, "NFTMintedAndListed").withArgs(0);
    });

    it("Should allow redemption of a token", async function () {
        const price = ethers.parseEther("0.1");
        await dwagesNFT.connect(addr1).mint(price);
        await dwagesNFT.connect(addr1).mint(price);
        expect(await dwagesNFT.connect(addr1).redeemToken(0)).to.emit(dwagesNFT, "Redeemed").withArgs(0);
    });

    it("Should fetch user nfts", async function () {
        const price1 = ethers.parseEther("0.1");
        const price2 = ethers.parseEther("0.2");
        await dwagesNFT.connect(addr1).mint(price1);
        await dwagesNFT.connect(addr1).mint(price2);
        userNFTs = await dwagesNFT.connect(addr1).fetchUserNFT();
        expect(userNFTs[0].tokenId).to.equal(0);
        expect(userNFTs[0].price).to.equal(price1);
        expect(userNFTs[1].tokenId).to.equal(1);
        expect(userNFTs[1].price).to.equal(price2);
    });

    // Add more test cases as needed...
});
