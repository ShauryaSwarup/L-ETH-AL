"use client";
import { useAccount } from "wagmi";
import React, { useState } from "react";
import { AddWorker } from "@/components/AddWorker";
import { AddCompany } from "@/components/AddCompany";

function Verify() {
	const account = useAccount();
	const [role, setRole] = useState(null);

	const submitRole = (e) => {
		e.preventDefault();
		console.log("Selected Role:", role);
	};

	return (
		<>
			<div className="border max-w-md mx-auto p-8 rounded-xl">
				<p className="text-center text-2xl font-bold text-white ">
					Get verified
				</p>
				<div className="max-w-md mx-auto mt-8 p-8 shadow-xl rounded-xl bg-gray-900">
					<div className="text-xl text-gray-300  text-center pb-4">
						Your wallet address :
					</div>
					<div className="text-2xl truncate text-white font-semibold text-center pb-16">
						{account.address}
					</div>
					<form
						onSubmit={submitRole}
						className="text-center text-white font-semibold text-2xl "
					>
						<p className="pb-8">Are you a</p>
						<div className="grid grid-cols-2 gap-4">
							<button
								className="btn bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
								onClick={() => setRole("worker")}
							>
								Wage Worker?
							</button>
							<button
								className="btn bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
								onClick={() => setRole("company")}
							>
								Company?
							</button>
						</div>
					</form>
					{role &&
						(role === "worker" ? (
							<AddWorker account={account} />
						) : (
							<AddCompany account={account} />
						))}
				</div>
			</div>
		</>
	);
}
export default Verify;
