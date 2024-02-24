"use client"
// import { useState } from "react";
import { useAccount } from "wagmi";

import PostJob from "@/components/PostJob";
const page = () => {
    const account = useAccount();
	return <PostJob account={account} />;
};

export default page;
