"use client";
import React from "react";
import GetAllJobs from "@/components/GetAllJobs";
import { useAccount } from "wagmi";

const page = () => {
	const account = useAccount();
	return (
		<div className="grid m-10 -my-1">
			<GetAllJobs account={account} />
		</div>
	);
};

export default page;
