import React from "react";
import {
	useAccount,
	useWaitForTransactionReceipt,
	useWriteContract,
} from "wagmi";
import { WCM } from "@/contracts/WCM";

function ApplyForJob({ job }) {
	const { address } = useAccount();
	const { data: hash, error, isPending, writeContract } = useWriteContract();

	function submit(e) {
		e.preventDefault(); // Prevent default form submission behavior
		writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
			account: address,
			abi: WCM.abi,
			functionName: "applyForJob",
			args: [job.jobId],
		});
	}
	const { isLoading: isConfirming, isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
		});

	return (
		<div>
			<div key={job.jobId}>
				<div className="card w-124 bg-primary text-primary-content m-5 transition-transform duration-300 hover:scale-105">
					<div className="card-body">
						<h2 className="card-title">{job.location}</h2>
						<p>{`Company: ${job.company}`}</p>
						{/* <p>{`Workers Employed: ${job.employedWorkers.join(', ')}`}</p> */}
						<p>{`Salary: $${job.salary} per day`}</p>
						<p>{`Vacancies: ${job.vacancies}`}</p>
						<div className="card-actions justify-end">
							{/* Attach submit function to onClick event */}
							{/* <button className="btn">Apply Now</button> */}
							<div className="text-center mt-4" onClick={submit}>
								<button type="submit" disabled={isPending} className="btn">
									{isPending ? "Confirming..." : "Apply"}
								</button>
								{hash && <div>Transaction Hash: {hash}</div>}
								{isConfirming && <div>Waiting for confirmation...</div>}
								{isConfirmed && <div>Transaction confirmed.</div>}
								{error && (
									<div>Error: {error.shortMessage || error.message}</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApplyForJob;
