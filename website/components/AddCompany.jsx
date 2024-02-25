import { WCM } from "@/contracts/WCM";
import * as React from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import HashAndError from "./divcomponents/HashAndError";

export function AddCompany({ account }) {
	let company;
	const { data: hash, error, isPending, writeContract } = useWriteContract();

	async function submit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		company = formData.get("company");
		writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
			abi: WCM.abi,
			functionName: "addCompany",
			args: [company, account.address],
		});
	}

	const { isLoading: isConfirming, isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
		});

	return (
		<form onSubmit={submit}>
			<div className="mt-4 text-center">
				<input
					type="text"
					name="company"
					placeholder="Company Name"
					className="px-2 py-1 rounded-md border border-gray-300"
				/>
			</div>
			<div className="text-center mt-4">
				<button type="submit" disabled={isPending} className="btn">
					{isPending ? "Confirming..." : "Submit"}
				</button>
				<HashAndError
					hash={hash}
					isConfirming={isConfirming}
					isConfirmed={isConfirmed}
					error={error}
				/>
			</div>
		</form>
	);
}
