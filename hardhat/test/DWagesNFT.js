const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("DWagesNFT Test", function () {
    let DWagesNFT, dwagesNFT, owner, addr1, addr2;

    beforeEach(async () => {
        DWagesNFT = await ethers.getContractFactory("DWagesNFT");
        [owner, addr1, addr2] = await ethers.getSigners();
        dwagesNFT = await DWagesNFT.deploy();
    });

    it("Should mint and list a token", async function () {
        const price = ethers.parseEther("0.1");
        const listingPrice = await dwagesNFT.getListingPrice(); // Fetching listing price
        console.log(price);
        await expect(dwagesNFT.companyMints(listingPrice))
            .to.emit(dwagesNFT, "MarketTokenCreated")
            .withArgs(1, owner.address, dwagesNFT.address, price, false);

        const listedToken = await dwagesNFT.idToMarketToken(1);
        expect(listedToken.price).to.equal(price);
    });

    it("Should update listing price", async function () {
        const newPrice = ethers.parseEther("0.05");
        const listingPrice = await dwagesNFT.getListingPrice(); // Fetching listing price
        await dwagesNFT.updateListingPrice(newPrice);

        expect(await dwagesNFT.getListingPrice()).to.equal(newPrice);
    });

    it("Should allow redemption of a token", async function () {
        const price = ethers.parseEther("0.1");
        const listingPrice = await dwagesNFT.getListingPrice(); // Fetching listing price
        await dwagesNFT.companyMints(price);

        await expect(dwagesNFT.redeemToken(1))
            .to.emit(dwagesNFT, "Transfer")
            .withArgs(owner.address, ethers.constants.AddressZero, 1);
    });

    it("Should transfer token to worker", async function () {
        const price = ethers.parseEther("0.1");
        const listingPrice = await dwagesNFT.getListingPrice(); // Fetching listing price
        await dwagesNFT.companyMints(price);

        await expect(dwagesNFT.transferToWorker(1, { value: price }))
            .to.emit(dwagesNFT, "Transfer")
            .withArgs(dwagesNFT.address, owner.address, 1);
    });

    // Add more test cases as needed...
});
