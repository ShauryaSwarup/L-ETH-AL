import Link from "next/link";

function JobCard({ job, components }) {
    return (
        <>
            <div key={job.jobId}>
                <div className='relative w-124 text-primary-content m-5 transition-all duration-300 rounded-xl bg-indigo-800 hover:bg-indigo-900'>
                    <div className='card-body'>
                        <h2 className='card-title'>{job.location}</h2>
                        <div className='font-light'>
                            <p>{`Company: ${job.companyName}`}</p>
                            <p>{`Workers Employed: ${job.employedWorkers.join(
                                ", "
                            )}`}</p>
                            <p>{`Salary: ${
                                Number(job.salary) / Number(Math.pow(10, 18))
                            } MATIC per day`}</p>
                            <p>{`Vacancies: ${job.vacancies}`}</p>
                        </div>
                        {components}
                    </div>
                </div>
            </div>
        </>
    );
}
export default JobCard;
