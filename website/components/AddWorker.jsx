import * as React from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import HashAndError from "./divcomponents/HashAndError";

export function AddWorker({ account }) {
	let location;
	const { data: hash, error, isPending, writeContract } = useWriteContract();

	function submit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		location = formData.get("location");
		console.log(account.address);
		writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
			abi: WCM.abi,
			functionName: "addWorker",
			args: [account.address, location],
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
					name="location"
					placeholder="Location"
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
