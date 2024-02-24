//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract WorkerCompanyMgmt is AccessControl {
    bytes32 public constant COMPANY_ROLE = keccak256("COMPANY_ROLE");
    bytes32 public constant WORKER_ROLE = keccak256("WORKER_ROLE");

    error CallerNotCompany(address caller);
    error CallerNotWorker(address caller);

    struct Company {
        string companyName;
        address walletAddress;
    }

    struct Worker {
        address walletAddress;
        string location;
        bool isEmployed;
    }

    struct Job {
        uint256 jobId;
        string location;
        address company;
        address[] employedWorkers;
        uint256 salary;
        uint256 vacancies;
    }

    mapping(address => Worker) public workers;
    mapping(address => Company) public companies;
    mapping(address => mapping(uint256 => Job)) public companyJobs;
    mapping(uint256 => Job) public jobs;
    mapping(uint256 => address[]) public jobApplicants;
    mapping(string => address[]) private workersByLocation;
    uint256 jobIdCounter;

    event NewJobPosted(
        uint256 jobId,
        string title,
        uint256 salary,
        uint256 vacancies
    );
    event ApplicationSubmitted(address worker, uint256 jobId);
    event CompanyAdded(string companyName, address company);
    event WorkerAdded(address worker, string location);

    constructor() {
        jobIdCounter = 0;
    }

    function addCompany(
        address _walletAddress,
        string memory _companyName
    ) external {
        require(
            companies[_walletAddress].walletAddress == address(0),
            "Company already exists"
        );
        companies[_walletAddress] = Company(_companyName, _walletAddress);
        _grantRole(COMPANY_ROLE, _walletAddress);
        emit CompanyAdded(_companyName, _walletAddress);
    }

    function addWorker(
        address _walletAddress,
        string memory _location
    ) external {
        require(
            workers[_walletAddress].walletAddress == address(0),
            "Company already exists"
        );
        Worker memory newWorker = Worker(_walletAddress, _location, false);
        workers[_walletAddress] = newWorker;
        workersByLocation[_location].push(_walletAddress);
        _grantRole(WORKER_ROLE, _walletAddress);
        emit WorkerAdded(_walletAddress, _location);
    }

    function postJob(
        string memory _location,
        uint256 _salary,
        uint256 _vacancies
    ) external {
        if (!hasRole(COMPANY_ROLE, msg.sender)) {
            revert CallerNotCompany(msg.sender);
        }
        uint256 jobId = jobIdCounter;
        address companyAddress = msg.sender;
        Job memory newJob = Job(
            jobId,
            _location,
            companyAddress,
            new address[](0),
            _salary,
            _vacancies
        );
        companyJobs[companyAddress][jobId] = newJob;
        jobs[jobId] = newJob;
        jobIdCounter++;
        emit NewJobPosted(jobId, _location, _salary, _vacancies);
    }

    function getAllJobs() external view returns (Job[] memory) {
        uint256 totalJobs = jobIdCounter;

        Job[] memory allJobs = new Job[](totalJobs);
        for (uint256 i = 0; i < totalJobs; i++) {
            Job storage job = jobs[i];
            allJobs[i] = job;
        }

        return allJobs;
    }

    function applyForJob(uint256 _jobId) external {
        if (!hasRole(WORKER_ROLE, msg.sender)) {
            revert CallerNotWorker(msg.sender);
        }
        require(
            workers[msg.sender].isEmployed == false,
            "Worker is already employed"
        );

        address[] storage applicants = jobApplicants[_jobId];
        for (uint256 i = 0; i < applicants.length; i++) {
            require(
                applicants[i] != msg.sender,
                "Worker has already applied for this job"
            );
        }

        jobApplicants[_jobId].push(msg.sender);

        emit ApplicationSubmitted(msg.sender, _jobId);
    }

    function getAllApplicants(
        uint256 _jobId
    ) external view returns (address[] memory) {
        if (!hasRole(COMPANY_ROLE, msg.sender)) {
            revert CallerNotCompany(msg.sender);
        }
        return jobApplicants[_jobId];
    }

    function getWorkersByLocation(
        string memory _location
    ) external view returns (Worker[] memory) {
        address[] memory workerAddresses = workersByLocation[_location];
        Worker[] memory result = new Worker[](workerAddresses.length);

        for (uint256 i = 0; i < workerAddresses.length; i++) {
            result[i] = workers[workerAddresses[i]];
        }

        return result;
    }

    // function isWorker(address _address) external view returns (bool) {
    //     return hasRole(WORKER_ROLE, _address);
    // }

    // function isCompany(address _address) external view returns (bool) {
    //     return hasRole(COMPANY_ROLE, _address);
    // }

    // function getJobsPostedByCompany(address _companyAddress) external view returns (Job[] memory) {
    //     require(hasRole(COMPANY_ROLE, _companyAddress), "Caller is not a company");
    //     uint256 totalJobs = jobIdCounter;
    //     Job[] memory postedJobs = new Job[](totalJobs);
    //     uint256 counter = 0;
    //     for (uint256 i = 0; i < totalJobs; i++) {
    //         Job storage job = jobs[i];
    //         if (job.company == _companyAddress) {
    //             postedJobs[counter] = job;
    //             counter++;
    //         }
    //     }
    //     return postedJobs;
    // }
}
