"use client";
import React from "react";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { WCM } from "@/contracts/WCM";
import Link from "next/link";

export default function MyJobs() {
    const { address } = useAccount();
    const {
        data: jobs,
        error,
        isPending,
    } = useReadContract({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: WCM.abi,
        functionName: "getMyJobs",
        args: [address],
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

    console.log(jobs);

    return (
        <div>
            <h2>All Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <div>
                        <div key={job.jobId}>
                            <div className='card w-124 bg-primary text-primary-content m-5 transition-transform duration-300 hover:scale-105'>
                                <div className='card-body'>
                                    <h2 className='card-title'>
                                        {job.location}
                                    </h2>
                                    <p>{`Company: ${job.company}`}</p>
                                    {/* <p>{`Workers Employed: ${job.employedWorkers.join(', ')}`}</p> */}
                                    <p>{`Salary: $${job.salary} per day`}</p>
                                    <p>{`Vacancies: ${job.vacancies}`}</p>
                                    <Link href={`/employeelisting/${job.jobId}`}>
                                        <button className='btn rounded-xl'>
                                            Check Applications
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}
