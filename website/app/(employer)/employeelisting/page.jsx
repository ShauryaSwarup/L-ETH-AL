import React from "react";
import GetAllApplicants from "@/components/GetAllApplicants";

const WorkerCard = ({ worker }) => {
	return (
		<div className="card w-124 bg-primary m-1 text-primary-content transition-transform duration-300 hover:scale-105">
			<div className="card-body">
				<h2 className="card-title">{worker.name}</h2>
				<p className="truncate max-w-full">
					Wallet Address: {worker.walletAddress}
				</p>
				<p>Status: {worker.isEmployed ? "Employed" : "Unemployed"}</p>
				<div className="card-actions justify-end">
					<button className="btn">Hire Now</button>
				</div>
			</div>
		</div>
	);
};

const pages = () => {
	return <GetAllApplicants />;
};

export default pages;
