//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract WorkerCompanyMgmt is AccessControl{
    
    bytes32 public constant COMPANY_ROLE = keccak256("COMPANY_ROLE");
    bytes32 public constant WORKER_ROLE = keccak256("WORKER_ROLE");

    error CallerNotCompany(address caller);

    struct Company{
        string companyName;
        address walletAddress;
    }

    struct Worker{
        address walletAddress;
        bool isEmployed;
    }

    struct Job{
        uint256 jobId;
        string location;
        address company;
        address[] employedWorkers;
        uint256 salary;   
        uint256 vacancies;
    }

    mapping (address => Worker) public workers;
    mapping (address => Company) public companies;
    mapping (address => mapping(uint256 => Job)) public companyJobs;
    mapping (uint256 => Job) public jobs;
    uint256 jobIdCounter;

    event NewJobPosted(uint256 jobId, string title, uint256 salary, uint256 vacancies);
    event JobApplication(address worker, uint256 jobId);
    event CompanyAdded(string companyName, address company);
    event WorkerAdded(address worker);

    constructor(){
        jobIdCounter = 0;
    }

    function addCompany(
        string memory _companyName,
        address _walletAddress
    ) external{
        require(companies[_walletAddress].walletAddress == address(0), "Company already exists");
        companies[_walletAddress] = Company(_companyName, _walletAddress);
        _grantRole(COMPANY_ROLE, _walletAddress);
        emit CompanyAdded(_companyName, _walletAddress);
    }

    function addWorker(
        address _walletAddress
    ) external{
        require(workers[_walletAddress].walletAddress == address(0), "Company already exists");
        workers[_walletAddress] = Worker(_walletAddress, false);
        _grantRole(WORKER_ROLE, _walletAddress);
        emit WorkerAdded(_walletAddress);
    }

    function postJob(
        string memory _location,
        uint256 _salary,
        uint256 _vacancies
    ) external {
        if(!hasRole(COMPANY_ROLE, msg.sender)){
            revert CallerNotCompany(msg.sender);
        }
        uint256 jobId = jobIdCounter;
        address companyAddress = msg.sender;
        Job memory newJob = Job(jobId, _location, companyAddress, new address[](0), _salary, _vacancies);
        companyJobs[companyAddress][jobId] = newJob;
        jobs[jobId] = newJob;
        jobIdCounter++;
        emit NewJobPosted(jobId, _location, _salary, _vacancies);
    }

    function getAllJobs() external view returns (Job[] memory){
        uint256 totalJobs = jobIdCounter;
        
        Job[] memory allJobs = new Job[](totalJobs);
        for(uint256 i = 0; i < totalJobs; i++){
            Job storage job = jobs[i];
            allJobs[i] = job;
        }

        return allJobs;
    } 

}