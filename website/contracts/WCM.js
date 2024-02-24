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
        "0x608060405234801561001057600080fd5b506000600b81905550614669806100286000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806391d14854116100f9578063d3fa1d6211610097578063e33f874c11610071578063e33f874c1461056c578063e95a644f14610588578063ecc5766b146105a4578063f2b67e7d146105d5576101c4565b8063d3fa1d6214610518578063d547741f14610534578063e0c94ae514610550576101c4565b8063ae55b86b116100d3578063ae55b86b14610468578063afac40bb14610498578063c078b4a2146104cc578063c4a74b2b146104fc576101c4565b806391d14854146103fc578063965a79fb1461042c578063a217fddf1461044a576101c4565b806336568abe116101665780635ef38e34116101405780635ef38e341461034e578063634252dc1461037e5780637090de7b1461039c57806388342b71146103cc576101c4565b806336568abe146102e457806338f03269146103005780634048a2571461031c576101c4565b80631c9ee11a116101a25780631c9ee11a14610249578063248a9ca3146102675780632f2ff15d14610297578063355e6ce8146102b3576101c4565b806301ffc9a7146101c9578063180aedf3146101f95780631bd2eeee1461022d575b600080fd5b6101e360048036038101906101de919061324a565b610605565b6040516101f09190613292565b60405180910390f35b610213600480360381019061020e91906132e3565b61067f565b6040516102249594939291906133f0565b60405180910390f35b610247600480360381019061024291906132e3565b61075d565b005b61025161099f565b60405161025e9190613463565b60405180910390f35b610281600480360381019061027c91906134aa565b6109c3565b60405161028e9190613463565b60405180910390f35b6102b160048036038101906102ac9190613503565b6109e2565b005b6102cd60048036038101906102c89190613543565b610a04565b6040516102db929190613570565b60405180910390f35b6102fe60048036038101906102f99190613503565b610ad0565b005b61031a600480360381019061031591906136d5565b610b4b565b005b61033660048036038101906103319190613543565b610d4e565b60405161034593929190613731565b60405180910390f35b6103686004803603810190610363919061376f565b610e2d565b60405161037591906137af565b60405180910390f35b610386610e52565b6040516103939190613463565b60405180910390f35b6103b660048036038101906103b191906132e3565b610e76565b6040516103c39190613888565b60405180910390f35b6103e660048036038101906103e1919061376f565b610f82565b6040516103f391906137af565b60405180910390f35b61041660048036038101906104119190613503565b610fa7565b6040516104239190613292565b60405180910390f35b610434611011565b6040516104419190613ac4565b60405180910390f35b610452611269565b60405161045f9190613463565b60405180910390f35b610482600480360381019061047d9190613543565b611270565b60405161048f91906137af565b60405180910390f35b6104b260048036038101906104ad919061376f565b611288565b6040516104c39594939291906133f0565b60405180910390f35b6104e660048036038101906104e19190613543565b611373565b6040516104f39190613ac4565b60405180910390f35b610516600480360381019061051191906132e3565b6116d4565b005b610532600480360381019061052d9190613ae6565b611dee565b005b61054e60048036038101906105499190613503565b6120ed565b005b61056a600480360381019061056591906132e3565b61210f565b005b61058660048036038101906105819190613b55565b612471565b005b6105a2600480360381019061059d91906132e3565b6126a3565b005b6105be60048036038101906105b99190613bb1565b612872565b6040516105cc929190613c04565b60405180910390f35b6105ef60048036038101906105ea9190613c2d565b6128c0565b6040516105fc9190613c6d565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061067857506106778261290e565b5b9050919050565b60046020528060005260406000206000915090508060000154908060010180546106a890613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546106d490613cb7565b80156107215780601f106106f657610100808354040283529160200191610721565b820191906000526020600020905b81548152906001019060200180831161070457829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050154905085565b60008111801561076f5750600b548111155b6107ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a590613d34565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690613da0565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000209050600081805490501180156108cb5750600081600183805490506108a69190613def565b815481106108b7576108b6613e23565b5b906000526020600020906002020160010154145b61090a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090190613e9e565b60405180910390fd5b42816001838054905061091d9190613def565b8154811061092e5761092d613e23565b5b90600052602060002090600202016001018190555061094d3383612978565b813373ffffffffffffffffffffffffffffffffffffffff167e817f5e0c1c773a9e3b8d5e7d593eb7d6556749dcc48cfd5798d888a2190f9d4260405161099391906137af565b60405180910390a35050565b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b6000806000838152602001908152602001600020600101549050919050565b6109eb826109c3565b6109f481612b3a565b6109fe8383612b4e565b50505050565b6002602052806000526040600020600091509050806000018054610a2790613cb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5390613cb7565b8015610aa05780601f10610a7557610100808354040283529160200191610aa0565b820191906000526020600020905b815481529060010190602001808311610a8357829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610ad8612c3f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b3c576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b468282612c47565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1390613f0a565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610c9b91906140d6565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610d107f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c82612b4e565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051610d42929190613570565b60405180910390a15050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054610d9790613cb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc390613cb7565b8015610e105780601f10610de557610100808354040283529160200191610e10565b820191906000526020600020905b815481529060010190602001808311610df357829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b6009602052816000526040600020602052806000526040600020600091509150505481565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b6060610ea27f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b610ee357336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401610eda9190613c6d565b60405180910390fd5b60056000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f7657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610f2c575b50505050509050919050565b6008602052816000526040600020602052806000526040600020600091509150505481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600b54905060008167ffffffffffffffff811115611036576110356135aa565b5b60405190808252806020026020018201604052801561106f57816020015b61105c6130b2565b8152602001906001900390816110545790505b50905060005b82811015611260576000600460008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820180546110ba90613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546110e690613cb7565b80156111335780601f1061110857610100808354040283529160200191611133565b820191906000526020600020905b81548152906001019060200180831161111657829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820180548060200260200160405190810160405280929190818152602001828054801561121757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116111cd575b505050505081526020016004820154815260200160058201548152505083838151811061124757611246613e23565b5b6020026020010181905250508080600101915050611075565b50809250505090565b6000801b81565b600a6020528060005260406000206000915090505481565b6003602052816000526040600020602052806000526040600020600091509150508060000154908060010180546112be90613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546112ea90613cb7565b80156113375780601f1061130c57610100808354040283529160200191611337565b820191906000526020600020905b81548152906001019060200180831161131a57829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050154905085565b60606000600b5490506000805b8281101561140d578473ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036114005781806113fc906141a8565b9250505b8080600101915050611380565b5060008167ffffffffffffffff81111561142a576114296135aa565b5b60405190808252806020026020018201604052801561146357816020015b6114506130b2565b8152602001906001900390816114485790505b5090506000805b848110156116c7578673ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036116ba57600460008281526020019081526020016000206040518060c00160405290816000820154815260200160018201805461151390613cb7565b80601f016020809104026020016040519081016040528092919081815260200182805461153f90613cb7565b801561158c5780601f106115615761010080835404028352916020019161158c565b820191906000526020600020905b81548152906001019060200180831161156f57829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820180548060200260200160405190810160405280929190818152602001828054801561167057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611626575b50505050508152602001600482015481526020016005820154815250508383815181106116a05761169f613e23565b5b602002602001018190525081806116b6906141a8565b9250505b808060010191505061146a565b5081945050505050919050565b6116fe7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b61173f57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016117369190613c6d565b60405180910390fd5b600060046000838152602001908152602001600020600501549050600060046000848152602001908152602001600020600101805461177d90613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546117a990613cb7565b80156117f65780601f106117cb576101008083540402835291602001916117f6565b820191906000526020600020905b8154815290600101906020018083116117d957829003601f168201915b5050505050905060008211611840576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183790614262565b60405180910390fd5b600061184c8483612d39565b90506000805b82518110801561186157508482105b15611a285782818151811061187957611878613e23565b5b602002602001015160400151611a1557600460008781526020019081526020016000206003018382815181106118b2576118b1613e23565b5b6020026020010151600001519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600180600085848151811061193657611935613e23565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690831515021790555085600a60008584815181106119ae576119ad613e23565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508480611a0390614282565b9550508180611a11906141a8565b9250505b8080611a20906141a8565b915050611852565b5083600460008781526020019081526020016000206005018190555060005b81811015611de657600060056000888152602001908152602001600020905060005b8180549050811015611c045760016000838381548110611a8c57611a8b613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1615611bf7578160018380549050611b199190613def565b81548110611b2a57611b29613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110611b6857611b67613e23565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480611bc157611bc06142ab565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050611a69565b5060006006600089815260200190815260200160002086604051611c289190614316565b9081526020016040518091039020905060005b8180549050811015611dd65760016000838381548110611c5e57611c5d613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1615611dc9578160018380549050611ceb9190613def565b81548110611cfc57611cfb613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110611d3a57611d39613e23565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480611d9357611d926142ab565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050611c3b565b5050508080600101915050611a47565b505050505050565b611e187f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b611e5957336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401611e509190613c6d565b60405180910390fd5b6000600b549050600033905060006040518060c001604052808481526020018781526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff811115611eb557611eb46135aa565b5b604051908082528060200260200182016040528015611ee35781602001602082028036833780820191505090505b50815260200186815260200185815250905080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858152602001908152602001600020600082015181600001556020820151816001019081611f6591906140d6565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190611fc99291906130fe565b506080820151816004015560a08201518160050155905050806004600085815260200190815260200160002060008201518160000155602082015181600101908161201491906140d6565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030190805190602001906120789291906130fe565b506080820151816004015560a08201518160050155905050600b60008154809291906120a3906141a8565b91905055507f1de1b746452f172ccab29b4f979ee99345aafe2d2034aa42c6e56ace7b72fcdf838787876040516120dd949392919061432d565b60405180910390a1505050505050565b6120f6826109c3565b6120ff81612b3a565b6121098383612c47565b50505050565b6121397ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733610fa7565b61217a57336040517f5cb17c0e0000000000000000000000000000000000000000000000000000000081526004016121719190613c6d565b60405180910390fd5b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff16151514612210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612207906143c5565b60405180910390fd5b600060056000838152602001908152602001600020905060005b81805490508110156122ee573373ffffffffffffffffffffffffffffffffffffffff168282815481106122605761225f613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036122e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122d890614457565b60405180910390fd5b808060010191505061222a565b5060056000838152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000838152602001908152602001600020600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040516123c591906144fa565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f3383604051612465929190614511565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612542576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161253990614586565b60405180910390fd5b600060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161261691906140d6565b5060408201518160020160006101000a81548160ff0219169083151502179055509050506126647ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc784612b4e565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb93283836040516126969291906145a6565b60405180910390a1505050565b6000811180156126b55750600b548111155b6126f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126eb90613d34565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414612775576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161276c90613da0565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002090508060405180604001604052804281526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050813373ffffffffffffffffffffffffffffffffffffffff167fb9cfea4717f167774a6e8643c33472935d3ef918453525eefca6936078b7cfdd4260405161286691906137af565b60405180910390a35050565b6007602052826000526040600020602052816000526040600020818154811061289a57600080fd5b906000526020600020906002020160009250925050508060000154908060010154905082565b600560205281600052604060002081815481106128dc57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020905060008060005b8380549050811015612a885760008482815481106129f3576129f2613e23565b5b9060005260206000209060020201600101541115612a7b578280612a16906141a8565b935050838181548110612a2c57612a2b613e23565b5b906000526020600020906002020160000154848281548110612a5157612a50613e23565b5b906000526020600020906002020160010154612a6d9190613def565b82612a7891906145d6565b91505b80806001019150506129d2565b5081600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208190555080600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020819055505050505050565b612b4b81612b46612c3f565b613061565b50565b6000612b5a8383610fa7565b612c3457600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612bd1612c3f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050612c39565b600090505b92915050565b600033905090565b6000612c538383610fa7565b15612d2e57600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612ccb612c3f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612d33565b600090505b92915050565b6060612d657f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b612da657336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401612d9d9190613c6d565b60405180910390fd5b60006006600085815260200190815260200160002083604051612dc99190614316565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020018280548015612e5757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612e0d575b505050505090506000815167ffffffffffffffff811115612e7b57612e7a6135aa565b5b604051908082528060200260200182016040528015612eb457816020015b612ea1613188565b815260200190600190039081612e995790505b50905060005b82518110156130555760016000848381518110612eda57612ed9613e23565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054612f8d90613cb7565b80601f0160208091040260200160405190810160405280929190818152602001828054612fb990613cb7565b80156130065780601f10612fdb57610100808354040283529160200191613006565b820191906000526020600020905b815481529060010190602001808311612fe957829003601f168201915b505050505081526020016002820160009054906101000a900460ff16151515158152505082828151811061303d5761303c613e23565b5b60200260200101819052508080600101915050612eba565b50809250505092915050565b61306b8282610fa7565b6130ae5780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016130a592919061460a565b60405180910390fd5b5050565b6040518060c001604052806000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081525090565b828054828255906000526020600020908101928215613177579160200282015b828111156131765782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061311e565b5b50905061318491906131c1565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b5b808211156131da5760008160009055506001016131c2565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613227816131f2565b811461323257600080fd5b50565b6000813590506132448161321e565b92915050565b6000602082840312156132605761325f6131e8565b5b600061326e84828501613235565b91505092915050565b60008115159050919050565b61328c81613277565b82525050565b60006020820190506132a76000830184613283565b92915050565b6000819050919050565b6132c0816132ad565b81146132cb57600080fd5b50565b6000813590506132dd816132b7565b92915050565b6000602082840312156132f9576132f86131e8565b5b6000613307848285016132ce565b91505092915050565b613319816132ad565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561335957808201518184015260208101905061333e565b60008484015250505050565b6000601f19601f8301169050919050565b60006133818261331f565b61338b818561332a565b935061339b81856020860161333b565b6133a481613365565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006133da826133af565b9050919050565b6133ea816133cf565b82525050565b600060a0820190506134056000830188613310565b81810360208301526134178187613376565b905061342660408301866133e1565b6134336060830185613310565b6134406080830184613310565b9695505050505050565b6000819050919050565b61345d8161344a565b82525050565b60006020820190506134786000830184613454565b92915050565b6134878161344a565b811461349257600080fd5b50565b6000813590506134a48161347e565b92915050565b6000602082840312156134c0576134bf6131e8565b5b60006134ce84828501613495565b91505092915050565b6134e0816133cf565b81146134eb57600080fd5b50565b6000813590506134fd816134d7565b92915050565b6000806040838503121561351a576135196131e8565b5b600061352885828601613495565b9250506020613539858286016134ee565b9150509250929050565b600060208284031215613559576135586131e8565b5b6000613567848285016134ee565b91505092915050565b6000604082019050818103600083015261358a8185613376565b905061359960208301846133e1565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6135e282613365565b810181811067ffffffffffffffff82111715613601576136006135aa565b5b80604052505050565b60006136146131de565b905061362082826135d9565b919050565b600067ffffffffffffffff8211156136405761363f6135aa565b5b61364982613365565b9050602081019050919050565b82818337600083830152505050565b600061367861367384613625565b61360a565b905082815260208101848484011115613694576136936135a5565b5b61369f848285613656565b509392505050565b600082601f8301126136bc576136bb6135a0565b5b81356136cc848260208601613665565b91505092915050565b600080604083850312156136ec576136eb6131e8565b5b600083013567ffffffffffffffff81111561370a576137096131ed565b5b613716858286016136a7565b9250506020613727858286016134ee565b9150509250929050565b600060608201905061374660008301866133e1565b81810360208301526137588185613376565b90506137676040830184613283565b949350505050565b60008060408385031215613786576137856131e8565b5b6000613794858286016134ee565b92505060206137a5858286016132ce565b9150509250929050565b60006020820190506137c46000830184613310565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6137ff816133cf565b82525050565b600061381183836137f6565b60208301905092915050565b6000602082019050919050565b6000613835826137ca565b61383f81856137d5565b935061384a836137e6565b8060005b8381101561387b5781516138628882613805565b975061386d8361381d565b92505060018101905061384e565b5085935050505092915050565b600060208201905081810360008301526138a2818461382a565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6138df816132ad565b82525050565b600082825260208201905092915050565b60006139018261331f565b61390b81856138e5565b935061391b81856020860161333b565b61392481613365565b840191505092915050565b600082825260208201905092915050565b600061394b826137ca565b613955818561392f565b9350613960836137e6565b8060005b838110156139915781516139788882613805565b97506139838361381d565b925050600181019050613964565b5085935050505092915050565b600060c0830160008301516139b660008601826138d6565b50602083015184820360208601526139ce82826138f6565b91505060408301516139e360408601826137f6565b50606083015184820360608601526139fb8282613940565b9150506080830151613a1060808601826138d6565b5060a0830151613a2360a08601826138d6565b508091505092915050565b6000613a3a838361399e565b905092915050565b6000602082019050919050565b6000613a5a826138aa565b613a6481856138b5565b935083602082028501613a76856138c6565b8060005b85811015613ab25784840389528151613a938582613a2e565b9450613a9e83613a42565b925060208a01995050600181019050613a7a565b50829750879550505050505092915050565b60006020820190508181036000830152613ade8184613a4f565b905092915050565b600080600060608486031215613aff57613afe6131e8565b5b600084013567ffffffffffffffff811115613b1d57613b1c6131ed565b5b613b29868287016136a7565b9350506020613b3a868287016132ce565b9250506040613b4b868287016132ce565b9150509250925092565b60008060408385031215613b6c57613b6b6131e8565b5b6000613b7a858286016134ee565b925050602083013567ffffffffffffffff811115613b9b57613b9a6131ed565b5b613ba7858286016136a7565b9150509250929050565b600080600060608486031215613bca57613bc96131e8565b5b6000613bd8868287016134ee565b9350506020613be9868287016132ce565b9250506040613bfa868287016132ce565b9150509250925092565b6000604082019050613c196000830185613310565b613c266020830184613310565b9392505050565b60008060408385031215613c4457613c436131e8565b5b6000613c52858286016132ce565b9250506020613c63858286016132ce565b9150509250929050565b6000602082019050613c8260008301846133e1565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613ccf57607f821691505b602082108103613ce257613ce1613c88565b5b50919050565b7f496e76616c6964206a6f62204944000000000000000000000000000000000000600082015250565b6000613d1e600e8361332a565b9150613d2982613ce8565b602082019050919050565b60006020820190508181036000830152613d4d81613d11565b9050919050565b7f4e6f7420656d706c6f79656420666f722074686973206a6f6200000000000000600082015250565b6000613d8a60198361332a565b9150613d9582613d54565b602082019050919050565b60006020820190508181036000830152613db981613d7d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613dfa826132ad565b9150613e05836132ad565b9250828203905081811115613e1d57613e1c613dc0565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e6f7420636865636b656420696e000000000000000000000000000000000000600082015250565b6000613e88600e8361332a565b9150613e9382613e52565b602082019050919050565b60006020820190508181036000830152613eb781613e7b565b9050919050565b7f436f6d70616e7920616c72656164792065786973747300000000000000000000600082015250565b6000613ef460168361332a565b9150613eff82613ebe565b602082019050919050565b60006020820190508181036000830152613f2381613ee7565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613f8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613f4f565b613f968683613f4f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613fd3613fce613fc9846132ad565b613fae565b6132ad565b9050919050565b6000819050919050565b613fed83613fb8565b614001613ff982613fda565b848454613f5c565b825550505050565b600090565b614016614009565b614021818484613fe4565b505050565b5b818110156140455761403a60008261400e565b600181019050614027565b5050565b601f82111561408a5761405b81613f2a565b61406484613f3f565b81016020851015614073578190505b61408761407f85613f3f565b830182614026565b50505b505050565b600082821c905092915050565b60006140ad6000198460080261408f565b1980831691505092915050565b60006140c6838361409c565b9150826002028217905092915050565b6140df8261331f565b67ffffffffffffffff8111156140f8576140f76135aa565b5b6141028254613cb7565b61410d828285614049565b600060209050601f831160018114614140576000841561412e578287015190505b61413885826140ba565b8655506141a0565b601f19841661414e86613f2a565b60005b8281101561417657848901518255600182019150602085019450602081019050614151565b86831015614193578489015161418f601f89168261409c565b8355505b6001600288020188555050505b505050505050565b60006141b3826132ad565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036141e5576141e4613dc0565b5b600182019050919050565b7f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060008201527f6a6f620000000000000000000000000000000000000000000000000000000000602082015250565b600061424c60238361332a565b9150614257826141f0565b604082019050919050565b6000602082019050818103600083015261427b8161423f565b9050919050565b600061428d826132ad565b9150600082036142a05761429f613dc0565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081905092915050565b60006142f08261331f565b6142fa81856142da565b935061430a81856020860161333b565b80840191505092915050565b600061432282846142e5565b915081905092915050565b60006080820190506143426000830187613310565b81810360208301526143548186613376565b90506143636040830185613310565b6143706060830184613310565b95945050505050565b7f576f726b657220697320616c726561647920656d706c6f796564000000000000600082015250565b60006143af601a8361332a565b91506143ba82614379565b602082019050919050565b600060208201905081810360008301526143de816143a2565b9050919050565b7f576f726b65722068617320616c7265616479206170706c69656420666f72207460008201527f686973206a6f6200000000000000000000000000000000000000000000000000602082015250565b600061444160278361332a565b915061444c826143e5565b604082019050919050565b6000602082019050818103600083015261447081614434565b9050919050565b6000815461448481613cb7565b61448e81866142da565b945060018216600081146144a957600181146144be576144f1565b60ff19831686528115158202860193506144f1565b6144c785613f2a565b60005b838110156144e9578154818901526001820191506020810190506144ca565b838801955050505b50505092915050565b60006145068284614477565b915081905092915050565b600060408201905061452660008301856133e1565b6145336020830184613310565b9392505050565b7f576f726b657220616c7265616479206578697374730000000000000000000000600082015250565b600061457060158361332a565b915061457b8261453a565b602082019050919050565b6000602082019050818103600083015261459f81614563565b9050919050565b60006040820190506145bb60008301856133e1565b81810360208301526145cd8184613376565b90509392505050565b60006145e1826132ad565b91506145ec836132ad565b925082820190508082111561460457614603613dc0565b5b92915050565b600060408201905061461f60008301856133e1565b61462c6020830184613454565b939250505056fea26469706673582212202636d85a77e7b9c55114d6db01e9a008a91247e88830d80f65ac66d9bbecb95164736f6c63430008180033",
    deployedBytecode:
        "0x608060405234801561001057600080fd5b50600436106101c45760003560e01c806391d14854116100f9578063d3fa1d6211610097578063e33f874c11610071578063e33f874c1461056c578063e95a644f14610588578063ecc5766b146105a4578063f2b67e7d146105d5576101c4565b8063d3fa1d6214610518578063d547741f14610534578063e0c94ae514610550576101c4565b8063ae55b86b116100d3578063ae55b86b14610468578063afac40bb14610498578063c078b4a2146104cc578063c4a74b2b146104fc576101c4565b806391d14854146103fc578063965a79fb1461042c578063a217fddf1461044a576101c4565b806336568abe116101665780635ef38e34116101405780635ef38e341461034e578063634252dc1461037e5780637090de7b1461039c57806388342b71146103cc576101c4565b806336568abe146102e457806338f03269146103005780634048a2571461031c576101c4565b80631c9ee11a116101a25780631c9ee11a14610249578063248a9ca3146102675780632f2ff15d14610297578063355e6ce8146102b3576101c4565b806301ffc9a7146101c9578063180aedf3146101f95780631bd2eeee1461022d575b600080fd5b6101e360048036038101906101de919061324a565b610605565b6040516101f09190613292565b60405180910390f35b610213600480360381019061020e91906132e3565b61067f565b6040516102249594939291906133f0565b60405180910390f35b610247600480360381019061024291906132e3565b61075d565b005b61025161099f565b60405161025e9190613463565b60405180910390f35b610281600480360381019061027c91906134aa565b6109c3565b60405161028e9190613463565b60405180910390f35b6102b160048036038101906102ac9190613503565b6109e2565b005b6102cd60048036038101906102c89190613543565b610a04565b6040516102db929190613570565b60405180910390f35b6102fe60048036038101906102f99190613503565b610ad0565b005b61031a600480360381019061031591906136d5565b610b4b565b005b61033660048036038101906103319190613543565b610d4e565b60405161034593929190613731565b60405180910390f35b6103686004803603810190610363919061376f565b610e2d565b60405161037591906137af565b60405180910390f35b610386610e52565b6040516103939190613463565b60405180910390f35b6103b660048036038101906103b191906132e3565b610e76565b6040516103c39190613888565b60405180910390f35b6103e660048036038101906103e1919061376f565b610f82565b6040516103f391906137af565b60405180910390f35b61041660048036038101906104119190613503565b610fa7565b6040516104239190613292565b60405180910390f35b610434611011565b6040516104419190613ac4565b60405180910390f35b610452611269565b60405161045f9190613463565b60405180910390f35b610482600480360381019061047d9190613543565b611270565b60405161048f91906137af565b60405180910390f35b6104b260048036038101906104ad919061376f565b611288565b6040516104c39594939291906133f0565b60405180910390f35b6104e660048036038101906104e19190613543565b611373565b6040516104f39190613ac4565b60405180910390f35b610516600480360381019061051191906132e3565b6116d4565b005b610532600480360381019061052d9190613ae6565b611dee565b005b61054e60048036038101906105499190613503565b6120ed565b005b61056a600480360381019061056591906132e3565b61210f565b005b61058660048036038101906105819190613b55565b612471565b005b6105a2600480360381019061059d91906132e3565b6126a3565b005b6105be60048036038101906105b99190613bb1565b612872565b6040516105cc929190613c04565b60405180910390f35b6105ef60048036038101906105ea9190613c2d565b6128c0565b6040516105fc9190613c6d565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061067857506106778261290e565b5b9050919050565b60046020528060005260406000206000915090508060000154908060010180546106a890613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546106d490613cb7565b80156107215780601f106106f657610100808354040283529160200191610721565b820191906000526020600020905b81548152906001019060200180831161070457829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050154905085565b60008111801561076f5750600b548111155b6107ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a590613d34565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690613da0565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000209050600081805490501180156108cb5750600081600183805490506108a69190613def565b815481106108b7576108b6613e23565b5b906000526020600020906002020160010154145b61090a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090190613e9e565b60405180910390fd5b42816001838054905061091d9190613def565b8154811061092e5761092d613e23565b5b90600052602060002090600202016001018190555061094d3383612978565b813373ffffffffffffffffffffffffffffffffffffffff167e817f5e0c1c773a9e3b8d5e7d593eb7d6556749dcc48cfd5798d888a2190f9d4260405161099391906137af565b60405180910390a35050565b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b6000806000838152602001908152602001600020600101549050919050565b6109eb826109c3565b6109f481612b3a565b6109fe8383612b4e565b50505050565b6002602052806000526040600020600091509050806000018054610a2790613cb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5390613cb7565b8015610aa05780601f10610a7557610100808354040283529160200191610aa0565b820191906000526020600020905b815481529060010190602001808311610a8357829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610ad8612c3f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b3c576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b468282612c47565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1390613f0a565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610c9b91906140d6565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610d107f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c82612b4e565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051610d42929190613570565b60405180910390a15050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054610d9790613cb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc390613cb7565b8015610e105780601f10610de557610100808354040283529160200191610e10565b820191906000526020600020905b815481529060010190602001808311610df357829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b6009602052816000526040600020602052806000526040600020600091509150505481565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b6060610ea27f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b610ee357336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401610eda9190613c6d565b60405180910390fd5b60056000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f7657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610f2c575b50505050509050919050565b6008602052816000526040600020602052806000526040600020600091509150505481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600b54905060008167ffffffffffffffff811115611036576110356135aa565b5b60405190808252806020026020018201604052801561106f57816020015b61105c6130b2565b8152602001906001900390816110545790505b50905060005b82811015611260576000600460008381526020019081526020016000209050806040518060c0016040529081600082015481526020016001820180546110ba90613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546110e690613cb7565b80156111335780601f1061110857610100808354040283529160200191611133565b820191906000526020600020905b81548152906001019060200180831161111657829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820180548060200260200160405190810160405280929190818152602001828054801561121757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116111cd575b505050505081526020016004820154815260200160058201548152505083838151811061124757611246613e23565b5b6020026020010181905250508080600101915050611075565b50809250505090565b6000801b81565b600a6020528060005260406000206000915090505481565b6003602052816000526040600020602052806000526040600020600091509150508060000154908060010180546112be90613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546112ea90613cb7565b80156113375780601f1061130c57610100808354040283529160200191611337565b820191906000526020600020905b81548152906001019060200180831161131a57829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040154908060050154905085565b60606000600b5490506000805b8281101561140d578473ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036114005781806113fc906141a8565b9250505b8080600101915050611380565b5060008167ffffffffffffffff81111561142a576114296135aa565b5b60405190808252806020026020018201604052801561146357816020015b6114506130b2565b8152602001906001900390816114485790505b5090506000805b848110156116c7578673ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036116ba57600460008281526020019081526020016000206040518060c00160405290816000820154815260200160018201805461151390613cb7565b80601f016020809104026020016040519081016040528092919081815260200182805461153f90613cb7565b801561158c5780601f106115615761010080835404028352916020019161158c565b820191906000526020600020905b81548152906001019060200180831161156f57829003601f168201915b505050505081526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820180548060200260200160405190810160405280929190818152602001828054801561167057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611626575b50505050508152602001600482015481526020016005820154815250508383815181106116a05761169f613e23565b5b602002602001018190525081806116b6906141a8565b9250505b808060010191505061146a565b5081945050505050919050565b6116fe7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b61173f57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016117369190613c6d565b60405180910390fd5b600060046000838152602001908152602001600020600501549050600060046000848152602001908152602001600020600101805461177d90613cb7565b80601f01602080910402602001604051908101604052809291908181526020018280546117a990613cb7565b80156117f65780601f106117cb576101008083540402835291602001916117f6565b820191906000526020600020905b8154815290600101906020018083116117d957829003601f168201915b5050505050905060008211611840576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183790614262565b60405180910390fd5b600061184c8483612d39565b90506000805b82518110801561186157508482105b15611a285782818151811061187957611878613e23565b5b602002602001015160400151611a1557600460008781526020019081526020016000206003018382815181106118b2576118b1613e23565b5b6020026020010151600001519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600180600085848151811061193657611935613e23565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690831515021790555085600a60008584815181106119ae576119ad613e23565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508480611a0390614282565b9550508180611a11906141a8565b9250505b8080611a20906141a8565b915050611852565b5083600460008781526020019081526020016000206005018190555060005b81811015611de657600060056000888152602001908152602001600020905060005b8180549050811015611c045760016000838381548110611a8c57611a8b613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1615611bf7578160018380549050611b199190613def565b81548110611b2a57611b29613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110611b6857611b67613e23565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480611bc157611bc06142ab565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050611a69565b5060006006600089815260200190815260200160002086604051611c289190614316565b9081526020016040518091039020905060005b8180549050811015611dd65760016000838381548110611c5e57611c5d613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1615611dc9578160018380549050611ceb9190613def565b81548110611cfc57611cfb613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110611d3a57611d39613e23565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480611d9357611d926142ab565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050611c3b565b5050508080600101915050611a47565b505050505050565b611e187f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b611e5957336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401611e509190613c6d565b60405180910390fd5b6000600b549050600033905060006040518060c001604052808481526020018781526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff811115611eb557611eb46135aa565b5b604051908082528060200260200182016040528015611ee35781602001602082028036833780820191505090505b50815260200186815260200185815250905080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858152602001908152602001600020600082015181600001556020820151816001019081611f6591906140d6565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003019080519060200190611fc99291906130fe565b506080820151816004015560a08201518160050155905050806004600085815260200190815260200160002060008201518160000155602082015181600101908161201491906140d6565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160030190805190602001906120789291906130fe565b506080820151816004015560a08201518160050155905050600b60008154809291906120a3906141a8565b91905055507f1de1b746452f172ccab29b4f979ee99345aafe2d2034aa42c6e56ace7b72fcdf838787876040516120dd949392919061432d565b60405180910390a1505050505050565b6120f6826109c3565b6120ff81612b3a565b6121098383612c47565b50505050565b6121397ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733610fa7565b61217a57336040517f5cb17c0e0000000000000000000000000000000000000000000000000000000081526004016121719190613c6d565b60405180910390fd5b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff16151514612210576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612207906143c5565b60405180910390fd5b600060056000838152602001908152602001600020905060005b81805490508110156122ee573373ffffffffffffffffffffffffffffffffffffffff168282815481106122605761225f613e23565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036122e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122d890614457565b60405180910390fd5b808060010191505061222a565b5060056000838152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000838152602001908152602001600020600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016040516123c591906144fa565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f3383604051612465929190614511565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612542576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161253990614586565b60405180910390fd5b600060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908161261691906140d6565b5060408201518160020160006101000a81548160ff0219169083151502179055509050506126647ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc784612b4e565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb93283836040516126969291906145a6565b60405180910390a1505050565b6000811180156126b55750600b548111155b6126f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126eb90613d34565b60405180910390fd5b80600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414612775576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161276c90613da0565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002090508060405180604001604052804281526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050813373ffffffffffffffffffffffffffffffffffffffff167fb9cfea4717f167774a6e8643c33472935d3ef918453525eefca6936078b7cfdd4260405161286691906137af565b60405180910390a35050565b6007602052826000526040600020602052816000526040600020818154811061289a57600080fd5b906000526020600020906002020160009250925050508060000154908060010154905082565b600560205281600052604060002081815481106128dc57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020905060008060005b8380549050811015612a885760008482815481106129f3576129f2613e23565b5b9060005260206000209060020201600101541115612a7b578280612a16906141a8565b935050838181548110612a2c57612a2b613e23565b5b906000526020600020906002020160000154848281548110612a5157612a50613e23565b5b906000526020600020906002020160010154612a6d9190613def565b82612a7891906145d6565b91505b80806001019150506129d2565b5081600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208190555080600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020819055505050505050565b612b4b81612b46612c3f565b613061565b50565b6000612b5a8383610fa7565b612c3457600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612bd1612c3f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050612c39565b600090505b92915050565b600033905090565b6000612c538383610fa7565b15612d2e57600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550612ccb612c3f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612d33565b600090505b92915050565b6060612d657f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33610fa7565b612da657336040517f1a7fc6a5000000000000000000000000000000000000000000000000000000008152600401612d9d9190613c6d565b60405180910390fd5b60006006600085815260200190815260200160002083604051612dc99190614316565b9081526020016040518091039020805480602002602001604051908101604052809291908181526020018280548015612e5757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612e0d575b505050505090506000815167ffffffffffffffff811115612e7b57612e7a6135aa565b5b604051908082528060200260200182016040528015612eb457816020015b612ea1613188565b815260200190600190039081612e995790505b50905060005b82518110156130555760016000848381518110612eda57612ed9613e23565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054612f8d90613cb7565b80601f0160208091040260200160405190810160405280929190818152602001828054612fb990613cb7565b80156130065780601f10612fdb57610100808354040283529160200191613006565b820191906000526020600020905b815481529060010190602001808311612fe957829003601f168201915b505050505081526020016002820160009054906101000a900460ff16151515158152505082828151811061303d5761303c613e23565b5b60200260200101819052508080600101915050612eba565b50809250505092915050565b61306b8282610fa7565b6130ae5780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016130a592919061460a565b60405180910390fd5b5050565b6040518060c001604052806000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081525090565b828054828255906000526020600020908101928215613177579160200282015b828111156131765782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061311e565b5b50905061318491906131c1565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b5b808211156131da5760008160009055506001016131c2565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613227816131f2565b811461323257600080fd5b50565b6000813590506132448161321e565b92915050565b6000602082840312156132605761325f6131e8565b5b600061326e84828501613235565b91505092915050565b60008115159050919050565b61328c81613277565b82525050565b60006020820190506132a76000830184613283565b92915050565b6000819050919050565b6132c0816132ad565b81146132cb57600080fd5b50565b6000813590506132dd816132b7565b92915050565b6000602082840312156132f9576132f86131e8565b5b6000613307848285016132ce565b91505092915050565b613319816132ad565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561335957808201518184015260208101905061333e565b60008484015250505050565b6000601f19601f8301169050919050565b60006133818261331f565b61338b818561332a565b935061339b81856020860161333b565b6133a481613365565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006133da826133af565b9050919050565b6133ea816133cf565b82525050565b600060a0820190506134056000830188613310565b81810360208301526134178187613376565b905061342660408301866133e1565b6134336060830185613310565b6134406080830184613310565b9695505050505050565b6000819050919050565b61345d8161344a565b82525050565b60006020820190506134786000830184613454565b92915050565b6134878161344a565b811461349257600080fd5b50565b6000813590506134a48161347e565b92915050565b6000602082840312156134c0576134bf6131e8565b5b60006134ce84828501613495565b91505092915050565b6134e0816133cf565b81146134eb57600080fd5b50565b6000813590506134fd816134d7565b92915050565b6000806040838503121561351a576135196131e8565b5b600061352885828601613495565b9250506020613539858286016134ee565b9150509250929050565b600060208284031215613559576135586131e8565b5b6000613567848285016134ee565b91505092915050565b6000604082019050818103600083015261358a8185613376565b905061359960208301846133e1565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6135e282613365565b810181811067ffffffffffffffff82111715613601576136006135aa565b5b80604052505050565b60006136146131de565b905061362082826135d9565b919050565b600067ffffffffffffffff8211156136405761363f6135aa565b5b61364982613365565b9050602081019050919050565b82818337600083830152505050565b600061367861367384613625565b61360a565b905082815260208101848484011115613694576136936135a5565b5b61369f848285613656565b509392505050565b600082601f8301126136bc576136bb6135a0565b5b81356136cc848260208601613665565b91505092915050565b600080604083850312156136ec576136eb6131e8565b5b600083013567ffffffffffffffff81111561370a576137096131ed565b5b613716858286016136a7565b9250506020613727858286016134ee565b9150509250929050565b600060608201905061374660008301866133e1565b81810360208301526137588185613376565b90506137676040830184613283565b949350505050565b60008060408385031215613786576137856131e8565b5b6000613794858286016134ee565b92505060206137a5858286016132ce565b9150509250929050565b60006020820190506137c46000830184613310565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6137ff816133cf565b82525050565b600061381183836137f6565b60208301905092915050565b6000602082019050919050565b6000613835826137ca565b61383f81856137d5565b935061384a836137e6565b8060005b8381101561387b5781516138628882613805565b975061386d8361381d565b92505060018101905061384e565b5085935050505092915050565b600060208201905081810360008301526138a2818461382a565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6138df816132ad565b82525050565b600082825260208201905092915050565b60006139018261331f565b61390b81856138e5565b935061391b81856020860161333b565b61392481613365565b840191505092915050565b600082825260208201905092915050565b600061394b826137ca565b613955818561392f565b9350613960836137e6565b8060005b838110156139915781516139788882613805565b97506139838361381d565b925050600181019050613964565b5085935050505092915050565b600060c0830160008301516139b660008601826138d6565b50602083015184820360208601526139ce82826138f6565b91505060408301516139e360408601826137f6565b50606083015184820360608601526139fb8282613940565b9150506080830151613a1060808601826138d6565b5060a0830151613a2360a08601826138d6565b508091505092915050565b6000613a3a838361399e565b905092915050565b6000602082019050919050565b6000613a5a826138aa565b613a6481856138b5565b935083602082028501613a76856138c6565b8060005b85811015613ab25784840389528151613a938582613a2e565b9450613a9e83613a42565b925060208a01995050600181019050613a7a565b50829750879550505050505092915050565b60006020820190508181036000830152613ade8184613a4f565b905092915050565b600080600060608486031215613aff57613afe6131e8565b5b600084013567ffffffffffffffff811115613b1d57613b1c6131ed565b5b613b29868287016136a7565b9350506020613b3a868287016132ce565b9250506040613b4b868287016132ce565b9150509250925092565b60008060408385031215613b6c57613b6b6131e8565b5b6000613b7a858286016134ee565b925050602083013567ffffffffffffffff811115613b9b57613b9a6131ed565b5b613ba7858286016136a7565b9150509250929050565b600080600060608486031215613bca57613bc96131e8565b5b6000613bd8868287016134ee565b9350506020613be9868287016132ce565b9250506040613bfa868287016132ce565b9150509250925092565b6000604082019050613c196000830185613310565b613c266020830184613310565b9392505050565b60008060408385031215613c4457613c436131e8565b5b6000613c52858286016132ce565b9250506020613c63858286016132ce565b9150509250929050565b6000602082019050613c8260008301846133e1565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613ccf57607f821691505b602082108103613ce257613ce1613c88565b5b50919050565b7f496e76616c6964206a6f62204944000000000000000000000000000000000000600082015250565b6000613d1e600e8361332a565b9150613d2982613ce8565b602082019050919050565b60006020820190508181036000830152613d4d81613d11565b9050919050565b7f4e6f7420656d706c6f79656420666f722074686973206a6f6200000000000000600082015250565b6000613d8a60198361332a565b9150613d9582613d54565b602082019050919050565b60006020820190508181036000830152613db981613d7d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613dfa826132ad565b9150613e05836132ad565b9250828203905081811115613e1d57613e1c613dc0565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e6f7420636865636b656420696e000000000000000000000000000000000000600082015250565b6000613e88600e8361332a565b9150613e9382613e52565b602082019050919050565b60006020820190508181036000830152613eb781613e7b565b9050919050565b7f436f6d70616e7920616c72656164792065786973747300000000000000000000600082015250565b6000613ef460168361332a565b9150613eff82613ebe565b602082019050919050565b60006020820190508181036000830152613f2381613ee7565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302613f8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613f4f565b613f968683613f4f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000613fd3613fce613fc9846132ad565b613fae565b6132ad565b9050919050565b6000819050919050565b613fed83613fb8565b614001613ff982613fda565b848454613f5c565b825550505050565b600090565b614016614009565b614021818484613fe4565b505050565b5b818110156140455761403a60008261400e565b600181019050614027565b5050565b601f82111561408a5761405b81613f2a565b61406484613f3f565b81016020851015614073578190505b61408761407f85613f3f565b830182614026565b50505b505050565b600082821c905092915050565b60006140ad6000198460080261408f565b1980831691505092915050565b60006140c6838361409c565b9150826002028217905092915050565b6140df8261331f565b67ffffffffffffffff8111156140f8576140f76135aa565b5b6141028254613cb7565b61410d828285614049565b600060209050601f831160018114614140576000841561412e578287015190505b61413885826140ba565b8655506141a0565b601f19841661414e86613f2a565b60005b8281101561417657848901518255600182019150602085019450602081019050614151565b86831015614193578489015161418f601f89168261409c565b8355505b6001600288020188555050505b505050505050565b60006141b3826132ad565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036141e5576141e4613dc0565b5b600182019050919050565b7f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060008201527f6a6f620000000000000000000000000000000000000000000000000000000000602082015250565b600061424c60238361332a565b9150614257826141f0565b604082019050919050565b6000602082019050818103600083015261427b8161423f565b9050919050565b600061428d826132ad565b9150600082036142a05761429f613dc0565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081905092915050565b60006142f08261331f565b6142fa81856142da565b935061430a81856020860161333b565b80840191505092915050565b600061432282846142e5565b915081905092915050565b60006080820190506143426000830187613310565b81810360208301526143548186613376565b90506143636040830185613310565b6143706060830184613310565b95945050505050565b7f576f726b657220697320616c726561647920656d706c6f796564000000000000600082015250565b60006143af601a8361332a565b91506143ba82614379565b602082019050919050565b600060208201905081810360008301526143de816143a2565b9050919050565b7f576f726b65722068617320616c7265616479206170706c69656420666f72207460008201527f686973206a6f6200000000000000000000000000000000000000000000000000602082015250565b600061444160278361332a565b915061444c826143e5565b604082019050919050565b6000602082019050818103600083015261447081614434565b9050919050565b6000815461448481613cb7565b61448e81866142da565b945060018216600081146144a957600181146144be576144f1565b60ff19831686528115158202860193506144f1565b6144c785613f2a565b60005b838110156144e9578154818901526001820191506020810190506144ca565b838801955050505b50505092915050565b60006145068284614477565b915081905092915050565b600060408201905061452660008301856133e1565b6145336020830184613310565b9392505050565b7f576f726b657220616c7265616479206578697374730000000000000000000000600082015250565b600061457060158361332a565b915061457b8261453a565b602082019050919050565b6000602082019050818103600083015261459f81614563565b9050919050565b60006040820190506145bb60008301856133e1565b81810360208301526145cd8184613376565b90509392505050565b60006145e1826132ad565b91506145ec836132ad565b925082820190508082111561460457614603613dc0565b5b92915050565b600060408201905061461f60008301856133e1565b61462c6020830184613454565b939250505056fea26469706673582212202636d85a77e7b9c55114d6db01e9a008a91247e88830d80f65ac66d9bbecb95164736f6c63430008180033",
    linkReferences: {},
    deployedLinkReferences: {},
};
