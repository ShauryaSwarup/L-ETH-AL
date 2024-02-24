//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract WorkerCompanyMgmt is AccessControl{
    
    bytes32 public constant COMPANY_ROLE = keccak256("COMPANY_ROLE");
    bytes32 public constant WORKER_ROLE = keccak256("WORKER_ROLE");

    error CallerNotCompany(address caller);
    error CallerNotWorker(address caller);

    struct Company{
        string companyName;
        address walletAddress;
    }

    struct Worker{
        address walletAddress;
        string location;
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

    struct Attendance {
        uint256 checkInTime;
        uint256 checkOutTime;
    }

    mapping (address => Worker) public workers;
    mapping (address => Company) public companies;
    mapping (address => mapping(uint256 => Job)) public companyJobs;
    mapping (uint256 => Job) public jobs;
    mapping (uint256 => address[]) public jobApplicants;
    mapping (uint256 => mapping(string => address[])) private jobApplicantsByLocation;
    mapping(address => mapping(uint256 => Attendance[])) public attendanceRecords;
    mapping(address => mapping(uint256 => uint256)) public daysAttended;
    mapping(address => mapping(uint256 => uint256)) public totalHoursWorked;
    mapping(address => uint256) public workerJob;

    uint256 jobIdCounter;

    event NewJobPosted(uint256 jobId, string title, uint256 salary, uint256 vacancies);
    event ApplicationSubmitted(address worker, uint256 jobId);
    event CompanyAdded(string companyName, address company);
    event WorkerAdded(address worker, string location);
    event CheckIn(address indexed user, uint256 indexed jobId, uint256 checkInTime);
    event CheckOut(address indexed user, uint256 indexed jobId, uint256 checkOutTime);

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
        address _walletAddress, 
        string memory _location
    ) external{
        require(workers[_walletAddress].walletAddress == address(0), "Worker already exists");
        Worker memory newWorker = Worker(_walletAddress, _location, false);
        workers[_walletAddress] = newWorker;
        _grantRole(WORKER_ROLE, _walletAddress);
        emit WorkerAdded(_walletAddress, _location);
    }
    // function addWorker(
    //     address _walletAddress,
    //     string memory _location
    // ) external {
    //     require(
    //         workers[_walletAddress].walletAddress == address(0),
    //         "Company already exists"
    //     );
    //     Worker memory newWorker = Worker(_walletAddress, _location, false);
    //     workers[_walletAddress] = newWorker;
    //     workersByLocation[_location].push(_walletAddress);
    //     _grantRole(WORKER_ROLE, _walletAddress);
    //     emit WorkerAdded(_walletAddress, _location);
    // }

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
        if(!hasRole(WORKER_ROLE, msg.sender)){
            revert CallerNotWorker(msg.sender);
        }
        uint256 totalJobs = jobIdCounter;
        
        Job[] memory allJobs = new Job[](totalJobs);
        for(uint256 i = 0; i < totalJobs; i++){
            Job storage job = jobs[i];
            allJobs[i] = job;
        }

        return allJobs;
    } 

    function applyForJob(uint256 _jobId) external {
        if(!hasRole(WORKER_ROLE, msg.sender)){
            revert CallerNotWorker(msg.sender);
        }
        require(workers[msg.sender].isEmployed == false, "Worker is already employed");

        address[] storage applicants = jobApplicants[_jobId];
        for (uint256 i = 0; i < applicants.length; i++) {
            require(applicants[i] != msg.sender, "Worker has already applied for this job");
        }

        jobApplicants[_jobId].push(msg.sender); 
        jobApplicantsByLocation[_jobId][workers[msg.sender].location].push(msg.sender);

        emit ApplicationSubmitted(msg.sender, _jobId);
    }

    function getAllApplicants(uint256 _jobId) external view returns (address[] memory) {
        if(!hasRole(COMPANY_ROLE, msg.sender)){
            revert CallerNotCompany(msg.sender);
        }
        return jobApplicants[_jobId];
    }

    function getApplicantsByLocation(uint256 _jobId, string memory _location) internal view returns(Worker[] memory){
        if(!hasRole(COMPANY_ROLE, msg.sender)){
            revert CallerNotCompany(msg.sender);
        }
        address[] memory workerAddresses = jobApplicantsByLocation[_jobId][_location];
        Worker[] memory result = new Worker[](workerAddresses.length);

        for (uint256 i = 0; i < workerAddresses.length; i++) {
            result[i] = workers[workerAddresses[i]];
        }

        return result;
    }

    function hire(uint256 _jobId) external{
        if(!hasRole(COMPANY_ROLE, msg.sender)){
            revert CallerNotCompany(msg.sender);
        }

        uint256 vacancies = jobs[_jobId].vacancies;
        string memory _location = jobs[_jobId].location;
        require(vacancies > 0, "No vacancies available for this job");

        Worker[] memory applicants = getApplicantsByLocation(_jobId, _location);

        uint256 hiredCount = 0;
        for (uint256 i = 0; i < applicants.length && hiredCount < vacancies; i++) {
            if (!applicants[i].isEmployed) {
                jobs[_jobId].employedWorkers.push(applicants[i].walletAddress);
                workers[applicants[i].walletAddress].isEmployed = true;
                workerJob[applicants[i].walletAddress] = _jobId;
                vacancies--;
                hiredCount++;
            }
        }

        jobs[_jobId].vacancies = vacancies;

        // Delete hired workers from jobApplicants and jobApplicantsByLocation
        for (uint256 i = 0; i < hiredCount; i++) {
            address[] storage applicantsForJob = jobApplicants[_jobId];
            for (uint256 j = 0; j < applicantsForJob.length; j++) {
                if (workers[applicantsForJob[j]].isEmployed) {
                    applicantsForJob[j] = applicantsForJob[applicantsForJob.length - 1];
                    applicantsForJob.pop();
                }
            }

            address[] storage applicantsForLocation = jobApplicantsByLocation[_jobId][_location];
            for (uint256 j = 0; j < applicantsForLocation.length; j++) {
                if (workers[applicantsForLocation[j]].isEmployed) {
                    applicantsForLocation[j] = applicantsForLocation[applicantsForLocation.length - 1];
                    applicantsForLocation.pop();
                }
            }
        }
    }

    function checkIn(uint256 jobId) external {
        require(jobId > 0 && jobId <= jobIdCounter, "Invalid job ID");
        require(workerJob[msg.sender] == jobId, "Not employed for this job");

        Attendance[] storage userAttendance = attendanceRecords[msg.sender][jobId];
        userAttendance.push(Attendance(block.timestamp, 0));

        emit CheckIn(msg.sender, jobId, block.timestamp);
    }

    function checkOut(uint256 jobId) external {
        require(jobId > 0 && jobId <= jobIdCounter, "Invalid job ID");
        require(workerJob[msg.sender] == jobId, "Not employed for this job");

        Attendance[] storage userAttendance = attendanceRecords[msg.sender][jobId];
        require(userAttendance.length > 0 && userAttendance[userAttendance.length - 1].checkOutTime == 0, "Not checked in");

        userAttendance[userAttendance.length - 1].checkOutTime = block.timestamp;

        updateAttendanceStats(msg.sender, jobId);

        emit CheckOut(msg.sender, jobId, block.timestamp);
    }

    function updateAttendanceStats(address user, uint256 jobId) private {
        Attendance[] storage userAttendance = attendanceRecords[user][jobId];
        uint256 attendedDays = 0;
        uint256 totalHours = 0;

        for (uint256 i = 0; i < userAttendance.length; i++) {
            if (userAttendance[i].checkOutTime > 0) {
                attendedDays++;
                totalHours += userAttendance[i].checkOutTime - userAttendance[i].checkInTime;
            }
        }

        daysAttended[user][jobId] = attendedDays;
        totalHoursWorked[user][jobId] = totalHours;
    }

}