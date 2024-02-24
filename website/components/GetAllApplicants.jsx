"use client";

import React from "react";
import {
	BaseError,
	useReadContract,
	useAccount,
	useWaitForTransactionReceipt,
	useWriteContract,
} from "wagmi";
import { WCM } from "@/contracts/WCM";

function GetAllApplicants({ jobId }) {
	const { address } = useAccount();
	const {
		data: workers,
		error,
		isPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getAllApplicants",
		args: [jobId],
	});

	const { data: hash, error1, isPending1, writeContract } = useWriteContract();

	function submit(e) {
		e.preventDefault(); // Prevent default form submission behavior
		writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
			account: address,
			abi: WCM.abi,
			functionName: "hire",
			args: [jobId],
		});
	}
	const { isLoading: isConfirming, isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
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

	// console.log(jobId);

	return (
		<div>
			<h2>All Applicants</h2>
			<div className="text-center mt-4" onClick={submit}>
				<button type="submit" disabled={isPending1} className="btn">
					{isPending1 ? "Confirming..." : "Hire All"}
				</button>
				{hash && <div>Transaction Hash: {hash}</div>}
				{isConfirming && <div>Waiting for confirmation...</div>}
				{isConfirmed && <div>Transaction confirmed.</div>}
				{error && <div>Error: {error1.shortMessage || error1.message}</div>}
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 m-5">
				{workers.map((worker) => (
					<div
						key={worker.walletAddress}
						className="card w-124 bg-primary m-1 text-primary-content transition-transform duration-300 hover:scale-105"
					>
						<div className="card-body">
							<h2 className="card-title">{worker.name}</h2>
							<p className="truncate max-w-full">
								Wallet Address: {worker.walletAddress}
							</p>
							<p>Status: {worker.isEmployed ? "Employed" : "Unemployed"}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default GetAllApplicants;
