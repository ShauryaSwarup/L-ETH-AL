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
        uint256 workerId;
        address walletAddress;
        string location;
        bool isEmployed;
    }

    struct Job {
        string comapnyName;
        uint256 jobId;
        string location;
        address company;
        address[] employedWorkers;
        uint256 salary;
        uint256 vacancies;
    }

    struct Attendance {
        uint256 jobId;
        address workerWalletAddress;
        uint256 checkInTime;
        uint256 checkOutTime;
    }

    mapping(address => Worker) public workers;
    mapping(address => Company) public companies;
    mapping(address => mapping(uint256 => Job)) public companyJobs;
    mapping(uint256 => Job) public jobs;
    mapping(uint256 => address[]) public jobApplicants;
    mapping(uint256 => mapping(string => address[]))
        private jobApplicantsByLocation;
    mapping(address => uint256) public workerJob;
    mapping(uint256 => Worker) public unemployedWorkers;
    mapping(address => uint256) public totalHoursWorked;
    mapping(address => Attendance) public attendanceRecords;

    uint256 jobIdCounter;
    uint256 workerIdCounter;
    uint256 public totalUnemployedWorkers;

    event NewJobPosted(
        uint256 jobId,
        string title,
        uint256 salary,
        uint256 vacancies
    );
    event ApplicationSubmitted(address worker, uint256 jobId);
    event CompanyAdded(string companyName, address company);
    event WorkerAdded(address worker, string location);
    event WorkerCheckedIn(uint256 jobId, address workerWalletAddress, uint256 checkInTime);
    event WorkerCheckedOut(uint256 jobId, address workerWalletAddress, uint256 checkOutTime);

    constructor() {
        jobIdCounter = 0;
        workerIdCounter = 0;
        totalUnemployedWorkers = 0;
    }

    function addCompany(
        string memory _companyName,
        address _walletAddress
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
            "Worker already exists"
        );
        Worker memory newWorker = Worker(
            workerIdCounter,
            _walletAddress,
            _location,
            false
        );
        workers[_walletAddress] = newWorker;
        unemployedWorkers[workerIdCounter] = newWorker;
        totalUnemployedWorkers++;
        workerIdCounter++;
        _grantRole(WORKER_ROLE, _walletAddress);
        emit WorkerAdded(_walletAddress, _location);
    }

    function isWorker() external view returns (bool) {
        return hasRole(WORKER_ROLE, msg.sender);
    }

    function isCompany() external view returns (bool) {
        return hasRole(COMPANY_ROLE, msg.sender);
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
        Company memory company = companies[msg.sender];
        string memory companyName = company.companyName;
        Job memory newJob = Job(
            companyName,
            jobId,
            _location,
            msg.sender,
            new address[](0),
            _salary,
            _vacancies
        );
        companyJobs[msg.sender][jobId] = newJob;
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

    function getMyJobs(address _company) external view returns (Job[] memory) {
        uint256 totalJobs = jobIdCounter;
        uint256 companyJobsCount = 0;

        // Counting the number of jobs belonging to the company
        for (uint256 i = 0; i < totalJobs; i++) {
            if (jobs[i].company == _company) {
                companyJobsCount++;
            }
        }

        // Creating an array to store company jobs
        Job[] memory myJobs = new Job[](companyJobsCount);
        uint256 index = 0;

        // Storing company jobs in the array
        for (uint256 i = 0; i < totalJobs; i++) {
            if (jobs[i].company == _company) {
                myJobs[index] = jobs[i];
                index++;
            }
        }

        return myJobs;
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
        jobApplicantsByLocation[_jobId][workers[msg.sender].location].push(
            msg.sender
        );

        emit ApplicationSubmitted(msg.sender, _jobId);
    }

    function getAllApplicants(
        uint256 _jobId
    ) external view returns (Worker[] memory) {
        if (!hasRole(COMPANY_ROLE, msg.sender)) {
            revert CallerNotCompany(msg.sender);
        }
        address[] memory workerAddresses = jobApplicants[_jobId];
        Worker[] memory result = new Worker[](workerAddresses.length);
        for (uint i = 0; i < workerAddresses.length; i++) {
            result[i] = workers[workerAddresses[i]];
        }
        return result;
    }

    function getAllUnemployedWorkers() external view returns (Worker[] memory) {
        Worker[] memory unemployedWorkersArray = new Worker[](
            totalUnemployedWorkers
        );

        for (uint256 i = 0; i < totalUnemployedWorkers; i++) {
            unemployedWorkersArray[i] = unemployedWorkers[i];
        }

        return unemployedWorkersArray;
    }

    function getApplicantsByLocation(
        uint256 _jobId,
        string memory _location
    ) internal view returns (Worker[] memory) {
        if (!hasRole(COMPANY_ROLE, msg.sender)) {
            revert CallerNotCompany(msg.sender);
        }
        address[] memory workerAddresses = jobApplicantsByLocation[_jobId][
            _location
        ];
        Worker[] memory result = new Worker[](workerAddresses.length);

        for (uint256 i = 0; i < workerAddresses.length; i++) {
            result[i] = workers[workerAddresses[i]];
        }

        return result;
    }

    function hire(uint256 _jobId) external {
        if (!hasRole(COMPANY_ROLE, msg.sender)) {
            revert CallerNotCompany(msg.sender);
        }

        Job memory job = jobs[_jobId];
        uint256 vacancies = job.vacancies;
        string memory _location = job.location;
        address companyAddress = job.company;
        require(
            companyAddress == msg.sender,
            "This job is not offered by you."
        );
        require(vacancies > 0, "No vacancies available for this job");

        Worker[] memory applicants = getApplicantsByLocation(_jobId, _location);

        uint256 hiredCount = 0;
        for (
            uint256 i = 0;
            i < applicants.length && hiredCount < vacancies;
            i++
        ) {
            Worker memory worker = applicants[i];
            if (!worker.isEmployed) {
                jobs[_jobId].employedWorkers.push(worker.walletAddress);
                workers[worker.walletAddress].isEmployed = true;
                workerJob[worker.walletAddress] = _jobId;
                totalHoursWorked[worker.walletAddress] = 0;
                vacancies--;
                hiredCount++;
                totalUnemployedWorkers--;
                delete unemployedWorkers[applicants[i].workerId];
            }
        }

        jobs[_jobId].vacancies = vacancies;

        // Delete hired workers from jobApplicants and jobApplicantsByLocation
        for (uint256 i = 0; i < hiredCount; i++) {
            address[] storage applicantsForJob = jobApplicants[_jobId];
            for (uint256 j = 0; j < applicantsForJob.length; j++) {
                if (workers[applicantsForJob[j]].isEmployed) {
                    applicantsForJob[j] = applicantsForJob[
                        applicantsForJob.length - 1
                    ];
                    applicantsForJob.pop();
                }
            }

            address[] storage applicantsForLocation = jobApplicantsByLocation[
                _jobId
            ][_location];
            for (uint256 j = 0; j < applicantsForLocation.length; j++) {
                if (workers[applicantsForLocation[j]].isEmployed) {
                    applicantsForLocation[j] = applicantsForLocation[
                        applicantsForLocation.length - 1
                    ];
                    applicantsForLocation.pop();
                }
            }
        }
    }

    function checkIn(uint256 _jobId) external {
        require(attendanceRecords[msg.sender].checkInTime == 0, "Worker already checked in");
        Attendance memory newAttendance = Attendance({
            jobId: _jobId,
            workerWalletAddress: msg.sender,
            checkInTime: block.timestamp,
            checkOutTime: 0 
        });
        attendanceRecords[msg.sender] = newAttendance;
        emit WorkerCheckedIn(_jobId, msg.sender, block.timestamp);
    }

    function checkOut() external {
        require(attendanceRecords[msg.sender].checkInTime != 0, "Worker has not checked in");
        
        require(attendanceRecords[msg.sender].checkOutTime == 0, "Worker already checked out");
        
        attendanceRecords[msg.sender].checkOutTime = block.timestamp;
        Attendance memory attendance = attendanceRecords[msg.sender];
        totalHoursWorked[msg.sender] = attendance.checkOutTime - attendance.checkInTime;
        
        emit WorkerCheckedOut(attendanceRecords[msg.sender].jobId, msg.sender, block.timestamp);
    }
}
