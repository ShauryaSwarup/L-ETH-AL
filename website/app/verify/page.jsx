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
            <div className='pt-20'>
                <div className='text-xl text-white font-semibold text-center pb-16'>
                    {account.address}
                </div>
                <div className=''>
                    <form onSubmit={submitRole}>
                        <p className='text-center text-white font-semibold text-2xl'>
                            Are you a
                        </p>
                        <div className='grid justify-center grid-cols-2 gap-4 text-xl'>
                            <button
                                className='btn'
                                onClick={() => setRole("worker")}
                            >
                                Wage Worker?
                            </button>
                            <button
                                className='btn'
                                onClick={() => setRole("company")}
                            >
                                Company?
                            </button>
                        </div>
                    </form>
                </div>
                {role &&
                    (role == "worker" ? (
                        <AddWorker account={account} />
                    ) : (
                        <AddCompany account={account} />
                    ))}
            </div>
        </>
    );
}
export default Verify;
