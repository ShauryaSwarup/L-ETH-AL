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
			inputs: [],
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
		"0x608060405234801561001057600080fd5b506000600c819055506000600d819055506000600e81905550615fb880620000396000396000f3fe608060405234801561001057600080fd5b50600436106102275760003560e01c8063965a79fb11610130578063cba5751c116100b8578063e4df768a1161007c578063e4df768a146106d8578063e95a644f14610708578063ebff061214610724578063f2b67e7d14610742578063fda56bdf1461077257610227565b8063cba5751c1461065e578063d3fa1d6214610668578063d547741f14610684578063e0c94ae5146106a0578063e33f874c146106bc57610227565b8063afac40bb116100ff578063afac40bb1461057a578063c078b4a2146105af578063c4a74b2b146105df578063c87aa01b146105fb578063cb7e598e1461062b57610227565b8063965a79fb146104f0578063a217fddf1461050e578063a5d12f591461052c578063ae55b86b1461054a57610227565b806336568abe116101b3578063634252dc11610182578063634252dc1461042457806369d7428f146104425780637090de7b146104725780637b361838146104a257806391d14854146104c057610227565b806336568abe1461038657806338f03269146103a25780634048a257146103be5780634cfdac95146103f157610227565b80631c9ee11a116101fa5780631c9ee11a146102cd578063248a9ca3146102eb5780632a2520a71461031b5780632f2ff15d14610339578063355e6ce81461035557610227565b806301ffc9a71461022c5780630a636a6e1461025c5780630c91615b1461027a578063180aedf314610298575b600080fd5b610246600480360381019061024191906148da565b6107a5565b6040516102539190614922565b60405180910390f35b61026461081f565b6040516102719190614922565b60405180910390f35b610282610850565b60405161028f9190614a99565b60405180910390f35b6102b260048036038101906102ad9190614ae7565b6109b4565b6040516102c496959493929190614b7c565b60405180910390f35b6102d5610b20565b6040516102e29190614c04565b60405180910390f35b61030560048036038101906103009190614c4b565b610b44565b6040516103129190614c04565b60405180910390f35b610323610b63565b6040516103309190614922565b60405180910390f35b610353600480360381019061034e9190614ca4565b610b94565b005b61036f600480360381019061036a9190614ce4565b610bb6565b60405161037d929190614d11565b60405180910390f35b6103a0600480360381019061039b9190614ca4565b610c82565b005b6103bc60048036038101906103b79190614e76565b610cfd565b005b6103d860048036038101906103d39190614ce4565b610f00565b6040516103e89493929190614ed2565b60405180910390f35b61040b60048036038101906104069190614f1e565b610fe5565b60405161041b9493929190614ed2565b60405180910390f35b61042c6110e7565b6040516104399190614c04565b60405180910390f35b61045c60048036038101906104579190614ae7565b61110b565b60405161046991906150b7565b60405180910390f35b61048c60048036038101906104879190614ae7565b61135e565b60405161049991906151fe565b60405180910390f35b6104aa611673565b6040516104b79190615220565b60405180910390f35b6104da60048036038101906104d59190614ca4565b611679565b6040516104e79190614922565b60405180910390f35b6104f86116e3565b60405161050591906153a7565b60405180910390f35b6105166119cd565b6040516105239190614c04565b60405180910390f35b6105346119d4565b60405161054191906150b7565b60405180910390f35b610564600480360381019061055f9190614ce4565b611c6a565b6040516105719190615220565b60405180910390f35b610594600480360381019061058f91906153c9565b611c82565b6040516105a696959493929190614b7c565b60405180910390f35b6105c960048036038101906105c49190614ce4565b611dfb565b6040516105d691906153a7565b60405180910390f35b6105f960048036038101906105f49190614ae7565b6121ee565b005b61061560048036038101906106109190614ce4565b612c9c565b6040516106229190615220565b60405180910390f35b61064560048036038101906106409190614ae7565b612cb4565b6040516106559493929190614ed2565b60405180910390f35b610666612d99565b005b610682600480360381019061067d9190615409565b613095565b005b61069e60048036038101906106999190614ca4565b613501565b005b6106ba60048036038101906106b59190614ae7565b613523565b005b6106d660048036038101906106d19190615478565b613885565b005b6106f260048036038101906106ed9190614ae7565b613b99565b6040516106ff91906151fe565b60405180910390f35b610722600480360381019061071d9190614ae7565b613d18565b005b61072c613ec0565b60405161073991906151fe565b60405180910390f35b61075c60048036038101906107579190614f1e565b614087565b60405161076991906154d4565b60405180910390f35b61078c60048036038101906107879190614ce4565b6140d5565b60405161079c94939291906154ef565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610818575061081782614125565b5b9050919050565b600061084b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b905090565b6108586146f4565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461091290615563565b80601f016020809104026020016040519081016040528092919081815260200182805461093e90615563565b801561098b5780601f106109605761010080835404028352916020019161098b565b820191906000526020600020905b81548152906001019060200180831161096e57829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581525050905090565b60046020528060005260406000206000915090508060000180546109d790615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0390615563565b8015610a505780601f10610a2557610100808354040283529160200191610a50565b820191906000526020600020905b815481529060010190602001808311610a3357829003601f168201915b505050505090806001015490806002018054610a6b90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9790615563565b8015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b6000806000838152602001908152602001600020600101549050919050565b6000610b8f7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611679565b905090565b610b9d82610b44565b610ba68161418f565b610bb083836141a3565b50505050565b6002602052806000526040600020600091509050806000018054610bd990615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0590615563565b8015610c525780601f10610c2757610100808354040283529160200191610c52565b820191906000526020600020905b815481529060010190602001808311610c3557829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610c8a614294565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cee576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cf8828261429c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610dce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc5906155e0565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610e4d91906157ac565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610ec27f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c826141a3565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051610ef4929190614d11565b60405180910390a15050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054610f4f90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7b90615563565b8015610fc85780601f10610f9d57610100808354040283529160200191610fc8565b820191906000526020600020905b815481529060010190602001808311610fab57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6008602052816000526040600020818154811061100157600080fd5b9060005260206000209060040201600091509150508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201805461105190615563565b80601f016020809104026020016040519081016040528092919081815260200182805461107d90615563565b80156110ca5780601f1061109f576101008083540402835291602001916110ca565b820191906000526020600020905b8154815290600101906020018083116110ad57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b611113614734565b600460008381526020019081526020016000206040518060e001604052908160008201805461114190615563565b80601f016020809104026020016040519081016040528092919081815260200182805461116d90615563565b80156111ba5780601f1061118f576101008083540402835291602001916111ba565b820191906000526020600020905b81548152906001019060200180831161119d57829003601f168201915b50505050508152602001600182015481526020016002820180546111dd90615563565b80601f016020809104026020016040519081016040528092919081815260200182805461120990615563565b80156112565780601f1061122b57610100808354040283529160200191611256565b820191906000526020600020905b81548152906001019060200180831161123957829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561133a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116112f0575b50505050508152602001600582015481526020016006820154815250509050919050565b606061138a7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b6113cb57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016113c291906154d4565b60405180910390fd5b60006005600084815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561146057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611416575b505050505090506000815167ffffffffffffffff81111561148457611483614d4b565b5b6040519080825280602002602001820160405280156114bd57816020015b6114aa6146f4565b8152602001906001900390816114a25790505b50905060005b825181101561166857600160008483815181106114e3576114e261587e565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546115a090615563565b80601f01602080910402602001604051908101604052809291908181526020018280546115cc90615563565b80156116195780601f106115ee57610100808354040283529160200191611619565b820191906000526020600020905b8154815290600101906020018083116115fc57829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250508282815181106116505761164f61587e565b5b602002602001018190525080806001019150506114c3565b508092505050919050565b600e5481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600c54905060008167ffffffffffffffff81111561170857611707614d4b565b5b60405190808252806020026020018201604052801561174157816020015b61172e614734565b8152602001906001900390816117265790505b50905060005b828110156119c4576000600460008381526020019081526020016000209050806040518060e001604052908160008201805461178290615563565b80601f01602080910402602001604051908101604052809291908181526020018280546117ae90615563565b80156117fb5780601f106117d0576101008083540402835291602001916117fb565b820191906000526020600020905b8154815290600101906020018083116117de57829003601f168201915b505050505081526020016001820154815260200160028201805461181e90615563565b80601f016020809104026020016040519081016040528092919081815260200182805461184a90615563565b80156118975780601f1061186c57610100808354040283529160200191611897565b820191906000526020600020905b81548152906001019060200180831161187a57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561197b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611931575b50505050508152602001600582015481526020016006820154815250508383815181106119ab576119aa61587e565b5b6020026020010181905250508080600101915050611747565b50809250505090565b6000801b81565b6119dc614734565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600460008281526020019081526020016000206040518060e0016040529081600082018054611a4e90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611a7a90615563565b8015611ac75780601f10611a9c57610100808354040283529160200191611ac7565b820191906000526020600020905b815481529060010190602001808311611aaa57829003601f168201915b5050505050815260200160018201548152602001600282018054611aea90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611b1690615563565b8015611b635780601f10611b3857610100808354040283529160200191611b63565b820191906000526020600020905b815481529060010190602001808311611b4657829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160048201805480602002602001604051908101604052809291908181526020018280548015611c4757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611bfd575b505050505081526020016005820154815260200160068201548152505091505090565b60076020528060005260406000206000915090505481565b600360205281600052604060002060205280600052604060002060009150915050806000018054611cb290615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611cde90615563565b8015611d2b5780601f10611d0057610100808354040283529160200191611d2b565b820191906000526020600020905b815481529060010190602001808311611d0e57829003601f168201915b505050505090806001015490806002018054611d4690615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611d7290615563565b8015611dbf5780601f10611d9457610100808354040283529160200191611dbf565b820191906000526020600020905b815481529060010190602001808311611da257829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b60606000600c5490506000805b82811015611e95578473ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611e88578180611e84906158dc565b9250505b8080600101915050611e08565b5060008167ffffffffffffffff811115611eb257611eb1614d4b565b5b604051908082528060200260200182016040528015611eeb57816020015b611ed8614734565b815260200190600190039081611ed05790505b5090506000805b848110156121e1578673ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036121d457600460008281526020019081526020016000206040518060e0016040529081600082018054611f9190615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611fbd90615563565b801561200a5780601f10611fdf5761010080835404028352916020019161200a565b820191906000526020600020905b815481529060010190602001808311611fed57829003601f168201915b505050505081526020016001820154815260200160028201805461202d90615563565b80601f016020809104026020016040519081016040528092919081815260200182805461205990615563565b80156120a65780601f1061207b576101008083540402835291602001916120a6565b820191906000526020600020905b81548152906001019060200180831161208957829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561218a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612140575b50505050508152602001600582015481526020016006820154815250508383815181106121ba576121b961587e565b5b602002602001018190525081806121d0906158dc565b9250505b8080600101915050611ef2565b5081945050505050919050565b6122187f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b61225957336040517f1a7fc6a500000000000000000000000000000000000000000000000000000000815260040161225091906154d4565b60405180910390fd5b6000600460008381526020019081526020016000206040518060e001604052908160008201805461228990615563565b80601f01602080910402602001604051908101604052809291908181526020018280546122b590615563565b80156123025780601f106122d757610100808354040283529160200191612302565b820191906000526020600020905b8154815290600101906020018083116122e557829003601f168201915b505050505081526020016001820154815260200160028201805461232590615563565b80601f016020809104026020016040519081016040528092919081815260200182805461235190615563565b801561239e5780601f106123735761010080835404028352916020019161239e565b820191906000526020600020905b81548152906001019060200180831161238157829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561248257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612438575b5050505050815260200160058201548152602001600682015481525050905060008160c0015190506000826040015190506000836060015190503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461252a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161252190615970565b60405180910390fd5b6000831161256d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161256490615a02565b60405180910390fd5b60006125788661438e565b90506000805b82518110801561258d57508582105b156128d45760008382815181106125a7576125a661587e565b5b6020026020010151905080606001516128c057600460008a815260200190815260200160002060040181602001519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001806000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508860076000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600860008a81526020019081526020016000208483815181106127015761270061587e565b5b602002602001015190806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908161279891906157ac565b5060608201518160030160006101000a81548160ff02191690831515021790555050506000600a6000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550868061280f90615a22565b975050828061281d906158dc565b935050600e600081548092919061283390615a22565b91905055506009600085848151811061284f5761284e61587e565b5b60200260200101516000015181526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160006128a99190614787565b6003820160006101000a81549060ff021916905550505b5080806128cc906158dc565b91505061257e565b5084600460008981526020019081526020016000206006018190555060005b81811015612c92576000600560008a8152602001908152602001600020905060005b8180549050811015612ab057600160008383815481106129385761293761587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1615612aa35781600183805490506129c59190615a4b565b815481106129d6576129d561587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110612a1457612a1361587e565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480612a6d57612a6c615a7f565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050612915565b506000600660008b815260200190815260200160002087604051612ad49190615aea565b9081526020016040518091039020905060005b8180549050811015612c825760016000838381548110612b0a57612b0961587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1615612c75578160018380549050612b979190615a4b565b81548110612ba857612ba761587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110612be657612be561587e565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480612c3f57612c3e615a7f565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050612ae7565b50505080806001019150506128f3565b5050505050505050565b600a6020528060005260406000206000915090505481565b60096020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054612d0390615563565b80601f0160208091040260200160405190810160405280929190818152602001828054612d2f90615563565b8015612d7c5780601f10612d5157610100808354040283529160200191612d7c565b820191906000526020600020905b815481529060010190602001808311612d5f57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015403612e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e1590615b4d565b60405180910390fd5b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015414612ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e9a90615bb9565b60405180910390fd5b42600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481525050905080604001518160600151612fc09190615a4b565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461300e9190615bd9565b925050819055507fc6ce66f56e23a203c32a0192de789de2f0570e4299378d5de96d0b9d640de856600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154334260405161308a93929190615c0d565b60405180910390a150565b6130bf7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b61310057336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016130f791906154d4565b60405180910390fd5b6000600c5490506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052908160008201805461316390615563565b80601f016020809104026020016040519081016040528092919081815260200182805461318f90615563565b80156131dc5780601f106131b1576101008083540402835291602001916131dc565b820191906000526020600020905b8154815290600101906020018083116131bf57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060008160000151905060006040518060e001604052808381526020018581526020018881526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff81111561329c5761329b614d4b565b5b6040519080825280602002602001820160405280156132ca5781602001602082028036833780820191505090505b50815260200187815260200186815250905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020600082015181600001908161334291906157ac565b5060208201518160010155604082015181600201908161336291906157ac565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040190805190602001906133c69291906147c7565b5060a0820151816005015560c082015181600601559050508060046000868152602001908152602001600020600082015181600001908161340791906157ac565b5060208201518160010155604082015181600201908161342791906157ac565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550608082015181600401908051906020019061348b9291906147c7565b5060a0820151816005015560c08201518160060155905050600c60008154809291906134b6906158dc565b91905055507f1de1b746452f172ccab29b4f979ee99345aafe2d2034aa42c6e56ace7b72fcdf848888886040516134f09493929190615c44565b60405180910390a150505050505050565b61350a82610b44565b6135138161418f565b61351d838361429c565b50505050565b61354d7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611679565b61358e57336040517f5cb17c0e00000000000000000000000000000000000000000000000000000000815260040161358591906154d4565b60405180910390fd5b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16151514613624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161361b90615cdc565b60405180910390fd5b600060056000838152602001908152602001600020905060005b8180549050811015613702573373ffffffffffffffffffffffffffffffffffffffff168282815481106136745761367361587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036136f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136ec90615d6e565b60405180910390fd5b808060010191505061363e565b5060056000838152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000838152602001908152602001600020600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016040516137d99190615e11565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f3383604051613879929190615e28565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614613956576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161394d90615e9d565b60405180910390fd5b60006040518060800160405280600d5481526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081613a3c91906157ac565b5060608201518160030160006101000a81548160ff0219169083151502179055509050508060096000600d5481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081613adc91906157ac565b5060608201518160030160006101000a81548160ff021916908315150217905550905050600e6000815480929190613b13906158dc565b9190505550600d6000815480929190613b2b906158dc565b9190505550613b5a7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7846141a3565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb9328383604051613b8c929190615ebd565b60405180910390a1505050565b606060086000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015613d0d5783829060005260206000209060040201604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054613c6190615563565b80601f0160208091040260200160405190810160405280929190818152602001828054613c8d90615563565b8015613cda5780601f10613caf57610100808354040283529160200191613cda565b820191906000526020600020905b815481529060010190602001808311613cbd57829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505081526020019060010190613bce565b505050509050919050565b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414613d9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613d9490615f39565b60405180910390fd5b600060405180608001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020016000815250905080600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301559050507f80f3660a78979e67d86862b24c89ff72270a4579e8d562e6f2e3306323b66a75823342604051613eb493929190615c0d565b60405180910390a15050565b60606000600e5467ffffffffffffffff811115613ee057613edf614d4b565b5b604051908082528060200260200182016040528015613f1957816020015b613f066146f4565b815260200190600190039081613efe5790505b50905060005b600e5481101561407f5760096000828152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054613fb790615563565b80601f0160208091040260200160405190810160405280929190818152602001828054613fe390615563565b80156140305780601f1061400557610100808354040283529160200191614030565b820191906000526020600020905b81548152906001019060200180831161401357829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250508282815181106140675761406661587e565b5b60200260200101819052508080600101915050613f1f565b508091505090565b600560205281600052604060002081815481106140a357600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905084565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6141a08161419b614294565b6146a3565b50565b60006141af8383611679565b61428957600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550614226614294565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061428e565b600090505b92915050565b600033905090565b60006142a88383611679565b1561438357600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550614320614294565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050614388565b600090505b92915050565b60606143ba7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b6143fb57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016143f291906154d4565b60405180910390fd5b60006005600084815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561449057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311614446575b505050505090506000815167ffffffffffffffff8111156144b4576144b3614d4b565b5b6040519080825280602002602001820160405280156144ed57816020015b6144da6146f4565b8152602001906001900390816144d25790505b50905060005b825181101561469857600160008483815181106145135761451261587e565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546145d090615563565b80601f01602080910402602001604051908101604052809291908181526020018280546145fc90615563565b80156146495780601f1061461e57610100808354040283529160200191614649565b820191906000526020600020905b81548152906001019060200180831161462c57829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250508282815181106146805761467f61587e565b5b602002602001018190525080806001019150506144f3565b508092505050919050565b6146ad8282611679565b6146f05780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016146e7929190615f59565b60405180910390fd5b5050565b604051806080016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b6040518060e00160405280606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081525090565b50805461479390615563565b6000825580601f106147a557506147c4565b601f0160209004906000526020600020908101906147c39190614851565b5b50565b828054828255906000526020600020908101928215614840579160200282015b8281111561483f5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906147e7565b5b50905061484d9190614851565b5090565b5b8082111561486a576000816000905550600101614852565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6148b781614882565b81146148c257600080fd5b50565b6000813590506148d4816148ae565b92915050565b6000602082840312156148f0576148ef614878565b5b60006148fe848285016148c5565b91505092915050565b60008115159050919050565b61491c81614907565b82525050565b60006020820190506149376000830184614913565b92915050565b6000819050919050565b6149508161493d565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061498182614956565b9050919050565b61499181614976565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156149d15780820151818401526020810190506149b6565b60008484015250505050565b6000601f19601f8301169050919050565b60006149f982614997565b614a0381856149a2565b9350614a138185602086016149b3565b614a1c816149dd565b840191505092915050565b614a3081614907565b82525050565b6000608083016000830151614a4e6000860182614947565b506020830151614a616020860182614988565b5060408301518482036040860152614a7982826149ee565b9150506060830151614a8e6060860182614a27565b508091505092915050565b60006020820190508181036000830152614ab38184614a36565b905092915050565b614ac48161493d565b8114614acf57600080fd5b50565b600081359050614ae181614abb565b92915050565b600060208284031215614afd57614afc614878565b5b6000614b0b84828501614ad2565b91505092915050565b600082825260208201905092915050565b6000614b3082614997565b614b3a8185614b14565b9350614b4a8185602086016149b3565b614b53816149dd565b840191505092915050565b614b678161493d565b82525050565b614b7681614976565b82525050565b600060c0820190508181036000830152614b968189614b25565b9050614ba56020830188614b5e565b8181036040830152614bb78187614b25565b9050614bc66060830186614b6d565b614bd36080830185614b5e565b614be060a0830184614b5e565b979650505050505050565b6000819050919050565b614bfe81614beb565b82525050565b6000602082019050614c196000830184614bf5565b92915050565b614c2881614beb565b8114614c3357600080fd5b50565b600081359050614c4581614c1f565b92915050565b600060208284031215614c6157614c60614878565b5b6000614c6f84828501614c36565b91505092915050565b614c8181614976565b8114614c8c57600080fd5b50565b600081359050614c9e81614c78565b92915050565b60008060408385031215614cbb57614cba614878565b5b6000614cc985828601614c36565b9250506020614cda85828601614c8f565b9150509250929050565b600060208284031215614cfa57614cf9614878565b5b6000614d0884828501614c8f565b91505092915050565b60006040820190508181036000830152614d2b8185614b25565b9050614d3a6020830184614b6d565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b614d83826149dd565b810181811067ffffffffffffffff82111715614da257614da1614d4b565b5b80604052505050565b6000614db561486e565b9050614dc18282614d7a565b919050565b600067ffffffffffffffff821115614de157614de0614d4b565b5b614dea826149dd565b9050602081019050919050565b82818337600083830152505050565b6000614e19614e1484614dc6565b614dab565b905082815260208101848484011115614e3557614e34614d46565b5b614e40848285614df7565b509392505050565b600082601f830112614e5d57614e5c614d41565b5b8135614e6d848260208601614e06565b91505092915050565b60008060408385031215614e8d57614e8c614878565b5b600083013567ffffffffffffffff811115614eab57614eaa61487d565b5b614eb785828601614e48565b9250506020614ec885828601614c8f565b9150509250929050565b6000608082019050614ee76000830187614b5e565b614ef46020830186614b6d565b8181036040830152614f068185614b25565b9050614f156060830184614913565b95945050505050565b60008060408385031215614f3557614f34614878565b5b6000614f4385828601614ad2565b9250506020614f5485828601614ad2565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000614f968383614988565b60208301905092915050565b6000602082019050919050565b6000614fba82614f5e565b614fc48185614f69565b9350614fcf83614f7a565b8060005b83811015615000578151614fe78882614f8a565b9750614ff283614fa2565b925050600181019050614fd3565b5085935050505092915050565b600060e083016000830151848203600086015261502a82826149ee565b915050602083015161503f6020860182614947565b506040830151848203604086015261505782826149ee565b915050606083015161506c6060860182614988565b50608083015184820360808601526150848282614faf565b91505060a083015161509960a0860182614947565b5060c08301516150ac60c0860182614947565b508091505092915050565b600060208201905081810360008301526150d1818461500d565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060808301600083015161511d6000860182614947565b5060208301516151306020860182614988565b506040830151848203604086015261514882826149ee565b915050606083015161515d6060860182614a27565b508091505092915050565b60006151748383615105565b905092915050565b6000602082019050919050565b6000615194826150d9565b61519e81856150e4565b9350836020820285016151b0856150f5565b8060005b858110156151ec57848403895281516151cd8582615168565b94506151d88361517c565b925060208a019950506001810190506151b4565b50829750879550505050505092915050565b600060208201905081810360008301526152188184615189565b905092915050565b60006020820190506152356000830184614b5e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060e083016000830151848203600086015261528482826149ee565b91505060208301516152996020860182614947565b50604083015184820360408601526152b182826149ee565b91505060608301516152c66060860182614988565b50608083015184820360808601526152de8282614faf565b91505060a08301516152f360a0860182614947565b5060c083015161530660c0860182614947565b508091505092915050565b600061531d8383615267565b905092915050565b6000602082019050919050565b600061533d8261523b565b6153478185615246565b93508360208202850161535985615257565b8060005b8581101561539557848403895281516153768582615311565b945061538183615325565b925060208a0199505060018101905061535d565b50829750879550505050505092915050565b600060208201905081810360008301526153c18184615332565b905092915050565b600080604083850312156153e0576153df614878565b5b60006153ee85828601614c8f565b92505060206153ff85828601614ad2565b9150509250929050565b60008060006060848603121561542257615421614878565b5b600084013567ffffffffffffffff8111156154405761543f61487d565b5b61544c86828701614e48565b935050602061545d86828701614ad2565b925050604061546e86828701614ad2565b9150509250925092565b6000806040838503121561548f5761548e614878565b5b600061549d85828601614c8f565b925050602083013567ffffffffffffffff8111156154be576154bd61487d565b5b6154ca85828601614e48565b9150509250929050565b60006020820190506154e96000830184614b6d565b92915050565b60006080820190506155046000830187614b5e565b6155116020830186614b6d565b61551e6040830185614b5e565b61552b6060830184614b5e565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061557b57607f821691505b60208210810361558e5761558d615534565b5b50919050565b7f436f6d70616e7920616c72656164792065786973747300000000000000000000600082015250565b60006155ca601683614b14565b91506155d582615594565b602082019050919050565b600060208201905081810360008301526155f9816155bd565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026156627fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82615625565b61566c8683615625565b95508019841693508086168417925050509392505050565b6000819050919050565b60006156a96156a461569f8461493d565b615684565b61493d565b9050919050565b6000819050919050565b6156c38361568e565b6156d76156cf826156b0565b848454615632565b825550505050565b600090565b6156ec6156df565b6156f78184846156ba565b505050565b5b8181101561571b576157106000826156e4565b6001810190506156fd565b5050565b601f8211156157605761573181615600565b61573a84615615565b81016020851015615749578190505b61575d61575585615615565b8301826156fc565b50505b505050565b600082821c905092915050565b600061578360001984600802615765565b1980831691505092915050565b600061579c8383615772565b9150826002028217905092915050565b6157b582614997565b67ffffffffffffffff8111156157ce576157cd614d4b565b5b6157d88254615563565b6157e382828561571f565b600060209050601f8311600181146158165760008415615804578287015190505b61580e8582615790565b865550615876565b601f19841661582486615600565b60005b8281101561584c57848901518255600182019150602085019450602081019050615827565b868310156158695784890151615865601f891682615772565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006158e78261493d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203615919576159186158ad565b5b600182019050919050565b7f54686973206a6f62206973206e6f74206f66666572656420627920796f752e00600082015250565b600061595a601f83614b14565b915061596582615924565b602082019050919050565b600060208201905081810360008301526159898161594d565b9050919050565b7f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060008201527f6a6f620000000000000000000000000000000000000000000000000000000000602082015250565b60006159ec602383614b14565b91506159f782615990565b604082019050919050565b60006020820190508181036000830152615a1b816159df565b9050919050565b6000615a2d8261493d565b915060008203615a4057615a3f6158ad565b5b600182039050919050565b6000615a568261493d565b9150615a618361493d565b9250828203905081811115615a7957615a786158ad565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081905092915050565b6000615ac482614997565b615ace8185615aae565b9350615ade8185602086016149b3565b80840191505092915050565b6000615af68284615ab9565b915081905092915050565b7f576f726b657220686173206e6f7420636865636b656420696e00000000000000600082015250565b6000615b37601983614b14565b9150615b4282615b01565b602082019050919050565b60006020820190508181036000830152615b6681615b2a565b9050919050565b7f576f726b657220616c726561647920636865636b6564206f7574000000000000600082015250565b6000615ba3601a83614b14565b9150615bae82615b6d565b602082019050919050565b60006020820190508181036000830152615bd281615b96565b9050919050565b6000615be48261493d565b9150615bef8361493d565b9250828201905080821115615c0757615c066158ad565b5b92915050565b6000606082019050615c226000830186614b5e565b615c2f6020830185614b6d565b615c3c6040830184614b5e565b949350505050565b6000608082019050615c596000830187614b5e565b8181036020830152615c6b8186614b25565b9050615c7a6040830185614b5e565b615c876060830184614b5e565b95945050505050565b7f576f726b657220697320616c726561647920656d706c6f796564000000000000600082015250565b6000615cc6601a83614b14565b9150615cd182615c90565b602082019050919050565b60006020820190508181036000830152615cf581615cb9565b9050919050565b7f576f726b65722068617320616c7265616479206170706c69656420666f72207460008201527f686973206a6f6200000000000000000000000000000000000000000000000000602082015250565b6000615d58602783614b14565b9150615d6382615cfc565b604082019050919050565b60006020820190508181036000830152615d8781615d4b565b9050919050565b60008154615d9b81615563565b615da58186615aae565b94506001821660008114615dc05760018114615dd557615e08565b60ff1983168652811515820286019350615e08565b615dde85615600565b60005b83811015615e0057815481890152600182019150602081019050615de1565b838801955050505b50505092915050565b6000615e1d8284615d8e565b915081905092915050565b6000604082019050615e3d6000830185614b6d565b615e4a6020830184614b5e565b9392505050565b7f576f726b657220616c7265616479206578697374730000000000000000000000600082015250565b6000615e87601583614b14565b9150615e9282615e51565b602082019050919050565b60006020820190508181036000830152615eb681615e7a565b9050919050565b6000604082019050615ed26000830185614b6d565b8181036020830152615ee48184614b25565b90509392505050565b7f576f726b657220616c726561647920636865636b656420696e00000000000000600082015250565b6000615f23601983614b14565b9150615f2e82615eed565b602082019050919050565b60006020820190508181036000830152615f5281615f16565b9050919050565b6000604082019050615f6e6000830185614b6d565b615f7b6020830184614bf5565b939250505056fea2646970667358221220e88cd8d6b1ed71ccdd185beadd680a599e65f6f04d16d3f19b5ed7718e32df1e64736f6c63430008180033",
	deployedBytecode:
		"0x608060405234801561001057600080fd5b50600436106102275760003560e01c8063965a79fb11610130578063cba5751c116100b8578063e4df768a1161007c578063e4df768a146106d8578063e95a644f14610708578063ebff061214610724578063f2b67e7d14610742578063fda56bdf1461077257610227565b8063cba5751c1461065e578063d3fa1d6214610668578063d547741f14610684578063e0c94ae5146106a0578063e33f874c146106bc57610227565b8063afac40bb116100ff578063afac40bb1461057a578063c078b4a2146105af578063c4a74b2b146105df578063c87aa01b146105fb578063cb7e598e1461062b57610227565b8063965a79fb146104f0578063a217fddf1461050e578063a5d12f591461052c578063ae55b86b1461054a57610227565b806336568abe116101b3578063634252dc11610182578063634252dc1461042457806369d7428f146104425780637090de7b146104725780637b361838146104a257806391d14854146104c057610227565b806336568abe1461038657806338f03269146103a25780634048a257146103be5780634cfdac95146103f157610227565b80631c9ee11a116101fa5780631c9ee11a146102cd578063248a9ca3146102eb5780632a2520a71461031b5780632f2ff15d14610339578063355e6ce81461035557610227565b806301ffc9a71461022c5780630a636a6e1461025c5780630c91615b1461027a578063180aedf314610298575b600080fd5b610246600480360381019061024191906148da565b6107a5565b6040516102539190614922565b60405180910390f35b61026461081f565b6040516102719190614922565b60405180910390f35b610282610850565b60405161028f9190614a99565b60405180910390f35b6102b260048036038101906102ad9190614ae7565b6109b4565b6040516102c496959493929190614b7c565b60405180910390f35b6102d5610b20565b6040516102e29190614c04565b60405180910390f35b61030560048036038101906103009190614c4b565b610b44565b6040516103129190614c04565b60405180910390f35b610323610b63565b6040516103309190614922565b60405180910390f35b610353600480360381019061034e9190614ca4565b610b94565b005b61036f600480360381019061036a9190614ce4565b610bb6565b60405161037d929190614d11565b60405180910390f35b6103a0600480360381019061039b9190614ca4565b610c82565b005b6103bc60048036038101906103b79190614e76565b610cfd565b005b6103d860048036038101906103d39190614ce4565b610f00565b6040516103e89493929190614ed2565b60405180910390f35b61040b60048036038101906104069190614f1e565b610fe5565b60405161041b9493929190614ed2565b60405180910390f35b61042c6110e7565b6040516104399190614c04565b60405180910390f35b61045c60048036038101906104579190614ae7565b61110b565b60405161046991906150b7565b60405180910390f35b61048c60048036038101906104879190614ae7565b61135e565b60405161049991906151fe565b60405180910390f35b6104aa611673565b6040516104b79190615220565b60405180910390f35b6104da60048036038101906104d59190614ca4565b611679565b6040516104e79190614922565b60405180910390f35b6104f86116e3565b60405161050591906153a7565b60405180910390f35b6105166119cd565b6040516105239190614c04565b60405180910390f35b6105346119d4565b60405161054191906150b7565b60405180910390f35b610564600480360381019061055f9190614ce4565b611c6a565b6040516105719190615220565b60405180910390f35b610594600480360381019061058f91906153c9565b611c82565b6040516105a696959493929190614b7c565b60405180910390f35b6105c960048036038101906105c49190614ce4565b611dfb565b6040516105d691906153a7565b60405180910390f35b6105f960048036038101906105f49190614ae7565b6121ee565b005b61061560048036038101906106109190614ce4565b612c9c565b6040516106229190615220565b60405180910390f35b61064560048036038101906106409190614ae7565b612cb4565b6040516106559493929190614ed2565b60405180910390f35b610666612d99565b005b610682600480360381019061067d9190615409565b613095565b005b61069e60048036038101906106999190614ca4565b613501565b005b6106ba60048036038101906106b59190614ae7565b613523565b005b6106d660048036038101906106d19190615478565b613885565b005b6106f260048036038101906106ed9190614ae7565b613b99565b6040516106ff91906151fe565b60405180910390f35b610722600480360381019061071d9190614ae7565b613d18565b005b61072c613ec0565b60405161073991906151fe565b60405180910390f35b61075c60048036038101906107579190614f1e565b614087565b60405161076991906154d4565b60405180910390f35b61078c60048036038101906107879190614ce4565b6140d5565b60405161079c94939291906154ef565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610818575061081782614125565b5b9050919050565b600061084b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b905090565b6108586146f4565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201805461091290615563565b80601f016020809104026020016040519081016040528092919081815260200182805461093e90615563565b801561098b5780601f106109605761010080835404028352916020019161098b565b820191906000526020600020905b81548152906001019060200180831161096e57829003601f168201915b505050505081526020016003820160009054906101000a900460ff161515151581525050905090565b60046020528060005260406000206000915090508060000180546109d790615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0390615563565b8015610a505780601f10610a2557610100808354040283529160200191610a50565b820191906000526020600020905b815481529060010190602001808311610a3357829003601f168201915b505050505090806001015490806002018054610a6b90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9790615563565b8015610ae45780601f10610ab957610100808354040283529160200191610ae4565b820191906000526020600020905b815481529060010190602001808311610ac757829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c81565b6000806000838152602001908152602001600020600101549050919050565b6000610b8f7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611679565b905090565b610b9d82610b44565b610ba68161418f565b610bb083836141a3565b50505050565b6002602052806000526040600020600091509050806000018054610bd990615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0590615563565b8015610c525780601f10610c2757610100808354040283529160200191610c52565b820191906000526020600020905b815481529060010190602001808311610c3557829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b610c8a614294565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cee576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cf8828261429c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610dce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc5906155e0565b60405180910390fd5b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019081610e4d91906157ac565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050610ec27f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c826141a3565b507fa5d3ea04e0b5fb57568543f84fc3dd9adbc7b0a133e72dc580d9bfbaf3fa3a148282604051610ef4929190614d11565b60405180910390a15050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054610f4f90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7b90615563565b8015610fc85780601f10610f9d57610100808354040283529160200191610fc8565b820191906000526020600020905b815481529060010190602001808311610fab57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6008602052816000526040600020818154811061100157600080fd5b9060005260206000209060040201600091509150508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600201805461105190615563565b80601f016020809104026020016040519081016040528092919081815260200182805461107d90615563565b80156110ca5780601f1061109f576101008083540402835291602001916110ca565b820191906000526020600020905b8154815290600101906020018083116110ad57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc781565b611113614734565b600460008381526020019081526020016000206040518060e001604052908160008201805461114190615563565b80601f016020809104026020016040519081016040528092919081815260200182805461116d90615563565b80156111ba5780601f1061118f576101008083540402835291602001916111ba565b820191906000526020600020905b81548152906001019060200180831161119d57829003601f168201915b50505050508152602001600182015481526020016002820180546111dd90615563565b80601f016020809104026020016040519081016040528092919081815260200182805461120990615563565b80156112565780601f1061122b57610100808354040283529160200191611256565b820191906000526020600020905b81548152906001019060200180831161123957829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561133a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116112f0575b50505050508152602001600582015481526020016006820154815250509050919050565b606061138a7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b6113cb57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016113c291906154d4565b60405180910390fd5b60006005600084815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561146057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611416575b505050505090506000815167ffffffffffffffff81111561148457611483614d4b565b5b6040519080825280602002602001820160405280156114bd57816020015b6114aa6146f4565b8152602001906001900390816114a25790505b50905060005b825181101561166857600160008483815181106114e3576114e261587e565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546115a090615563565b80601f01602080910402602001604051908101604052809291908181526020018280546115cc90615563565b80156116195780601f106115ee57610100808354040283529160200191611619565b820191906000526020600020905b8154815290600101906020018083116115fc57829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250508282815181106116505761164f61587e565b5b602002602001018190525080806001019150506114c3565b508092505050919050565b600e5481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606000600c54905060008167ffffffffffffffff81111561170857611707614d4b565b5b60405190808252806020026020018201604052801561174157816020015b61172e614734565b8152602001906001900390816117265790505b50905060005b828110156119c4576000600460008381526020019081526020016000209050806040518060e001604052908160008201805461178290615563565b80601f01602080910402602001604051908101604052809291908181526020018280546117ae90615563565b80156117fb5780601f106117d0576101008083540402835291602001916117fb565b820191906000526020600020905b8154815290600101906020018083116117de57829003601f168201915b505050505081526020016001820154815260200160028201805461181e90615563565b80601f016020809104026020016040519081016040528092919081815260200182805461184a90615563565b80156118975780601f1061186c57610100808354040283529160200191611897565b820191906000526020600020905b81548152906001019060200180831161187a57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561197b57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611931575b50505050508152602001600582015481526020016006820154815250508383815181106119ab576119aa61587e565b5b6020026020010181905250508080600101915050611747565b50809250505090565b6000801b81565b6119dc614734565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600460008281526020019081526020016000206040518060e0016040529081600082018054611a4e90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611a7a90615563565b8015611ac75780601f10611a9c57610100808354040283529160200191611ac7565b820191906000526020600020905b815481529060010190602001808311611aaa57829003601f168201915b5050505050815260200160018201548152602001600282018054611aea90615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611b1690615563565b8015611b635780601f10611b3857610100808354040283529160200191611b63565b820191906000526020600020905b815481529060010190602001808311611b4657829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160048201805480602002602001604051908101604052809291908181526020018280548015611c4757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611bfd575b505050505081526020016005820154815260200160068201548152505091505090565b60076020528060005260406000206000915090505481565b600360205281600052604060002060205280600052604060002060009150915050806000018054611cb290615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611cde90615563565b8015611d2b5780601f10611d0057610100808354040283529160200191611d2b565b820191906000526020600020905b815481529060010190602001808311611d0e57829003601f168201915b505050505090806001015490806002018054611d4690615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611d7290615563565b8015611dbf5780601f10611d9457610100808354040283529160200191611dbf565b820191906000526020600020905b815481529060010190602001808311611da257829003601f168201915b5050505050908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154908060060154905086565b60606000600c5490506000805b82811015611e95578473ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611e88578180611e84906158dc565b9250505b8080600101915050611e08565b5060008167ffffffffffffffff811115611eb257611eb1614d4b565b5b604051908082528060200260200182016040528015611eeb57816020015b611ed8614734565b815260200190600190039081611ed05790505b5090506000805b848110156121e1578673ffffffffffffffffffffffffffffffffffffffff166004600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036121d457600460008281526020019081526020016000206040518060e0016040529081600082018054611f9190615563565b80601f0160208091040260200160405190810160405280929190818152602001828054611fbd90615563565b801561200a5780601f10611fdf5761010080835404028352916020019161200a565b820191906000526020600020905b815481529060010190602001808311611fed57829003601f168201915b505050505081526020016001820154815260200160028201805461202d90615563565b80601f016020809104026020016040519081016040528092919081815260200182805461205990615563565b80156120a65780601f1061207b576101008083540402835291602001916120a6565b820191906000526020600020905b81548152906001019060200180831161208957829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561218a57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612140575b50505050508152602001600582015481526020016006820154815250508383815181106121ba576121b961587e565b5b602002602001018190525081806121d0906158dc565b9250505b8080600101915050611ef2565b5081945050505050919050565b6122187f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b61225957336040517f1a7fc6a500000000000000000000000000000000000000000000000000000000815260040161225091906154d4565b60405180910390fd5b6000600460008381526020019081526020016000206040518060e001604052908160008201805461228990615563565b80601f01602080910402602001604051908101604052809291908181526020018280546122b590615563565b80156123025780601f106122d757610100808354040283529160200191612302565b820191906000526020600020905b8154815290600101906020018083116122e557829003601f168201915b505050505081526020016001820154815260200160028201805461232590615563565b80601f016020809104026020016040519081016040528092919081815260200182805461235190615563565b801561239e5780601f106123735761010080835404028352916020019161239e565b820191906000526020600020905b81548152906001019060200180831161238157829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820180548060200260200160405190810160405280929190818152602001828054801561248257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612438575b5050505050815260200160058201548152602001600682015481525050905060008160c0015190506000826040015190506000836060015190503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461252a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161252190615970565b60405180910390fd5b6000831161256d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161256490615a02565b60405180910390fd5b60006125788661438e565b90506000805b82518110801561258d57508582105b156128d45760008382815181106125a7576125a661587e565b5b6020026020010151905080606001516128c057600460008a815260200190815260200160002060040181602001519080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001806000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff0219169083151502179055508860076000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600860008a81526020019081526020016000208483815181106127015761270061587e565b5b602002602001015190806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201908161279891906157ac565b5060608201518160030160006101000a81548160ff02191690831515021790555050506000600a6000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550868061280f90615a22565b975050828061281d906158dc565b935050600e600081548092919061283390615a22565b91905055506009600085848151811061284f5761284e61587e565b5b60200260200101516000015181526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160006128a99190614787565b6003820160006101000a81549060ff021916905550505b5080806128cc906158dc565b91505061257e565b5084600460008981526020019081526020016000206006018190555060005b81811015612c92576000600560008a8152602001908152602001600020905060005b8180549050811015612ab057600160008383815481106129385761293761587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1615612aa35781600183805490506129c59190615a4b565b815481106129d6576129d561587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110612a1457612a1361587e565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480612a6d57612a6c615a7f565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050612915565b506000600660008b815260200190815260200160002087604051612ad49190615aea565b9081526020016040518091039020905060005b8180549050811015612c825760016000838381548110612b0a57612b0961587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1615612c75578160018380549050612b979190615a4b565b81548110612ba857612ba761587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281548110612be657612be561587e565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081805480612c3f57612c3e615a7f565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555b8080600101915050612ae7565b50505080806001019150506128f3565b5050505050505050565b600a6020528060005260406000206000915090505481565b60096020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054612d0390615563565b80601f0160208091040260200160405190810160405280929190818152602001828054612d2f90615563565b8015612d7c5780601f10612d5157610100808354040283529160200191612d7c565b820191906000526020600020905b815481529060010190602001808311612d5f57829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015403612e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e1590615b4d565b60405180910390fd5b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015414612ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e9a90615bb9565b60405180910390fd5b42600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819055506000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481525050905080604001518160600151612fc09190615a4b565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461300e9190615bd9565b925050819055507fc6ce66f56e23a203c32a0192de789de2f0570e4299378d5de96d0b9d640de856600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154334260405161308a93929190615c0d565b60405180910390a150565b6130bf7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b61310057336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016130f791906154d4565b60405180910390fd5b6000600c5490506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052908160008201805461316390615563565b80601f016020809104026020016040519081016040528092919081815260200182805461318f90615563565b80156131dc5780601f106131b1576101008083540402835291602001916131dc565b820191906000526020600020905b8154815290600101906020018083116131bf57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905060008160000151905060006040518060e001604052808381526020018581526020018881526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff81111561329c5761329b614d4b565b5b6040519080825280602002602001820160405280156132ca5781602001602082028036833780820191505090505b50815260200187815260200186815250905080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000868152602001908152602001600020600082015181600001908161334291906157ac565b5060208201518160010155604082015181600201908161336291906157ac565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040190805190602001906133c69291906147c7565b5060a0820151816005015560c082015181600601559050508060046000868152602001908152602001600020600082015181600001908161340791906157ac565b5060208201518160010155604082015181600201908161342791906157ac565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550608082015181600401908051906020019061348b9291906147c7565b5060a0820151816005015560c08201518160060155905050600c60008154809291906134b6906158dc565b91905055507f1de1b746452f172ccab29b4f979ee99345aafe2d2034aa42c6e56ace7b72fcdf848888886040516134f09493929190615c44565b60405180910390a150505050505050565b61350a82610b44565b6135138161418f565b61351d838361429c565b50505050565b61354d7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc733611679565b61358e57336040517f5cb17c0e00000000000000000000000000000000000000000000000000000000815260040161358591906154d4565b60405180910390fd5b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16151514613624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161361b90615cdc565b60405180910390fd5b600060056000838152602001908152602001600020905060005b8180549050811015613702573373ffffffffffffffffffffffffffffffffffffffff168282815481106136745761367361587e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036136f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136ec90615d6e565b60405180910390fd5b808060010191505061363e565b5060056000838152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060066000838152602001908152602001600020600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016040516137d99190615e11565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f42b09ff3689697d5c36406edc0d1a16211e12fd1109f240d7e16d498afc7545f3383604051613879929190615e28565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614613956576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161394d90615e9d565b60405180910390fd5b60006040518060800160405280600d5481526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081613a3c91906157ac565b5060608201518160030160006101000a81548160ff0219169083151502179055509050508060096000600d5481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002019081613adc91906157ac565b5060608201518160030160006101000a81548160ff021916908315150217905550905050600e6000815480929190613b13906158dc565b9190505550600d6000815480929190613b2b906158dc565b9190505550613b5a7ff1b411d6abb365480ac902cc153c45e9ded5847a2265ce6d01945d253edb6bc7846141a3565b507f63b1f1f18828d6fe0dc53de0b5d5e1b493e7994ace3c650cc01a685826fcb9328383604051613b8c929190615ebd565b60405180910390a1505050565b606060086000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015613d0d5783829060005260206000209060040201604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054613c6190615563565b80601f0160208091040260200160405190810160405280929190818152602001828054613c8d90615563565b8015613cda5780601f10613caf57610100808354040283529160200191613cda565b820191906000526020600020905b815481529060010190602001808311613cbd57829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152505081526020019060010190613bce565b505050509050919050565b6000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015414613d9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613d9490615f39565b60405180910390fd5b600060405180608001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681526020014281526020016000815250905080600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301559050507f80f3660a78979e67d86862b24c89ff72270a4579e8d562e6f2e3306323b66a75823342604051613eb493929190615c0d565b60405180910390a15050565b60606000600e5467ffffffffffffffff811115613ee057613edf614d4b565b5b604051908082528060200260200182016040528015613f1957816020015b613f066146f4565b815260200190600190039081613efe5790505b50905060005b600e5481101561407f5760096000828152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054613fb790615563565b80601f0160208091040260200160405190810160405280929190818152602001828054613fe390615563565b80156140305780601f1061400557610100808354040283529160200191614030565b820191906000526020600020905b81548152906001019060200180831161401357829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250508282815181106140675761406661587e565b5b60200260200101819052508080600101915050613f1f565b508091505090565b600560205281600052604060002081815481106140a357600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905084565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6141a08161419b614294565b6146a3565b50565b60006141af8383611679565b61428957600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550614226614294565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061428e565b600090505b92915050565b600033905090565b60006142a88383611679565b1561438357600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550614320614294565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050614388565b600090505b92915050565b60606143ba7f9e1688b53537f356172ce07f39e129155063957163c5f9462d4d9e55b228b06c33611679565b6143fb57336040517f1a7fc6a50000000000000000000000000000000000000000000000000000000081526004016143f291906154d4565b60405180910390fd5b60006005600084815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561449057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311614446575b505050505090506000815167ffffffffffffffff8111156144b4576144b3614d4b565b5b6040519080825280602002602001820160405280156144ed57816020015b6144da6146f4565b8152602001906001900390816144d25790505b50905060005b825181101561469857600160008483815181106145135761451261587e565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806080016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820180546145d090615563565b80601f01602080910402602001604051908101604052809291908181526020018280546145fc90615563565b80156146495780601f1061461e57610100808354040283529160200191614649565b820191906000526020600020905b81548152906001019060200180831161462c57829003601f168201915b505050505081526020016003820160009054906101000a900460ff1615151515815250508282815181106146805761467f61587e565b5b602002602001018190525080806001019150506144f3565b508092505050919050565b6146ad8282611679565b6146f05780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016146e7929190615f59565b60405180910390fd5b5050565b604051806080016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000151581525090565b6040518060e00160405280606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001600081525090565b50805461479390615563565b6000825580601f106147a557506147c4565b601f0160209004906000526020600020908101906147c39190614851565b5b50565b828054828255906000526020600020908101928215614840579160200282015b8281111561483f5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906147e7565b5b50905061484d9190614851565b5090565b5b8082111561486a576000816000905550600101614852565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6148b781614882565b81146148c257600080fd5b50565b6000813590506148d4816148ae565b92915050565b6000602082840312156148f0576148ef614878565b5b60006148fe848285016148c5565b91505092915050565b60008115159050919050565b61491c81614907565b82525050565b60006020820190506149376000830184614913565b92915050565b6000819050919050565b6149508161493d565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061498182614956565b9050919050565b61499181614976565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156149d15780820151818401526020810190506149b6565b60008484015250505050565b6000601f19601f8301169050919050565b60006149f982614997565b614a0381856149a2565b9350614a138185602086016149b3565b614a1c816149dd565b840191505092915050565b614a3081614907565b82525050565b6000608083016000830151614a4e6000860182614947565b506020830151614a616020860182614988565b5060408301518482036040860152614a7982826149ee565b9150506060830151614a8e6060860182614a27565b508091505092915050565b60006020820190508181036000830152614ab38184614a36565b905092915050565b614ac48161493d565b8114614acf57600080fd5b50565b600081359050614ae181614abb565b92915050565b600060208284031215614afd57614afc614878565b5b6000614b0b84828501614ad2565b91505092915050565b600082825260208201905092915050565b6000614b3082614997565b614b3a8185614b14565b9350614b4a8185602086016149b3565b614b53816149dd565b840191505092915050565b614b678161493d565b82525050565b614b7681614976565b82525050565b600060c0820190508181036000830152614b968189614b25565b9050614ba56020830188614b5e565b8181036040830152614bb78187614b25565b9050614bc66060830186614b6d565b614bd36080830185614b5e565b614be060a0830184614b5e565b979650505050505050565b6000819050919050565b614bfe81614beb565b82525050565b6000602082019050614c196000830184614bf5565b92915050565b614c2881614beb565b8114614c3357600080fd5b50565b600081359050614c4581614c1f565b92915050565b600060208284031215614c6157614c60614878565b5b6000614c6f84828501614c36565b91505092915050565b614c8181614976565b8114614c8c57600080fd5b50565b600081359050614c9e81614c78565b92915050565b60008060408385031215614cbb57614cba614878565b5b6000614cc985828601614c36565b9250506020614cda85828601614c8f565b9150509250929050565b600060208284031215614cfa57614cf9614878565b5b6000614d0884828501614c8f565b91505092915050565b60006040820190508181036000830152614d2b8185614b25565b9050614d3a6020830184614b6d565b9392505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b614d83826149dd565b810181811067ffffffffffffffff82111715614da257614da1614d4b565b5b80604052505050565b6000614db561486e565b9050614dc18282614d7a565b919050565b600067ffffffffffffffff821115614de157614de0614d4b565b5b614dea826149dd565b9050602081019050919050565b82818337600083830152505050565b6000614e19614e1484614dc6565b614dab565b905082815260208101848484011115614e3557614e34614d46565b5b614e40848285614df7565b509392505050565b600082601f830112614e5d57614e5c614d41565b5b8135614e6d848260208601614e06565b91505092915050565b60008060408385031215614e8d57614e8c614878565b5b600083013567ffffffffffffffff811115614eab57614eaa61487d565b5b614eb785828601614e48565b9250506020614ec885828601614c8f565b9150509250929050565b6000608082019050614ee76000830187614b5e565b614ef46020830186614b6d565b8181036040830152614f068185614b25565b9050614f156060830184614913565b95945050505050565b60008060408385031215614f3557614f34614878565b5b6000614f4385828601614ad2565b9250506020614f5485828601614ad2565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000614f968383614988565b60208301905092915050565b6000602082019050919050565b6000614fba82614f5e565b614fc48185614f69565b9350614fcf83614f7a565b8060005b83811015615000578151614fe78882614f8a565b9750614ff283614fa2565b925050600181019050614fd3565b5085935050505092915050565b600060e083016000830151848203600086015261502a82826149ee565b915050602083015161503f6020860182614947565b506040830151848203604086015261505782826149ee565b915050606083015161506c6060860182614988565b50608083015184820360808601526150848282614faf565b91505060a083015161509960a0860182614947565b5060c08301516150ac60c0860182614947565b508091505092915050565b600060208201905081810360008301526150d1818461500d565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060808301600083015161511d6000860182614947565b5060208301516151306020860182614988565b506040830151848203604086015261514882826149ee565b915050606083015161515d6060860182614a27565b508091505092915050565b60006151748383615105565b905092915050565b6000602082019050919050565b6000615194826150d9565b61519e81856150e4565b9350836020820285016151b0856150f5565b8060005b858110156151ec57848403895281516151cd8582615168565b94506151d88361517c565b925060208a019950506001810190506151b4565b50829750879550505050505092915050565b600060208201905081810360008301526152188184615189565b905092915050565b60006020820190506152356000830184614b5e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060e083016000830151848203600086015261528482826149ee565b91505060208301516152996020860182614947565b50604083015184820360408601526152b182826149ee565b91505060608301516152c66060860182614988565b50608083015184820360808601526152de8282614faf565b91505060a08301516152f360a0860182614947565b5060c083015161530660c0860182614947565b508091505092915050565b600061531d8383615267565b905092915050565b6000602082019050919050565b600061533d8261523b565b6153478185615246565b93508360208202850161535985615257565b8060005b8581101561539557848403895281516153768582615311565b945061538183615325565b925060208a0199505060018101905061535d565b50829750879550505050505092915050565b600060208201905081810360008301526153c18184615332565b905092915050565b600080604083850312156153e0576153df614878565b5b60006153ee85828601614c8f565b92505060206153ff85828601614ad2565b9150509250929050565b60008060006060848603121561542257615421614878565b5b600084013567ffffffffffffffff8111156154405761543f61487d565b5b61544c86828701614e48565b935050602061545d86828701614ad2565b925050604061546e86828701614ad2565b9150509250925092565b6000806040838503121561548f5761548e614878565b5b600061549d85828601614c8f565b925050602083013567ffffffffffffffff8111156154be576154bd61487d565b5b6154ca85828601614e48565b9150509250929050565b60006020820190506154e96000830184614b6d565b92915050565b60006080820190506155046000830187614b5e565b6155116020830186614b6d565b61551e6040830185614b5e565b61552b6060830184614b5e565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061557b57607f821691505b60208210810361558e5761558d615534565b5b50919050565b7f436f6d70616e7920616c72656164792065786973747300000000000000000000600082015250565b60006155ca601683614b14565b91506155d582615594565b602082019050919050565b600060208201905081810360008301526155f9816155bd565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026156627fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82615625565b61566c8683615625565b95508019841693508086168417925050509392505050565b6000819050919050565b60006156a96156a461569f8461493d565b615684565b61493d565b9050919050565b6000819050919050565b6156c38361568e565b6156d76156cf826156b0565b848454615632565b825550505050565b600090565b6156ec6156df565b6156f78184846156ba565b505050565b5b8181101561571b576157106000826156e4565b6001810190506156fd565b5050565b601f8211156157605761573181615600565b61573a84615615565b81016020851015615749578190505b61575d61575585615615565b8301826156fc565b50505b505050565b600082821c905092915050565b600061578360001984600802615765565b1980831691505092915050565b600061579c8383615772565b9150826002028217905092915050565b6157b582614997565b67ffffffffffffffff8111156157ce576157cd614d4b565b5b6157d88254615563565b6157e382828561571f565b600060209050601f8311600181146158165760008415615804578287015190505b61580e8582615790565b865550615876565b601f19841661582486615600565b60005b8281101561584c57848901518255600182019150602085019450602081019050615827565b868310156158695784890151615865601f891682615772565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006158e78261493d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203615919576159186158ad565b5b600182019050919050565b7f54686973206a6f62206973206e6f74206f66666572656420627920796f752e00600082015250565b600061595a601f83614b14565b915061596582615924565b602082019050919050565b600060208201905081810360008301526159898161594d565b9050919050565b7f4e6f20766163616e6369657320617661696c61626c6520666f7220746869732060008201527f6a6f620000000000000000000000000000000000000000000000000000000000602082015250565b60006159ec602383614b14565b91506159f782615990565b604082019050919050565b60006020820190508181036000830152615a1b816159df565b9050919050565b6000615a2d8261493d565b915060008203615a4057615a3f6158ad565b5b600182039050919050565b6000615a568261493d565b9150615a618361493d565b9250828203905081811115615a7957615a786158ad565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600081905092915050565b6000615ac482614997565b615ace8185615aae565b9350615ade8185602086016149b3565b80840191505092915050565b6000615af68284615ab9565b915081905092915050565b7f576f726b657220686173206e6f7420636865636b656420696e00000000000000600082015250565b6000615b37601983614b14565b9150615b4282615b01565b602082019050919050565b60006020820190508181036000830152615b6681615b2a565b9050919050565b7f576f726b657220616c726561647920636865636b6564206f7574000000000000600082015250565b6000615ba3601a83614b14565b9150615bae82615b6d565b602082019050919050565b60006020820190508181036000830152615bd281615b96565b9050919050565b6000615be48261493d565b9150615bef8361493d565b9250828201905080821115615c0757615c066158ad565b5b92915050565b6000606082019050615c226000830186614b5e565b615c2f6020830185614b6d565b615c3c6040830184614b5e565b949350505050565b6000608082019050615c596000830187614b5e565b8181036020830152615c6b8186614b25565b9050615c7a6040830185614b5e565b615c876060830184614b5e565b95945050505050565b7f576f726b657220697320616c726561647920656d706c6f796564000000000000600082015250565b6000615cc6601a83614b14565b9150615cd182615c90565b602082019050919050565b60006020820190508181036000830152615cf581615cb9565b9050919050565b7f576f726b65722068617320616c7265616479206170706c69656420666f72207460008201527f686973206a6f6200000000000000000000000000000000000000000000000000602082015250565b6000615d58602783614b14565b9150615d6382615cfc565b604082019050919050565b60006020820190508181036000830152615d8781615d4b565b9050919050565b60008154615d9b81615563565b615da58186615aae565b94506001821660008114615dc05760018114615dd557615e08565b60ff1983168652811515820286019350615e08565b615dde85615600565b60005b83811015615e0057815481890152600182019150602081019050615de1565b838801955050505b50505092915050565b6000615e1d8284615d8e565b915081905092915050565b6000604082019050615e3d6000830185614b6d565b615e4a6020830184614b5e565b9392505050565b7f576f726b657220616c7265616479206578697374730000000000000000000000600082015250565b6000615e87601583614b14565b9150615e9282615e51565b602082019050919050565b60006020820190508181036000830152615eb681615e7a565b9050919050565b6000604082019050615ed26000830185614b6d565b8181036020830152615ee48184614b25565b90509392505050565b7f576f726b657220616c726561647920636865636b656420696e00000000000000600082015250565b6000615f23601983614b14565b9150615f2e82615eed565b602082019050919050565b60006020820190508181036000830152615f5281615f16565b9050919050565b6000604082019050615f6e6000830185614b6d565b615f7b6020830184614bf5565b939250505056fea2646970667358221220e88cd8d6b1ed71ccdd185beadd680a599e65f6f04d16d3f19b5ed7718e32df1e64736f6c63430008180033",
	linkReferences: {},
	deployedLinkReferences: {},
};
