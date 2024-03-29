"use client";
import { BaseError, useReadContract, useAccount } from "wagmi";
import { WCM } from "@/contracts/WCM";

function GetAllUnemployed() {
	const { address } = useAccount();
	const {
		data: workers,
		error,
		isPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getAllUnemployedWorkers",
		args: [],
	});

	if (isPending) return <div>Loading...</div>;

	if (error)
		return (
			<div>
				{error && (
					<span>
						Error:{" "}
						{(error instanceof BaseError && error.shortMessage) ||
							error.message}
					</span>
				)}
			</div>
		);

	console.log(workers);

	return (
		<>
			<h2>All Applicants</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 m-5">
				{workers.map((worker) => (
					<div
						key={worker.walletAddress}
						className="card w-124 bg-gray-600 rounded-xl m-1 font-semibold transition-transform duration-300 hover:scale-105"
					>
						<div className="card-body">
							<h2 className="card-title">{worker.name}</h2>
							<p className="truncate max-w-full">
								Wallet Address: {worker.walletAddress}
							</p>
							<p>Status: {worker.isEmployed ? "Employed" : "Unemployed"}</p>
							<div className="card-actions justify-end">
								<button className="btn">Hire Now</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default GetAllUnemployed;
