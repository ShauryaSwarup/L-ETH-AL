"use client";
import React, { useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { WCM } from "@/contracts/WCM";

function PostJob({ account }) {
	const { data: hash, error, isPending, writeContract } = useWriteContract();

	function submit(e) {
		e.preventDefault(); // Prevent default form submission behavior

		const formData = new FormData(e.target);
		const location = formData.get("location");
		const salary = formData.get("salary");
		const vacancies = formData.get("vacancies");

		console.log(account.address);

		writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
			abi: WCM.abi,
			functionName: "postJob",
			args: [location, salary, vacancies],
		});
	}

	const { isLoading: isConfirming, isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
		});

	return (
		<form onSubmit={submit} className="max-w-md mx-auto mt-8">
			<div className="grid grid-cols-1 gap-4">
				<label className="block">
					<span className="text-gray-700">Location:</span>
					<input
						type="text"
						name="location"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
				<label className="block">
					<span className="text-gray-700">Salary:</span>
					<input
						type="text"
						name="salary"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
				<label className="block">
					<span className="text-gray-700">Vacancies:</span>
					<input
						type="text"
						name="vacancies"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</label>
				{/* <button
					type="submit"
					className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
				>
					Post Job
				</button> */}
			</div>
			<div className="text-center mt-4">
				<button type="submit" disabled={isPending} className="btn">
					{isPending ? "Confirming..." : "Submit"}
				</button>
				{hash && <div>Transaction Hash: {hash}</div>}
				{isConfirming && <div>Waiting for confirmation...</div>}
				{isConfirmed && <div>Transaction confirmed.</div>}
				{error && <div>Error: {error.shortMessage || error.message}</div>}
			</div>
		</form>
	);
}

export default PostJob;
