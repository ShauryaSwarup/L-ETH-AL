import React from "react";
import GetAllApplicants from "@/components/GetAllApplicants";

const EmployeeListing = ({ params }) => {
    const jobId = params.slug;
    console.log(jobId);
    return (
        <>
            <h1 className='font-semibold text-3xl'>
                Applicants for JobID: {jobId}
            </h1>
            <GetAllApplicants jobId={jobId} />
        </>
    );
};

export default EmployeeListing;
