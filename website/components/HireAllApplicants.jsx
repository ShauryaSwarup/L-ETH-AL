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
import HashAndError from "./HashAndError";
import WorkerCard from "./divcomponents/WorkerCard";
import JobCard from "./divcomponents/JobCard";

function HireAllApplicants({ jobId }) {
	const { address } = useAccount();
	//to get applicants info
	const {
		data: workers,
		error: readError,
		isPending: readPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getAllApplicants",
		args: [jobId],
	});
	console.log(workers);

	//to hire
	const {
		data: hash,
		error: writeError,
		isPending: writePending,
		writeContract,
	} = useWriteContract();

	function submit(e) {
		e.preventDefault();
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

	//to get job info
	const {
		data: job,
		error,
		isPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getJobById",
		args: [jobId],
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

	if (readPending) return <div>Loading...</div>;

	if (readError)
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

	return (
		<div>
			<h2 className="text-3xl font-bold text-center py-4">
				All applicants for job:&nbsp;
				<p className="inline-block bg-gray-700 p-1 rounded-xl">{address}</p>
			</h2>
			<JobCard job={job} />
			<button
				className="btn text-center mt-4"
				disabled={writePending}
				onClick={submit}
			>
				{writePending ? "Confirming..." : "Hire All"}
			</button>
			<HashAndError
				hash={hash}
				isConfirming={isConfirming}
				isConfirmed={isConfirmed}
				error={writeError}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 m-5">
				{workers.map((worker) => (
					<WorkerCard worker={worker} />
				))}
			</div>
		</div>
	);
}

export default HireAllApplicants;
