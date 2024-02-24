"use client";
import GetEmployeesByJob from "@/components/GetEmployeesByJob";
import React from "react";
import { useReadContract, useAccount } from "wagmi";
import { WCM } from "@/contracts/WCM";

function page({ params }) {
	const { address } = useAccount();

	const jobId = params.jobId;
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

	return (
		<>
			<div className="p-4  rounded-lg">
				<h1 className="font-semibold text-3xl mb-4"></h1>
				Employees for JobID: {jobId}
				<div key={job.jobId}>
					<div className="card w-124 bg-primary text-primary-content m-5">
						<div className="card-body">
							<h2 className="card-title">{job.location}</h2>
							<p>{`Company: ${job.company}`}</p>
							<p>{`Salary: $${job.salary} per day`}</p>
							<div className="flex gap-3"></div>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200">
					<GetEmployeesByJob jobId={jobId} />
				</div>
			</div>
		</>
	);
}

export default page;
