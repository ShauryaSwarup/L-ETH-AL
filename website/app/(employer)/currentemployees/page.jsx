"use client";
import jobs from "../../data/jobs.json";

import React, { useState, useEffect } from "react";

const Pages = ({ companyName = "Green Thumb Landscapers" }) => {
	const [employedWorkers, setEmployedWorkers] = useState([]);

	useEffect(() => {
		const companyJobs = jobs.filter((job) => job.company === companyName);
		let workers = [];

		companyJobs.forEach((job) => {
			workers = workers.concat(job.employedWorkers);
		});

		setEmployedWorkers(workers);
	}, [companyName]);

	return (
		<>
			<div className="grid justify-items-center">
				<h1 className="text-3xl font-bold m-4 sm:text-4xl md:text-5xl">
					{companyName}
				</h1>
			</div>
			<div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
				{employedWorkers.map((worker, index) => (
					<div
						key={index}
						className="card w-full sm:w-96 bg-primary text-primary-content flex flex-col justify-between"
					>
						<div className="card-body">
							<h2 className="card-title">{worker}</h2>
							<p>Company: {companyName}</p>
						</div>
						<div className="flex justify-end m-4">
							<button
								className="btn btn-danger -mt-8"
								// onClick={() => handleRemoveWorker(index)}
							>
								Remove Employee
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Pages;
