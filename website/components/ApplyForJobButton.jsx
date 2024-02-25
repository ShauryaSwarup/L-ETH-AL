import React from "react";
import {
	useAccount,
	useWaitForTransactionReceipt,
	useWriteContract,
} from "wagmi";
import { WCM } from "@/contracts/WCM";
import HashAndError from "./HashAndError";

function ApplyForJobButton({ job }) {
	const { address } = useAccount();
	const { data: hash, error, isPending, writeContract } = useWriteContract();
	console.log(job.jobId);
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
		<>
			<button
				type="submit"
				disabled={isPending || isConfirmed}
				className="btn rounded-xl w-full mt-4 text-center"
				onClick={submit}
			>
				{isPending ? "Confirming..." : isConfirmed ? "Applied" : "Apply"}
			</button>
			<HashAndError
				hash={hash}
				isConfirming={isConfirming}
				isConfirmed={isConfirmed}
				error={error}
			/>
		</>
	);
}

export default ApplyForJobButton;
