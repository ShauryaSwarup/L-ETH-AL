"use client";
import GetEmployeesByJob from "@/components/GetEmployeesByJob";
import React from "react";
import { useReadContract, useAccount } from "wagmi";
import { WCM } from "@/contracts/WCM";
import { QRCodeSVG } from "qrcode.react";
import JobCard from "@/components/divcomponents/JobCard";

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
				<h1 className="font-semibold text-3xl mb-4 text-center">
					Employees for JobID: {jobId}{" "}
				</h1>
				<JobCard job={job} />
				<div className="flex flex-row justify-between">
					<div className="flex flex-col items-center w-fit rounded-xl p-8 bg-indigo-900 m-auto">
						<h1 className="font-semibold text-3xl mb-4">
							Scan QR Code to CheckIn
						</h1>
						<div className="bg-gray-500 card-body rounded-xl w-fit">
							<QRCodeSVG
								className="w-auto"
								value={`http://localhost:3000/checkin/${jobId}_${job.companyName}`}
							/>
						</div>
					</div>
					<div className="flex flex-col items-center w-fit rounded-xl p-8 bg-indigo-900 m-auto">
						<h1 className="font-semibold text-3xl mb-4">
							Scan QR Code to CheckOut
						</h1>
						<div className="bg-gray-500 card-body rounded-xl w-fit">
							<QRCodeSVG
								className="w-auto"
								value={`http://localhost:3000/checkout/${jobId}_${job.companyName}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default page;
