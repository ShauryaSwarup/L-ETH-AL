"use client";
import React from "react";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import Link from "next/link";
import JobCard from "./divcomponents/JobCard";
import CheckinCheckoutButton from "./divcomponents/CheckinCheckoutButton";

export default function MyJobs() {
	const { address } = useAccount();
	const {
		data: jobs,
		error,
		isPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getMyJobs",
		args: [address],
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

	// console.log("Hired", jobs[0].employedWorkers);

	return (
		<div>
			<h2 className="text-3xl font-bold text-center py-4">
				All Jobs for company:&nbsp;
				<p className="inline-block bg-gray-700 p-1 rounded-xl">{address}</p>
			</h2>
			<ul>
				{jobs.map((job) => (
					<JobCard job={job} components={<CheckinCheckoutButton job={job} />} />
				))}
			</ul>
		</div>
	);
}
