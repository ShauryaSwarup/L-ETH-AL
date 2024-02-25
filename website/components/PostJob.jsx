"use client";
import React, { useState } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import HashAndError from "./divcomponents/HashAndError";

function PostJob({ account }) {
	const { data: hash, error, isPending, writeContract } = useWriteContract();

	function submit(e) {
		e.preventDefault(); // Prevent default form submission behavior

		const formData = new FormData(e.target);
		const location = formData.get("location");
		const salary = Math.ceil(
			Number(formData.get("salary")) * Number(Math.pow(10, 18))
		);

		const vacancies = formData.get("vacancies");
		const hours = formData.get("hoursPerDay");

		console.log(account.address);

		writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
			abi: WCM.abi,
			functionName: "postJob",
			args: [location, salary, vacancies, hours],
		});
	}

	const { isLoading: isConfirming, isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
		});

	return (
		<div className="max-w-md mx-auto mt-8 p-8 shadow-xl rounded-xl bg-gray-900">
			<h2 className="text-2xl font-semibold text-center mb-4">
				Post a New Job
			</h2>
			<form onSubmit={submit} className="grid grid-cols-1 gap-4">
				<label className="block">
					<span className="text-gray-200">Location:</span>
					<input
						type="text"
						name="location"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
					/>
				</label>
				<label className="block">
					<span className="text-gray-200">Salary in MATIC:</span>
					<input
						type="text"
						name="salary"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
					/>
				</label>
				<label className="block">
					<span className="text-gray-200">Vacancies:</span>
					<input
						type="text"
						name="vacancies"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
					/>
				</label>
				<label className="block">
					<span className="text-gray-200">Hours per day:</span>
					<input
						type="text"
						name="hoursPerDay"
						required
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
					/>
				</label>
				<button type="submit" disabled={isPending} className="btn">
					{isPending ? "Confirming..." : "Submit"}
				</button>
				<HashAndError
					hash={hash}
					isConfirming={isConfirming}
					isConfirmed={isConfirmed}
					error={error}
				/>
			</form>
		</div>
	);
}

export default PostJob;
