"use client";
import React from "react";
import { BaseError, useAccount, useReadContract } from "wagmi";
import { DWT } from "@/contracts/DWT";
import NFTCard from "../divcomponents/NFTCard";

function GetUserNFTs() {
    const { address } = useAccount();
    const {
        data: nfts,
        error,
        isPending,
    } = useReadContract({
        account: address,
        address: process.env.NEXT_PUBLIC_NFT_ADDRESS,
        abi: DWT.abi,
        functionName: "fetchUserNFT",
        args: [],
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

    console.log(nfts);

    return (
        <>
            {nfts.length == 0 ? (
                <div>You have no NFTs</div>
            ) : (
                nfts.map((nft) => (
                    <NFTCard
                        nft={nft}
                    />
                ))
            )}
        </>
    );
}

export default GetUserNFTs;
