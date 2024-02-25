"use client";
import { BaseError, useReadContract, useAccount } from "wagmi";
import { WCM } from "@/contracts/WCM";
import JobCard from "@/components/divcomponents/JobCard";
import Link from "next/link";

function page() {
	const { address } = useAccount();
	const {
		data: job,
		error,
		isPending,
	} = useReadContract({
		account: address,
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
		abi: WCM.abi,
		functionName: "getCurrentJob",
		args: [],
	});

	if (isPending) return <div>Loading...</div>;

	if (error) {
		// if (error.message === "Currently Not Employed") {
		return (
			<div className="border max-w-md mx-auto p-8 rounded-xl">
				<h2 className="text-3xl font-bold text-center py-4 grid grid-rows-2 m-16">
					Currently Not Employed, apply for jobs here!
					<Link href="/joblisting" className="m-4">
						<button className="btn">Apply for Jobs!</button>
					</Link>
				</h2>
			</div>
		);
		// } else {
		// 	return (
		// 		<div>
		// 			{error && (
		// 				<span>
		// 					Error:{" "}
		// 					{(error instanceof BaseError && error.shortMessage) ||
		// 						error.message}
		// 				</span>
		// 			)}
		// 		</div>
		// 	);
		// }
	}

	return (
		<>
			{job && (
				<div>
					<h2 className="text-3xl font-bold text-center py-4">
						My Current Job:&nbsp;
						{/* <p className="inline-block bg-gray-700 p-1 rounded-xl">{job._jobId}</p> */}
					</h2>
					<JobCard job={job} />
				</div>
			)}
		</>
	);
}

export default page;
