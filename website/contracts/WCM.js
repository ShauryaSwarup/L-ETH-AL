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
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "checkInTime",
                    type: "uint256",
                },
            ],
            name: "CheckIn",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "jobId",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "checkOutTime",
                    type: "uint256",
                },
            ],
            name: "CheckOut",
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
            name: "attendanceRecords",
            outputs: [
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
                    name: "jobId",
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
                    name: "jobId",
                    type: "uint256",
                },
            ],
            name: "checkOut",
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
                    internalType: "string",
                    name: "comapnyName",
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
            name: "daysAttended",
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
                            name: "comapnyName",
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
                            name: "comapnyName",
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
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
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
            inputs: [],
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
            ],
            name: "jobs",
            outputs: [
                {
                    internalType: "string",
                    name: "comapnyName",
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
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
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
        "0x608060405234801561001057600080fd5b506000600c819055506000600d819055506000600e81905550615533806100386000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806388342b711161011a578063cb7e598e116100ad578063e33f874c1161007c578063e33f874c14610633578063e95a644f1461064f578063ebff06121461066b578063ecc5766b14610689578063f2b67e7d146106ba576101fb565b8063cb7e598e146105ac578063d3fa1d62146105df578063d547741f146105fb578063e0c94ae514610617576101fb565b8063ae55b86b116100e9578063ae55b86b146104fb578063afac40bb1461052b578063c078b4a214610560578063c4a74b2b14610590576101fb565b806388342b711461045f57806391d148541461048f578063965a79fb146104bf578063a217fddf146104dd576101fb565b8063355e6ce8116101925780635ef38e34116101615780635ef38e34146103c3578063634252dc146103f35780637090de7b146104115780637b36183814610441576101fb565b8063355e6ce81461032757806336568abe1461035857806338f03269146103745780634048a25714610390576101fb565b80631c9ee11a116101ce5780631c9ee11a1461029f578063248a9ca3146102bd5780632a2520a7146102ed5780632f2ff15d1461030b576101fb565b806301ffc9a7146102005780630a636a6e14610230578063180aedf31461024e5780631bd2eeee14610283575b600080fd5b61021a60048036038101906102159190613fa6565b6106ea565b6040516102279190613fee565b60405180910390f35b610238610764565b6040516102459190613fee565b60405180910390f35b6102686004803603810190610263919061403f565b610795565b60405161027a9695949392919061414c565b60405180910390f35b61029d6004803603810190610298919061403f565b610901565b005b6102a7610b43565b6040516102b491906141d4565b60405180910390f35b6102d760048036038101906102d2919061421b565b610b67565b6040516102e491906141d4565b60405180910390f35b6102f5610b86565b6040516103029190613fee565b60405180910390f35b61032560048036038101906103209190614274565b610bb7565b005b610341600480360381019061033c91906142b4565b610bd9565b60405161034f9291906142e1565b60405180910390f35b610372600480360381019061036d9190614274565b610ca5565b005b61038e60048036038101906103899190614446565b610d20565b005b6103aa60048036038101906103a591906142b4565b610f23565b6040516103ba94939291906144a2565b60405180910390f35b6103dd60048036038101906103d891906144ee565b611008565b6040516103ea919061452e565b60405180910390f35b6103fb61102d565b60405161040891906141d4565b60405180910390f35b61042b6004803603810190610426919061403f565b611051565b60405161043891906146e5565b60405180910390f35b610449611366565b604051610456919061452e565b60405180910390f35b610479600480360381019061047491906144ee565b61136c565b604051610486919061452e565b60405180910390f35b6104a960048036038101906104a49190614274565b611391565b6040516104b69190613fee565b60405180910390f35b6104c76113fb565b6040516104d49190614922565b60405180910390f35b6104e56116e5565b6040516104f291906141d4565b60405180910390f35b610515600480360381019061051091906142b4565b6116ec565b604051610522919061452e565b60405180910390f35b610545600480360381019061054091906144ee565b611704565b6040516105579695949392919061414c565b60405180910390f35b61057a600480360381019061057591906142b4565b61187d565b6040516105879190614922565b60405180910390f35b6105aa60048036038101906105a5919061403f565b611c70565b005b6105c660048036038101906105c1919061403f565b6125f6565b6040516105d694939291906144a2565b60405180910390f35b6105f960048036038101906105f49190614944565b6126db565b005b61061560048036038101906106109190614274565b612b47565b005b610631600480360381019061062c919061403f565b612b69565b005b61064d600480360381019061064891906149b3565b612ecb565b005b6106696004803603810190610664919061403f565b6131df565b005b6106736133af565b60405161068091906146e5565b60405180910390f35b6106a3600480360381019061069e9190614a0f565b613576565b6040516106b1929190614a62565b60405180910390f35b6106d460048036038101906106cf9190614a8b565b6135c4565b6040516106e19190614acb565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061075d575061075c82613612565b5b9050919050565b60006107907f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b905090565b60046020528060005260406000206000915090508060000180546107b890614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546107e490614b15565b80156108315780601f1061080657610100808354040283529160200191610831565b820191906000526020600020905b81548152906001019060200180831161081457829003601f168201915b50505050509080600101549080600201805461084c90614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461087890614b15565b80156108c55780601f1061089a576101008083540402835291602001916108c5565b820191906000526020600020905b8154815290600101906020018083116108a857829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b6000811180156109135750600c548111155b610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990614b92565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90614bfe565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020905060008180549050118015610a6f575060008160018380549050610a4a9190614c4d565b81548110610a5b57610a5a614c81565b5b906000526020600020906002020160010154145b610aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa590614cfc565b60405180910390fd5b428160018380549050610ac19190614c4d565b81548110610ad257610ad1614c81565b5b906000526020600020906002020160010181905550610af1338361367c565b813373ffffffffffffffffffffffffffffffffffffffff167e817f5e0c1c773a9e3b8d5e7d593eb7d6556749dcc48cfd5798d888a2190f9d42604051610b37919061452e565b60405180910390a35050565b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b6000806000838152602001908152602001600020600101549050919050565b6000610bb27ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611391565b905090565b610bc082610b67565b610bc98161383e565b610bd38383613852565b50505050565b6002602052806000526040600020600091509050806000018054610bfc90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2890614b15565b8015610c755780601f10610c4a57610100808354040283529160200191610c75565b820191906000526020600020905b815481529060010190602001808311610c5857829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610cad613943565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d11576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d1b828261394b565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610df1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de890614d68565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610e709190614f34565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610ee57f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c82613852565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051610f179291906142e1565b60405180910390a15050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054610f7290614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9e90614b15565b8015610feb5780601f10610fc057610100808354040283529160200191610feb565b820191906000526020600020905b815481529060010190602001808311610fce57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6009602052816000526040600020602052806000526040600020600091509150505481565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b606061107d7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b6110be57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016110b59190614acb565b60405180910390fd5b60006005600084815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561115357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611109575b505050505090506000815167ffffffffffffffff8111156111775761117661431b565b5b6040519080825280602002602001820160405280156111b057816020015b61119d613dc0565b8152602001906001900390816111955790505b50905060005b825181101561135b57600160008483815181106111d6576111d5614c81565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461129390614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546112bf90614b15565b801561130c5780601f106112e15761010080835404028352916020019161130c565b820191906000526020600020905b8154815290600101906020018083116112ef57829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505082828151811061134357611342614c81565b5b602002602001018190525080806001019150506111b6565b508092505050919050565b600e5481565b6008602052816000526040600020602052806000526040600020600091509150505481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600c54905060008167ffffffffffffffff8111156114205761141f61431b565b5b60405190808252806020026020018201604052801561145957816020015b611446613e00565b81526020019060019003908161143e5790505b50905060005b828110156116dc576000600460008381526020019081526020016000209050806040518060e001604052908160008201805461149a90614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546114c690614b15565b80156115135780601f106114e857610100808354040283529160200191611513565b820191906000526020600020905b8154815290600101906020018083116114f657829003601f168201915b505050505081526020016001820154815260200160028201805461153690614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461156290614b15565b80156115af5780601f10611584576101008083540402835291602001916115af565b820191906000526020600020905b81548152906001019060200180831161159257829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561169357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611649575b50505050508152602001600582015481526020016006820154815250508383815181106116c3576116c2614c81565b5b602002602001018190525050808060010191505061145f565b50809250505090565b6000801b81565b600a6020528060005260406000206000915090505481565b60036020528160005260406000206020528060005260406000206000915091505080600001805461173490614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461176090614b15565b80156117ad5780601f10611782576101008083540402835291602001916117ad565b820191906000526020600020905b81548152906001019060200180831161179057829003601f168201915b5050505050908060010154908060020180546117c890614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546117f490614b15565b80156118415780601f1061181657610100808354040283529160200191611841565b820191906000526020600020905b81548152906001019060200180831161182457829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b60606000600c5490506000805b82811015611917578473ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361190a57818061190690615006565b9250505b808060010191505061188a565b5060008167ffffffffffffffff8111156119345761193361431b565b5b60405190808252806020026020018201604052801561196d57816020015b61195a613e00565b8152602001906001900390816119525790505b5090506000805b84811015611c63578673ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611c5657600460008281526020019081526020016000206040518060e0016040529081600082018054611a1390614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3f90614b15565b8015611a8c5780601f10611a6157610100808354040283529160200191611a8c565b820191906000526020600020905b815481529060010190602001808311611a6f57829003601f168201915b5050505050815260200160018201548152602001600282018054611aaf90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611adb90614b15565b8015611b285780601f10611afd57610100808354040283529160200191611b28565b820191906000526020600020905b815481529060010190602001808311611b0b57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160048201805480602002602001604051908101604052809291908181526020018280548015611c0c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611bc2575b5050505050815260200160058201548152602001600682015481525050838381518110611c3c57611c3b614c81565b5b60200260200101819052508180611c5290615006565b9250505b8080600101915050611974565b5081945050505050919050565b611c9a7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b611cdb57336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401611cd29190614acb565b60405180910390fd5b6000600460008381526020019081526020016000206040518060e0016040529081600082018054611d0b90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611d3790614b15565b8015611d845780601f10611d5957610100808354040283529160200191611d84565b820191906000526020600020905b815481529060010190602001808311611d6757829003601f168201915b5050505050815260200160018201548152602001600282018054611da790614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611dd390614b15565b8015611e205780601f10611df557610100808354040283529160200191611e20565b820191906000526020600020905b815481529060010190602001808311611e0357829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160048201805480602002602001604051908101604052809291908181526020018280548015611f0457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611eba575b5050505050815260200160058201548152602001600682015481525050905060008160c0015190506000826040015190506000836060015190503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611fac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa39061509a565b60405180910390fd5b60008311611fef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fe69061512c565b60405180910390fd5b6000611ffb8684613a3d565b90506000805b82518110801561201057508582105b1561222e57600083828151811061202a57612029614c81565b5b60200260200101519050806060015161221a57600460008a815260200190815260200160002060040181602001519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001806000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff02191690831515021790555088600a6000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555086806121699061514c565b975050828061217790615006565b935050600e600081548092919061218d9061514c565b9190505550600b60008584815181106121a9576121a8614c81565b5b60200260200101516000015181526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160006122039190613e53565b6003820160006101000a81549060ff021916905550505b50808061222690615006565b915050612001565b5084600460008981526020019081526020016000206006018190555060005b818110156125ec576000600560008a8152602001908152602001600020905060005b818054905081101561240a576001600083838154811061229257612291614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156123fd57816001838054905061231f9190614c4d565b815481106123305761232f614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682828154811061236e5761236d614c81565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818054806123c7576123c6615175565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b808060010191505061226f565b506000600660008b81526020019081526020016000208760405161242e91906151e0565b9081526020016040518091039020905060005b81805490508110156125dc576001600083838154811061246457612463614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156125cf5781600183805490506124f19190614c4d565b8154811061250257612501614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168282815481106125405761253f614c81565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508180548061259957612598615175565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050612441565b505050808060010191505061224d565b5050505050505050565b600b6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201805461264590614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461267190614b15565b80156126be5780601f10612693576101008083540402835291602001916126be565b820191906000526020600020905b8154815290600101906020018083116126a157829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6127057f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b61274657336040517f1a7fc6a500000000000000000000000000000000000000000000000000000000815260040161273d9190614acb565b60405180910390fd5b6000600c5490506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820180546127a990614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546127d590614b15565b80156128225780601f106127f757610100808354040283529160200191612822565b820191906000526020600020905b81548152906001019060200180831161280557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060008160000151905060006040518060e001604052808381526020018581526020018881526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff8111156128e2576128e161431b565b5b6040519080825280602002602001820160405280156129105781602001602082028036833780820191505090505b50815260200187815260200186815250905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060008201518160000190816129889190614f34565b506020820151816001015560408201518160020190816129a89190614f34565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004019080519060200190612a0c929190613e93565b5060a0820151816005015560c0820151816006015590505080600460008681526020019081526020016000206000820151816000019081612a4d9190614f34565b50602082015181600101556040820151816002019081612a6d9190614f34565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004019080519060200190612ad1929190613e93565b5060a0820151816005015560c08201518160060155905050600c6000815480929190612afc90615006565b91905055507f1de1b746452f172ccab29b4f979ee99345aafe2d2034aa42c6e56ace7b72fcdf84888888604051612b3694939291906151f7565b60405180910390a150505050505050565b612b5082610b67565b612b598161383e565b612b63838361394b565b50505050565b612b937ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611391565b612bd457336040517f5cb17c0e000000000000000000000000000000000000000000000000000000008152600401612bcb9190614acb565b60405180910390fd5b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16151514612c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c619061528f565b60405180910390fd5b600060056000838152602001908152602001600020905060005b8180549050811015612d48573373ffffffffffffffffffffffffffffffffffffffff16828281548110612cba57612cb9614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603612d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d3290615321565b60405180910390fd5b8080600101915050612c84565b5060056000838152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000838152602001908152602001600020600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201604051612e1f91906153c4565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f3383604051612ebf9291906153db565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612f9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f9390615450565b60405180910390fd5b60006040518060800160405280600d5481526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190816130829190614f34565b5060608201518160030160006101000a81548160ff02191690831515021790555090505080600b6000600d5481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190816131229190614f34565b5060608201518160030160006101000a81548160ff021916908315150217905550905050600e600081548092919061315990615006565b9190505550600d600081548092919061317190615006565b91905055506131a07ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc784613852565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb93283836040516131d2929190615470565b60405180910390a1505050565b600081101580156131f25750600c548111155b613231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161322890614b92565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146132b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132a990614bfe565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002090508060405180604001604052804281526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050813373ffffffffffffffffffffffffffffffffffffffff167fb9cfea4717f167774a6e8643c33472935d3ef918453525eefca6936078b7cfdd426040516133a3919061452e565b60405180910390a35050565b60606000600e5467ffffffffffffffff8111156133cf576133ce61431b565b5b60405190808252806020026020018201604052801561340857816020015b6133f5613dc0565b8152602001906001900390816133ed5790505b50905060005b600e5481101561356e57600b6000828152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546134a690614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546134d290614b15565b801561351f5780601f106134f45761010080835404028352916020019161351f565b820191906000526020600020905b81548152906001019060200180831161350257829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505082828151811061355657613555614c81565b5b6020026020010181905250808060010191505061340e565b508091505090565b6007602052826000526040600020602052816000526040600020818154811061359e57600080fd5b906000526020600020906002020160009250925050508060000154908060010154905082565b600560205281600052604060002081815481106135e057600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020905060008060005b838054905081101561378c5760008482815481106136f7576136f6614c81565b5b906000526020600020906002020160010154111561377f57828061371a90615006565b9350508381815481106137305761372f614c81565b5b90600052602060002090600202016000015484828154811061375557613754614c81565b5b9060005260206000209060020201600101546137719190614c4d565b8261377c91906154a0565b91505b80806001019150506136d6565b5081600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208190555080600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020819055505050505050565b61384f8161384a613943565b613d6f565b50565b600061385e8383611391565b61393857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506138d5613943565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061393d565b600090505b92915050565b600033905090565b60006139578383611391565b15613a3257600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506139cf613943565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050613a37565b600090505b92915050565b6060613a697f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b613aaa57336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401613aa19190614acb565b60405180910390fd5b60006006600085815260200190815260200160002083604051613acd91906151e0565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020018280548015613b5b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311613b11575b505050505090506000815167ffffffffffffffff811115613b7f57613b7e61431b565b5b604051908082528060200260200182016040528015613bb857816020015b613ba5613dc0565b815260200190600190039081613b9d5790505b50905060005b8251811015613d635760016000848381518110613bde57613bdd614c81565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054613c9b90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054613cc790614b15565b8015613d145780601f10613ce957610100808354040283529160200191613d14565b820191906000526020600020905b815481529060010190602001808311613cf757829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581525050828281518110613d4b57613d4a614c81565b5b60200260200101819052508080600101915050613bbe565b50809250505092915050565b613d798282611391565b613dbc5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401613db39291906154d4565b60405180910390fd5b5050565b604051806080016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b6040518060e00160405280606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081525090565b508054613e5f90614b15565b6000825580601f10613e715750613e90565b601f016020900490600052602060002090810190613e8f9190613f1d565b5b50565b828054828255906000526020600020908101928215613f0c579160200282015b82811115613f0b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190613eb3565b5b509050613f199190613f1d565b5090565b5b80821115613f36576000816000905550600101613f1e565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613f8381613f4e565b8114613f8e57600080fd5b50565b600081359050613fa081613f7a565b92915050565b600060208284031215613fbc57613fbb613f44565b5b6000613fca84828501613f91565b91505092915050565b60008115159050919050565b613fe881613fd3565b82525050565b60006020820190506140036000830184613fdf565b92915050565b6000819050919050565b61401c81614009565b811461402757600080fd5b50565b60008135905061403981614013565b92915050565b60006020828403121561405557614054613f44565b5b60006140638482850161402a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156140a657808201518184015260208101905061408b565b60008484015250505050565b6000601f19601f8301169050919050565b60006140ce8261406c565b6140d88185614077565b93506140e8818560208601614088565b6140f1816140b2565b840191505092915050565b61410581614009565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006141368261410b565b9050919050565b6141468161412b565b82525050565b600060c082019050818103600083015261416681896140c3565b905061417560208301886140fc565b818103604083015261418781876140c3565b9050614196606083018661413d565b6141a360808301856140fc565b6141b060a08301846140fc565b979650505050505050565b6000819050919050565b6141ce816141bb565b82525050565b60006020820190506141e960008301846141c5565b92915050565b6141f8816141bb565b811461420357600080fd5b50565b600081359050614215816141ef565b92915050565b60006020828403121561423157614230613f44565b5b600061423f84828501614206565b91505092915050565b6142518161412b565b811461425c57600080fd5b50565b60008135905061426e81614248565b92915050565b6000806040838503121561428b5761428a613f44565b5b600061429985828601614206565b92505060206142aa8582860161425f565b9150509250929050565b6000602082840312156142ca576142c9613f44565b5b60006142d88482850161425f565b91505092915050565b600060408201905081810360008301526142fb81856140c3565b905061430a602083018461413d565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b614353826140b2565b810181811067ffffffffffffffff821117156143725761437161431b565b5b80604052505050565b6000614385613f3a565b9050614391828261434a565b919050565b600067ffffffffffffffff8211156143b1576143b061431b565b5b6143ba826140b2565b9050602081019050919050565b82818337600083830152505050565b60006143e96143e484614396565b61437b565b90508281526020810184848401111561440557614404614316565b5b6144108482856143c7565b509392505050565b600082601f83011261442d5761442c614311565b5b813561443d8482602086016143d6565b91505092915050565b6000806040838503121561445d5761445c613f44565b5b600083013567ffffffffffffffff81111561447b5761447a613f49565b5b61448785828601614418565b92505060206144988582860161425f565b9150509250929050565b60006080820190506144b760008301876140fc565b6144c4602083018661413d565b81810360408301526144d681856140c3565b90506144e56060830184613fdf565b95945050505050565b6000806040838503121561450557614504613f44565b5b60006145138582860161425f565b92505060206145248582860161402a565b9150509250929050565b600060208201905061454360008301846140fc565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61457e81614009565b82525050565b61458d8161412b565b82525050565b600082825260208201905092915050565b60006145af8261406c565b6145b98185614593565b93506145c9818560208601614088565b6145d2816140b2565b840191505092915050565b6145e681613fd3565b82525050565b60006080830160008301516146046000860182614575565b5060208301516146176020860182614584565b506040830151848203604086015261462f82826145a4565b915050606083015161464460608601826145dd565b508091505092915050565b600061465b83836145ec565b905092915050565b6000602082019050919050565b600061467b82614549565b6146858185614554565b93508360208202850161469785614565565b8060005b858110156146d357848403895281516146b4858261464f565b94506146bf83614663565b925060208a0199505060018101905061469b565b50829750879550505050505092915050565b600060208201905081810360008301526146ff8184614670565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061476b8383614584565b60208301905092915050565b6000602082019050919050565b600061478f82614733565b614799818561473e565b93506147a48361474f565b8060005b838110156147d55781516147bc888261475f565b97506147c783614777565b9250506001810190506147a8565b5085935050505092915050565b600060e08301600083015184820360008601526147ff82826145a4565b91505060208301516148146020860182614575565b506040830151848203604086015261482c82826145a4565b91505060608301516148416060860182614584565b50608083015184820360808601526148598282614784565b91505060a083015161486e60a0860182614575565b5060c083015161488160c0860182614575565b508091505092915050565b600061489883836147e2565b905092915050565b6000602082019050919050565b60006148b882614707565b6148c28185614712565b9350836020820285016148d485614723565b8060005b8581101561491057848403895281516148f1858261488c565b94506148fc836148a0565b925060208a019950506001810190506148d8565b50829750879550505050505092915050565b6000602082019050818103600083015261493c81846148ad565b905092915050565b60008060006060848603121561495d5761495c613f44565b5b600084013567ffffffffffffffff81111561497b5761497a613f49565b5b61498786828701614418565b93505060206149988682870161402a565b92505060406149a98682870161402a565b9150509250925092565b600080604083850312156149ca576149c9613f44565b5b60006149d88582860161425f565b925050602083013567ffffffffffffffff8111156149f9576149f8613f49565b5b614a0585828601614418565b9150509250929050565b600080600060608486031215614a2857614a27613f44565b5b6000614a368682870161425f565b9350506020614a478682870161402a565b9250506040614a588682870161402a565b9150509250925092565b6000604082019050614a7760008301856140fc565b614a8460208301846140fc565b9392505050565b60008060408385031215614aa257614aa1613f44565b5b6000614ab08582860161402a565b9250506020614ac18582860161402a565b9150509250929050565b6000602082019050614ae0600083018461413d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680614b2d57607f821691505b602082108103614b4057614b3f614ae6565b5b50919050565b7f496e76616c6964206a6f62204944000000000000000000000000000000000000600082015250565b6000614b7c600e83614077565b9150614b8782614b46565b602082019050919050565b60006020820190508181036000830152614bab81614b6f565b9050919050565b7f4e6f7420656d706c6f79656420666f722074686973206a6f6200000000000000600082015250565b6000614be8601983614077565b9150614bf382614bb2565b602082019050919050565b60006020820190508181036000830152614c1781614bdb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614c5882614009565b9150614c6383614009565b9250828203905081811115614c7b57614c7a614c1e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e6f7420636865636b656420696e000000000000000000000000000000000000600082015250565b6000614ce6600e83614077565b9150614cf182614cb0565b602082019050919050565b60006020820190508181036000830152614d1581614cd9565b9050919050565b7f436f6d70616e7920616c72656164792065786973747300000000000000000000600082015250565b6000614d52601683614077565b9150614d5d82614d1c565b602082019050919050565b60006020820190508181036000830152614d8181614d45565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302614dea7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614dad565b614df48683614dad565b95508019841693508086168417925050509392505050565b6000819050919050565b6000614e31614e2c614e2784614009565b614e0c565b614009565b9050919050565b6000819050919050565b614e4b83614e16565b614e5f614e5782614e38565b848454614dba565b825550505050565b600090565b614e74614e67565b614e7f818484614e42565b505050565b5b81811015614ea357614e98600082614e6c565b600181019050614e85565b5050565b601f821115614ee857614eb981614d88565b614ec284614d9d565b81016020851015614ed1578190505b614ee5614edd85614d9d565b830182614e84565b50505b505050565b600082821c905092915050565b6000614f0b60001984600802614eed565b1980831691505092915050565b6000614f248383614efa565b9150826002028217905092915050565b614f3d8261406c565b67ffffffffffffffff811115614f5657614f5561431b565b5b614f608254614b15565b614f6b828285614ea7565b600060209050601f831160018114614f9e5760008415614f8c578287015190505b614f968582614f18565b865550614ffe565b601f198416614fac86614d88565b60005b82811015614fd457848901518255600182019150602085019450602081019050614faf565b86831015614ff15784890151614fed601f891682614efa565b8355505b6001600288020188555050505b505050505050565b600061501182614009565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361504357615042614c1e565b5b600182019050919050565b7f54686973206a6f62206973206e6f74206f66666572656420627920796f752e00600082015250565b6000615084601f83614077565b915061508f8261504e565b602082019050919050565b600060208201905081810360008301526150b381615077565b9050919050565b7f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060008201527f6a6f620000000000000000000000000000000000000000000000000000000000602082015250565b6000615116602383614077565b9150615121826150ba565b604082019050919050565b6000602082019050818103600083015261514581615109565b9050919050565b600061515782614009565b91506000820361516a57615169614c1e565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081905092915050565b60006151ba8261406c565b6151c481856151a4565b93506151d4818560208601614088565b80840191505092915050565b60006151ec82846151af565b915081905092915050565b600060808201905061520c60008301876140fc565b818103602083015261521e81866140c3565b905061522d60408301856140fc565b61523a60608301846140fc565b95945050505050565b7f576f726b657220697320616c726561647920656d706c6f796564000000000000600082015250565b6000615279601a83614077565b915061528482615243565b602082019050919050565b600060208201905081810360008301526152a88161526c565b9050919050565b7f576f726b65722068617320616c7265616479206170706c69656420666f72207460008201527f686973206a6f6200000000000000000000000000000000000000000000000000602082015250565b600061530b602783614077565b9150615316826152af565b604082019050919050565b6000602082019050818103600083015261533a816152fe565b9050919050565b6000815461534e81614b15565b61535881866151a4565b945060018216600081146153735760018114615388576153bb565b60ff19831686528115158202860193506153bb565b61539185614d88565b60005b838110156153b357815481890152600182019150602081019050615394565b838801955050505b50505092915050565b60006153d08284615341565b915081905092915050565b60006040820190506153f0600083018561413d565b6153fd60208301846140fc565b9392505050565b7f576f726b657220616c7265616479206578697374730000000000000000000000600082015250565b600061543a601583614077565b915061544582615404565b602082019050919050565b600060208201905081810360008301526154698161542d565b9050919050565b6000604082019050615485600083018561413d565b818103602083015261549781846140c3565b90509392505050565b60006154ab82614009565b91506154b683614009565b92508282019050808211156154ce576154cd614c1e565b5b92915050565b60006040820190506154e9600083018561413d565b6154f660208301846141c5565b939250505056fea2646970667358221220fb0ee782c4359283f76878444b48fc1a6d02c7b9e8ddffcc4c604d37082f20c164736f6c63430008180033",
    deployedBytecode:
        "0x608060405234801561001057600080fd5b50600436106101fb5760003560e01c806388342b711161011a578063cb7e598e116100ad578063e33f874c1161007c578063e33f874c14610633578063e95a644f1461064f578063ebff06121461066b578063ecc5766b14610689578063f2b67e7d146106ba576101fb565b8063cb7e598e146105ac578063d3fa1d62146105df578063d547741f146105fb578063e0c94ae514610617576101fb565b8063ae55b86b116100e9578063ae55b86b146104fb578063afac40bb1461052b578063c078b4a214610560578063c4a74b2b14610590576101fb565b806388342b711461045f57806391d148541461048f578063965a79fb146104bf578063a217fddf146104dd576101fb565b8063355e6ce8116101925780635ef38e34116101615780635ef38e34146103c3578063634252dc146103f35780637090de7b146104115780637b36183814610441576101fb565b8063355e6ce81461032757806336568abe1461035857806338f03269146103745780634048a25714610390576101fb565b80631c9ee11a116101ce5780631c9ee11a1461029f578063248a9ca3146102bd5780632a2520a7146102ed5780632f2ff15d1461030b576101fb565b806301ffc9a7146102005780630a636a6e14610230578063180aedf31461024e5780631bd2eeee14610283575b600080fd5b61021a60048036038101906102159190613fa6565b6106ea565b6040516102279190613fee565b60405180910390f35b610238610764565b6040516102459190613fee565b60405180910390f35b6102686004803603810190610263919061403f565b610795565b60405161027a9695949392919061414c565b60405180910390f35b61029d6004803603810190610298919061403f565b610901565b005b6102a7610b43565b6040516102b491906141d4565b60405180910390f35b6102d760048036038101906102d2919061421b565b610b67565b6040516102e491906141d4565b60405180910390f35b6102f5610b86565b6040516103029190613fee565b60405180910390f35b61032560048036038101906103209190614274565b610bb7565b005b610341600480360381019061033c91906142b4565b610bd9565b60405161034f9291906142e1565b60405180910390f35b610372600480360381019061036d9190614274565b610ca5565b005b61038e60048036038101906103899190614446565b610d20565b005b6103aa60048036038101906103a591906142b4565b610f23565b6040516103ba94939291906144a2565b60405180910390f35b6103dd60048036038101906103d891906144ee565b611008565b6040516103ea919061452e565b60405180910390f35b6103fb61102d565b60405161040891906141d4565b60405180910390f35b61042b6004803603810190610426919061403f565b611051565b60405161043891906146e5565b60405180910390f35b610449611366565b604051610456919061452e565b60405180910390f35b610479600480360381019061047491906144ee565b61136c565b604051610486919061452e565b60405180910390f35b6104a960048036038101906104a49190614274565b611391565b6040516104b69190613fee565b60405180910390f35b6104c76113fb565b6040516104d49190614922565b60405180910390f35b6104e56116e5565b6040516104f291906141d4565b60405180910390f35b610515600480360381019061051091906142b4565b6116ec565b604051610522919061452e565b60405180910390f35b610545600480360381019061054091906144ee565b611704565b6040516105579695949392919061414c565b60405180910390f35b61057a600480360381019061057591906142b4565b61187d565b6040516105879190614922565b60405180910390f35b6105aa60048036038101906105a5919061403f565b611c70565b005b6105c660048036038101906105c1919061403f565b6125f6565b6040516105d694939291906144a2565b60405180910390f35b6105f960048036038101906105f49190614944565b6126db565b005b61061560048036038101906106109190614274565b612b47565b005b610631600480360381019061062c919061403f565b612b69565b005b61064d600480360381019061064891906149b3565b612ecb565b005b6106696004803603810190610664919061403f565b6131df565b005b6106736133af565b60405161068091906146e5565b60405180910390f35b6106a3600480360381019061069e9190614a0f565b613576565b6040516106b1929190614a62565b60405180910390f35b6106d460048036038101906106cf9190614a8b565b6135c4565b6040516106e19190614acb565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061075d575061075c82613612565b5b9050919050565b60006107907f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b905090565b60046020528060005260406000206000915090508060000180546107b890614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546107e490614b15565b80156108315780601f1061080657610100808354040283529160200191610831565b820191906000526020600020905b81548152906001019060200180831161081457829003601f168201915b50505050509080600101549080600201805461084c90614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461087890614b15565b80156108c55780601f1061089a576101008083540402835291602001916108c5565b820191906000526020600020905b8154815290600101906020018083116108a857829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b6000811180156109135750600c548111155b610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094990614b92565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90614bfe565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020905060008180549050118015610a6f575060008160018380549050610a4a9190614c4d565b81548110610a5b57610a5a614c81565b5b906000526020600020906002020160010154145b610aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa590614cfc565b60405180910390fd5b428160018380549050610ac19190614c4d565b81548110610ad257610ad1614c81565b5b906000526020600020906002020160010181905550610af1338361367c565b813373ffffffffffffffffffffffffffffffffffffffff167e817f5e0c1c773a9e3b8d5e7d593eb7d6556749dcc48cfd5798d888a2190f9d42604051610b37919061452e565b60405180910390a35050565b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b6000806000838152602001908152602001600020600101549050919050565b6000610bb27ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611391565b905090565b610bc082610b67565b610bc98161383e565b610bd38383613852565b50505050565b6002602052806000526040600020600091509050806000018054610bfc90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2890614b15565b8015610c755780601f10610c4a57610100808354040283529160200191610c75565b820191906000526020600020905b815481529060010190602001808311610c5857829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610cad613943565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d11576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d1b828261394b565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610df1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de890614d68565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610e709190614f34565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610ee57f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c82613852565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051610f179291906142e1565b60405180910390a15050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054610f7290614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9e90614b15565b8015610feb5780601f10610fc057610100808354040283529160200191610feb565b820191906000526020600020905b815481529060010190602001808311610fce57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6009602052816000526040600020602052806000526040600020600091509150505481565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b606061107d7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b6110be57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016110b59190614acb565b60405180910390fd5b60006005600084815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561115357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611109575b505050505090506000815167ffffffffffffffff8111156111775761117661431b565b5b6040519080825280602002602001820160405280156111b057816020015b61119d613dc0565b8152602001906001900390816111955790505b50905060005b825181101561135b57600160008483815181106111d6576111d5614c81565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461129390614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546112bf90614b15565b801561130c5780601f106112e15761010080835404028352916020019161130c565b820191906000526020600020905b8154815290600101906020018083116112ef57829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505082828151811061134357611342614c81565b5b602002602001018190525080806001019150506111b6565b508092505050919050565b600e5481565b6008602052816000526040600020602052806000526040600020600091509150505481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600c54905060008167ffffffffffffffff8111156114205761141f61431b565b5b60405190808252806020026020018201604052801561145957816020015b611446613e00565b81526020019060019003908161143e5790505b50905060005b828110156116dc576000600460008381526020019081526020016000209050806040518060e001604052908160008201805461149a90614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546114c690614b15565b80156115135780601f106114e857610100808354040283529160200191611513565b820191906000526020600020905b8154815290600101906020018083116114f657829003601f168201915b505050505081526020016001820154815260200160028201805461153690614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461156290614b15565b80156115af5780601f10611584576101008083540402835291602001916115af565b820191906000526020600020905b81548152906001019060200180831161159257829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561169357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611649575b50505050508152602001600582015481526020016006820154815250508383815181106116c3576116c2614c81565b5b602002602001018190525050808060010191505061145f565b50809250505090565b6000801b81565b600a6020528060005260406000206000915090505481565b60036020528160005260406000206020528060005260406000206000915091505080600001805461173490614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461176090614b15565b80156117ad5780601f10611782576101008083540402835291602001916117ad565b820191906000526020600020905b81548152906001019060200180831161179057829003601f168201915b5050505050908060010154908060020180546117c890614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546117f490614b15565b80156118415780601f1061181657610100808354040283529160200191611841565b820191906000526020600020905b81548152906001019060200180831161182457829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b60606000600c5490506000805b82811015611917578473ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361190a57818061190690615006565b9250505b808060010191505061188a565b5060008167ffffffffffffffff8111156119345761193361431b565b5b60405190808252806020026020018201604052801561196d57816020015b61195a613e00565b8152602001906001900390816119525790505b5090506000805b84811015611c63578673ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611c5657600460008281526020019081526020016000206040518060e0016040529081600082018054611a1390614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611a3f90614b15565b8015611a8c5780601f10611a6157610100808354040283529160200191611a8c565b820191906000526020600020905b815481529060010190602001808311611a6f57829003601f168201915b5050505050815260200160018201548152602001600282018054611aaf90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611adb90614b15565b8015611b285780601f10611afd57610100808354040283529160200191611b28565b820191906000526020600020905b815481529060010190602001808311611b0b57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160048201805480602002602001604051908101604052809291908181526020018280548015611c0c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611bc2575b5050505050815260200160058201548152602001600682015481525050838381518110611c3c57611c3b614c81565b5b60200260200101819052508180611c5290615006565b9250505b8080600101915050611974565b5081945050505050919050565b611c9a7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b611cdb57336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401611cd29190614acb565b60405180910390fd5b6000600460008381526020019081526020016000206040518060e0016040529081600082018054611d0b90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611d3790614b15565b8015611d845780601f10611d5957610100808354040283529160200191611d84565b820191906000526020600020905b815481529060010190602001808311611d6757829003601f168201915b5050505050815260200160018201548152602001600282018054611da790614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054611dd390614b15565b8015611e205780601f10611df557610100808354040283529160200191611e20565b820191906000526020600020905b815481529060010190602001808311611e0357829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160048201805480602002602001604051908101604052809291908181526020018280548015611f0457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611eba575b5050505050815260200160058201548152602001600682015481525050905060008160c0015190506000826040015190506000836060015190503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611fac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa39061509a565b60405180910390fd5b60008311611fef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fe69061512c565b60405180910390fd5b6000611ffb8684613a3d565b90506000805b82518110801561201057508582105b1561222e57600083828151811061202a57612029614c81565b5b60200260200101519050806060015161221a57600460008a815260200190815260200160002060040181602001519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001806000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff02191690831515021790555088600a6000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555086806121699061514c565b975050828061217790615006565b935050600e600081548092919061218d9061514c565b9190505550600b60008584815181106121a9576121a8614c81565b5b60200260200101516000015181526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160006122039190613e53565b6003820160006101000a81549060ff021916905550505b50808061222690615006565b915050612001565b5084600460008981526020019081526020016000206006018190555060005b818110156125ec576000600560008a8152602001908152602001600020905060005b818054905081101561240a576001600083838154811061229257612291614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156123fd57816001838054905061231f9190614c4d565b815481106123305761232f614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682828154811061236e5761236d614c81565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818054806123c7576123c6615175565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b808060010191505061226f565b506000600660008b81526020019081526020016000208760405161242e91906151e0565b9081526020016040518091039020905060005b81805490508110156125dc576001600083838154811061246457612463614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16156125cf5781600183805490506124f19190614c4d565b8154811061250257612501614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168282815481106125405761253f614c81565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508180548061259957612598615175565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050612441565b505050808060010191505061224d565b5050505050505050565b600b6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201805461264590614b15565b80601f016020809104026020016040519081016040528092919081815260200182805461267190614b15565b80156126be5780601f10612693576101008083540402835291602001916126be565b820191906000526020600020905b8154815290600101906020018083116126a157829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6127057f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b61274657336040517f1a7fc6a500000000000000000000000000000000000000000000000000000000815260040161273d9190614acb565b60405180910390fd5b6000600c5490506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820180546127a990614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546127d590614b15565b80156128225780601f106127f757610100808354040283529160200191612822565b820191906000526020600020905b81548152906001019060200180831161280557829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060008160000151905060006040518060e001604052808381526020018581526020018881526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff8111156128e2576128e161431b565b5b6040519080825280602002602001820160405280156129105781602001602082028036833780820191505090505b50815260200187815260200186815250905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002060008201518160000190816129889190614f34565b506020820151816001015560408201518160020190816129a89190614f34565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004019080519060200190612a0c929190613e93565b5060a0820151816005015560c0820151816006015590505080600460008681526020019081526020016000206000820151816000019081612a4d9190614f34565b50602082015181600101556040820151816002019081612a6d9190614f34565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506080820151816004019080519060200190612ad1929190613e93565b5060a0820151816005015560c08201518160060155905050600c6000815480929190612afc90615006565b91905055507f1de1b746452f172ccab29b4f979ee99345aafe2d2034aa42c6e56ace7b72fcdf84888888604051612b3694939291906151f7565b60405180910390a150505050505050565b612b5082610b67565b612b598161383e565b612b63838361394b565b50505050565b612b937ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611391565b612bd457336040517f5cb17c0e000000000000000000000000000000000000000000000000000000008152600401612bcb9190614acb565b60405180910390fd5b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16151514612c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c619061528f565b60405180910390fd5b600060056000838152602001908152602001600020905060005b8180549050811015612d48573373ffffffffffffffffffffffffffffffffffffffff16828281548110612cba57612cb9614c81565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603612d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d3290615321565b60405180910390fd5b8080600101915050612c84565b5060056000838152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000838152602001908152602001600020600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201604051612e1f91906153c4565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f3383604051612ebf9291906153db565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612f9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f9390615450565b60405180910390fd5b60006040518060800160405280600d5481526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190816130829190614f34565b5060608201518160030160006101000a81548160ff02191690831515021790555090505080600b6000600d5481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190816131229190614f34565b5060608201518160030160006101000a81548160ff021916908315150217905550905050600e600081548092919061315990615006565b9190505550600d600081548092919061317190615006565b91905055506131a07ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc784613852565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb93283836040516131d2929190615470565b60405180910390a1505050565b600081101580156131f25750600c548111155b613231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161322890614b92565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146132b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132a990614bfe565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002090508060405180604001604052804281526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050813373ffffffffffffffffffffffffffffffffffffffff167fb9cfea4717f167774a6e8643c33472935d3ef918453525eefca6936078b7cfdd426040516133a3919061452e565b60405180910390a35050565b60606000600e5467ffffffffffffffff8111156133cf576133ce61431b565b5b60405190808252806020026020018201604052801561340857816020015b6133f5613dc0565b8152602001906001900390816133ed5790505b50905060005b600e5481101561356e57600b6000828152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546134a690614b15565b80601f01602080910402602001604051908101604052809291908181526020018280546134d290614b15565b801561351f5780601f106134f45761010080835404028352916020019161351f565b820191906000526020600020905b81548152906001019060200180831161350257829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505082828151811061355657613555614c81565b5b6020026020010181905250808060010191505061340e565b508091505090565b6007602052826000526040600020602052816000526040600020818154811061359e57600080fd5b906000526020600020906002020160009250925050508060000154908060010154905082565b600560205281600052604060002081815481106135e057600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020905060008060005b838054905081101561378c5760008482815481106136f7576136f6614c81565b5b906000526020600020906002020160010154111561377f57828061371a90615006565b9350508381815481106137305761372f614c81565b5b90600052602060002090600202016000015484828154811061375557613754614c81565b5b9060005260206000209060020201600101546137719190614c4d565b8261377c91906154a0565b91505b80806001019150506136d6565b5081600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208190555080600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020819055505050505050565b61384f8161384a613943565b613d6f565b50565b600061385e8383611391565b61393857600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506138d5613943565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061393d565b600090505b92915050565b600033905090565b60006139578383611391565b15613a3257600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506139cf613943565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050613a37565b600090505b92915050565b6060613a697f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611391565b613aaa57336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401613aa19190614acb565b60405180910390fd5b60006006600085815260200190815260200160002083604051613acd91906151e0565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020018280548015613b5b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311613b11575b505050505090506000815167ffffffffffffffff811115613b7f57613b7e61431b565b5b604051908082528060200260200182016040528015613bb857816020015b613ba5613dc0565b815260200190600190039081613b9d5790505b50905060005b8251811015613d635760016000848381518110613bde57613bdd614c81565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054613c9b90614b15565b80601f0160208091040260200160405190810160405280929190818152602001828054613cc790614b15565b8015613d145780601f10613ce957610100808354040283529160200191613d14565b820191906000526020600020905b815481529060010190602001808311613cf757829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581525050828281518110613d4b57613d4a614c81565b5b60200260200101819052508080600101915050613bbe565b50809250505092915050565b613d798282611391565b613dbc5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401613db39291906154d4565b60405180910390fd5b5050565b604051806080016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b6040518060e00160405280606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081525090565b508054613e5f90614b15565b6000825580601f10613e715750613e90565b601f016020900490600052602060002090810190613e8f9190613f1d565b5b50565b828054828255906000526020600020908101928215613f0c579160200282015b82811115613f0b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190613eb3565b5b509050613f199190613f1d565b5090565b5b80821115613f36576000816000905550600101613f1e565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613f8381613f4e565b8114613f8e57600080fd5b50565b600081359050613fa081613f7a565b92915050565b600060208284031215613fbc57613fbb613f44565b5b6000613fca84828501613f91565b91505092915050565b60008115159050919050565b613fe881613fd3565b82525050565b60006020820190506140036000830184613fdf565b92915050565b6000819050919050565b61401c81614009565b811461402757600080fd5b50565b60008135905061403981614013565b92915050565b60006020828403121561405557614054613f44565b5b60006140638482850161402a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156140a657808201518184015260208101905061408b565b60008484015250505050565b6000601f19601f8301169050919050565b60006140ce8261406c565b6140d88185614077565b93506140e8818560208601614088565b6140f1816140b2565b840191505092915050565b61410581614009565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006141368261410b565b9050919050565b6141468161412b565b82525050565b600060c082019050818103600083015261416681896140c3565b905061417560208301886140fc565b818103604083015261418781876140c3565b9050614196606083018661413d565b6141a360808301856140fc565b6141b060a08301846140fc565b979650505050505050565b6000819050919050565b6141ce816141bb565b82525050565b60006020820190506141e960008301846141c5565b92915050565b6141f8816141bb565b811461420357600080fd5b50565b600081359050614215816141ef565b92915050565b60006020828403121561423157614230613f44565b5b600061423f84828501614206565b91505092915050565b6142518161412b565b811461425c57600080fd5b50565b60008135905061426e81614248565b92915050565b6000806040838503121561428b5761428a613f44565b5b600061429985828601614206565b92505060206142aa8582860161425f565b9150509250929050565b6000602082840312156142ca576142c9613f44565b5b60006142d88482850161425f565b91505092915050565b600060408201905081810360008301526142fb81856140c3565b905061430a602083018461413d565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b614353826140b2565b810181811067ffffffffffffffff821117156143725761437161431b565b5b80604052505050565b6000614385613f3a565b9050614391828261434a565b919050565b600067ffffffffffffffff8211156143b1576143b061431b565b5b6143ba826140b2565b9050602081019050919050565b82818337600083830152505050565b60006143e96143e484614396565b61437b565b90508281526020810184848401111561440557614404614316565b5b6144108482856143c7565b509392505050565b600082601f83011261442d5761442c614311565b5b813561443d8482602086016143d6565b91505092915050565b6000806040838503121561445d5761445c613f44565b5b600083013567ffffffffffffffff81111561447b5761447a613f49565b5b61448785828601614418565b92505060206144988582860161425f565b9150509250929050565b60006080820190506144b760008301876140fc565b6144c4602083018661413d565b81810360408301526144d681856140c3565b90506144e56060830184613fdf565b95945050505050565b6000806040838503121561450557614504613f44565b5b60006145138582860161425f565b92505060206145248582860161402a565b9150509250929050565b600060208201905061454360008301846140fc565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61457e81614009565b82525050565b61458d8161412b565b82525050565b600082825260208201905092915050565b60006145af8261406c565b6145b98185614593565b93506145c9818560208601614088565b6145d2816140b2565b840191505092915050565b6145e681613fd3565b82525050565b60006080830160008301516146046000860182614575565b5060208301516146176020860182614584565b506040830151848203604086015261462f82826145a4565b915050606083015161464460608601826145dd565b508091505092915050565b600061465b83836145ec565b905092915050565b6000602082019050919050565b600061467b82614549565b6146858185614554565b93508360208202850161469785614565565b8060005b858110156146d357848403895281516146b4858261464f565b94506146bf83614663565b925060208a0199505060018101905061469b565b50829750879550505050505092915050565b600060208201905081810360008301526146ff8184614670565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061476b8383614584565b60208301905092915050565b6000602082019050919050565b600061478f82614733565b614799818561473e565b93506147a48361474f565b8060005b838110156147d55781516147bc888261475f565b97506147c783614777565b9250506001810190506147a8565b5085935050505092915050565b600060e08301600083015184820360008601526147ff82826145a4565b91505060208301516148146020860182614575565b506040830151848203604086015261482c82826145a4565b91505060608301516148416060860182614584565b50608083015184820360808601526148598282614784565b91505060a083015161486e60a0860182614575565b5060c083015161488160c0860182614575565b508091505092915050565b600061489883836147e2565b905092915050565b6000602082019050919050565b60006148b882614707565b6148c28185614712565b9350836020820285016148d485614723565b8060005b8581101561491057848403895281516148f1858261488c565b94506148fc836148a0565b925060208a019950506001810190506148d8565b50829750879550505050505092915050565b6000602082019050818103600083015261493c81846148ad565b905092915050565b60008060006060848603121561495d5761495c613f44565b5b600084013567ffffffffffffffff81111561497b5761497a613f49565b5b61498786828701614418565b93505060206149988682870161402a565b92505060406149a98682870161402a565b9150509250925092565b600080604083850312156149ca576149c9613f44565b5b60006149d88582860161425f565b925050602083013567ffffffffffffffff8111156149f9576149f8613f49565b5b614a0585828601614418565b9150509250929050565b600080600060608486031215614a2857614a27613f44565b5b6000614a368682870161425f565b9350506020614a478682870161402a565b9250506040614a588682870161402a565b9150509250925092565b6000604082019050614a7760008301856140fc565b614a8460208301846140fc565b9392505050565b60008060408385031215614aa257614aa1613f44565b5b6000614ab08582860161402a565b9250506020614ac18582860161402a565b9150509250929050565b6000602082019050614ae0600083018461413d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680614b2d57607f821691505b602082108103614b4057614b3f614ae6565b5b50919050565b7f496e76616c6964206a6f62204944000000000000000000000000000000000000600082015250565b6000614b7c600e83614077565b9150614b8782614b46565b602082019050919050565b60006020820190508181036000830152614bab81614b6f565b9050919050565b7f4e6f7420656d706c6f79656420666f722074686973206a6f6200000000000000600082015250565b6000614be8601983614077565b9150614bf382614bb2565b602082019050919050565b60006020820190508181036000830152614c1781614bdb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614c5882614009565b9150614c6383614009565b9250828203905081811115614c7b57614c7a614c1e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e6f7420636865636b656420696e000000000000000000000000000000000000600082015250565b6000614ce6600e83614077565b9150614cf182614cb0565b602082019050919050565b60006020820190508181036000830152614d1581614cd9565b9050919050565b7f436f6d70616e7920616c72656164792065786973747300000000000000000000600082015250565b6000614d52601683614077565b9150614d5d82614d1c565b602082019050919050565b60006020820190508181036000830152614d8181614d45565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302614dea7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614dad565b614df48683614dad565b95508019841693508086168417925050509392505050565b6000819050919050565b6000614e31614e2c614e2784614009565b614e0c565b614009565b9050919050565b6000819050919050565b614e4b83614e16565b614e5f614e5782614e38565b848454614dba565b825550505050565b600090565b614e74614e67565b614e7f818484614e42565b505050565b5b81811015614ea357614e98600082614e6c565b600181019050614e85565b5050565b601f821115614ee857614eb981614d88565b614ec284614d9d565b81016020851015614ed1578190505b614ee5614edd85614d9d565b830182614e84565b50505b505050565b600082821c905092915050565b6000614f0b60001984600802614eed565b1980831691505092915050565b6000614f248383614efa565b9150826002028217905092915050565b614f3d8261406c565b67ffffffffffffffff811115614f5657614f5561431b565b5b614f608254614b15565b614f6b828285614ea7565b600060209050601f831160018114614f9e5760008415614f8c578287015190505b614f968582614f18565b865550614ffe565b601f198416614fac86614d88565b60005b82811015614fd457848901518255600182019150602085019450602081019050614faf565b86831015614ff15784890151614fed601f891682614efa565b8355505b6001600288020188555050505b505050505050565b600061501182614009565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361504357615042614c1e565b5b600182019050919050565b7f54686973206a6f62206973206e6f74206f66666572656420627920796f752e00600082015250565b6000615084601f83614077565b915061508f8261504e565b602082019050919050565b600060208201905081810360008301526150b381615077565b9050919050565b7f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060008201527f6a6f620000000000000000000000000000000000000000000000000000000000602082015250565b6000615116602383614077565b9150615121826150ba565b604082019050919050565b6000602082019050818103600083015261514581615109565b9050919050565b600061515782614009565b91506000820361516a57615169614c1e565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081905092915050565b60006151ba8261406c565b6151c481856151a4565b93506151d4818560208601614088565b80840191505092915050565b60006151ec82846151af565b915081905092915050565b600060808201905061520c60008301876140fc565b818103602083015261521e81866140c3565b905061522d60408301856140fc565b61523a60608301846140fc565b95945050505050565b7f576f726b657220697320616c726561647920656d706c6f796564000000000000600082015250565b6000615279601a83614077565b915061528482615243565b602082019050919050565b600060208201905081810360008301526152a88161526c565b9050919050565b7f576f726b65722068617320616c7265616479206170706c69656420666f72207460008201527f686973206a6f6200000000000000000000000000000000000000000000000000602082015250565b600061530b602783614077565b9150615316826152af565b604082019050919050565b6000602082019050818103600083015261533a816152fe565b9050919050565b6000815461534e81614b15565b61535881866151a4565b945060018216600081146153735760018114615388576153bb565b60ff19831686528115158202860193506153bb565b61539185614d88565b60005b838110156153b357815481890152600182019150602081019050615394565b838801955050505b50505092915050565b60006153d08284615341565b915081905092915050565b60006040820190506153f0600083018561413d565b6153fd60208301846140fc565b9392505050565b7f576f726b657220616c7265616479206578697374730000000000000000000000600082015250565b600061543a601583614077565b915061544582615404565b602082019050919050565b600060208201905081810360008301526154698161542d565b9050919050565b6000604082019050615485600083018561413d565b818103602083015261549781846140c3565b90509392505050565b60006154ab82614009565b91506154b683614009565b92508282019050808211156154ce576154cd614c1e565b5b92915050565b60006040820190506154e9600083018561413d565b6154f660208301846141c5565b939250505056fea2646970667358221220fb0ee782c4359283f76878444b48fc1a6d02c7b9e8ddffcc4c604d37082f20c164736f6c63430008180033",
    linkReferences: {},
    deployedLinkReferences: {},
};
