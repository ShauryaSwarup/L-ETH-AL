"use client";
import { CheckIn } from "@/components/CheckIn/CheckIn";
import JobCard from "@/components/divcomponents/JobCard";
import { BaseError, useReadContract, useAccount } from "wagmi";
import { WCM } from "@/contracts/WCM";

function JobCheckIn({ params }) {
	const { address } = useAccount();
	const param = params.jobCheckIn;
	const [jobId, companyName] = param.split("_");
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
			<h2 className="text-3xl font-bold text-center py-4">
				Check in as :&nbsp;
				<p className="inline-block bg-gray-700 p-1 rounded-xl">{address}</p>
			</h2>
			<JobCard job={job} />
			<div style={{ display: "flex", justifyContent: "center" }}>
				<CheckIn jobId={jobId} />
			</div>
		</>
	);
}
export default JobCheckIn;
