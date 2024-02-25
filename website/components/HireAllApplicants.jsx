"use client";

import React from "react";
import {
    BaseError,
    useReadContract,
    useAccount,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { WCM } from "@/contracts/WCM";
import HashAndError from "./divcomponents/HashAndError";
import WorkerCard from "./divcomponents/WorkerCard";
import JobCard from "./divcomponents/JobCard";
import { parseEther } from "viem";

function HireAllApplicants({ jobId }) {
    const { address } = useAccount();
    //to get applicants info
    const {
        data: workers,
        error: readError,
        isPending: readPending,
    } = useReadContract({
        account: address,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: WCM.abi,
        functionName: "getAllApplicants",
        args: [jobId],
    });
	
    //to hire
    const {
        data: hash,
        error: writeError,
        isPending: writePending,
        writeContract,
    } = useWriteContract();
	
    function submit(e) {
		e.preventDefault();
        writeContract({
			address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            account: address,
            abi: WCM.abi,
            functionName: "hire",
            args: [jobId],
			value: parseEther(amtString), 
        });
    }
    const { isLoading: isConfirming, isSuccess: isConfirmed } =
	useWaitForTransactionReceipt({
		hash,
	});
	
    //to get job info
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

		if (readPending) return <div>Loading...</div>;
		
		if (readError)
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
		
		console.log(job);
		const amt = Number(job.salary)/Number(Math.pow(10,18))*Number(workers.length)*Number(job.hoursPerDay);
		const amtString = amt.toLocaleString(undefined, { minimumFractionDigits: 4 })
		return (
			<div>
            <h2 className='text-3xl font-bold text-center py-4'>
                All applicants for job:&nbsp;
                <p className='inline-block bg-gray-700 p-1 rounded-xl'>
                    {address}
                </p>
            </h2>
            <JobCard job={job} />
            <div className='flex justify-center'>
                <button
                    className='btn bg-gray-500 rounded-xl p-4 text-center mt-4'
                    disabled={writePending}
                    onClick={submit}
                >
                    {writePending ? "Confirming..." : "Hire All"}
                </button>
            </div>
            <h1 className='text-3xl p-2 text-center font-semibold text-white'>
                You have to pay: {amtString} MATIC as stake money to hire
            </h1>
            <HashAndError
                hash={hash}
                isConfirming={isConfirming}
                isConfirmed={isConfirmed}
                error={writeError}
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 m-5'>
                {workers.map((worker) => (
                    <WorkerCard worker={worker} />
                ))}
            </div>
        </div>
    );
}

export default HireAllApplicants;
