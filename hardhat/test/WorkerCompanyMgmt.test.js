const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("WorkerCompanyMgmt Test", function () {
	let WorkerCompanyMgmt, workerCompanyMgmt, owner, addr1, addr2;

	beforeEach(async () => {
		WorkerCompanyMgmt = await ethers.getContractFactory("WorkerCompanyMgmt");
		[owner, addr1, addr2] = await ethers.getSigners();
		workerCompanyMgmt = await WorkerCompanyMgmt.deploy();
	});

	it("Should Add a Company", async function () {
		const companyName = "Kalpataru";
		const walletAddress = ethers.getAddress(
			"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
		);
		await expect(workerCompanyMgmt.addCompany(companyName, walletAddress))
			.to.emit(workerCompanyMgmt, "CompanyAdded")
			.withArgs(companyName, walletAddress);

		const company = await workerCompanyMgmt.companies(walletAddress);

		expect(company.companyName).to.equal(companyName);
		expect(company.walletAddress).to.equal(walletAddress);
	});

  it("Should Return Whether Caller is a Company", async function(){
    expect(await workerCompanyMgmt.isCompany()).to.equal(false);
    await workerCompanyMgmt.addCompany("Kalpataru", owner);
    expect(await workerCompanyMgmt.isCompany()).to.equal(true);
  })

  it("Should Post Two Jobs", async function(){
    const companyName = "Kalpataru";
    const walletAddress = ethers.getAddress("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    workerCompanyMgmt.addCompany(companyName, walletAddress)
    
    const location = "Thane";
    const salary = ethers.parseEther("0.01");
    const vacancies = 10;

		await expect(workerCompanyMgmt.postJob(location, salary, vacancies))
			.to.emit(workerCompanyMgmt, "NewJobPosted")
			.withArgs(0, location, salary, vacancies);
		await expect(workerCompanyMgmt.postJob(location, salary, vacancies))
			.to.emit(workerCompanyMgmt, "NewJobPosted")
			.withArgs(1, location, salary, vacancies);
	});

	it("Should Add a Worker", async function () {
		const walletAddress = addr2
		await expect(workerCompanyMgmt.addWorker(walletAddress, "Vasant Vihar"))
			.to.emit(workerCompanyMgmt, "WorkerAdded")
			.withArgs(walletAddress, "Vasant Vihar");
	});

	it("Should Return All Jobs", async function () {
		const companyName = "Kalpataru";
		const walletAddress = ethers.getAddress(
			"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
		);
		workerCompanyMgmt.addCompany(companyName, walletAddress);

		await workerCompanyMgmt.postJob("Thane", ethers.parseEther("0.01"), 10);
		await workerCompanyMgmt.postJob("Mumbai", ethers.parseEther("0.02"), 20);
		await workerCompanyMgmt.addWorker(owner, "Vasant Vihar");
		const allJobs = await workerCompanyMgmt.getAllJobs();

		expect(allJobs.length).to.equal(2);

		expect(allJobs[0].location).to.equal("Thane");
		expect(allJobs[0].salary).to.equal(ethers.parseEther("0.01"));
		expect(allJobs[0].vacancies).to.equal(10);

		expect(allJobs[1].location).to.equal("Mumbai");
		expect(allJobs[1].salary).to.equal(ethers.parseEther("0.02"));
		expect(allJobs[1].vacancies).to.equal(20);
	});

  it("Should Apply for a Job", async function(){
    await workerCompanyMgmt.addWorker(owner, "Vasant Vihar");
    workerCompanyMgmt.addCompany("Kalpataru", owner);
    workerCompanyMgmt.postJob("Thane", ethers.parseEther("0.01"), 20);
    await expect(workerCompanyMgmt.applyForJob(0)).to.emit(workerCompanyMgmt, "ApplicationSubmitted").withArgs(owner, 0);
    await expect(workerCompanyMgmt.applyForJob(0)).to.be.revertedWith("Worker has already applied for this job");
  })

  it("Should Hire Workers", async function(){
    await workerCompanyMgmt.addCompany("Kalpataru", owner);
    await workerCompanyMgmt.postJob("Vasant Vihar", ethers.parseEther("0.01"), 10);

    await workerCompanyMgmt.addWorker(owner, "Vasant Vihar");
    await workerCompanyMgmt.applyForJob(0);

    await workerCompanyMgmt.hire(0);

    const worker = await workerCompanyMgmt.workers(owner);
    expect(worker.isEmployed).to.be.true;
    expect(await workerCompanyMgmt.workerJob(owner)).to.equal(0);
    const job = await workerCompanyMgmt.jobs(0);
    expect(job.vacancies).to.equal(9);
    
  })

  it("Should Return All Unemployed Workers", async function(){
    await workerCompanyMgmt.addCompany("Kalpataru", owner);
    await workerCompanyMgmt.postJob("Vasant Vihar", ethers.parseEther("0.01"), 10);

    await workerCompanyMgmt.addWorker(owner, "Vasant Vihar");
    await workerCompanyMgmt.addWorker(addr2, "Manpada");
    await workerCompanyMgmt.addWorker(addr1, "Manpada");
    await workerCompanyMgmt.applyForJob(0);
    await workerCompanyMgmt.hire(0);

    const unemployedWorkers = await workerCompanyMgmt.getAllUnemployedWorkers();
    expect(unemployedWorkers).to.have.lengthOf(2);
  })

  it("Should Check In Worker And then Check Out", async function(){
    await workerCompanyMgmt.addCompany("Kalpataru", owner);
    await workerCompanyMgmt.postJob("Vasant Vihar", ethers.parseEther("0.01"), 10);

    await workerCompanyMgmt.addWorker(owner, "Vasant Vihar");
    await workerCompanyMgmt.applyForJob(0);

    await workerCompanyMgmt.hire(0);
    const blockBefore = await ethers.provider.getBlock("latest");
    await expect(workerCompanyMgmt.checkIn(0)).to.emit(workerCompanyMgmt, "WorkerCheckedIn").withArgs(0, owner, parseInt(blockBefore.timestamp) + 1);
    await expect(workerCompanyMgmt.checkIn(0)).to.be.revertedWith("Worker already checked in");
    await expect(workerCompanyMgmt.checkOut()).to.emit(workerCompanyMgmt, "WorkerCheckedOut").withArgs(0, owner, parseInt(blockBefore.timestamp) + 3);
  }) 

})