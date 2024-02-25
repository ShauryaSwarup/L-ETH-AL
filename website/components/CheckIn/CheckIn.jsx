"use client";

import * as React from "react";
import {
    useAccount,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { WCM } from "@/contracts/WCM";

export function CheckIn({ jobId }) {
    const { address } = useAccount();
    const {
        data: hash,
        error: writeError,
        isPending: writePending,
        writeContract,
    } = useWriteContract();

    function submit(e) {
        e.preventDefault();
        console.log("Submitting");
        writeContract({
            account: address,
            address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            abi: WCM.abi,
            functionName: "checkIn",
            args: [jobId],
        });
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        });

    return (
        <button
            className='btn text-center mt-4'
            disabled={writePending}
            onClick={submit}
        >
            {writePending ? "Confirming..." : "Submit"}
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {writeError && (
                <div>
                    Error: {writeError.shortMessage || writeError.message}
                </div>
            )}
        </button>
    );
}
