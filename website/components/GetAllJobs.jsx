"use client";
import React from "react";
import { BaseError, useReadContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import ApplyForJob from "./ApplyForJob";

function GetAllJobs({ account }) {
	const {
		data: jobs,
		error,
		isPending,
	} = useReadContract({
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
					<ApplyForJob job={job} account={account} />
				))}
			</ul>
		</div>
	);
}

export default GetAllJobs;
