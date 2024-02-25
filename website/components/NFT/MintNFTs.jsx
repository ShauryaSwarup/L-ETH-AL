"use client"

import * as React from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import HashAndError from "../divcomponents/HashAndError";
import { DWT } from "@/contracts/DWT";

function MintNFTs() {
    let price;
    const { data: hash, error, isPending, writeContract } = useWriteContract();

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        price = formData.get("price");
        writeContract({
            address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
            abi: DWT.abi,
            functionName: "mint",
            args: [price],
        });
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        });
        return (
            <form onSubmit={submit}>
                <div className='mt-4 text-center'>
                    <input
                        type='text'
                        name='price'
                        placeholder='NFT Price'
                        className='px-2 py-1 rounded-md border border-gray-300'
                    />
                </div>
                <div className='text-center mt-4'>
                    <button
                        type='submit'
                        disabled={isPending}
                        className='btn bg-gray-500 rounded-xl p-4'
                    >
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
export default MintNFTs;
