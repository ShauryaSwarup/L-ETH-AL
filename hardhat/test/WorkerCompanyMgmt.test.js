const { ethers } = require("hardhat")
const { expect } = require("chai")

describe("WorkerCompanyMgmt Test", function () {
  let WorkerCompanyMgmt, workerCompanyMgmt, owner, addr1, addr2;

  beforeEach(async () => {
    WorkerCompanyMgmt = await ethers.getContractFactory("WorkerCompanyMgmt");
    [owner, addr1, addr2] = await ethers.getSigners();
    workerCompanyMgmt = await WorkerCompanyMgmt.deploy();
  })

  it("Should Add a Company", async function(){
    const companyName = "Kalpataru";
    const walletAddress = ethers.getAddress("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    await expect(workerCompanyMgmt.addCompany(companyName, walletAddress)).to.emit(workerCompanyMgmt, "CompanyAdded").withArgs(companyName, walletAddress);

    const company = await workerCompanyMgmt.companies(walletAddress);

    expect(company.companyName).to.equal(companyName);
    expect(company.walletAddress).to.equal(walletAddress);
  })

  it("Should Post Two Jobs", async function(){
    const companyName = "Kalpataru";
    const walletAddress = ethers.getAddress("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    workerCompanyMgmt.addCompany(companyName, walletAddress)
    
    const location = "Thane";
    const salary = ethers.parseEther("0.01");
    const vacancies = 10;

    await expect(workerCompanyMgmt.postJob(location, salary, vacancies)).to.emit(workerCompanyMgmt, "NewJobPosted").withArgs(0, location, salary, vacancies);
    await expect(workerCompanyMgmt.postJob(location, salary, vacancies)).to.emit(workerCompanyMgmt, "NewJobPosted").withArgs(1, location, salary, vacancies);    
  })

  it("Should Add a Worker", async function(){
    const walletAddress = ethers.getAddress("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    await expect(workerCompanyMgmt.addWorker(walletAddress)).to.emit(workerCompanyMgmt, "WorkerAdded").withArgs(walletAddress);
  })

  it("Should Return All Jobs", async function(){
    const companyName = "Kalpataru";
    const walletAddress = ethers.getAddress("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    workerCompanyMgmt.addCompany(companyName, walletAddress);
    
    await workerCompanyMgmt.postJob("Thane", ethers.parseEther("0.01"), 10);
    await workerCompanyMgmt.postJob("Mumbai", ethers.parseEther("0.02"), 20);
    
    const allJobs = await workerCompanyMgmt.getAllJobs();
    
    expect(allJobs.length).to.equal(2);

    expect(allJobs[0].location).to.equal("Thane");
    expect(allJobs[0].salary).to.equal(ethers.parseEther("0.01"));
    expect(allJobs[0].vacancies).to.equal(10);

    expect(allJobs[1].location).to.equal("Mumbai");
    expect(allJobs[1].salary).to.equal(ethers.parseEther("0.02"));
    expect(allJobs[1].vacancies).to.equal(20);
  })

})