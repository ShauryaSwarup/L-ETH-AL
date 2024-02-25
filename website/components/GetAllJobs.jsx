"use client";
import React from "react";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import JobCard from "./divcomponents/JobCard";
import ApplyForJobButton from "./ApplyForJobButton";

function GetAllJobs() {
	const { address } = useAccount();
	const {
		data: jobs,
		error,
		isPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getAllJobs",
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

	console.log(jobs);

	return (
		<div>
			<h2>All Jobs</h2>
			<ul>
				{jobs.map((job) => (
					<>
						<JobCard job={job} components={<ApplyForJobButton job={job} />} />
					</>
				))}
			</ul>
		</div>
	);
}

export default GetAllJobs;
