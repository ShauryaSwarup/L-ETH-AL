import React from "react";
import {
    useAccount,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { WCM } from "@/contracts/WCM";

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
                type='submit'
                disabled={isPending || isConfirmed}
                className='btn rounded-xl w-full mt-4 text-center'
                onClick={submit}
            >
                {isPending
                    ? "Confirming..."
                    : isConfirmed
                    ? "Applied"
                    : "Apply"}
            </button>
            {isConfirmed && (
                <div className='text-center mt-4 rounded-xl shadow-xl z-10 bg-gray-800 p-2'>
                    {hash && (
                        <div className='truncate'>Transaction Hash: {hash}</div>
                    )}
                    {isConfirming && <div>Waiting for confirmation...</div>}
                    {isConfirmed && <div>Transaction confirmed.</div>}
                    {error && (
                        <div>Error: {error.shortMessage || error.message}</div>
                    )}
                </div>
            )}
        </>
    );
}

export default ApplyForJobButton;
