"use client";
import React from "react";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import Link from "next/link";
import WorkerCard from "./WorkerCard";

function GetEmployeesByJob({ jobId }) {
    const { address } = useAccount();
    const {
        data: workers,
        error,
        isPending,
    } = useReadContract({
        account: address,
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: WCM.abi,
        functionName: "getEmployeesByJob",
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
    console.log(workers);

    return (
        <>
            <div className="mt-8">
                <h1 className='font-semibold text-3xl mb-4 text-center underline'>All Employees</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 m-5'>
                    {workers.map((worker) => (
                        <WorkerCard worker={worker}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GetEmployeesByJob;
