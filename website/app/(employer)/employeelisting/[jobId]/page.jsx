import HireAllApplicants from "@/components/HireAllApplicants";

const EmployeeListing = ({ params }) => {
    const jobId = params.jobId;
    console.log(jobId);
    return (
        <>
            <h1 className='font-semibold text-3xl'>
                Applicants for JobID: {jobId}
            </h1>
            <HireAllApplicants jobId={jobId} />
        </>
    );
};

export default EmployeeListing;
