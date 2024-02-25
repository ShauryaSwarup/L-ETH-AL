export const WCM = {
    _format: "hh-sol-artifact-1",
    contractName: "WorkerCompanyMgmt",
    sourceName: "contracts/WorkerCompanyMgmt.sol",
    abi: [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [],
            name: "AccessControlBadConfirmation",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    internalType: "bytes32",
                    name: "neededRole",
                    type: "bytes32",
                },
            ],
            name: "AccessControlUnauthorizedAccount",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "caller",
                    type: "address",
                },
            ],
            name: "CallerNotCompany",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "caller",
                    type: "address",
                },
            ],
            name: "CallerNotWorker",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "worker",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
            ],
            name: "ApplicationSubmitted",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "string",
                    name: "companyName",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "company",
                    type: "address",
                },
            ],
            name: "CompanyAdded",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "title",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "salary",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "vacancies",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "hoursPerDay",
                    type: "uint256",
                },
            ],
            name: "NewJobPosted",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "_workerAddress",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                },
            ],
            name: "PaymentMade",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "previousAdminRole",
                    type: "bytes32",
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "newAdminRole",
                    type: "bytes32",
                },
            ],
            name: "RoleAdminChanged",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
            ],
            name: "RoleGranted",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
            ],
            name: "RoleRevoked",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "worker",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "location",
                    type: "string",
                },
            ],
            name: "WorkerAdded",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "workerWalletAddress",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "checkInTime",
                    type: "uint256",
                },
            ],
            name: "WorkerCheckedIn",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "address",
                    name: "workerWalletAddress",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "checkOutTime",
                    type: "uint256",
                },
            ],
            name: "WorkerCheckedOut",
            type: "event",
        },
        {
            inputs: [],
            name: "COMPANY_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "WORKER_ROLE",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_companyName",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "_walletAddress",
                    type: "address",
                },
            ],
            name: "addCompany",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_walletAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "_location",
                    type: "string",
                },
            ],
            name: "addWorker",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "applyForJob",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "attendanceRecords",
            outputs: [
                {
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "workerWalletAddress",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "checkInTime",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "checkOutTime",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "checkIn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "checkOut",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "companies",
            outputs: [
                {
                    internalType: "string",
                    name: "companyName",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "walletAddress",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "companyJobs",
            outputs: [
                {
                    internalType: "string",
                    name: "companyName",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    internalType: "string",
                    name: "location",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "company",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "salary",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "vacancies",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "hoursPerDay",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "getAllApplicants",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "workerId",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "walletAddress",
                            type: "address",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "bool",
                            name: "isEmployed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Worker[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getAllJobs",
            outputs: [
                {
                    components: [
                        {
                            internalType: "string",
                            name: "companyName",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "jobId",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "address",
                            name: "company",
                            type: "address",
                        },
                        {
                            internalType: "address[]",
                            name: "employedWorkers",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256",
                            name: "salary",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "vacancies",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "hoursPerDay",
                            type: "uint256",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Job[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getAllUnemployedWorkers",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "workerId",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "walletAddress",
                            type: "address",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "bool",
                            name: "isEmployed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Worker[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentJob",
            outputs: [
                {
                    components: [
                        {
                            internalType: "string",
                            name: "companyName",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "jobId",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "address",
                            name: "company",
                            type: "address",
                        },
                        {
                            internalType: "address[]",
                            name: "employedWorkers",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256",
                            name: "salary",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "vacancies",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "hoursPerDay",
                            type: "uint256",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Job",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "getEmployeesByJob",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "workerId",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "walletAddress",
                            type: "address",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "bool",
                            name: "isEmployed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Worker[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "getJobById",
            outputs: [
                {
                    components: [
                        {
                            internalType: "string",
                            name: "companyName",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "jobId",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "address",
                            name: "company",
                            type: "address",
                        },
                        {
                            internalType: "address[]",
                            name: "employedWorkers",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256",
                            name: "salary",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "vacancies",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "hoursPerDay",
                            type: "uint256",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Job",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getJobsAppliedToByWorker",
            outputs: [
                {
                    internalType: "uint256[]",
                    name: "",
                    type: "uint256[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_company",
                    type: "address",
                },
            ],
            name: "getMyJobs",
            outputs: [
                {
                    components: [
                        {
                            internalType: "string",
                            name: "companyName",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "jobId",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "address",
                            name: "company",
                            type: "address",
                        },
                        {
                            internalType: "address[]",
                            name: "employedWorkers",
                            type: "address[]",
                        },
                        {
                            internalType: "uint256",
                            name: "salary",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "vacancies",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "hoursPerDay",
                            type: "uint256",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Job[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
            ],
            name: "getRoleAdmin",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getWorkerFromAddress",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "workerId",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "walletAddress",
                            type: "address",
                        },
                        {
                            internalType: "string",
                            name: "location",
                            type: "string",
                        },
                        {
                            internalType: "bool",
                            name: "isEmployed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct WorkerCompanyMgmt.Worker",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "hasRole",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_jobId",
                    type: "uint256",
                },
            ],
            name: "hire",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_add",
                    type: "address",
                },
            ],
            name: "isCompany",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_add",
                    type: "address",
                },
            ],
            name: "isWorker",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "jobApplicants",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "jobWorkers",
            outputs: [
                {
                    internalType: "uint256",
                    name: "workerId",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "walletAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "location",
                    type: "string",
                },
                {
                    internalType: "bool",
                    name: "isEmployed",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "jobs",
            outputs: [
                {
                    internalType: "string",
                    name: "companyName",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    internalType: "string",
                    name: "location",
                    type: "string",
                },
                {
                    internalType: "address",
                    name: "company",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "salary",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "vacancies",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "hoursPerDay",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "jobsAppliedToByWorker",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_location",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_salary",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_vacancies",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_hoursPerDay",
                    type: "uint256",
                },
            ],
            name: "postJob",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "callerConfirmation",
                    type: "address",
                },
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "role",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4",
                },
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "totalHoursWorked",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "totalUnemployedWorkers",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "unemployedWorkers",
            outputs: [
                {
                    internalType: "uint256",
                    name: "workerId",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "walletAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "location",
                    type: "string",
                },
                {
                    internalType: "bool",
                    name: "isEmployed",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "workerJob",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "workers",
            outputs: [
                {
                    internalType: "uint256",
                    name: "workerId",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "walletAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "location",
                    type: "string",
                },
                {
                    internalType: "bool",
                    name: "isEmployed",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ],
    bytecode:
        "0x608060405234801561001057600080fd5b506000600d819055600e819055600f556146b68061002f6000396000f3fe6080604052600436106102a05760003560e01c80639c44f4b01161016e578063cb7e598e116100cb578063e95a644f1161007f578063ebff061211610064578063ebff0612146107d7578063f2b67e7d146107ec578063fda56bdf1461082457600080fd5b8063e95a644f14610797578063eb81c7c0146107b757600080fd5b8063e0c94ae5116100b0578063e0c94ae514610737578063e33f874c14610757578063e4df768a1461077757600080fd5b8063cb7e598e146106f7578063d547741f1461071757600080fd5b8063ae55b86b11610122578063c078b4a211610107578063c078b4a214610697578063c4a74b2b146106b7578063c87aa01b146106ca57600080fd5b8063ae55b86b1461064a578063afac40bb1461067757600080fd5b8063a217fddf11610153578063a217fddf14610600578063a5d12f5914610615578063aa1566451461062a57600080fd5b80639c44f4b0146105be578063a0406ce2146105e057600080fd5b806336568abe1161021c57806369d7428f116101d05780637b361838116101b55780637b3618381461054257806391d1485414610558578063965a79fb1461059c57600080fd5b806369d7428f146104e85780637090de7b1461051557600080fd5b80634048a257116102015780634048a257146104645780634cfdac9514610494578063634252dc146104b457600080fd5b806336568abe1461042457806338f032691461044457600080fd5b80631bd2eeee11610273578063248a9ca311610258578063248a9ca3146103a65780632f2ff15d146103d6578063355e6ce8146103f657600080fd5b80631bd2eeee1461035d5780631c9ee11a1461037257600080fd5b806301ffc9a7146102a55780630c91615b146102da57806311cde4ed146102fc578063180aedf31461032a575b600080fd5b3480156102b157600080fd5b506102c56102c0366004613cd0565b610898565b60405190151581526020015b60405180910390f35b3480156102e657600080fd5b506102ef610931565b6040516102d19190613db1565b34801561030857600080fd5b5061031c610317366004613de0565b610a49565b6040519081526020016102d1565b34801561033657600080fd5b5061034a610345366004613e0a565b610a7a565b6040516102d19796959493929190613e23565b61037061036b366004613e0a565b610bcf565b005b34801561037e57600080fd5b5061031c7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b3480156103b257600080fd5b5061031c6103c1366004613e0a565b60009081526020819052604090206001015490565b3480156103e257600080fd5b506103706103f1366004613e7e565b610e0d565b34801561040257600080fd5b50610416610411366004613eaa565b610e38565b6040516102d1929190613ec5565b34801561043057600080fd5b5061037061043f366004613e7e565b610ee5565b34801561045057600080fd5b5061037061045f366004613f93565b610f36565b34801561047057600080fd5b5061048461047f366004613eaa565b61106c565b6040516102d19493929190613fd8565b3480156104a057600080fd5b506104846104af366004614013565b61112b565b3480156104c057600080fd5b5061031c7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b3480156104f457600080fd5b50610508610503366004613e0a565b61117e565b6040516102d1919061410c565b34801561052157600080fd5b50610535610530366004613e0a565b6113ad565b6040516102d1919061411f565b34801561054e57600080fd5b5061031c600f5481565b34801561056457600080fd5b506102c5610573366004613e7e565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156105a857600080fd5b506105b161164e565b6040516102d19190614183565b3480156105ca57600080fd5b506105d3611908565b6040516102d191906141da565b3480156105ec57600080fd5b506102c56105fb366004613eaa565b6119bb565b34801561060c57600080fd5b5061031c600081565b34801561062157600080fd5b506105086119fb565b34801561063657600080fd5b506102c5610645366004613eaa565b611ce9565b34801561065657600080fd5b5061031c610665366004613eaa565b60076020526000908152604090205481565b34801561068357600080fd5b5061034a610692366004613de0565b611d29565b3480156106a357600080fd5b506105b16106b2366004613eaa565b611d4f565b6103706106c5366004613e0a565b612082565b3480156106d657600080fd5b5061031c6106e5366004613eaa565b600a6020526000908152604090205481565b34801561070357600080fd5b50610484610712366004613e0a565b61299d565b34801561072357600080fd5b50610370610732366004613e7e565b6129cf565b34801561074357600080fd5b50610370610752366004613e0a565b6129f4565b34801561076357600080fd5b5061037061077236600461421e565b612d21565b34801561078357600080fd5b50610535610792366004613e0a565b612f0f565b3480156107a357600080fd5b506103706107b2366004613e0a565b613045565b3480156107c357600080fd5b506103706107d236600461426c565b61314c565b3480156107e357600080fd5b50610535613454565b3480156107f857600080fd5b5061080c610807366004614013565b6135f4565b6040516001600160a01b0390911681526020016102d1565b34801561083057600080fd5b5061087061083f366004613eaa565b600b60205260009081526040902080546001820154600283015460039093015491926001600160a01b039091169184565b604080519485526001600160a01b0390931660208501529183015260608201526080016102d1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061092b57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b61096760405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b33600090815260016020818152604092839020835160808101855281548152928101546001600160a01b03169183019190915260028101805492939192918401916109b1906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546109dd906142c0565b8015610a2a5780601f106109ff57610100808354040283529160200191610a2a565b820191906000526020600020905b815481529060010190602001808311610a0d57829003601f168201915b50505091835250506003919091015460ff161515602090910152919050565b600c6020528160005260406000208181548110610a6557600080fd5b90600052602060002001600091509150505481565b600460205260009081526040902080548190610a95906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac1906142c0565b8015610b0e5780601f10610ae357610100808354040283529160200191610b0e565b820191906000526020600020905b815481529060010190602001808311610af157829003601f168201915b505050505090806001015490806002018054610b29906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b55906142c0565b8015610ba25780601f10610b7757610100808354040283529160200191610ba2565b820191906000526020600020905b815481529060010190602001808311610b8557829003601f168201915b5050505060038301546005840154600685015460079095015493946001600160a01b039092169390925087565b336000908152600b60205260408120600201549003610c355760405162461bcd60e51b815260206004820152601960248201527f576f726b657220686173206e6f7420636865636b656420696e0000000000000060448201526064015b60405180910390fd5b336000908152600b602052604090206003015415610c955760405162461bcd60e51b815260206004820152601a60248201527f576f726b657220616c726561647920636865636b6564206f75740000000000006044820152606401610c2c565b604051600090339034908381818185875af1925050503d8060008114610cd7576040519150601f19603f3d011682016040523d82523d6000602084013e610cdc565b606091505b5050905080610d2d5760405162461bcd60e51b815260206004820152601e60248201527f4661696c656420746f2073656e6420457468657220746f20776f726b657200006044820152606401610c2c565b336000908152600b6020908152604091829020426003820181905583516080810185528254815260018301546001600160a01b031693810193909352600290910154928201839052606082018190529091610d879161430a565b336000908152600a602052604081208054909190610da690849061431d565b90915550610db590508361362c565b336000818152600b60209081526040918290205482519081529081019290925242908201527fc6ce66f56e23a203c32a0192de789de2f0570e4299378d5de96d0b9d640de856906060015b60405180910390a1505050565b600082815260208190526040902060010154610e28816137d9565b610e3283836137e6565b50505050565b600260205260009081526040902080548190610e53906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7f906142c0565b8015610ecc5780601f10610ea157610100808354040283529160200191610ecc565b820191906000526020600020905b815481529060010190602001808311610eaf57829003601f168201915b505050600190930154919250506001600160a01b031682565b6001600160a01b0381163314610f27576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f318282613890565b505050565b6001600160a01b038181166000908152600260205260409020600101541615610fa15760405162461bcd60e51b815260206004820152601660248201527f436f6d70616e7920616c726561647920657869737473000000000000000000006044820152606401610c2c565b6040805180820182528381526001600160a01b03831660208083018290526000918252600290529190912081518190610fda9082614380565b5060209190910151600190910180546001600160a01b0319166001600160a01b0390921691909117905561102e7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c826137e6565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051611060929190613ec5565b60405180910390a15050565b60016020819052600091825260409091208054918101546002820180546001600160a01b03909216929161109f906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb906142c0565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b5050506003909301549192505060ff1684565b6008602052816000526040600020818154811061114757600080fd5b60009182526020909120600490910201805460018201546002830180549295506001600160a01b0390911693509061109f906142c0565b6111cf60405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b60008281526004602052604090819020815161010081019092528054829082906111f8906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611224906142c0565b80156112715780601f1061124657610100808354040283529160200191611271565b820191906000526020600020905b81548152906001019060200180831161125457829003601f168201915b5050505050815260200160018201548152602001600282018054611294906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546112c0906142c0565b801561130d5780601f106112e25761010080835404028352916020019161130d565b820191906000526020600020905b8154815290600101906020018083116112f057829003601f168201915b505050918352505060038201546001600160a01b0316602080830191909152600483018054604080518285028101850182528281529401939283018282801561137f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611361575b5050505050815260200160058201548152602001600682015481526020016007820154815250509050919050565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460609060ff1661140157604051631a7fc6a560e01b8152336004820152602401610c2c565b60008281526005602090815260408083208054825181850281018501909352808352919290919083018282801561146157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611443575b505050505090506000815167ffffffffffffffff81111561148457611484613ef0565b6040519080825280602002602001820160405280156114eb57816020015b6114d860405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b8152602001906001900390816114a25790505b50905060005b8251811015611646576001600084838151811061151057611510614440565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160028201805461158c906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546115b8906142c0565b80156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b50505091835250506003919091015460ff161515602090910152825183908390811061163357611633614440565b60209081029190910101526001016114f1565b509392505050565b600d5460609060008167ffffffffffffffff81111561166f5761166f613ef0565b6040519080825280602002602001820160405280156116f157816020015b6116de60405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b81526020019060019003908161168d5790505b50905060005b82811015611901576000818152600460205260409081902081516101008101909252805490919082908290829061172d906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611759906142c0565b80156117a65780601f1061177b576101008083540402835291602001916117a6565b820191906000526020600020905b81548152906001019060200180831161178957829003601f168201915b50505050508152602001600182015481526020016002820180546117c9906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546117f5906142c0565b80156118425780601f1061181757610100808354040283529160200191611842565b820191906000526020600020905b81548152906001019060200180831161182557829003601f168201915b505050918352505060038201546001600160a01b031660208083019190915260048301805460408051828502810185018252828152940193928301828280156118b457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611896575b5050505050815260200160058201548152602001600682015481526020016007820154815250508383815181106118ed576118ed614440565b6020908102919091010152506001016116f7565b5092915050565b3360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460609060ff1661195c57604051632e58be0760e11b8152336004820152602401610c2c565b336000908152600c6020908152604091829020805483518184028101840190945280845290918301828280156119b157602002820191906000526020600020905b81548152602001906001019080831161199d575b5050505050905090565b6001600160a01b03811660009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604081205460ff1661092b565b611a4c60405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b3360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460ff16611a9d57604051632e58be0760e11b8152336004820152602401610c2c565b3360009081526001602052604090206003015460ff16611aff5760405162461bcd60e51b815260206004820152601660248201527f43757272656e746c79204e6f7420456d706c6f796564000000000000000000006044820152606401610c2c565b33600090815260076020908152604080832054835260049091529081902081516101008101909252805482908290611b36906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611b62906142c0565b8015611baf5780601f10611b8457610100808354040283529160200191611baf565b820191906000526020600020905b815481529060010190602001808311611b9257829003601f168201915b5050505050815260200160018201548152602001600282018054611bd2906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611bfe906142c0565b8015611c4b5780601f10611c2057610100808354040283529160200191611c4b565b820191906000526020600020905b815481529060010190602001808311611c2e57829003601f168201915b505050918352505060038201546001600160a01b03166020808301919091526004830180546040805182850281018501825282815294019392830182828015611cbd57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611c9f575b505050505081526020016005820154815260200160068201548152602001600782015481525050905090565b6001600160a01b03811660009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604081205460ff1661092b565b6003602090815260009283526040808420909152908252902080548190610a95906142c0565b600d546060906000805b82811015611d9b576000818152600460205260409020600301546001600160a01b03808716911603611d935781611d8f81614456565b9250505b600101611d59565b5060008167ffffffffffffffff811115611db757611db7613ef0565b604051908082528060200260200182016040528015611e3957816020015b611e2660405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b815260200190600190039081611dd55790505b5090506000805b84811015612077576000818152600460205260409020600301546001600160a01b0380891691160361206f576000818152600460205260409081902081516101008101909252805482908290611e95906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611ec1906142c0565b8015611f0e5780601f10611ee357610100808354040283529160200191611f0e565b820191906000526020600020905b815481529060010190602001808311611ef157829003601f168201915b5050505050815260200160018201548152602001600282018054611f31906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611f5d906142c0565b8015611faa5780601f10611f7f57610100808354040283529160200191611faa565b820191906000526020600020905b815481529060010190602001808311611f8d57829003601f168201915b505050918352505060038201546001600160a01b0316602080830191909152600483018054604080518285028101850182528281529401939283018282801561201c57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611ffe575b50505050508152602001600582015481526020016006820154815260200160078201548152505083838151811061205557612055614440565b6020026020010181905250818061206b90614456565b9250505b600101611e40565b509095945050505050565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460ff166120d357604051631a7fc6a560e01b8152336004820152602401610c2c565b600081815260046020526040808220815161010081019092528054829082906120fb906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054612127906142c0565b80156121745780601f1061214957610100808354040283529160200191612174565b820191906000526020600020905b81548152906001019060200180831161215757829003601f168201915b5050505050815260200160018201548152602001600282018054612197906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546121c3906142c0565b80156122105780601f106121e557610100808354040283529160200191612210565b820191906000526020600020905b8154815290600101906020018083116121f357829003601f168201915b505050918352505060038201546001600160a01b0316602080830191909152600483018054604080518285028101850182528281529401939283018282801561228257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612264575b505050918352505060058201546020820152600682015460408083019190915260079092015460609182015260c08301519183015190830151929350909160006122cb86613913565b905060008560e001518660a0015183516122e5919061446f565b6122ef919061446f565b90506001600160a01b03831633146123495760405162461bcd60e51b815260206004820152601f60248201527f54686973206a6f62206973206e6f74206f66666572656420627920796f752e006044820152606401610c2c565b600085116123bf5760405162461bcd60e51b815260206004820152602360248201527f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060448201527f6a6f6200000000000000000000000000000000000000000000000000000000006064820152608401610c2c565b60008251116124105760405162461bcd60e51b815260206004820152601a60248201527f4e6f206170706c6963616e747320666f722074686973206a6f620000000000006044820152606401610c2c565b803410156124605760405162461bcd60e51b815260206004820152601e60248201527f4d757374207374616b6520676976656e20707269636520746f206869726500006044820152606401610c2c565b846000805b84518110801561247457508282105b1561271857600085828151811061248d5761248d614440565b60200260200101519050806060015161270557600460008c815260200190815260200160002060040181602001519080600181540180825580915050600190039060005260206000200160009091909190916101000a8154816001600160a01b0302191690836001600160a01b03160217905550600180600083602001516001600160a01b03166001600160a01b0316815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508a6007600083602001516001600160a01b03166001600160a01b0316815260200190815260200160002081905550600860008c81526020019081526020016000206001600083602001516001600160a01b03166001600160a01b031681526020019081526020016000209080600181540180825580915050600190039060005260206000209060040201600090919091909150600082015481600001556001820160009054906101000a90046001600160a01b03168160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600282018160020190816126369190614486565b506003918201549101805460ff191660ff90921615159190911790556020818101516001600160a01b03166000908152600a90915260408120558861267a81614561565b995050828061268890614456565b600f8054919550909150600061269d83614561565b9190505550600960008784815181106126b8576126b8614440565b60209081029190910181015151825281019190915260400160009081208181556001810180546001600160a01b0319169055906126f86002830182613c1c565b50600301805460ff191690555b508061271081614456565b915050612465565b5060008981526004602052604081206006018890555b818110156129915760008a8152600560205260408120905b815481101561284e576001600083838154811061276557612765614440565b60009182526020808320909101546001600160a01b0316835282019290925260400190206003015460ff161561284657815482906127a59060019061430a565b815481106127b5576127b5614440565b9060005260206000200160009054906101000a90046001600160a01b03168282815481106127e5576127e5614440565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508180548061282357612823614578565b600082815260209020810160001990810180546001600160a01b03191690550190555b600101612746565b5060008b815260066020526040808220905161286b908b9061458e565b9081526020016040518091039020905060005b8154811015612986576001600083838154811061289d5761289d614440565b60009182526020808320909101546001600160a01b0316835282019290925260400190206003015460ff161561297e57815482906128dd9060019061430a565b815481106128ed576128ed614440565b9060005260206000200160009054906101000a90046001600160a01b031682828154811061291d5761291d614440565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508180548061295b5761295b614578565b600082815260209020810160001990810180546001600160a01b03191690550190555b60010161287e565b50505060010161272e565b50505050505050505050565b60096020526000908152604090208054600182015460028301805492936001600160a01b039092169261109f906142c0565b6000828152602081905260409020600101546129ea816137d9565b610e328383613890565b3360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460ff16612a4557604051632e58be0760e11b8152336004820152602401610c2c565b3360009081526001602052604090206003015460ff1615612aa85760405162461bcd60e51b815260206004820152601a60248201527f576f726b657220697320616c726561647920656d706c6f7965640000000000006044820152606401610c2c565b600d54811115612b205760405162461bcd60e51b815260206004820152602860248201527f547279696e6720746f206170706c7920746f2061206a6f62206e6f742079657460448201527f20637265617465640000000000000000000000000000000000000000000000006064820152608401610c2c565b600081815260046020526040902060060154612b7e5760405162461bcd60e51b815260206004820152601d60248201527f4e6f206d6f7265206170706c69636174696f6e7320706f737369626c650000006044820152606401610c2c565b6000818152600560205260408120905b8154811015612c4357336001600160a01b0316828281548110612bb357612bb3614440565b6000918252602090912001546001600160a01b031603612c3b5760405162461bcd60e51b815260206004820152602760248201527f576f726b65722068617320616c7265616479206170706c69656420666f72207460448201527f686973206a6f62000000000000000000000000000000000000000000000000006064820152608401610c2c565b600101612b8e565b5060008281526005602090815260408083208054600181810183559185528385200180546001600160a01b031916339081179091558685526006845282852090855292529182902091519091612c9e916002909101906145aa565b908152604080519182900360209081018320805460018082018355600092835283832090910180546001600160a01b03191633908117909155808352600c84528483208054928301815583529183902001869055835282018490527f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f9101611060565b6001600160a01b03828116600090815260016020819052604090912001541615612d8d5760405162461bcd60e51b815260206004820152601560248201527f576f726b657220616c72656164792065786973747300000000000000000000006044820152606401610c2c565b60408051608081018252600e5481526001600160a01b0384811660208084018281528486018781526000606087018190529384526001928390529590922084518155915190820180546001600160a01b03191691909316179091559151909182916002820190612dfd9082614380565b50606091909101516003909101805460ff1916911515919091179055600e5460009081526009602090815260409182902083518155908301516001820180546001600160a01b0319166001600160a01b03909216919091179055908201518291906002820190612e6d9082614380565b50606091909101516003909101805460ff1916911515919091179055600f8054906000612e9983614456565b9091555050600e8054906000612eae83614456565b9190505550612edd7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7846137e6565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb9328383604051610e00929190614620565b606060086000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561303a57600084815260209081902060408051608081018252600486029092018054835260018101546001600160a01b03169383019390935260028301805492939291840191612f97906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054612fc3906142c0565b80156130105780601f10612fe557610100808354040283529160200191613010565b820191906000526020600020905b815481529060010190602001808311612ff357829003601f168201915b50505091835250506003919091015460ff1615156020918201529082526001929092019101612f44565b505050509050919050565b336000908152600b6020526040902060020154156130a55760405162461bcd60e51b815260206004820152601960248201527f576f726b657220616c726561647920636865636b656420696e000000000000006044820152606401610c2c565b604080516080810182528281523360208083018281524284860181815260006060808801828152878352600b8752918990208851815594516001860180546001600160a01b0319166001600160a01b0390921691909117905591516002850155516003909301929092558551878152928301939093529381019190915290917f80f3660a78979e67d86862b24c89ff72270a4579e8d562e6f2e3306323b66a759101611060565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460ff1661319d57604051631a7fc6a560e01b8152336004820152602401610c2c565b600d543360009081526002602052604080822081518083019092528054829082906131c7906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546131f3906142c0565b80156132405780601f1061321557610100808354040283529160200191613240565b820191906000526020600020905b81548152906001019060200180831161322357829003601f168201915b5050509183525050600191909101546001600160a01b0316602091820152815160408051610100810182528281528084018790528082018b90523360608201819052825160008082528187018552608084019190915260a083018c905260c083018b905260e083018a90529081526003855282812088825290945292208251939450909282919081906132d39082614380565b5060208201516001820155604082015160028201906132f29082614380565b5060608201516003820180546001600160a01b0319166001600160a01b0390921691909117905560808201518051613334916004840191602090910190613c56565b5060a0820151600582015560c0820151600682015560e0909101516007909101556000848152600460205260409020815182919081906133749082614380565b5060208201516001820155604082015160028201906133939082614380565b5060608201516003820180546001600160a01b0319166001600160a01b03909216919091179055608082015180516133d5916004840191602090910190613c56565b5060a0820151600582015560c0820151600682015560e090910151600790910155600d805490600061340683614456565b91905055507f61940d4b9dc2d4231dc0774654510c8e5d5a05c411d82b68a5b69cff917da58a848989898960405161344295949392919061464a565b60405180910390a15050505050505050565b60606000600f5467ffffffffffffffff81111561347357613473613ef0565b6040519080825280602002602001820160405280156134da57816020015b6134c760405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b8152602001906001900390816134915790505b50905060005b600f548110156135ee5760008181526009602090815260409182902082516080810184528154815260018201546001600160a01b0316928101929092526002810180549293919291840191613534906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054613560906142c0565b80156135ad5780601f10613582576101008083540402835291602001916135ad565b820191906000526020600020905b81548152906001019060200180831161359057829003601f168201915b50505091835250506003919091015460ff16151560209091015282518390839081106135db576135db614440565b60209081029190910101526001016134e0565b50919050565b6005602052816000526040600020818154811061361057600080fd5b6000918252602090912001546001600160a01b03169150829050565b60008181526004602081905260408220919082019080805b835481101561369757336001600160a01b031684828154811061366957613669614440565b6000918252602090912001546001600160a01b03160361368f5780925060019150613697565b600101613644565b508061370b5760405162461bcd60e51b815260206004820152602260248201527f576f726b6572206973206e6f7420656d706c6f79656420696e2074686973206a60448201527f6f620000000000000000000000000000000000000000000000000000000000006064820152608401610c2c565b815b835461371b9060019061430a565b81101561379f578361372e82600161431d565b8154811061373e5761373e614440565b9060005260206000200160009054906101000a90046001600160a01b031684828154811061376e5761376e614440565b600091825260209091200180546001600160a01b0319166001600160a01b039290921691909117905560010161370d565b50828054806137b0576137b0614578565b600082815260209020810160001990810180546001600160a01b03191690550190555050505050565b6137e38133613bac565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16613888576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556138403390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161092b565b50600061092b565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615613888576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161092b565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460609060ff1661396757604051631a7fc6a560e01b8152336004820152602401610c2c565b6000828152600560209081526040808320805482518185028101850190935280835291929091908301828280156139c757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116139a9575b505050505090506000815167ffffffffffffffff8111156139ea576139ea613ef0565b604051908082528060200260200182016040528015613a5157816020015b613a3e60405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b815260200190600190039081613a085790505b50905060005b82518110156116465760016000848381518110613a7657613a76614440565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282018054613af2906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054613b1e906142c0565b8015613b6b5780601f10613b4057610100808354040283529160200191613b6b565b820191906000526020600020905b815481529060010190602001808311613b4e57829003601f168201915b50505091835250506003919091015460ff1615156020909101528251839083908110613b9957613b99614440565b6020908102919091010152600101613a57565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16613c18576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610c2c565b5050565b508054613c28906142c0565b6000825580601f10613c38575050565b601f0160209004906000526020600020908101906137e39190613cbb565b828054828255906000526020600020908101928215613cab579160200282015b82811115613cab57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190613c76565b50613cb7929150613cbb565b5090565b5b80821115613cb75760008155600101613cbc565b600060208284031215613ce257600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114613d1257600080fd5b9392505050565b60005b83811015613d34578181015183820152602001613d1c565b50506000910152565b60008151808452613d55816020860160208601613d19565b601f01601f19169290920160200192915050565b805182526001600160a01b0360208201511660208301526000604082015160806040850152613d9b6080850182613d3d565b6060938401511515949093019390935250919050565b602081526000613d126020830184613d69565b80356001600160a01b0381168114613ddb57600080fd5b919050565b60008060408385031215613df357600080fd5b613dfc83613dc4565b946020939093013593505050565b600060208284031215613e1c57600080fd5b5035919050565b60e081526000613e3660e083018a613d3d565b8860208401528281036040840152613e4e8189613d3d565b9150506001600160a01b03861660608301528460808301528360a08301528260c083015298975050505050505050565b60008060408385031215613e9157600080fd5b82359150613ea160208401613dc4565b90509250929050565b600060208284031215613ebc57600080fd5b613d1282613dc4565b604081526000613ed86040830185613d3d565b90506001600160a01b03831660208301529392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112613f1757600080fd5b813567ffffffffffffffff80821115613f3257613f32613ef0565b604051601f8301601f19908116603f01168101908282118183101715613f5a57613f5a613ef0565b81604052838152866020858801011115613f7357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215613fa657600080fd5b823567ffffffffffffffff811115613fbd57600080fd5b613fc985828601613f06565b925050613ea160208401613dc4565b8481526001600160a01b03841660208201526080604082015260006140006080830185613d3d565b9050821515606083015295945050505050565b6000806040838503121561402657600080fd5b50508035926020909101359150565b60008151808452602080850194506020840160005b8381101561406f5781516001600160a01b03168752958201959082019060010161404a565b509495945050505050565b6000610100825181855261409082860182613d3d565b91505060208301516020850152604083015184820360408601526140b48282613d3d565b9150506001600160a01b036060840151166060850152608083015184820360808601526140e18282614035565b91505060a083015160a085015260c083015160c085015260e083015160e08501528091505092915050565b602081526000613d12602083018461407a565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b8281101561417657603f19888603018452614164858351613d69565b94509285019290850190600101614148565b5092979650505050505050565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b8281101561417657603f198886030184526141c885835161407a565b945092850192908501906001016141ac565b6020808252825182820181905260009190848201906040850190845b81811015614212578351835292840192918401916001016141f6565b50909695505050505050565b6000806040838503121561423157600080fd5b61423a83613dc4565b9150602083013567ffffffffffffffff81111561425657600080fd5b61426285828601613f06565b9150509250929050565b6000806000806080858703121561428257600080fd5b843567ffffffffffffffff81111561429957600080fd5b6142a587828801613f06565b97602087013597506040870135966060013595509350505050565b600181811c908216806142d457607f821691505b6020821081036135ee57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561092b5761092b6142f4565b8082018082111561092b5761092b6142f4565b601f821115610f31576000816000526020600020601f850160051c810160208610156143595750805b601f850160051c820191505b8181101561437857828155600101614365565b505050505050565b815167ffffffffffffffff81111561439a5761439a613ef0565b6143ae816143a884546142c0565b84614330565b602080601f8311600181146143e357600084156143cb5750858301515b600019600386901b1c1916600185901b178555614378565b600085815260208120601f198616915b82811015614412578886015182559484019460019091019084016143f3565b50858210156144305787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b600060018201614468576144686142f4565b5060010190565b808202811582820484141761092b5761092b6142f4565b818103614491575050565b61449b82546142c0565b67ffffffffffffffff8111156144b3576144b3613ef0565b6144c1816143a884546142c0565b6000601f8211600181146144f557600083156144dd5750848201545b600019600385901b1c1916600184901b17845561455a565b600085815260209020601f19841690600086815260209020845b8381101561452f578286015482556001958601959091019060200161450f565b508583101561454d5781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b600081614570576145706142f4565b506000190190565b634e487b7160e01b600052603160045260246000fd5b600082516145a0818460208701613d19565b9190910192915050565b60008083546145b8816142c0565b600182811680156145d057600181146145e557614614565b60ff1984168752821515830287019450614614565b8760005260208060002060005b8581101561460b5781548a8201529084019082016145f2565b50505082870194505b50929695505050505050565b6001600160a01b03831681526040602082015260006146426040830184613d3d565b949350505050565b85815260a06020820152600061466360a0830187613d3d565b60408301959095525060608101929092526080909101529291505056fea2646970667358221220be379c2e058ba3b31b2878ec2406e8ef84b599ba645743db4c5e5b3abb97bfc664736f6c63430008180033",
    deployedBytecode:
        "0x6080604052600436106102a05760003560e01c80639c44f4b01161016e578063cb7e598e116100cb578063e95a644f1161007f578063ebff061211610064578063ebff0612146107d7578063f2b67e7d146107ec578063fda56bdf1461082457600080fd5b8063e95a644f14610797578063eb81c7c0146107b757600080fd5b8063e0c94ae5116100b0578063e0c94ae514610737578063e33f874c14610757578063e4df768a1461077757600080fd5b8063cb7e598e146106f7578063d547741f1461071757600080fd5b8063ae55b86b11610122578063c078b4a211610107578063c078b4a214610697578063c4a74b2b146106b7578063c87aa01b146106ca57600080fd5b8063ae55b86b1461064a578063afac40bb1461067757600080fd5b8063a217fddf11610153578063a217fddf14610600578063a5d12f5914610615578063aa1566451461062a57600080fd5b80639c44f4b0146105be578063a0406ce2146105e057600080fd5b806336568abe1161021c57806369d7428f116101d05780637b361838116101b55780637b3618381461054257806391d1485414610558578063965a79fb1461059c57600080fd5b806369d7428f146104e85780637090de7b1461051557600080fd5b80634048a257116102015780634048a257146104645780634cfdac9514610494578063634252dc146104b457600080fd5b806336568abe1461042457806338f032691461044457600080fd5b80631bd2eeee11610273578063248a9ca311610258578063248a9ca3146103a65780632f2ff15d146103d6578063355e6ce8146103f657600080fd5b80631bd2eeee1461035d5780631c9ee11a1461037257600080fd5b806301ffc9a7146102a55780630c91615b146102da57806311cde4ed146102fc578063180aedf31461032a575b600080fd5b3480156102b157600080fd5b506102c56102c0366004613cd0565b610898565b60405190151581526020015b60405180910390f35b3480156102e657600080fd5b506102ef610931565b6040516102d19190613db1565b34801561030857600080fd5b5061031c610317366004613de0565b610a49565b6040519081526020016102d1565b34801561033657600080fd5b5061034a610345366004613e0a565b610a7a565b6040516102d19796959493929190613e23565b61037061036b366004613e0a565b610bcf565b005b34801561037e57600080fd5b5061031c7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b3480156103b257600080fd5b5061031c6103c1366004613e0a565b60009081526020819052604090206001015490565b3480156103e257600080fd5b506103706103f1366004613e7e565b610e0d565b34801561040257600080fd5b50610416610411366004613eaa565b610e38565b6040516102d1929190613ec5565b34801561043057600080fd5b5061037061043f366004613e7e565b610ee5565b34801561045057600080fd5b5061037061045f366004613f93565b610f36565b34801561047057600080fd5b5061048461047f366004613eaa565b61106c565b6040516102d19493929190613fd8565b3480156104a057600080fd5b506104846104af366004614013565b61112b565b3480156104c057600080fd5b5061031c7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b3480156104f457600080fd5b50610508610503366004613e0a565b61117e565b6040516102d1919061410c565b34801561052157600080fd5b50610535610530366004613e0a565b6113ad565b6040516102d1919061411f565b34801561054e57600080fd5b5061031c600f5481565b34801561056457600080fd5b506102c5610573366004613e7e565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156105a857600080fd5b506105b161164e565b6040516102d19190614183565b3480156105ca57600080fd5b506105d3611908565b6040516102d191906141da565b3480156105ec57600080fd5b506102c56105fb366004613eaa565b6119bb565b34801561060c57600080fd5b5061031c600081565b34801561062157600080fd5b506105086119fb565b34801561063657600080fd5b506102c5610645366004613eaa565b611ce9565b34801561065657600080fd5b5061031c610665366004613eaa565b60076020526000908152604090205481565b34801561068357600080fd5b5061034a610692366004613de0565b611d29565b3480156106a357600080fd5b506105b16106b2366004613eaa565b611d4f565b6103706106c5366004613e0a565b612082565b3480156106d657600080fd5b5061031c6106e5366004613eaa565b600a6020526000908152604090205481565b34801561070357600080fd5b50610484610712366004613e0a565b61299d565b34801561072357600080fd5b50610370610732366004613e7e565b6129cf565b34801561074357600080fd5b50610370610752366004613e0a565b6129f4565b34801561076357600080fd5b5061037061077236600461421e565b612d21565b34801561078357600080fd5b50610535610792366004613e0a565b612f0f565b3480156107a357600080fd5b506103706107b2366004613e0a565b613045565b3480156107c357600080fd5b506103706107d236600461426c565b61314c565b3480156107e357600080fd5b50610535613454565b3480156107f857600080fd5b5061080c610807366004614013565b6135f4565b6040516001600160a01b0390911681526020016102d1565b34801561083057600080fd5b5061087061083f366004613eaa565b600b60205260009081526040902080546001820154600283015460039093015491926001600160a01b039091169184565b604080519485526001600160a01b0390931660208501529183015260608201526080016102d1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061092b57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b61096760405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b33600090815260016020818152604092839020835160808101855281548152928101546001600160a01b03169183019190915260028101805492939192918401916109b1906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546109dd906142c0565b8015610a2a5780601f106109ff57610100808354040283529160200191610a2a565b820191906000526020600020905b815481529060010190602001808311610a0d57829003601f168201915b50505091835250506003919091015460ff161515602090910152919050565b600c6020528160005260406000208181548110610a6557600080fd5b90600052602060002001600091509150505481565b600460205260009081526040902080548190610a95906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac1906142c0565b8015610b0e5780601f10610ae357610100808354040283529160200191610b0e565b820191906000526020600020905b815481529060010190602001808311610af157829003601f168201915b505050505090806001015490806002018054610b29906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b55906142c0565b8015610ba25780601f10610b7757610100808354040283529160200191610ba2565b820191906000526020600020905b815481529060010190602001808311610b8557829003601f168201915b5050505060038301546005840154600685015460079095015493946001600160a01b039092169390925087565b336000908152600b60205260408120600201549003610c355760405162461bcd60e51b815260206004820152601960248201527f576f726b657220686173206e6f7420636865636b656420696e0000000000000060448201526064015b60405180910390fd5b336000908152600b602052604090206003015415610c955760405162461bcd60e51b815260206004820152601a60248201527f576f726b657220616c726561647920636865636b6564206f75740000000000006044820152606401610c2c565b604051600090339034908381818185875af1925050503d8060008114610cd7576040519150601f19603f3d011682016040523d82523d6000602084013e610cdc565b606091505b5050905080610d2d5760405162461bcd60e51b815260206004820152601e60248201527f4661696c656420746f2073656e6420457468657220746f20776f726b657200006044820152606401610c2c565b336000908152600b6020908152604091829020426003820181905583516080810185528254815260018301546001600160a01b031693810193909352600290910154928201839052606082018190529091610d879161430a565b336000908152600a602052604081208054909190610da690849061431d565b90915550610db590508361362c565b336000818152600b60209081526040918290205482519081529081019290925242908201527fc6ce66f56e23a203c32a0192de789de2f0570e4299378d5de96d0b9d640de856906060015b60405180910390a1505050565b600082815260208190526040902060010154610e28816137d9565b610e3283836137e6565b50505050565b600260205260009081526040902080548190610e53906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7f906142c0565b8015610ecc5780601f10610ea157610100808354040283529160200191610ecc565b820191906000526020600020905b815481529060010190602001808311610eaf57829003601f168201915b505050600190930154919250506001600160a01b031682565b6001600160a01b0381163314610f27576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f318282613890565b505050565b6001600160a01b038181166000908152600260205260409020600101541615610fa15760405162461bcd60e51b815260206004820152601660248201527f436f6d70616e7920616c726561647920657869737473000000000000000000006044820152606401610c2c565b6040805180820182528381526001600160a01b03831660208083018290526000918252600290529190912081518190610fda9082614380565b5060209190910151600190910180546001600160a01b0319166001600160a01b0390921691909117905561102e7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c826137e6565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051611060929190613ec5565b60405180910390a15050565b60016020819052600091825260409091208054918101546002820180546001600160a01b03909216929161109f906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb906142c0565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b5050506003909301549192505060ff1684565b6008602052816000526040600020818154811061114757600080fd5b60009182526020909120600490910201805460018201546002830180549295506001600160a01b0390911693509061109f906142c0565b6111cf60405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b60008281526004602052604090819020815161010081019092528054829082906111f8906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611224906142c0565b80156112715780601f1061124657610100808354040283529160200191611271565b820191906000526020600020905b81548152906001019060200180831161125457829003601f168201915b5050505050815260200160018201548152602001600282018054611294906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546112c0906142c0565b801561130d5780601f106112e25761010080835404028352916020019161130d565b820191906000526020600020905b8154815290600101906020018083116112f057829003601f168201915b505050918352505060038201546001600160a01b0316602080830191909152600483018054604080518285028101850182528281529401939283018282801561137f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611361575b5050505050815260200160058201548152602001600682015481526020016007820154815250509050919050565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460609060ff1661140157604051631a7fc6a560e01b8152336004820152602401610c2c565b60008281526005602090815260408083208054825181850281018501909352808352919290919083018282801561146157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611443575b505050505090506000815167ffffffffffffffff81111561148457611484613ef0565b6040519080825280602002602001820160405280156114eb57816020015b6114d860405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b8152602001906001900390816114a25790505b50905060005b8251811015611646576001600084838151811061151057611510614440565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815260200160028201805461158c906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546115b8906142c0565b80156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b50505091835250506003919091015460ff161515602090910152825183908390811061163357611633614440565b60209081029190910101526001016114f1565b509392505050565b600d5460609060008167ffffffffffffffff81111561166f5761166f613ef0565b6040519080825280602002602001820160405280156116f157816020015b6116de60405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b81526020019060019003908161168d5790505b50905060005b82811015611901576000818152600460205260409081902081516101008101909252805490919082908290829061172d906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611759906142c0565b80156117a65780601f1061177b576101008083540402835291602001916117a6565b820191906000526020600020905b81548152906001019060200180831161178957829003601f168201915b50505050508152602001600182015481526020016002820180546117c9906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546117f5906142c0565b80156118425780601f1061181757610100808354040283529160200191611842565b820191906000526020600020905b81548152906001019060200180831161182557829003601f168201915b505050918352505060038201546001600160a01b031660208083019190915260048301805460408051828502810185018252828152940193928301828280156118b457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611896575b5050505050815260200160058201548152602001600682015481526020016007820154815250508383815181106118ed576118ed614440565b6020908102919091010152506001016116f7565b5092915050565b3360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460609060ff1661195c57604051632e58be0760e11b8152336004820152602401610c2c565b336000908152600c6020908152604091829020805483518184028101840190945280845290918301828280156119b157602002820191906000526020600020905b81548152602001906001019080831161199d575b5050505050905090565b6001600160a01b03811660009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604081205460ff1661092b565b611a4c60405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b3360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460ff16611a9d57604051632e58be0760e11b8152336004820152602401610c2c565b3360009081526001602052604090206003015460ff16611aff5760405162461bcd60e51b815260206004820152601660248201527f43757272656e746c79204e6f7420456d706c6f796564000000000000000000006044820152606401610c2c565b33600090815260076020908152604080832054835260049091529081902081516101008101909252805482908290611b36906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611b62906142c0565b8015611baf5780601f10611b8457610100808354040283529160200191611baf565b820191906000526020600020905b815481529060010190602001808311611b9257829003601f168201915b5050505050815260200160018201548152602001600282018054611bd2906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611bfe906142c0565b8015611c4b5780601f10611c2057610100808354040283529160200191611c4b565b820191906000526020600020905b815481529060010190602001808311611c2e57829003601f168201915b505050918352505060038201546001600160a01b03166020808301919091526004830180546040805182850281018501825282815294019392830182828015611cbd57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611c9f575b505050505081526020016005820154815260200160068201548152602001600782015481525050905090565b6001600160a01b03811660009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604081205460ff1661092b565b6003602090815260009283526040808420909152908252902080548190610a95906142c0565b600d546060906000805b82811015611d9b576000818152600460205260409020600301546001600160a01b03808716911603611d935781611d8f81614456565b9250505b600101611d59565b5060008167ffffffffffffffff811115611db757611db7613ef0565b604051908082528060200260200182016040528015611e3957816020015b611e2660405180610100016040528060608152602001600081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b815260200190600190039081611dd55790505b5090506000805b84811015612077576000818152600460205260409020600301546001600160a01b0380891691160361206f576000818152600460205260409081902081516101008101909252805482908290611e95906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611ec1906142c0565b8015611f0e5780601f10611ee357610100808354040283529160200191611f0e565b820191906000526020600020905b815481529060010190602001808311611ef157829003601f168201915b5050505050815260200160018201548152602001600282018054611f31906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054611f5d906142c0565b8015611faa5780601f10611f7f57610100808354040283529160200191611faa565b820191906000526020600020905b815481529060010190602001808311611f8d57829003601f168201915b505050918352505060038201546001600160a01b0316602080830191909152600483018054604080518285028101850182528281529401939283018282801561201c57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611ffe575b50505050508152602001600582015481526020016006820154815260200160078201548152505083838151811061205557612055614440565b6020026020010181905250818061206b90614456565b9250505b600101611e40565b509095945050505050565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460ff166120d357604051631a7fc6a560e01b8152336004820152602401610c2c565b600081815260046020526040808220815161010081019092528054829082906120fb906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054612127906142c0565b80156121745780601f1061214957610100808354040283529160200191612174565b820191906000526020600020905b81548152906001019060200180831161215757829003601f168201915b5050505050815260200160018201548152602001600282018054612197906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546121c3906142c0565b80156122105780601f106121e557610100808354040283529160200191612210565b820191906000526020600020905b8154815290600101906020018083116121f357829003601f168201915b505050918352505060038201546001600160a01b0316602080830191909152600483018054604080518285028101850182528281529401939283018282801561228257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612264575b505050918352505060058201546020820152600682015460408083019190915260079092015460609182015260c08301519183015190830151929350909160006122cb86613913565b905060008560e001518660a0015183516122e5919061446f565b6122ef919061446f565b90506001600160a01b03831633146123495760405162461bcd60e51b815260206004820152601f60248201527f54686973206a6f62206973206e6f74206f66666572656420627920796f752e006044820152606401610c2c565b600085116123bf5760405162461bcd60e51b815260206004820152602360248201527f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060448201527f6a6f6200000000000000000000000000000000000000000000000000000000006064820152608401610c2c565b60008251116124105760405162461bcd60e51b815260206004820152601a60248201527f4e6f206170706c6963616e747320666f722074686973206a6f620000000000006044820152606401610c2c565b803410156124605760405162461bcd60e51b815260206004820152601e60248201527f4d757374207374616b6520676976656e20707269636520746f206869726500006044820152606401610c2c565b846000805b84518110801561247457508282105b1561271857600085828151811061248d5761248d614440565b60200260200101519050806060015161270557600460008c815260200190815260200160002060040181602001519080600181540180825580915050600190039060005260206000200160009091909190916101000a8154816001600160a01b0302191690836001600160a01b03160217905550600180600083602001516001600160a01b03166001600160a01b0316815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508a6007600083602001516001600160a01b03166001600160a01b0316815260200190815260200160002081905550600860008c81526020019081526020016000206001600083602001516001600160a01b03166001600160a01b031681526020019081526020016000209080600181540180825580915050600190039060005260206000209060040201600090919091909150600082015481600001556001820160009054906101000a90046001600160a01b03168160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550600282018160020190816126369190614486565b506003918201549101805460ff191660ff90921615159190911790556020818101516001600160a01b03166000908152600a90915260408120558861267a81614561565b995050828061268890614456565b600f8054919550909150600061269d83614561565b9190505550600960008784815181106126b8576126b8614440565b60209081029190910181015151825281019190915260400160009081208181556001810180546001600160a01b0319169055906126f86002830182613c1c565b50600301805460ff191690555b508061271081614456565b915050612465565b5060008981526004602052604081206006018890555b818110156129915760008a8152600560205260408120905b815481101561284e576001600083838154811061276557612765614440565b60009182526020808320909101546001600160a01b0316835282019290925260400190206003015460ff161561284657815482906127a59060019061430a565b815481106127b5576127b5614440565b9060005260206000200160009054906101000a90046001600160a01b03168282815481106127e5576127e5614440565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508180548061282357612823614578565b600082815260209020810160001990810180546001600160a01b03191690550190555b600101612746565b5060008b815260066020526040808220905161286b908b9061458e565b9081526020016040518091039020905060005b8154811015612986576001600083838154811061289d5761289d614440565b60009182526020808320909101546001600160a01b0316835282019290925260400190206003015460ff161561297e57815482906128dd9060019061430a565b815481106128ed576128ed614440565b9060005260206000200160009054906101000a90046001600160a01b031682828154811061291d5761291d614440565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508180548061295b5761295b614578565b600082815260209020810160001990810180546001600160a01b03191690550190555b60010161287e565b50505060010161272e565b50505050505050505050565b60096020526000908152604090208054600182015460028301805492936001600160a01b039092169261109f906142c0565b6000828152602081905260409020600101546129ea816137d9565b610e328383613890565b3360009081527f0455839be7ae8b4a15d4efa84a286c663d6a625e72addf8ada11660c4b7ee430602052604090205460ff16612a4557604051632e58be0760e11b8152336004820152602401610c2c565b3360009081526001602052604090206003015460ff1615612aa85760405162461bcd60e51b815260206004820152601a60248201527f576f726b657220697320616c726561647920656d706c6f7965640000000000006044820152606401610c2c565b600d54811115612b205760405162461bcd60e51b815260206004820152602860248201527f547279696e6720746f206170706c7920746f2061206a6f62206e6f742079657460448201527f20637265617465640000000000000000000000000000000000000000000000006064820152608401610c2c565b600081815260046020526040902060060154612b7e5760405162461bcd60e51b815260206004820152601d60248201527f4e6f206d6f7265206170706c69636174696f6e7320706f737369626c650000006044820152606401610c2c565b6000818152600560205260408120905b8154811015612c4357336001600160a01b0316828281548110612bb357612bb3614440565b6000918252602090912001546001600160a01b031603612c3b5760405162461bcd60e51b815260206004820152602760248201527f576f726b65722068617320616c7265616479206170706c69656420666f72207460448201527f686973206a6f62000000000000000000000000000000000000000000000000006064820152608401610c2c565b600101612b8e565b5060008281526005602090815260408083208054600181810183559185528385200180546001600160a01b031916339081179091558685526006845282852090855292529182902091519091612c9e916002909101906145aa565b908152604080519182900360209081018320805460018082018355600092835283832090910180546001600160a01b03191633908117909155808352600c84528483208054928301815583529183902001869055835282018490527f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f9101611060565b6001600160a01b03828116600090815260016020819052604090912001541615612d8d5760405162461bcd60e51b815260206004820152601560248201527f576f726b657220616c72656164792065786973747300000000000000000000006044820152606401610c2c565b60408051608081018252600e5481526001600160a01b0384811660208084018281528486018781526000606087018190529384526001928390529590922084518155915190820180546001600160a01b03191691909316179091559151909182916002820190612dfd9082614380565b50606091909101516003909101805460ff1916911515919091179055600e5460009081526009602090815260409182902083518155908301516001820180546001600160a01b0319166001600160a01b03909216919091179055908201518291906002820190612e6d9082614380565b50606091909101516003909101805460ff1916911515919091179055600f8054906000612e9983614456565b9091555050600e8054906000612eae83614456565b9190505550612edd7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7846137e6565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb9328383604051610e00929190614620565b606060086000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561303a57600084815260209081902060408051608081018252600486029092018054835260018101546001600160a01b03169383019390935260028301805492939291840191612f97906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054612fc3906142c0565b80156130105780601f10612fe557610100808354040283529160200191613010565b820191906000526020600020905b815481529060010190602001808311612ff357829003601f168201915b50505091835250506003919091015460ff1615156020918201529082526001929092019101612f44565b505050509050919050565b336000908152600b6020526040902060020154156130a55760405162461bcd60e51b815260206004820152601960248201527f576f726b657220616c726561647920636865636b656420696e000000000000006044820152606401610c2c565b604080516080810182528281523360208083018281524284860181815260006060808801828152878352600b8752918990208851815594516001860180546001600160a01b0319166001600160a01b0390921691909117905591516002850155516003909301929092558551878152928301939093529381019190915290917f80f3660a78979e67d86862b24c89ff72270a4579e8d562e6f2e3306323b66a759101611060565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460ff1661319d57604051631a7fc6a560e01b8152336004820152602401610c2c565b600d543360009081526002602052604080822081518083019092528054829082906131c7906142c0565b80601f01602080910402602001604051908101604052809291908181526020018280546131f3906142c0565b80156132405780601f1061321557610100808354040283529160200191613240565b820191906000526020600020905b81548152906001019060200180831161322357829003601f168201915b5050509183525050600191909101546001600160a01b0316602091820152815160408051610100810182528281528084018790528082018b90523360608201819052825160008082528187018552608084019190915260a083018c905260c083018b905260e083018a90529081526003855282812088825290945292208251939450909282919081906132d39082614380565b5060208201516001820155604082015160028201906132f29082614380565b5060608201516003820180546001600160a01b0319166001600160a01b0390921691909117905560808201518051613334916004840191602090910190613c56565b5060a0820151600582015560c0820151600682015560e0909101516007909101556000848152600460205260409020815182919081906133749082614380565b5060208201516001820155604082015160028201906133939082614380565b5060608201516003820180546001600160a01b0319166001600160a01b03909216919091179055608082015180516133d5916004840191602090910190613c56565b5060a0820151600582015560c0820151600682015560e090910151600790910155600d805490600061340683614456565b91905055507f61940d4b9dc2d4231dc0774654510c8e5d5a05c411d82b68a5b69cff917da58a848989898960405161344295949392919061464a565b60405180910390a15050505050505050565b60606000600f5467ffffffffffffffff81111561347357613473613ef0565b6040519080825280602002602001820160405280156134da57816020015b6134c760405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b8152602001906001900390816134915790505b50905060005b600f548110156135ee5760008181526009602090815260409182902082516080810184528154815260018201546001600160a01b0316928101929092526002810180549293919291840191613534906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054613560906142c0565b80156135ad5780601f10613582576101008083540402835291602001916135ad565b820191906000526020600020905b81548152906001019060200180831161359057829003601f168201915b50505091835250506003919091015460ff16151560209091015282518390839081106135db576135db614440565b60209081029190910101526001016134e0565b50919050565b6005602052816000526040600020818154811061361057600080fd5b6000918252602090912001546001600160a01b03169150829050565b60008181526004602081905260408220919082019080805b835481101561369757336001600160a01b031684828154811061366957613669614440565b6000918252602090912001546001600160a01b03160361368f5780925060019150613697565b600101613644565b508061370b5760405162461bcd60e51b815260206004820152602260248201527f576f726b6572206973206e6f7420656d706c6f79656420696e2074686973206a60448201527f6f620000000000000000000000000000000000000000000000000000000000006064820152608401610c2c565b815b835461371b9060019061430a565b81101561379f578361372e82600161431d565b8154811061373e5761373e614440565b9060005260206000200160009054906101000a90046001600160a01b031684828154811061376e5761376e614440565b600091825260209091200180546001600160a01b0319166001600160a01b039290921691909117905560010161370d565b50828054806137b0576137b0614578565b600082815260209020810160001990810180546001600160a01b03191690550190555050505050565b6137e38133613bac565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16613888576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556138403390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161092b565b50600061092b565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615613888576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161092b565b3360009081527f8573e432f052127b18b2670f9ce48f3c6c9c93997e75a746c8799d91a4d36908602052604090205460609060ff1661396757604051631a7fc6a560e01b8152336004820152602401610c2c565b6000828152600560209081526040808320805482518185028101850190935280835291929091908301828280156139c757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116139a9575b505050505090506000815167ffffffffffffffff8111156139ea576139ea613ef0565b604051908082528060200260200182016040528015613a5157816020015b613a3e60405180608001604052806000815260200160006001600160a01b03168152602001606081526020016000151581525090565b815260200190600190039081613a085790505b50905060005b82518110156116465760016000848381518110613a7657613a76614440565b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282018054613af2906142c0565b80601f0160208091040260200160405190810160405280929190818152602001828054613b1e906142c0565b8015613b6b5780601f10613b4057610100808354040283529160200191613b6b565b820191906000526020600020905b815481529060010190602001808311613b4e57829003601f168201915b50505091835250506003919091015460ff1615156020909101528251839083908110613b9957613b99614440565b6020908102919091010152600101613a57565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16613c18576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b038216600482015260248101839052604401610c2c565b5050565b508054613c28906142c0565b6000825580601f10613c38575050565b601f0160209004906000526020600020908101906137e39190613cbb565b828054828255906000526020600020908101928215613cab579160200282015b82811115613cab57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190613c76565b50613cb7929150613cbb565b5090565b5b80821115613cb75760008155600101613cbc565b600060208284031215613ce257600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114613d1257600080fd5b9392505050565b60005b83811015613d34578181015183820152602001613d1c565b50506000910152565b60008151808452613d55816020860160208601613d19565b601f01601f19169290920160200192915050565b805182526001600160a01b0360208201511660208301526000604082015160806040850152613d9b6080850182613d3d565b6060938401511515949093019390935250919050565b602081526000613d126020830184613d69565b80356001600160a01b0381168114613ddb57600080fd5b919050565b60008060408385031215613df357600080fd5b613dfc83613dc4565b946020939093013593505050565b600060208284031215613e1c57600080fd5b5035919050565b60e081526000613e3660e083018a613d3d565b8860208401528281036040840152613e4e8189613d3d565b9150506001600160a01b03861660608301528460808301528360a08301528260c083015298975050505050505050565b60008060408385031215613e9157600080fd5b82359150613ea160208401613dc4565b90509250929050565b600060208284031215613ebc57600080fd5b613d1282613dc4565b604081526000613ed86040830185613d3d565b90506001600160a01b03831660208301529392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112613f1757600080fd5b813567ffffffffffffffff80821115613f3257613f32613ef0565b604051601f8301601f19908116603f01168101908282118183101715613f5a57613f5a613ef0565b81604052838152866020858801011115613f7357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215613fa657600080fd5b823567ffffffffffffffff811115613fbd57600080fd5b613fc985828601613f06565b925050613ea160208401613dc4565b8481526001600160a01b03841660208201526080604082015260006140006080830185613d3d565b9050821515606083015295945050505050565b6000806040838503121561402657600080fd5b50508035926020909101359150565b60008151808452602080850194506020840160005b8381101561406f5781516001600160a01b03168752958201959082019060010161404a565b509495945050505050565b6000610100825181855261409082860182613d3d565b91505060208301516020850152604083015184820360408601526140b48282613d3d565b9150506001600160a01b036060840151166060850152608083015184820360808601526140e18282614035565b91505060a083015160a085015260c083015160c085015260e083015160e08501528091505092915050565b602081526000613d12602083018461407a565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b8281101561417657603f19888603018452614164858351613d69565b94509285019290850190600101614148565b5092979650505050505050565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b8281101561417657603f198886030184526141c885835161407a565b945092850192908501906001016141ac565b6020808252825182820181905260009190848201906040850190845b81811015614212578351835292840192918401916001016141f6565b50909695505050505050565b6000806040838503121561423157600080fd5b61423a83613dc4565b9150602083013567ffffffffffffffff81111561425657600080fd5b61426285828601613f06565b9150509250929050565b6000806000806080858703121561428257600080fd5b843567ffffffffffffffff81111561429957600080fd5b6142a587828801613f06565b97602087013597506040870135966060013595509350505050565b600181811c908216806142d457607f821691505b6020821081036135ee57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561092b5761092b6142f4565b8082018082111561092b5761092b6142f4565b601f821115610f31576000816000526020600020601f850160051c810160208610156143595750805b601f850160051c820191505b8181101561437857828155600101614365565b505050505050565b815167ffffffffffffffff81111561439a5761439a613ef0565b6143ae816143a884546142c0565b84614330565b602080601f8311600181146143e357600084156143cb5750858301515b600019600386901b1c1916600185901b178555614378565b600085815260208120601f198616915b82811015614412578886015182559484019460019091019084016143f3565b50858210156144305787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b600060018201614468576144686142f4565b5060010190565b808202811582820484141761092b5761092b6142f4565b818103614491575050565b61449b82546142c0565b67ffffffffffffffff8111156144b3576144b3613ef0565b6144c1816143a884546142c0565b6000601f8211600181146144f557600083156144dd5750848201545b600019600385901b1c1916600184901b17845561455a565b600085815260209020601f19841690600086815260209020845b8381101561452f578286015482556001958601959091019060200161450f565b508583101561454d5781850154600019600388901b60f8161c191681555b50505060018360011b0184555b5050505050565b600081614570576145706142f4565b506000190190565b634e487b7160e01b600052603160045260246000fd5b600082516145a0818460208701613d19565b9190910192915050565b60008083546145b8816142c0565b600182811680156145d057600181146145e557614614565b60ff1984168752821515830287019450614614565b8760005260208060002060005b8581101561460b5781548a8201529084019082016145f2565b50505082870194505b50929695505050505050565b6001600160a01b03831681526040602082015260006146426040830184613d3d565b949350505050565b85815260a06020820152600061466360a0830187613d3d565b60408301959095525060608101929092526080909101529291505056fea2646970667358221220be379c2e058ba3b31b2878ec2406e8ef84b599ba645743db4c5e5b3abb97bfc664736f6c63430008180033",
    linkReferences: {},
    deployedLinkReferences: {},
};
