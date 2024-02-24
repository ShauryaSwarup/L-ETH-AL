import React from "react";
import workers from "../../data/employees.json";

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
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 m-5">
			{workers.map((worker) => (
				<WorkerCard key={worker.walletAddress} worker={worker} />
			))}
		</div>
	);
};

export default pages;
