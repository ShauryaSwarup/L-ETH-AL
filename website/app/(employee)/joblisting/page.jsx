import React from "react";
import jobs from "../../data/jobs.json";

const JobCard = ({ job }) => {
	return (
		<div className="card w-124 bg-primary text-primary-content m-5 transition-transform duration-300 hover:scale-105">
			<div className="card-body">
				<h2 className="card-title">{job.location}</h2>
				<p>{`Company: ${job.company}`}</p>
				{/* <p>{`Workers Employed: ${job.employedWorkers.join(', ')}`}</p> */}
				<p>{`Salary: $${job.salary} per day`}</p>
				<p>{`Vacancies: ${job.vacancies}`}</p>
				<div className="card-actions justify-end">
					<button className="btn">Apply Now</button>
				</div>
			</div>
		</div>
	);
};

const page = () => {
	return (
		<div className="grid m-10 -my-1">
			{jobs.map((job) => (
				<JobCard key={job.jobId} job={job} />
			))}
		</div>
	);
};

export default page;
