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
            ],
            name: "NewJobPosted",
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
                    internalType: "address",
                    name: "_walletAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "_companyName",
                    type: "string",
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
                    internalType: "address[]",
                    name: "",
                    type: "address[]",
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
            inputs: [
                {
                    internalType: "string",
                    name: "_location",
                    type: "string",
                },
            ],
            name: "getWorkersByLocation",
            outputs: [
                {
                    components: [
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
            ],
            name: "jobs",
            outputs: [
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
            name: "workers",
            outputs: [
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
    linkReferences: {},
    deployedLinkReferences: {},
};
